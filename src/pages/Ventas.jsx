import React, {useState, useEffect} from 'react'
import SectionMain from 'components/SectionMain'
import grid from 'media/grid.png'
import {toast, ToastContainer} from 'react-toastify'
import {  obtenerUsuarios, obtenerVentas, eliminarVenta, actualizarVenta } from 'utils/api'
//import { nanoid } from 'nanoid'
import { Dialog} from '@material-ui/core';

const Ventas = () => {
    const [ventas,setVentas] = useState([])
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true)  

    useEffect(() => {
        if (ejecutarConsulta) {
            obtenerVentas(
                (response)=> {
                    setVentas(response.data);
                  },
                  (error)=> {
                    console.error(error);
                  }
                  );
            setEjecutarConsulta(false)
          }
   }, [ejecutarConsulta]);   
    return (
        <SectionMain logo= {grid} nombre={'ventas'} >
       
         <TablaVentas listaVentas ={ventas} setEjecutarConsulta={setEjecutarConsulta} />
         <ToastContainer position="bottom-center" autoClose={5000}/>
        </SectionMain>        
    )
}

const TablaVentas =({listaVentas, setEjecutarConsulta})=>{
    const [busqueda, setBusqueda] = useState('');
    const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);
    useEffect(() => {
        setVentasFiltradas(
            listaVentas.filter((elemento) => {
              return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
          );
      }, [busqueda,listaVentas]);
    return(
        <div className="flex flex-col  items-center justify-start  ">
        <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
        className='border-2 border-gray-700 px-3 py-1 m-3 self-end rounded-md focus:outline-none focus:border-indigo-500'
        />
        <table className="tabla">
            <thead>
                <tr>
            <th ># Identificación</th> 
             <th >Descripción</th>
             <th >Fecha Venta</th>
             <th >Responsable</th>
             <th >Estado</th>
             <th >Valor Total</th>
             <th >Acciones</th>
             </tr>
            </thead>
            <tbody>
                {ventasFiltradas.map((ventas)=>{
                    return(
                    <FilaTablaGrl key={ventas._id} listaVentas = {ventas} setEjecutarConsulta={setEjecutarConsulta}/>                       
                    );
                })}

            </tbody>
        </table>
    </div>    
    )
} 

const FilaTablaGrl = ({listaVentas, setEjecutarConsulta}) =>{
    const [desplegar, setDesplegar] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)

    const deleteSale = async ()=>{

        await eliminarVenta(
            listaVentas._id,
            (response) => {
               console.log(response.data);
               setOpenDialog(false)
               toast.success('Venta eliminada con éxito');
               setEjecutarConsulta(true)
            },
            (error) => {
                console.error(error);
                toast.error('Error eliminando la venta');
            });
    
        }

    return(
        <>
        <tr>
            <td>{listaVentas.idVenta}</td>
            <td>
               <button type="button" className="my-1 flex w-max text-sm  focus:outline-none hover:text-green-700 underline" 
               onClick={()=>{setDesplegar(!desplegar)}}>
                  Ver más  
            </button></td>
            <td>{listaVentas.fechaVenta}</td>
            <td>{listaVentas.responsable.name}</td>
            <td>{listaVentas.estado}</td>
            <td>{listaVentas.total}</td>
            <td><div className="flex justify-center">
            <i onClick={()=>setOpenDialog(true)} className='fas fa-trash text-gray-900 hover:text-red-700'/>
             <Dialog open={openDialog}>
          <div className='p-8 flex flex-col'>
            <h1 className='text-gray-900 text-2xl font-bold'>
              ¿Está seguro de querer eliminar la venta?
            </h1>
            <div className='flex w-full items-center justify-center my-4'>
              <button
                onClick={() => deleteSale()}
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
        </Dialog></div></td>
        </tr>
        {desplegar && (
        <Despliegue ventas={listaVentas} setEjecutarConsulta={setEjecutarConsulta}/>
        )}
        </>
    )
}

