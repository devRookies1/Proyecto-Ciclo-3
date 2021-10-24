import SectionMainForm from 'components/SectionMainForm'
import React, {useState, useRef, useEffect} from 'react'
import { obtenerUsuarios, obtenerVehiculos } from 'utils/api'
import { nanoid } from 'nanoid'
import { crearVenta } from 'utils/api'
import { toast, ToastContainer } from 'react-toastify'


const FormVentas = () => {

  const form = useRef(null)
  const [vendedores,setVendedores] = useState([])
  const [vehiculos,setVehiculos] = useState([])
  const [vehiculosTabla, setVehiculosTabla] = useState([])
 
    useEffect(() => {
        const fetchVendedores = async()=>{
            await obtenerUsuarios(
                (response)=>{setVendedores(response.data)
                },
                (error)=>{console.error(error)})
        }
        const fetchVehiculos = async()=>{
            await obtenerVehiculos(
                (response)=>{setVehiculos(response.data)
                },
                (error)=>{console.error(error)})

        }
        fetchVendedores()
        fetchVehiculos()

        
    }, [])


  const submitForm = async (e) => {
    
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevaVenta = {};
    fd.forEach((value, key) => {
    nuevaVenta[key] = value;})

    console.log('Nueva venta', nuevaVenta)
    const listaVehiculos = Object.keys(nuevaVenta)
      .map((k) => {
        if (k.includes('vehiculo')) {
          return vehiculosTabla.filter((v) => v._id === nuevaVenta[k])[0];
        }
        return null;
      })
      .filter((v) => v);

    

    


     const datosVenta = {
       idVenta: nuevaVenta.idVenta,
       nombCliente: nuevaVenta.nombCliente,
       idCliente : nuevaVenta.idCliente,
       responsable: vendedores.filter((v) => v._id === nuevaVenta.responsable)[0],
       fechaVenta: nuevaVenta.fechaVenta,
       estado: nuevaVenta.estadoVenta,
       total: nuevaVenta.total,
       vehiculos: listaVehiculos,
       
     };

     console.log('lista vehiculos', listaVehiculos);

     await crearVenta(
       datosVenta,       
       (response) => {
         console.log(response.data);
         
         toast.success('Venta agregada con éxito');
       },
        (error) => {
         console.error(error);
         toast.error('Error creando una venta');
       }
       );
       form.current.reset()
       console.log(datosVenta)
      
  }
    
      
       
      return (
        <SectionMainForm nombre='ventas'>
            <div className="flex flex-col  w-full  justify-between  " >
            <form ref={form} onSubmit={submitForm}>
           <TablaClientes vendedores={vendedores}/>   

            <TablaVehiculos
              vehiculos={vehiculos}
              setVehiculos={setVehiculos}
              setVehiculosTabla={setVehiculosTabla}
           />
           

            
            <button
            type='submit'
            className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white m-2'
            >
            Crear Venta
            </button>
            </form>
            <ToastContainer position="bottom-center" autoClose={5000}/>
            </div>
        <ToastContainer position="bottom-center" autoClose={5000}/>      
        </SectionMainForm>
    )
}

const TablaClientes = ({vendedores}) =>{
  return (
    <div>
    <table className="tabla">
      <thead>
        <tr >
          <th>Id Venta</th>
          <th>Nombre Cliente</th>
          <th>Id Cliente</th>
          <th>Responsable</th>
          <th>Fecha Venta</th>
        </tr>
      </thead>
      <tbody>
        <tr >
        <td><input name="idVenta" placeholder="1001" required></input></td>
        <td><input name="nombCliente" placeholder="Nombre Cliente" required ></input></td>
        <td><input name="idCliente" placeholder="ID Cliente" required></input></td>
        <td><select name="responsable" required >
          <option disabled selected>
            Seleccione Vendedor
          </option>
          {vendedores.map((el)=>{
            return(
              <option key={nanoid()}
              value={el._id}>{`${el.name}`}</option>
            );
          })
          }
          
          </select></td>
        <td><input type="date" name="fechaVenta" required></input></td>
        
          </tr>
      </tbody>
      
    </table>
    <table className='tabla'>
      <thead>
        <tr>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td><select name="estadoVenta" required>
          <option disabled selected required>
            Seleccione estado de venta
          </option>
          <option>En Proceso</option>
          <option>Entregada</option>
          <option>Cancelada</option>
          </select></td>
        </tr>
      </tbody>

    </table>
    </div>
  )
}

