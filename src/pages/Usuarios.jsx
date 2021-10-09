import SectionMain from 'components/SectionMain'
import React, { useState, useEffect} from 'react'
import usuarios1 from 'media/usuarios1.png'
import {toast, ToastContainer } from 'react-toastify'

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

        setUsuarios(usuariosBackend)
        
        console.log(usuarios)
    }, [])

    return (
        <SectionMain nombre='usuarios' logo={usuarios1} >
          <TablaUsuarios listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta}/>
        </SectionMain>
    )
}

const TablaUsuarios = ({listaUsuarios,setEjecutarConsulta}) => {

    useEffect(() => {
        console.log('este es el listado de vehiculos en el componente de tabla', listaUsuarios,);
      }, [listaUsuarios]);
    return (
        <div className="flex flex-col h-screen items-center justify-start">
        <table className=" tabla border-separate bg-gray-400 w-3/4"> 
            <thead>
                    <th className="border-separate border border-gray-500 p-3">No.</th>
                    <th className="border-separate border border-gray-500 p-3">Nombre usuario</th>
                    <th className="border-separate border border-gray-500 p-3">Rol</th>
                    <th className="border-separate border border-gray-500 p-3">Estado</th>
                    <th className="border-separate border border-gray-500 p-3">Acciones</th>
                
            </thead>
            <tbody className="bg-white">
                {listaUsuarios.map((usuario) => {
                    return (
                    <FilaUsuarios usuario ={usuario} setEjecutarConsulta={setEjecutarConsulta}/>
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
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }
    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({

        id: usuario.id ,
        nombre: usuario.nombre,
        rol: usuario.rol,
        estado: usuario.estado
    })
    

    return(
     <tr>
         {edit?
         <> 
        
            <td><input type="number"
            value={infoNuevoUsuario.id}
            disabled 
            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,id:e.target.value})}/>
            </td>
            <td><input type="text"
            value={infoNuevoUsuario.nombre} 
            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,nombre:e.target.value})}/>
            </td>
            <td><select
            name="Rol" 
            Value={infoNuevoUsuario.rol}
            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,rol:e.target.value})}>
                <option disabled selected>Selecciona una opción</option>
                <option>Administrador</option>
                <option>Vendedor</option>
                </select></td>
            <td><select 
            name="Estado" 
            Value={infoNuevoUsuario.estado}
            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,estado:e.target.value})}>
                            <option disabled selected>Selecciona una opción</option>
                            <option>Pendiente</option>
                            <option>No Autorizado</option>
                            <option>Autorizado</option>
                       </select></td>
         </>
        :
        <>
             <td>{usuario.id}</td>
             <td>{usuario.nombre}</td>
             <td>{usuario.rol}</td>
             <td>{usuario.estado}</td>
        </>
        }
     
     <td>
         <div className='flex justify-around'>
         {edit? (
                 <button type ="submit">
                     <i onClick={algo} className='fas fa-check text-green-500'/>
                 </button>
             ):(
                <i onClick={()=>setEdit(!edit)} className='fas fa-edit text-yellow-500'/>
             )

             }
             <i className='fas fa-trash text-gray-900 hover:text-red-700'></i>
         </div>
         </td>
     </tr>
    )
}




export default Usuarios
