import SectionMainForm from 'components/SectionMainForm'
import React, {useState, useRef, useEffect} from 'react'
import agregar from 'media/agregar.png'
import Ventas from './Ventas'
import {toast} from 'react-toastify'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { obtenerUsuarios, obtenerVehiculos } from 'utils/api'
import { nanoid } from 'nanoid'
import { crearVenta } from 'utils/api'


const FormVentas = () => {

  const form = useRef(null)
  const [vendedores,setVendedores] = useState([])
  const [vehiculos,setVehiculos] = useState([])
  const [vehiculosTabla, setVehiculosTabla] = useState([])
  var [total,setTotal]= useState(0)



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

    

    Object.keys(nuevaVenta).forEach((k) => {
      if (k.includes('subtotal')) {
        const indice = parseInt(k.split('_')[1]);
        listaVehiculos[indice]['subtotal'] = nuevaVenta[k];
        
      }
    });


    // const datosVenta = {
    //   vendedor: vendedores.filter((v) => v._id === nuevaVenta.vendedor)[0],
    //   total: nuevaVenta.total,
    //   vehiculos: listaVehiculos,
    // };

    // console.log('lista vehiculos', listaVehiculos);

    // await crearVenta(
    //   datosVenta,       
    //   (response) => {
    //     console.log(response.data);
    //     toast.success('Venta agregada con éxito');
    //   },
    //    (error) => {
    //     console.error(error);
    //     toast.error('Error creando una venta');
    //   }
    //   );
      
  }
    
      
       
      return (
        <SectionMainForm nombre='ventas'>
            <div className="flex flex-col  w-full items-center justify-start  " >
            <form ref={form} onSubmit={submitForm}>

            <TablaVehiculos
              vehiculos={vehiculos}
              setVehiculos={setVehiculos}
              setVehiculosTabla={setVehiculosTabla}
           />
           <div className='flex flex-col w-full'>
           <label className='flex flex-col justify-end items-end'>
          <span className=' font-gray-900'>Valor Total Venta</span>
          <input
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            name='total'
            value={total}
            required
            disabled
          />
        </label>
        </div>

            
            <button
            type='submit'
            className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
            >
            Crear Venta
            </button>
            </form>
            </div>
              
        </SectionMainForm>
    )
}

const TablaVehiculos = ({ vehiculos, setVehiculos, setVehiculosTabla }) => {
  const [vehiculoAAgregar, setVehiculoAAgregar] = useState({});
  const [filasTabla, setFilasTabla] = useState([]);
  const [cantidad,setCantidad] = useState(0)


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

  return (
    <div>
      <div className='flex '>
        <label className='flex flex-col' htmlFor='vehiculo'>
          <select
            className='p-2'
            value={vehiculoAAgregar._id ?? ''}
            required
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
        <thead>
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
              <tr key={nanoid()}>
                <td>{el.id}</td>
                <td>{el.nombre}</td>
                <td>{el.marca}</td>
                <td>{el.precio}</td>
                <td>{el.estado}</td>
                <td>
                  <label htmlFor={`cantidad_${index}`}>
                    <input 
                    type='number' 
                    name={`cantidad_${index}`} 
                    value={cantidad}
                    onChange={(e)=>{
                      setCantidad(e.target.value)
                    }}/>
                  </label>
                </td>
                <td><label htmlFor={`subtotal_${index}`}>
                    <input 
                    type='number' 
                    name={`subtotal_${index}`} 
                    value={parseInt(el.precio)*1000000*cantidad}
                    />
                  </label>
                </td>
                <td>
                  <i
                    onClick={() => eliminarVehiculo(el)}
                    className='fas fa-trash text-red-500 cursor-pointer'
                  />
                </td>
                <input hidden defaultValue={el._id} name={`vehiculo_${index}`} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
        }


export default FormVentas
