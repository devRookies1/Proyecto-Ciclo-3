import SectionMain from 'components/SectionMain'
import React, { useState} from 'react'
import usuarios1 from 'media/usuarios1.png'
import {toast, ToastContainer } from 'react-toastify'

const Usuarios = () => {
    return (
        <SectionMain nombre='usuarios' logo={usuarios1} >
          <TablaUsuarios/>
        </SectionMain>
    )
}

const TablaUsuarios = () => {
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
                <FilaUsuarios1/>
                <FilaUsuarios2/>
                <FilaUsuarios3/>
                <ToastContainer position="bottom-center" autoClose={5000}/>
            </tbody>
        </table>
      </div>
    )
}
const FilaUsuarios1 = ()=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }

    return(
     <tr>
         {edit?
         <> 
        
            <td><input type="text" defaultValue='1' disabled /></td>
            <td><input type="text" defaultValue='Admin' /></td>
            <td><select name="Rol" defaultValue="Administrador">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>
                            </select></td>
            <td><select name="Estado" defaultValue="Autorizado">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Pendiente</option>
                            <option>No Autorizado</option>
                            <option>Autorizado</option>
                       </select></td>
         </>
        :
        <>
        <td>1</td>
                    <td>Admin</td>
                    <td>Administrador</td>
                    <td>Autorizado</td>
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
const FilaUsuarios2 = ()=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }

    return(
     <tr>
         {edit?
         <> 
        
            <td><input type="text" defaultValue='2' disabled /></td>
            <td><input type="text" defaultValue='Carol' /></td>
            <td><select name="Rol" defaultValue="Vendedor">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>
                            </select></td>
            <td><select name="Estado" defaultValue="Pendiente">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Pendiente</option>
                            <option>No Autorizado</option>
                            <option>Autorizado</option>
                       </select></td>
         </>
        :
        <>
        <td>2</td>
                    <td>Carol</td>
                    <td>Vendedor</td>
                    <td>Pendiente</td>
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
const FilaUsuarios3 = ()=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }

    return(
     <tr>
         {edit?
         <> 
        
            <td><input type="text" defaultValue='3' disabled /></td>
            <td><input type="text" defaultValue='Vanessa' /></td>
            <td><select name="Rol" defaultValue="Administrador">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>
                            </select></td>
            <td><select name="Estado" defaultValue="No Autorizado">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Pendiente</option>
                            <option>No Autorizado</option>
                            <option>Autorizado</option>
                       </select></td>
         </>
        :
        <>
        <td>3</td>
                    <td>Vanessa</td>
                    <td>Administrador</td>
                    <td>No autorizado</td>
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
