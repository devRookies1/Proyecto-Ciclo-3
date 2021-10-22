import React, {useState, useEffect} from 'react'
import SectionMain from 'components/SectionMain'
import grid from 'media/grid.png'
import {toast} from 'react-toastify'
import { obtenerVehiculos, obtenerUsuarios, obtenerVentas } from 'utils/api'
import { nanoid } from 'nanoid'

const Ventas = () => {
    const [ventas,setVentas] = useState([])  
     useEffect(() => {
        const fetchVentas = async()=>{
        await obtenerVentas((response)=>{
            setVentas(response.data)
        },(error)=>{
            console.error(error);
        })
    }
    fetchVentas()
   }, []);   
    return (
        <SectionMain logo= {grid} nombre={'ventas'} >
         <TablaVentas listaVentas ={ventas} />
        </SectionMain>        
    )
}

const TablaVentas =({listaVentas})=>{
    return(
        <table className="tabla">
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
            <tbody>
                {listaVentas.map((ventas)=>{
                    return(
                    <FilaTablaGrl listaVentas = {ventas}/>                       
                    );
                })}

            </tbody>
        </table>
    )
} 

const FilaTablaGrl = ({listaVentas}) =>{
    const [desplegar, setDesplegar] = useState(false)
    return(
        <>
        <tr>
            <td>{listaVentas.idVenta}</td>
            <td>
               <button type="button" class="my-1 flex w-max text-sm  focus:outline-none hover:text-green-700 underline" 
               onClick={()=>{setDesplegar(!desplegar)}}>
                  Ver más  
            </button></td>
            <td>{listaVentas.fechaVenta}</td>
            <td>{listaVentas.responsable}</td>
            <td>{listaVentas.estadoVenta}</td>
            <td>{listaVentas.total}</td>
            <td><div className="flex justify-center"><i className='fas fa-trash text-gray-900 hover:text-red-700'></i></div></td>
        </tr>
        {desplegar && (
            <Despliegue ventas={listaVentas}/>
        )}
        </>
    )
}

const Despliegue = ({ventas}) => {
    const [edit, setEdit] = useState(false)
    return(
        <tr>
            <td colSpan="7">
                <div className="flex flex-col items-center">
                    <h3>Factura {`${ventas.idVenta}`}</h3>
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
                            {edit? (<FilaEditable listaVentas ={ventas}/>):(<FilaNormal listaVentas={ventas}/>)}
                        </tbody>
                    </table>
                    <TablaProductos listaVentas={ventas}/>  
                </div>          
            </td>            

        </tr>                
    )
}
const FilaEditable =({listaVentas})=>{
    const [vendedores, setVendedores] = useState([])
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }
    useEffect(() => {
        const fetchVendedores = async()=>{
            await obtenerUsuarios(
                (response)=>{setVendedores(response.data)
                },
                (error)=>{console.error(error)})
        }
        fetchVendedores()

        
    }, [])
    return(<tr>

        <td>
            <input 
            type="text" 
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
            value={listaVentas.nombCliente}/></td>
        <td><input 
            type="text" 
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
            value={listaVentas.idCliente}/></td>
        <td><input 
            type="date" 
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
            value={listaVentas.fechaVenta}/></td>
        <td><select name="responsable" required >
          <option disabled selected>
            Seleccione Vendedor
          </option>
          {vendedores.map((el)=>{
            return(
              <option key={nanoid()}
              value={el._id}>{`${el.nombre}`}</option>
            );
          })
          }
          
          </select></td>
        
        <td>
                <td><select name='estado' defaultValue={0}>
                    <option value={0} selected disabled>Estado</option>
                    <option value="Cancelado">Cancelado</option>
                    <option value="Entregado">Entregado</option>
                    <option value="En proceso">En proceso</option>
                </select></td>
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
}
const FilaNormal =({listaVentas})=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }
    return(
        <tr>

                <td>{listaVentas.nombCliente}</td>
                    <td>{listaVentas.idCliente}</td>
                    <td>{listaVentas.fechaVenta}</td>
                    <td>{listaVentas.responsable}</td>
                    <td>{listaVentas.estado}</td> 
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
const TablaProductos =({listaVentas})=>{
    const [edit,setEdit]= useState(false)
    return(
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
                            {edit?(<><FilaProduEditable listaVentas={listaVentas}/>
                            <FilaTotal listaVentas={listaVentas}/></>):
                            (<><FilaProduNormal listaVentas={listaVentas}/>
                            <FilaTotalNormal listaVentas = {listaVentas}/></>)}
                        </tbody>
        </table>                
    )
}
const FilaProduEditable =({listaVentas, index})=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }
    const [vehiculos, setVehiculos] = useState([])
    useEffect(() => {
        const fetchVehiculos = async()=>{
            await obtenerVehiculos(
                (response)=>{setVehiculos(response.data)
                },
                (error)=>{console.error(error)})

        }
        fetchVehiculos()
    }, [])
    return(
        <tr>
            <td>{`listaVentas.{vehiculos_${index}}.id`}</td>
            <td>
                <input 
                type="number" 
                value={listaVentas.cantidad}/></td>
            <td>{`listaVentas.{vehiculos_${index}}.precio`}</td>
            <td><input type="number" value={listaVentas.total}/></td>
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
const FilaProduNormal=({listaVentas, index})=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }
    return(
        <tr><td>{`listaVentas.{vehiculos_${index}}.id`}</td>
                <td>{listaVentas.cantidad}</td>
                <td>{`listaVentas.{vehiculos_${index}}.precio`}</td>
                <td></td>
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
const FilaTotal = ({listaVentas})=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)
        toast.success("Editado con Exito")
    }
    return(
        <tr>
            <td></td>
    <td></td>
    <td></td>
    <td>
                <input 
                type="text" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={listaVentas.total} /></td>
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
const FilaTotalNormal =({listaVentas})=>{
    const [edit,setEdit]= useState(false)
    const algo=()=>{
        setEdit(!edit)

        toast.success("Editado con Exito")
    }
    return(
        <tr><td></td>
        <td></td>
        <td></td>
        <td>{listaVentas.total}</td>
        <td>
                <div className='flex justify-around'>
                    {edit? (
                    <button type ="submit">
                        <i onClick={algo} className='fas fa-check text-green-500'/>
                    </button>):(
                    <i onClick={()=>setEdit(!edit)} className='fas fa-edit text-yellow-500'/>
                    )}
                </div>
            </td></tr>
    )
}

export default Ventas


