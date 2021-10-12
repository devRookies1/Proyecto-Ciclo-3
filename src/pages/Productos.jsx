import SectionMain from 'components/SectionMain'
import React, { useEffect, useState }  from 'react'
import productos from 'media/productos1.png'
import {toast, ToastContainer } from 'react-toastify'
import { nanoid } from 'nanoid'
import { obtenerVehiculos, actualizarVehiculo, eliminarVehiculo } from 'utils/api'



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

const TablaProductos = ({listaVehiculos, setEjecutarConsulta,}) => {
    useEffect(() => {
        console.log('este es el listado de vehiculos en el componente de tabla', listaVehiculos,);
      }, [listaVehiculos]);

    return (
        <div className="flex flex-col h-screen items-center justify-start">
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
                {listaVehiculos.map((vehiculo) => {
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
                setEdit(false);
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
                 className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 w-max'
                 value={infoNuevoVehiculo.id}
                 onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,id:e.target.value})} />
             </td>
             <td>
                 <input type="text"
                 className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 w-max'
                 value={infoNuevoVehiculo.nombre}
                 onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,nombre:e.target.value})} />
             </td>
             <td>
                 <input type="text"
                 className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 w-max'
                 value={infoNuevoVehiculo.marca}
                 onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,marca:e.target.value})} />
             </td>

             <td>
                 <input type="text"
                 className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 w-max'
                 value={infoNuevoVehiculo.precio}
                 onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,precio:e.target.value})} />
             </td>
             <td>
                 <input type="text"
                 className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 w-max '
                 value={infoNuevoVehiculo.estado}
                 onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,estado:e.target.value})} />
             </td>
             
             </>)
             : (
                 <>
                 <td>{vehiculo.id}</td>
                 <td>{vehiculo.nombre}</td>
                 <td>{vehiculo.marca}</td>
                 <td>{vehiculo.precio}</td>
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
             <i  onClick={()=>deleteVehicle()} className='fas fa-trash text-gray-900 hover:text-red-700'></i>
         </div>
         </td>
     </tr>
    )
}





export default Productos