const TablaVehiculos = ({ vehiculos, setVehiculos, setVehiculosTabla }) => {
  const [vehiculoAAgregar, setVehiculoAAgregar] = useState({});
  const [filasTabla, setFilasTabla] = useState([]);
  const [totalVentas, setTotalVentas]=useState(0)


  useEffect(() => {
    console.log(vehiculoAAgregar);
  }, [vehiculoAAgregar]);

  useEffect(() => {
    console.log('filasTabla', filasTabla);
    setVehiculosTabla(filasTabla);
    
  }, [filasTabla, setVehiculosTabla]);

  const agregarNuevoVehiculo = () => {
    setFilasTabla([...filasTabla, vehiculoAAgregar]);
    setVehiculos(vehiculos.filter((v) => v._id !== vehiculoAAgregar._id));
    setVehiculoAAgregar({});
  };

  const eliminarVehiculo = (vehiculoAEliminar) => {
    setFilasTabla(filasTabla.filter((v) => v._id !== vehiculoAEliminar._id));
    setVehiculos([...vehiculos, vehiculoAEliminar]);
  };

  const modificarVehiculo = (vehiculo, cantidad, subtotal) => {
    setFilasTabla(
      filasTabla.map((ft) => {
        if (ft._id === vehiculo._id) {
          ft.cantidad = cantidad;
          ft.subtotal = parseFloat(cantidad)* parseFloat(vehiculo.precio)*1000000;
        }
        return ft;
      })
    );
  }

  useEffect(() => {
    console.log(filasTabla)
    let total=0
    filasTabla.forEach(f=>{
      total += f.subtotal
    })
    setTotalVentas(total)
    
  }, [filasTabla])

  return (
    <div>
      <div className='flex m-4'>
        <label className='flex flex-col' htmlFor='vehiculo'>
          <select
            className='p-2'
            value={vehiculoAAgregar._id ?? ''}
            
            onChange={(e) =>
              setVehiculoAAgregar(vehiculos.filter((v) => v._id === e.target.value)[0])
            }
          >
            <option disabled value=''>
              Seleccione un Vehiculo
            </option>
            {vehiculos.map((el) => {
              return (
                <option
                  key={nanoid()}
                  value={el._id}
                >{`${el.nombre} ${el.marca} ${el.estado}`}</option>
              );
            })}
          </select>
        </label>
        <button
          type='button'
          onClick={() => agregarNuevoVehiculo()}
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Agregar Vehículo
        </button>
      </div>
      <table className='tabla'>
        <thead className="justify-center">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
            <th className='hidden'>Input</th>
          </tr>
        </thead>
        <tbody>
          {filasTabla.map((el, index) => {
            return (
              <FilaVehiculo
                key={el._id}
                veh={el}
                index={index}
                eliminarVehiculo={eliminarVehiculo}
                modificarVehiculo={modificarVehiculo}
              />
            );
          })}
              
        </tbody>
      </table>
      <div className='flex flex-col w-full'>
           <label className='flex flex-col justify-end items-end'>
          <span className=' font-extrabold font-gray-900 mr-9'>Valor Total Venta</span>
           <input
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            name='total'
            value={totalVentas}
            required
            
          /> 
        </label>
        </div>
    </div>
  )
        }

const FilaVehiculo = ({veh, index, eliminarVehiculo, modificarVehiculo})=>{
  const [vehiculo, setVehiculo] = useState(veh);
  useEffect(() => {
    console.log('veh', vehiculo);
  }, [vehiculo]);
  return(
    <tr>
                <td>{vehiculo.id}</td>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.precio}</td>
                <td>{vehiculo.estado}</td>
                <td>
                  <label htmlFor={`cantidad_${index}`}>
                    <input 
                    type='number' 
                    name={`cantidad_${index}`} 
                    value={vehiculo.cantidad}
                    min='0'
                    onChange={(e)=>{
                      modificarVehiculo(vehiculo, e.target.value === '' ? '0' : e.target.value);
                      setVehiculo({
                        ...vehiculo,
                        cantidad: e.target.value === '' ? '0' : e.target.value,
                        subtotal:
                          parseFloat(vehiculo.precio) *
                          parseFloat(e.target.value === '' ? '0' : e.target.value)*1000000
                      })
                      
                    }}/>
                  </label>
                </td>
                <td>{parseFloat(vehiculo.subtotal ?? 0)}</td>
                <td>
                  <i
                    onClick={() => eliminarVehiculo(vehiculo)}
                    className='fas fa-trash text-red-500 cursor-pointer'
                  />
                </td>
                <input hidden defaultValue={vehiculo._id} name={`vehiculo_${index}`} />
              </tr>
            );
          }
  



export default FormVentas


