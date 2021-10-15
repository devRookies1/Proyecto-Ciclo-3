import SectionMainForm from 'components/SectionMainForm'
import React, {useState, useRef, useEffect} from 'react'
import agregar from 'media/agregar.png'
import Ventas from './Ventas'
import {toast} from 'react-toastify'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { obtenerUsuarios, obtenerVehiculos } from 'utils/api'
import { nanoid } from 'nanoid'


const FormVentas = () => {

  const [vendedores,setVendedores] = useState([])
  const [vehiculos,setVehiculos] = useState([])

    useEffect(() => {
        const fetchVendedores = async()=>{
            await obtenerUsuarios(
                (response)=>{setVendedores(response.data)
                },
                (error)=>{console.error(error)})
        }
        const fetchVehiculos = async()=>{
            await obtenerVehiculos(
                (response)=>{setVehiculos(response.data)
                },
                (error)=>{console.error(error)})

        }
        fetchVendedores()
        fetchVehiculos()

        
    }, [])

  const form = useRef(null)

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevaVenta = {};
    fd.forEach((value, key) => {
    nuevaVenta[key] = value;

    
  });

    const options = {
      method: 'POST',
      url: 'http://localhost:5000/ventas',
      headers: { 'Content-Type': 'application/json' },
      data: { 
        id: nuevaVenta.id, 
        nombreCliente: nuevaVenta.nombCliente,  
        idCliente: nuevaVenta.idCliente, 
        fecha: nuevaVenta.fechaVenta },
        responsable: nuevaVenta.responsable,
        idProdu: nuevaVenta.idProdu,
        valorUnitario: nuevaVenta.valorUnitario,
        cantidad: nuevaVenta.cantidad,
        estado: nuevaVenta.estado,
        total: nuevaVenta.total
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Venta agregada con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando una venta');
      });
          
    Ventas.setVentas([...Ventas.listaVentas,nuevaVenta])
      toast.success('Vehiculo agregado con exito')
    
        
      }
      
       
      return (
        <SectionMainForm nombre='ventas'>
            <div className="flex flex-col  w-full items-center justify-start  " >
            <form ref={form} onSubmit={submitForm}>
              <form className='mt-4 mb-8'>
                <table className=" border-separate bg-gray-400 "> 
                    <thead>
                        <tr>
                        <th className="border-separate border border-gray-500 ">Identificador de venta</th>
                        <th className="border-separate border border-gray-500 ">Nombre del cliente </th>
                        <th className="border-separate border border-gray-500 ">Identificación del cliente</th>
                        <th className="border-separate border border-gray-500 ">Fecha de la venta</th>
                        <th className="border-separate border border-gray-500 ">Responsable</th>
                        <th className="border-separate border border-gray-500 ">Estado</th>
                        </tr>
                    </thead>

                <tbody className="bg-white">
                <tr>
                  <td><input name ='id' type="text" placeholder = "Identificador de venta"/></td>
                  <td><input name = 'nombCliente'type="text" placeholder ="Nombre del cliente"/></td>
                  <td><input name = 'idCliente'type="text" placeholder ="Identificación del cliente"/></td>
                  <td><input name = 'fechaVenta'type="date" placeholder ="Fecha de la venta"/></td>
                  <td><select name="responsable" 
                  className='bg-gray-50 border border-gray-600 p-2 rounded-lg '
                  defaultValue={0}
                  >
                    <option value={0}>Seleccione un vendedor</option>
                    {vendedores.map((el) =>{
                        return <option key={nanoid} value={el._id}>{`${el.nombre}`}</option>
                    })}
                    </select></td>
                    <td><p><select name='estado'>
                        <option selected disabled>Estado</option>
                        <option value="Cancelado">Cancelado</option>
                        <option value="Entregado">Entregado</option>
                        <option value="En proceso">En proceso</option>
                    </select></p></td>
                  
                </tr>
                </tbody>                        
            </table>
          </form>
              <form>
                <table className="border-separate bg-gray-400"> 
                    <thead>
                        <tr>
                        <th className="border-separate border border-gray-500 ">Producto</th>
                        <th className="border-separate border border-gray-500 ">Valor unitario</th>
                        <th className="border-separate border border-gray-500 ">Cantidad</th>
                        <th className="border-separate border border-gray-500 ">Estado</th>
                        <th className="border-separate border border-gray-500 ">Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                    <tr>
                {vehiculos.map((el1)=>{
                  return( <div>
                  <td><option value={el1._id}>{`${el1.nombre} ${el1.marca}`} </option></td>
                  <td>

                <input 
                name='id'
                type="text" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={el1.id} disabled/></td>
            <td><input 
                name='cantidad'
                type="number" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                 /></td>
            <td><input
                name='precio' 
                type="text" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                value={el1.precio} /></td>
            <td><input 
                name='total'
                type="text" 
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg ' 
                 /></td>
                
                  
                  </div>)  
                })}
               </tr>

                    </tbody>   
            </table>
                <button>
                  
                    <img className='h-5 m-2 transform hover:scale-110' src={agregar} alt="agregar" />
                </button>
          </form>
          

        </form>
          </div>
          <label className='flex flex-col font-bold'>
          <span className='text-xl mr-1 p-1 font-gray-900'>Total Venta</span>
          <input
            className='bg-gray-50 border border-gray-600 w-40 p-1 rounded-lg m-2'
            type='number'
            name='valor'
          />
          <Link to ="/ventas">
                <button
                  type='submit'
                  className='float-right col-span-2 bg-green-400 mx-5 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
                >
                  Enviar datos
                </button>
                </Link>
        </label>
        </SectionMainForm>
    )
}



export default FormVentas
