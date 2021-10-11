import React, { useState}from 'react'
import SectionMain from 'components/SectionMain'
import grid from 'media/grid.png'
import {toast} from 'react-toastify'


const Ventas = () => {
    
    return (

        <SectionMain logo= {grid} nombre={'ventas'} >
         <TablaVentas/>
        </SectionMain>
        

    )
}


const TablaVentas = () => {
    const [desplegar,setdesplegar]=useState(false)
 

    return (
        <div>  
        <div className="flex flex-col h-screen w-full items-center overflow-x-auto ">

            
        <table className=" tabla border-separate bg-gray-400">  
            <thead>
            <tr>    
        
             <th class="border border-gray-500 p-3"># Identificación</th> 
             <th class="border border-gray-500 p-3">Descripción</th>
             <th class="border border-gray-500 p-3">Fecha Venta</th>
             <th class="border border-gray-500 p-3">Responsable</th>
             <th class="border border-gray-500 p-3">Estado</th>
             <th class="border border-gray-500 p-3">Valor Total</th>
             <th class="border border-gray-500 p-3">Acciones</th>
             </tr>
         </thead>

        <tbody class="bg-white">
              <tr>
                  <td>001</td>
                  <td>
                  <button type="button" class="my-1 flex w-max text-sm  focus:outline-none hover:text-green-700 underline" 
                onClick={()=>{setdesplegar(!desplegar)}}
                >
                Ver más 
                  
                </button>
                
                  </td>
                  <td>1/10/21</td>
                  <td>Tatiana</td>
                  <td>Cancelada</td>
                  <td>$139.000.000</td>
                  <td><div className="flex justify-center"><i className='fas fa-trash text-gray-900 hover:text-red-700'></i></div></td>
              </tr>
              {desplegar &&(
              <MiniTabla/>)}
              
        </tbody>
        </table>
        
       

    </div>

    
    </div>

    
    )
}
const MiniTabla =()=>{
    
    return(
        
        <tr>
            <td colSpan="7">
                <div className="flex flex-col items-center">
                    <h3>Factura #001</h3>
                    <table>
                        <thead>
                            <tr>
                            <th>Nombre Cliente</th>
                            <th>Documento Cliente</th>
                            <th>Fecha venta</th>
                            <th>Responsable</th>
                            <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TablaCliente/>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                            <th>Identificador producto</th>
                            <th>Cantidad</th>
                            <th>valor Unitario</th>
                            <th>Valor Total</th>
                            <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                           <TablaProdu/>
                           <FilaVenta/>
                        </tbody>
    
                    </table>
    
                </div>
            </td>
        </tr>
    )
}
const TablaCliente =()=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }

    return(
        <tr>
            <td>Pepito Perez</td>
            <td>12345678</td>
            <td>1/10/21</td>
            <td>Tatiana</td>
            <td>
                <div className='flex justify-around'>
                    {edit? (
                        <button type ="submit">
                            <i onClick={algo} className='fas fa-check text-green-500'/>
                        </button>):(
                            <i onClick={()=>setEdit(!edit)} className='fas fa-edit text-yellow-500'/>
                    )}
                </div>
            </td>
        </tr>
    )

}
const TablaProdu =()=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }
    return(
        <tr>
                                <td>001</td>
                                <td>1</td>
                                <td>139.000.000</td>
                                <td>139.000.000</td>
                                <td>
                                    <div className='flex justify-around'>
                                        {edit? (
                                        <button type ="submit">
                                            <i onClick={algo} className='fas fa-check text-green-500'/>
                                        </button>):(
                                        <i onClick={()=>setEdit(!edit)} className='fas fa-edit text-yellow-500'/>
                                        )}
                                    </div>
                                </td>
                            </tr> 
)}

const FilaVenta=()=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }

    return( <tr>
        <td></td>
            <td></td>
            <td></td>
            <td>Pepito Perez</td>
            <td>
                <div className='flex justify-around'>
                    {edit? (
                    <button type ="submit">
                        <i onClick={algo} className='fas fa-check text-green-500'/>
                    </button>):(
                    <i onClick={()=>setEdit(!edit)} className='fas fa-edit text-yellow-500'/>
                    )}
                </div>
            </td>

        </tr>
        )
}


export default Ventas
