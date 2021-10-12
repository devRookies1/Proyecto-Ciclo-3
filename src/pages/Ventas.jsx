import React, { useState, useEffect}from 'react'
import SectionMain from 'components/SectionMain'
import grid from 'media/grid.png'
import {toast} from 'react-toastify'
import axios from 'axios'







const Ventas = () => {
    const [ventas,setVentas] = useState([])
    useEffect(async () => {

        const obtenerVentas = async ()=>{
         const options = { method: 'GET', url: 'https://localhost:5000/ventas' };
          await axios
            .request(options)
            .then(function (response) {
              setVentas(response.data);
            })
            .catch(function (error) {
              console.error(error);
            });           
        }

        obtenerVentas()

  
    
      }, []);

    
    return (

        <SectionMain logo= {grid} nombre={'ventas'} >
         <TablaVentas listaVentas ={ventas}/>
        </SectionMain>
        

    )
}


const TablaVentas = ({listaVentas}) => {
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }
    const [edit1,setEdit1]= useState(false)
    const algo1=()=>{
        setEdit1(!edit1)
        toast.success("Editado con Exito")
    }
    const [edit2,setEdit2]= useState(false)
    const algo2=()=>{
        setEdit2(!edit2)
        toast.success("Editado con Exito")
    }

    
    useEffect(() => {
       console.log("este es el listadp de ventas", listaVentas)    
    }, [listaVentas])
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
            {listaVentas.map((ventas) => {
                return(
                    <>
                <tr>
                    <td>{ventas.id}</td>
                    <td>
                    <button type="button" class="my-1 flex w-max text-sm  focus:outline-none hover:text-green-700 underline" 
                  onClick={()=>{setdesplegar(!desplegar)}}>
                  Ver más  
                  </button></td>
                    <td>{ventas.fechaVenta}</td>
                    <td>{ventas.responsable}</td>
                    <td>{ventas.estado}</td>
                    <td>{ventas.total}</td>
                  <td><div className="flex justify-center"><i className='fas fa-trash text-gray-900 hover:text-red-700'></i></div></td>
                </tr> 
                 {desplegar && (<tr>
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
                            <th>Estado</th>
                            <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        
            {edit?(<tr>

            <td>
                <input 
                type="text" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={ventas.nombCliente}/></td>
            <td><input 
                type="text" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={ventas.idCliente}/></td>
            <td><input 
                type="date" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={ventas.fechaVenta}/></td>
            <td><input 
                type="text" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={ventas.responsable}/></td>
            <td><input 
                type="text" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={ventas.estado}/></td>
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
                </tr>)
                :(
                <tr>

                <td>{ventas.nombCliente}</td>
                    <td>{ventas.idCliente}</td>
                    <td>{ventas.fechaVenta}</td>
                    <td>{ventas.responsable}</td>
                    <td>{ventas.estado}</td> 
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
                        
            {edit1? (<tr>
            <td>
                <input 
                type="text" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={ventas.idProdu} disabled/></td>
            <td><input 
                type="number" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={ventas.cantidad} /></td>
            <td><input 
                type="text" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={ventas.valorUnitario} /></td>
            <td><input 
                type="text" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={ventas.total} /></td>
                <td>
                <div className='flex justify-around'>
                    {edit1? (
                        <button type ="submit">
                            <i onClick={algo1} className='fas fa-check text-green-500'/>
                        </button>):(
                            <i onClick={()=>setEdit1(!edit1)} className='fas fa-edit text-yellow-500'/>
                    )}
                </div>
            </td>   </tr>)
            :(
            <tr><td>{ventas.idProdu}</td>
                <td>{ventas.cantidad}</td>
                <td>{ventas.valorUnitario}</td>
                <td>{ventas.total}</td>
            <td>
                <div className='flex justify-around'>
                    {edit1? (
                        <button type ="submit">
                            <i onClick={algo1} className='fas fa-check text-green-500'/>
                        </button>):(
                            <i onClick={()=>setEdit1(!edit1)} className='fas fa-edit text-yellow-500'/>
                    )}
                </div>
            </td>            
            </tr>)}
            

        {edit2? (<><td></td>
    <td></td>
    <td></td>
    <td>
                <input 
                type="text" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={ventas.total} /></td>
                <td>
                <div className='flex justify-around'>
                    {edit2? (
                    <button type ="submit">
                        <i onClick={algo2} className='fas fa-check text-green-500'/>
                    </button>):(
                    <i onClick={()=>setEdit2(!edit2)} className='fas fa-edit text-yellow-500'/>
                    )}
                </div>
            </td></>):(
    <tr><td></td>
        <td></td>
        <td></td>
        <td>{ventas.total}</td>
        <td>
                <div className='flex justify-around'>
                    {edit2? (
                    <button type ="submit">
                        <i onClick={algo2} className='fas fa-check text-green-500'/>
                    </button>):(
                    <i onClick={()=>setEdit2(!edit2)} className='fas fa-edit text-yellow-500'/>
                    )}
                </div>
            </td></tr>
        )}
        
        
            
                        </tbody>
    
                    </table>
    
                </div>
            </td>
        </tr>)}     
                 </>
                    );          
            })} 
            

        </tbody>
        </table>            
    </div>    
    </div>

    
    )
}





export default Ventas
