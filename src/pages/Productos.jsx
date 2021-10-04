import SectionMain from 'components/SectionMain'
import React, { useState } from 'react'
import productos from 'media/productos1.png'

const Productos = () => {
    return (
        <SectionMain nombre='Vehiculos' logo={productos}>
            <TablaProductos/>
        </SectionMain>
    )
}



const TablaProductos = () => {
    return (
        <div className="flex flex-col items-center justify-center">
        <table className="tabla border-separate bg-gray-400 w-3/4"> 
            <thead>
                <tr>

                    <th className="border-separate border border-gray-500 p-3">#Identificacion</th>
                    <th className="border-separate border border-gray-500 p-3">Nombre</th>
                    <th className="border-separate border border-gray-500 p-3">Valor unitario</th>
                    <th className="border-separate border border-gray-500 p-3">Estado</th>
                    <th className="border-separate border border-gray-500 p-3">Acciones</th>
                </tr>
                
            </thead>
            <tbody className="bg-white">
                <FilaVehiculo/>
                <tr>
                <td>002</td>
                    <td>Renault</td>
                    <td>$140.000.000</td>
                    <td>Disponible</td>
                </tr>
                <tr>
                <td>003</td>
                    <td>Toyota</td>
                    <td>$139.000.000</td>
                    <td>No Disponible</td>
                </tr>
                <tr>
                <td>004</td>
                    <td>Citroen</td>
                    <td>$127.490.000</td>
                    <td>No Disponible</td>
                </tr>  
                <tr>
                <td>005</td>
                    <td>Citroen</td>
                    <td>$127.490.000</td>
                    <td>No Disponible</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
}

const FilaVehiculo = ()=>{
    const [edit,setEdit]= useState(false)
    return(
     <tr>
         {edit?
         <> 
        
            <td><input type="text" defaultValue='001' /></td>
            <td><input type="text" defaultValue='Mazda' /></td>
            <td><input type="text" defaultValue='$156.000.000'/></td>
            <td><input type="text" defaultValue='Disponible'/></td>
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
             <i onClick={()=>setEdit(!edit)} className='fas fa-edit text-yellow-500'></i>
             <i className='fas fa-trash text-gray-900 hover:text-red-700'></i>
         </div>
         </td>
     </tr>
    )
}

export default Productos
