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
    return (
        <div>  
        <div className="flex flex-col h-screen w-full items-center overflow-x-auto ">

            
        <table className=" tabla border-separate bg-gray-400 ">  
            <thead>
        
             <th class="border border-gray-500 p-3"># Identificación</th> 
             <th class="border border-gray-500 p-3">Descripción</th>
             <th class="border border-gray-500 p-3">Fecha Venta</th>
             <th class="border border-gray-500 p-3">Responsable</th>
             <th class="border border-gray-500 p-3">Estado</th>
             <th class="border border-gray-500 p-3">Valor Total</th>
             <th class="border border-gray-500 p-3">Acciones</th>
         </thead>

          <tbody class="bg-white">
              <FilaVentas1/>
              <FilaVentas2/>
              <FilaVentas3/>

        </tbody>
        </table>
        
       

    </div>

    
    </div>

    
    )
}
const FilaVentas1 = ()=>{
    const [mostrarCamposAdicionales, setMostrarCamposAdicionales] = useState(false);
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
            <td><table className="w-max border-separate bg-gray-400"> 
                 <thead>
                    <tr>
                     <th className="border-separate border border-gray-500 ">Nombre del cliente </th>
                     <th className="border-separate border border-gray-500 ">Identificación del cliente</th>
                     <th className="border-separate border border-gray-500 ">Producto</th>
                     <th className="border-separate border border-gray-500 ">Valor unitario</th>
                     <th className="border-separate border border-gray-500 ">Cantidad</th>
                    </tr>
                 </thead>
                 <tbody className="bg-white">
                     <tr>
                        <td><input type="text" /></td>                    
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td> 
                     </tr>
                 </tbody>
                </table></td>
            <td><input type="date" /></td>
            <td><input type="text" defaultValue='Tatiana' /></td>
            <td><select name="Estado" defaultValue=" Disponible">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Cancelado</option>
                            <option>Entregado</option>
                            <option>En Proceso</option>
                       </select></td>
            <td><input type="text" defaultValue='$139.000.000'/></td>

         </>
        :
        <>
        <td class=" p-3" >001</td> 
             
             <td class=" p-3">

             {mostrarCamposAdicionales ? (
             <button onClick={() => setMostrarCamposAdicionales(!mostrarCamposAdicionales)}>
                 <table className="border-separate bg-gray-400"> 
                 <thead>
                    <tr>
                     <th className="border-separate border border-gray-500 ">Nombre del cliente </th>
                     <th className="border-separate border border-gray-500 ">Identificación del cliente</th>
                     <th className="border-separate border border-gray-500 ">Producto</th>
                     <th className="border-separate border border-gray-500 ">Valor unitario</th>
                     <th className="border-separate border border-gray-500 ">Cantidad</th>
                    </tr>
                 </thead>
                 <tbody className="bg-white">
                     <tr>
                        <td>Pepito Perez</td>                    
                        <td>123456</td>
                        <td>Camioneta Toyota</td>
                        <td>$139.000.000</td>
                        <td>1</td> 
                     </tr>
                 </tbody>
                </table>
             </button>
    ): (
        <button onClick={() => setMostrarCamposAdicionales(!mostrarCamposAdicionales)}>
            Ver Más
        </button>    

      )}</td>
             <td class=" p-3">1/10/2021</td>
             <td class=" p-3">Tatiana</td>
             <td class=" p-3">Proceso</td>
             <td class=" p-3">$139.000.000</td>
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
const FilaVentas2 = ()=>{
    const [mostrarCamposAdicionales1, setMostrarCamposAdicionales1] = useState(false);
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
            <td><table className="border-separate bg-gray-400"> 
                 <thead>
                    <tr>
                     <th className="border-separate border border-gray-500 ">Nombre del cliente </th>
                     <th className="border-separate border border-gray-500 ">Identificación del cliente</th>
                     <th className="border-separate border border-gray-500 ">Producto</th>
                     <th className="border-separate border border-gray-500 ">Valor unitario</th>
                     <th className="border-separate border border-gray-500 ">Cantidad</th>
                    </tr>
                 </thead>
                 <tbody className="bg-white">
                     <tr>
                        <td><input type="text" /></td>                    
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td> 
                     </tr>
                 </tbody>
                </table></td>
            <td><input type="date" /></td>
            <td><input type="text" defaultValue='Tatiana' /></td>
            <td><select name="Estado" defaultValue=" Disponible">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Cancelado</option>
                            <option>Entregado</option>
                            <option>En Proceso</option>
                       </select></td>
            <td><input type="text" defaultValue='$139.000.000'/></td>

         </>
        :
        <>
        <td class=" p-3" >002</td> 
             
             <td class=" p-3">

             {mostrarCamposAdicionales1 ? (
             <button onClick={() => setMostrarCamposAdicionales1(!mostrarCamposAdicionales1)}>
                 <table className="border-separate bg-gray-400"> 
                 <thead>
                    <tr>
                     <th className="border-separate border border-gray-500 ">Nombre del cliente </th>
                     <th className="border-separate border border-gray-500 ">Identificación del cliente</th>
                     <th className="border-separate border border-gray-500 ">Producto</th>
                     <th className="border-separate border border-gray-500 ">Valor unitario</th>
                     <th className="border-separate border border-gray-500 ">Cantidad</th>
                    </tr>
                 </thead>
                 <tbody className="bg-white">
                     <tr>
                        <td>Nombre del Cliente</td>                    
                        <td>Identificacion del Cliente</td>
                        <td>Producto</td>
                        <td>Valor unitario</td>
                        <td>Cantidad</td> 
                     </tr>
                 </tbody>
                </table>
             </button>
    ): (
        <button onClick={() => setMostrarCamposAdicionales1(!mostrarCamposAdicionales1)}>
            Ver Más
        </button>    

      )}</td>
             <td class=" p-3">1/10/2021</td>
             <td class=" p-3">Jonatan</td>
             <td class=" p-3">Proceso</td>
             <td class=" p-3">$159.000.000</td>
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
const FilaVentas3 = ()=>{
    const [mostrarCamposAdicionales2, setMostrarCamposAdicionales2] = useState(false);
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
            <td><table className="border-separate bg-gray-400"> 
                 <thead>
                    <tr>
                     <th className="border-separate border border-gray-500 ">Nombre del cliente </th>
                     <th className="border-separate border border-gray-500 ">Identificación del cliente</th>
                     <th className="border-separate border border-gray-500 ">Producto</th>
                     <th className="border-separate border border-gray-500 ">Valor unitario</th>
                     <th className="border-separate border border-gray-500 ">Cantidad</th>
                    </tr>
                 </thead>
                 <tbody className="bg-white">
                     <tr>
                        <td><input type="text" /></td>                    
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td> 
                     </tr>
                 </tbody>
                </table></td>
            <td><input type="date" /></td>
            <td><input type="text" defaultValue='Tatiana' /></td>
            <td><select name="Estado" defaultValue=" Disponible">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Cancelado</option>
                            <option>Entregado</option>
                            <option>En Proceso</option>
                       </select></td>
            <td><input type="text" defaultValue='$139.000.000'/></td>

         </>
        :
        <>
        <td class=" p-3" >003</td> 
             
             <td class=" p-3">

             {mostrarCamposAdicionales2 ? (
             <button onClick={() => setMostrarCamposAdicionales2(!mostrarCamposAdicionales2)}>
                 <table className="border-separate bg-gray-400"> 
                 <thead>
                    <tr>
                     <th className="border-separate border border-gray-500 ">Nombre del cliente </th>
                     <th className="border-separate border border-gray-500 ">Identificación del cliente</th>
                     <th className="border-separate border border-gray-500 ">Producto</th>
                     <th className="border-separate border border-gray-500 ">Valor unitario</th>
                     <th className="border-separate border border-gray-500 ">Cantidad</th>
                    </tr>
                 </thead>
                 <tbody className="bg-white">
                     <tr>
                        <td>Nombre del Cliente</td>                    
                        <td>Identificacion del Cliente</td>
                        <td>Producto</td>
                        <td>Valor unitario</td>
                        <td>Cantidad</td> 
                     </tr>
                 </tbody>
                </table>
             </button>
    ): (
        <button onClick={() => setMostrarCamposAdicionales2(!mostrarCamposAdicionales2)}>
            Ver Más
        </button>    

      )}</td>
             <td class=" p-3">1/10/2021</td>
             <td class=" p-3">Vanessa</td>
             <td class=" p-3">Cancelado</td>
             <td class=" p-3">$159.000.000</td>
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
export default Ventas
