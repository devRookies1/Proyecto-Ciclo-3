import SectionMain from 'components/SectionMain'
import React, { useEffect, useState }  from 'react'
import productos from 'media/productos1.png'
import {toast, ToastContainer } from 'react-toastify'
import { nanoid } from 'nanoid'
//import buscar from 'media/buscar.png'
import { obtenerVehiculos, actualizarVehiculo, eliminarVehiculo } from 'utils/api'
import {Dialog} from '@material-ui/core'



const Productos = () => {
    const [vehiculos, setVehiculos] = useState([])
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true)



    useEffect(() => {

        if (ejecutarConsulta) {
            obtenerVehiculos(
                (response)=> {
                    setVehiculos(response.data);
                  },
                  (error)=> {
                    console.error(error);
                  }
                  );
            setEjecutarConsulta(false)
          }
        }, [ejecutarConsulta]);
    
    
    return (
        <SectionMain nombre='vehiculos' logo={productos}>
            <TablaProductos listaVehiculos={vehiculos} setEjecutarConsulta={setEjecutarConsulta}/>
        </SectionMain>
    )
}

const TablaProductos = ({listaVehiculos, setEjecutarConsulta}) => {
    const [busqueda, setBusqueda] = useState('');
    const [vehiculosFiltrados, setVehiculosFiltrados] = useState(listaVehiculos);
    useEffect(() => {
        setVehiculosFiltrados(
            listaVehiculos.filter((elemento) => {
              return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
          );
      }, [busqueda,listaVehiculos]);

    return (
        <div className="flex flex-col  items-center justify-start">
        
        <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
        className='border-2 border-gray-700 px-3 py-1 m-3 self-end rounded-md focus:outline-none focus:border-indigo-500'
        />
        <table className="tabla border-separate bg-gray-400 w-3/4"> 
            <thead>

                    <th className="border-separate border border-gray-500 p-3">#Identificacion</th>
                    <th className="border-separate border border-gray-500 p-3">Nombre</th>
                    <th className="border-separate border border-gray-500 p-3">Marca</th>
                    <th className="border-separate border border-gray-500 p-3">Valor unitario</th>
                    <th className="border-separate border border-gray-500 p-3">Estado</th>
                    <th className="border-separate border border-gray-500 p-3">Acciones</th>
                
                
            </thead>
            <tbody className="bg-white">
                {vehiculosFiltrados.map((vehiculo) => {
                    return (
                    <FilaVehiculo key={nanoid} vehiculo ={vehiculo} setEjecutarConsulta={setEjecutarConsulta}/>
                    )
                })}                
                <ToastContainer position="bottom-center" autoClose={5000}/>
                
            </tbody>
        </table>
      </div>
    )
}

const FilaVehiculo = ({ vehiculo, setEjecutarConsulta })=>{
    const [edit,setEdit]= useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    
    const [infoNuevoVehiculo,setInfoNuevoVehiculo]= useState({
        id: vehiculo.id ,
        nombre: vehiculo.nombre,
        marca: vehiculo.marca,
        precio: vehiculo.precio,
        estado: vehiculo.estado
    })

    const editarVehiculo = async()=>{

        await actualizarVehiculo(vehiculo._id, infoNuevoVehiculo,
    
            (response) => {
                console.log(response.data);
                toast.success('Vehículo modificado con éxito');
                setEdit(false)
                setEjecutarConsulta(true);
            },
            (error) => {
                toast.error('Error modificando el vehículo');
                console.error(error);
            })}
    
    const deleteVehicle = async ()=>{

    await eliminarVehiculo(
        vehiculo._id,
        (response) => {
           console.log(response.data);
           toast.success('vehículo eliminado con éxito');
           setEjecutarConsulta(true);
        },
        (error) => {
            console.error(error);
            toast.error('Error eliminando el vehículo');
        });

    }
    

    return(
     <tr>
         {edit?(
             <>
             
             <td>
                 <input type="number"
                 className=' bg-gray-50 hover:bg-gray-300 border-gray-600 border  rounded-lg w-32'
                 value={infoNuevoVehiculo.id}
                 onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,id:e.target.value})} 
                 disabled/>
             </td>
             <td>
                 <input type="text"
                 className='bg-gray-50 border border-gray-600  rounded-lg w-32 '
                 value={infoNuevoVehiculo.nombre}
                 onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,nombre:e.target.value})} />
             </td>
             <td>
                 <input type="text"
                 className='bg-gray-50 border border-gray-600  rounded-lg w-32'
                 value={infoNuevoVehiculo.marca}
                 onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,marca:e.target.value})} />
             </td>

             <td>
                 <input type="text"
                 className='bg-gray-50 border border-gray-600  rounded-lg w-max'
                 value={infoNuevoVehiculo.precio}
                 onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,precio:e.target.value})} />
             </td>
             <td>
             <select name="estado"
                defaultValue={infoNuevoVehiculo.estado}
                required
                onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,estado:e.target.value})}
                    >
                            <option disabled selected>Selecciona una opción</option>
                            <option>Disponible</option>
                            <option>No Disponible</option>
                    </select>
                
             </td>
             
             </>)
             : (
                 <>
                 <td>{vehiculo.id}</td>
                 <td>{vehiculo.nombre}</td>
                 <td>{vehiculo.marca}</td>
                 <td className="cur">{vehiculo.precio}</td>
                 <td>{vehiculo.estado}</td>
                 </>
             )}
    
     <td>
         <div className='flex justify-around'>
         {edit? (
                 
                <i onClick={()=> editarVehiculo()}
                    className='fas fa-check text-green-500'/>
                 
             ):(
                <i onClick={()=>setEdit(!edit)} className='fas fa-edit text-yellow-500'/>
             )

             }
             <i  onClick={()=>setOpenDialog(true)} className='fas fa-trash text-gray-900 hover:text-red-700'/>
             <Dialog open={openDialog}>
          <div className='p-8 flex flex-col'>
            <h1 className='text-gray-900 text-2xl font-bold'>
              ¿Está seguro de querer eliminar el vehículo?
            </h1>
            <div className='flex w-full items-center justify-center my-4'>
              <button
                onClick={() => deleteVehicle()}
                className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
         </div>
         </td>
     </tr>
    )
}





export default Productos