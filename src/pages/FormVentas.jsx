import SectionMainForm from 'components/SectionMainForm'
import React, {useState, useRef} from 'react'
import agregar from 'media/agregar.png'
import Ventas from './Ventas'
import {toast} from 'react-toastify'
import axios from 'axios'
import { Link } from 'react-router-dom'


const FormVentas = () => {

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
                        </tr>
                    </thead>

                <tbody className="bg-white">
                <tr>
                  <td><input name ='id' type="text" placeholder = "Identificador de venta"/></td>
                  <td><input name = 'nombCliente'type="text" placeholder ="Nombre del cliente"/></td>
                  <td><input name = 'idCliente'type="text" placeholder ="Identificación del cliente"/></td>
                  <td><input name = 'fechaVenta'type="date" placeholder ="Fecha de la venta"/></td>
                  <td><input name = 'responsable'type="text" placeholder ="Responsable"/></td>
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
                    <tr id="fieldlist">
                        <td><input name='idProdu' type="text" placeholder = "Producto"/></td>
                        <td><input name= 'valorUnitario'type="number" placeholder ="Valor unitario"/></td>
                        <td><input name = 'cantidad'type="number" placeholder ="Cantidad"/></td>                
                        <td><p><select name='estado'>
                        <option selected disabled>Estado</option>
                        <option value="Cancelado">Cancelado</option>
                        <option value="Entregado">Entregado</option>
                        <option value="En proceso">En proceso</option>
                    </select></p></td>
                        <td><input type="text" placeholder ="Total"/></td>
                      </tr>

                    </tbody>   
            </table>
                <button>
                  
                    <img className='h-5 m-2 transform hover:scale-110' src={agregar} alt="agregar" />
                </button>
          </form>
          <Link to ="/ventas">
            <div className=" items-center">
            <button type="submit"  className=' bg-green-400 w-max justify-end' >
            Enviar datos

          </button>
            </div>
          
          </Link>

        </form>
          </div>
          <div className=" flex place-self-end">
          <table className="bg-gray-400 m-10 w-32 text-center">
            <h3 className="font-bold">Total venta</h3>
          <label htmlFor="Total venta">
            <input/>Total Venta</label> 
          </table>
        </div>   
        </SectionMainForm>
    )
}


export default FormVentas