const Despliegue = ({ventas,setEjecutarConsulta}) => {
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
                        <tr> { edit? (<FilaEditable listaVentas ={ventas} setEdit={setEdit} setEjecutarConsulta={setEjecutarConsulta}/>):(<FilaNormal listaVentas={ventas} setEdit={setEdit}/>)}</tr>
                        </tbody>
                    </table>
                    <TablaProductos listaVentas={ventas} />  
                </div>          
            </td>            

        </tr>                
    )
}
const FilaEditable =({listaVentas, setEdit, setEjecutarConsulta})=>{
    const [vendedores, setVendedores] = useState([])
    
    useEffect(() => {
        const fetchVendedores = async()=>{
            await obtenerUsuarios(
                (response)=>{setVendedores(response.data)
                },
                (error)=>{console.error(error)})
        }
        fetchVendedores()
    }, [])

    const [datosVenta, setDatosVenta] = useState({
        idVenta: listaVentas.idVenta,
        nombCliente: listaVentas.nombCliente,
        idCliente : listaVentas.idCliente,
        responsable: vendedores.filter((v) => v._id === listaVentas.responsable)[0],
        fechaVenta: listaVentas.fechaVenta,
        estado: listaVentas.estadoVenta,
        total: listaVentas.total,
      });

    const editarVenta = async()=>{

        await actualizarVenta(listaVentas._id, datosVenta,
    
            (response) => {
                console.log(response.data);
                setEdit(false)
                toast.success('Venta modificada con éxito');
                setEjecutarConsulta(true)
            },
            (error) => {
                toast.error('Error modificando la venta');
                console.error(error);
            });
        }
    return(<>

        <td>
            <input 
            type="text" 
            className='bg-gray-50 border border-gray-600  rounded-lg w-32' 
            value={listaVentas.nombCliente}
            onChange={(e)=>setDatosVenta({...datosVenta,nombCliente:e.target.value})}/></td>
        <td><input 
            type="text" 
            className='bg-gray-50 border border-gray-600  rounded-lg w-32' 
            value={listaVentas.idCliente}
            onChange={(e)=>setDatosVenta({...datosVenta,idCliente:e.target.value})}/></td>
        <td><input 
            type="date" 
            className='bg-gray-50 border border-gray-600  rounded-lg w-max ' 
            value={listaVentas.fechaVenta}
            onChange={(e)=>setDatosVenta({...datosVenta,fechaVenta:e.target.value})}/></td>
        <td><select name="responsable" required >
          <option disabled>
            Seleccione Vendedor
          </option>
          {vendedores.map((el)=>{
            return(
                
              <option key={el._id}
              value={el._id}>{`${el.name}`}</option>
            );
          })
          }
          
          </select></td>
        
        
                <td><select name='estado' defaultValue={0}
                value={listaVentas.estado}
                onChange={(e)=>setDatosVenta({...datosVenta,estado:e.target.value})}>
                    <option value={0} selected disabled>Estado</option>
                    <option value="Cancelado">Cancelada</option>
                    <option value="Entregado">Entregada</option>
                    <option value="En proceso">En proceso</option>
                </select></td>
            <td>    
            <div className='flex justify-around'>
                    <button type ="submit">
                        <i  onClick={()=>editarVenta()} className='fas fa-check text-green-500'/>
                    </button>
            </div>
        </td>                
            </>)
}
const FilaNormal =({listaVentas, setEdit})=>{ 
    return(
        <>
            <td>{listaVentas.nombCliente}</td>
            <td>{listaVentas.idCliente}</td>
            <td>{listaVentas.fechaVenta}</td>
            <td>{listaVentas.responsable.name}</td>
            <td>{listaVentas.estado}</td> 
            <td>
            <div className='flex justify-around'>
            <i onClick={()=>{setEdit(true)}}  className='fas fa-edit text-yellow-500'/>  

            </div>
            </td>
        </>
    )
}
const TablaProductos =({listaVentas})=>{
    const [edit, setEdit] = useState(false)
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
                            {edit?(<><FilaProduEditable listaVentas={listaVentas} setEdit={setEdit}  />
                            <FilaTotal listaVentas={listaVentas} setEdit={setEdit}/></>):
                            (<><FilaProduNormal listaVentas={listaVentas} setEdit={setEdit}/>
                            <FilaTotalNormal listaVentas = {listaVentas} setEdit={setEdit}/></>)}
                        </tbody>
        </table>                
    )
}
const FilaProduEditable =({listaVentas, setEdit})=>{
    
    const [datosVenta, setDatosVenta] = useState({
        
        idVenta: listaVentas.idVenta,
        nombCliente: listaVentas.nombCliente,
        idCliente : listaVentas.idCliente,
        fechaVenta: listaVentas.fechaVenta,
        estado: listaVentas.estadoVenta,
        total: listaVentas.total,
        vehiculos: listaVentas.vehiculos
      });
      

      useEffect(() => {
         console.log('datosventa: ', datosVenta)
      }, [datosVenta])
      

    const editarVenta = async()=>{

        await actualizarVenta(listaVentas._id, datosVenta,
    
            (response) => {
                console.log(response.data);
                setEdit(false)
                toast.success('Venta modificada con éxito');
            },
            (error) => {
                toast.error('Error modificando la venta');
                console.error(error);
            });
        }

    return(
        <>
        
        {listaVentas.vehiculos.map((v)=>{
                return(
                    <tr key={v._id}>
                    <td>
                        {v.nombre}
                    </td>
                    <td > <input type="number" 
                    value={v.cantidad}
                    onChange={(e)=>setDatosVenta({...datosVenta, cantidad:e.target.value  })}/>
                        
                    </td>
                    <td className="cur">{v.precio}</td>
                    <td></td>
            <td>
                <div className='flex justify-around'>                        
                <button type ="submit">
                            <i onClick={()=>(editarVenta())} className='fas fa-check text-green-500'/>
                        </button>
                </div>
            </td> 
                    </tr>
                )
            })}
        </>           
    )

}
const FilaProduNormal=({listaVentas, setEdit})=>{

    return(
        <>
            {listaVentas.vehiculos.map((v)=>{
                return(
                    <tr key={v._id}>
                    <td>
                        {v.nombre}
                    </td>
                    <td > 
                        {v.cantidad}
                    </td>
                    <td className="cur">{v.precio}</td>
                    <td></td>
            <td>
                <div className='flex justify-around'>                        
                    <i  onClick={()=>setEdit(true)} className='fas fa-edit text-yellow-500'/>
                </div>
            </td> 
                    </tr>
                )
            })}
        </>    
                           
    )
}
const FilaTotal = ({listaVentas, setEdit})=>{

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
                <div className='flex justify-around'>
                    <button type ="submit">
                        <i  className='fas fa-check text-green-500'/>
                    </button>
                </div>
                    
                </div>
            </td>
        </tr>
        
    )
}
const FilaTotalNormal =({listaVentas, setEdit})=>{

    return(
        <tr><td></td>
        <td></td>
        <td></td>
        <td className="cur">{listaVentas.total}</td>
        <td>
        <div className='flex justify-around'>                        
                    <i  onClick={()=>setEdit(true)} className='fas fa-edit text-yellow-500'/>
                </div>
                
            </td></tr>
    )
}

export default Ventas


