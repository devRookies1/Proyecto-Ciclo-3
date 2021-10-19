import SectionMain from 'components/SectionMain'
import React, { useState, useEffect} from 'react'
import usuarios1 from 'media/usuarios1.png'
import {toast, ToastContainer } from 'react-toastify'
import { nanoid } from 'nanoid'
import { obtenerUsuarios, actualizarUsuario, eliminarUser } from 'utils/api'
import { Dialog} from '@material-ui/core';

const usuariosBackend = [
    {
        id: 1,
        nombre: 'Admin',
        rol: 'Administrador',
        estado: 'Autorizado'
    },
    {
        id: 2,
        nombre: 'Carol',
        rol: 'Vendedor',
     
        estado: 'Pendiente'
    },
    {
        id: 3,
        nombre: 'Vannesa',
        rol: 'Administrador',
        estado: 'No autorizado'
        
    }
    
    
]

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true)

    useEffect(() => {

        if (ejecutarConsulta) {
            obtenerUsuarios(
              (response)=>{setUsuarios(response.data)
              },
              (error)=>{console.error(error)}
            );
          setEjecutarConsulta(false);
          }
        }, [ejecutarConsulta]);

    return (
        <SectionMain nombre='usuarios' logo={usuarios1} >
          <TablaUsuarios listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta}/>
        </SectionMain>
    )
}

const TablaUsuarios = ({listaUsuarios,setEjecutarConsulta}) => {

    useEffect(() => {
        console.log('este es el listado de usuarios en el componente de tabla', listaUsuarios);
      }, [listaUsuarios]);
    return (
        <div className="flex flex-col h-screen items-center justify-start">
        <table className=" tabla border-separate bg-gray-400 w-3/4"> 
            <thead>
                    <th className="border-separate border border-gray-500 p-3">Nombre usuario</th>
                    <th className="border-separate border border-gray-500 p-3">Rol</th>
                    <th className="border-separate border border-gray-500 p-3">Estado</th>
                    <th className="border-separate border border-gray-500 p-3">Acciones</th>
                
            </thead>
            <tbody className="bg-white">
                {listaUsuarios.map((usuario) => {
                    return (
                    <FilaUsuarios key={nanoid} usuario ={usuario} setEjecutarConsulta={setEjecutarConsulta}/>
                    )
                })}
                <ToastContainer position="bottom-center" autoClose={5000}/>
            </tbody>
        </table>
      </div>
    )
}
const FilaUsuarios = ({usuario,setEjecutarConsulta})=>{
    const [edit,setEdit]= useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    
    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({

        id: usuario.id,
        nombre: usuario.nombre,
        rol: usuario.rol,
        estado: usuario.estado
    })
    const editarUsuarios = async()=>{

        await actualizarUsuario(usuario._id, infoNuevoUsuario,
    
            (response) => {
                console.log(response.data);
                toast.success('Usuario modificado con éxito');
                setEdit(false)
                setEjecutarConsulta(true);
            },
            (error) => {
                toast.error('Error modificando el usuario');
                console.error(error);
            });
        }
    
    const eliminarUsuario = async ()=>{

    await eliminarUser(
        usuario._id,
        (response) => {
           console.log(response.data);
           toast.success('Usuario eliminado con éxito');
           setEjecutarConsulta(true);
        },
        (error) => {
            console.error(error);
            toast.error('Error eliminando al Usuario');
        });

    }
    

    return(
     <tr>
         {edit?
         <>
            <td><input type="text"
            value={infoNuevoUsuario.nombre} 
            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,nombre:e.target.value})}/>
            </td>
            <td><select
            name="Rol" 
            value={infoNuevoUsuario.rol}
            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,rol:e.target.value})}>
                <option disabled selected>Selecciona una opción</option>
                <option>Administrador</option>
                <option>Vendedor</option>
                </select></td>
            <td><select 
            name="Estado" 
            value={infoNuevoUsuario.estado}
            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,estado:e.target.value})}>
                            <option disabled selected>Selecciona una opción</option>
                            <option>Pendiente</option>
                            <option>No Autorizado</option>
                            <option>Autorizado</option>
                       </select></td>
         </>
        :
        <>
             <td>{usuario.nombre}</td>
             <td>{usuario.rol}</td>
             <td>{usuario.estado}</td>
        </>
        }
     
     <td>
         <div className='flex justify-around'>
         {edit? (
                 
                     <i onClick={()=>editarUsuarios()} className='fas fa-check text-green-500'/>
                 
             ):(
                <i onClick={()=>setEdit(!edit)} className='fas fa-edit text-yellow-500'/>
             )

             }
             <i onClick={()=>setOpenDialog(true)} className='fas fa-trash text-gray-900 hover:text-red-700'/>
             <Dialog open={openDialog}>
          <div className='p-8 flex flex-col'>
            <h1 className='text-gray-900 text-2xl font-bold'>
              ¿Está seguro de querer eliminar el usuario?
            </h1>
            <div className='flex w-full items-center justify-center my-4'>
              <button
                onClick={() => eliminarUsuario()}
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




export default Usuarios
