import SectionMainForm from 'components/SectionMainForm'
import React from 'react'
import agregar from 'media/agregar.png'

const FormVentas = () => {
    return (
        <SectionMainForm nombre='ventas'>
            
        
         <form className=" justify-center p-1 h-12 ml-4 mr-4 bg-white  border-2 my-16 ">

             <div className=" ml-16 mr-32 ">
             <input type="text" placeholder = "Identificador de venta"/>
             <input type="text" placeholder ="Nombre del cliente"/>
             <input type="text" placeholder ="Identificación del cliente"/>
             <input type="text" placeholder ="Fecha de la venta"/>
            
             </div> 
         </form>
       
 
         <form className=" justify-center  h-12 p-1 ml-1 mr-1 bg-white  border-2 ">
             <div className="ml-12  ">

             <input type="text" placeholder = "Producto"/>
             <input type="text" placeholder ="Descripción"/>
             <input type="text" placeholder ="Valor unitario"/>
             <select>
             <option disabled>Estado</option>
             <option>En proceso</option>
             <option>Cancelada</option>
             <option>Entregada</option>
             </select>
             <select>
             <option>Cantidad</option>
             </select>

             <input type="text" placeholder ="Valor unitario"/>
             </div> 
         </form>

         

         <div className=' flex flex-row items-center ml-5'>  
          <img className='h-6 m-2  transform hover:scale-110 ' src={agregar} alt="agregar" />
         </div>

         <form className="flex justify-center p-6">

        <div className="border-gray-500 p-1  border-collapse  ">
            <input type="text " placeholder = "TOTAL DE VENTA"/>
        </div> 

    </form>

   
           
                        <div className="rp_subtitulo">INGRESE LA INFORMACION DEL PEDIDO</div>
                        
                        <div className="rp_formulario1">
                            <form onSubmit={enviarDatos}>
                                <table className="tabla">
                                    <tr>
                                        <td><p>Venta ID:</p></td>
                                        <td><p><input className="input_m" type="text" id="venta_id" name="venta_id" size="30" onChange={entrada}/></p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Venta Total: </p></td>
                                        <td><p><input className="input_m" type="text" id="venta_total" name="venta_total" size="30" onChange={entrada}/></p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Detalle: </p></td>
                                        <td><p><input className="input_m" type="text" id="detalle" name="detalle" size="30" onChange={entrada}/></p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Fecha de Pago: </p></td>
                                        <td><p><input className="input_m" type="date" id="fecha_de_pago" name="fecha_de_pago" size="30" onChange={entrada}/></p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Fecha de Pago Futura:&emsp;&emsp;</p></td>
                                        <td><p><input className="input_m" type="date" id="fecha_de_pago_futura" name="fecha_de_pago_futura" size="30" onChange={entrada}/></p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Responsable: </p></td>
                                        <td><p><input className="input_m" type="text" id="responsable" name="responsable" size="30" onChange={entrada}/></p></td>
                                    </tr>
                                    <tfoot>
                                    <tr>
                                        <td colSpan="2">
                                            <button className="boton_m" type="submit">Ingresar Pedido</button>
                                        </td>
                                    </tr>
                                        </tfoot>
                                </table>
                            </form>
                        </div>
                    
             
                        

        </SectionMainForm>
    )
}

export default FormVentas
