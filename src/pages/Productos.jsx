import SectionMain from 'components/SectionMain'
import React, { useState } from 'react'
import productos from 'media/productos1.png'
import {toast, ToastContainer } from 'react-toastify'

const Productos = () => {
    return (
        <SectionMain nombre='vehiculos' logo={productos}>
            <TablaProductos/>
        </SectionMain>
    )
}



const TablaProductos = () => {
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
                <FilaVehiculo1/>
                <FilaVehiculo2/>
                <FilaVehiculo3/>
                <FilaVehiculo4/>
                <ToastContainer position="bottom-center" autoClose={5000}/>
                
            </tbody>
        </table>
      </div>
    )
}

const FilaVehiculo1 = ()=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }

    return(
     <tr>
         {edit?
         <> 
        
            <td><input type="text" defaultValue='001' disabled /></td>
            <td><input type="text" defaultValue='Mazda' /></td>
            <td><input type="text" defaultValue='$156.000.000'/></td>
            <td><select name="Estado" defaultValue=" Disponible">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Disponible</option>
                            <option>No Disponible</option>
                       </select></td>
         </>
        :
        <>
        <td>001</td>
        <td>Mazda</td>
        <td>$156.000.000</td>
        <td>Disponible</td>
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
const FilaVehiculo2 = ()=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }
    return(
     <tr>
         {edit?
         <> 
        
            <td><input type="text" defaultValue='002' disabled/></td>
            <td><input type="text" defaultValue='Renault' /></td>
            <td><input type="text" defaultValue='$140.000.000'/></td>
            <td><select name="Estado" defaultValue="Disponible">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Disponible</option>
                            <option>No Disponible</option>
                       </select></td>
         </>
        :
        <>
            <td>002</td>
            <td>Renault</td>
            <td>$140.000.000</td>
            <td>Disponible</td>
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
             
             <i className='fas fa-trash text-gray-900 hover:text-red-700'/>
         </div>
         </td>
     </tr>
    )
}
const FilaVehiculo3 = ()=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }
    return(
     <tr>
         {edit?
         <> 
        
            <td><input type="text" defaultValue='003' disabled /></td>
            <td><input type="text" defaultValue='Toyota' /></td>
            <td><input type="text" defaultValue='$139.000.000'/></td>
            <td><select name="Estado" defaultValue="No Disponible">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Disponible</option>
                            <option>No Disponible</option>
                       </select></td>
         </>
        :
        <>
            <td>003</td>
            <td>Toyota</td>
            <td>$139.000.000</td>
            <td>No Disponible</td>
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
const FilaVehiculo4 = ()=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }
    return(
     <tr>
         {edit?
         <> 
        
            <td><input type="text" defaultValue='004' disabled/></td>
            <td><input type="text" defaultValue='Citroen' /></td>
            <td><input type="text" defaultValue='$127.490.000'/></td>
            <td><select name="Estado" defaultValue="No Disponible">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Disponible</option>
                            <option>No Disponible</option>
                       </select></td>
         </>
        :
        <>
            <td>004</td>
           <td>Citroen</td>
          <td>$127.490.000</td>
             <td>No Disponible</td>
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


export default Productos
