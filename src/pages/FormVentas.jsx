import SectionMainForm from 'components/SectionMainForm'
import React from 'react'
import agregar from 'media/agregar.png'

const FormVentas = () => {
    return (
        <SectionMainForm nombre='ventas'>
            <div className="flex flex-row items-center justify-center space-x-20 p-2 ">
              <form>
                <table>
                <tr>
                    <td><p>Identificador de venta:</p></td>
                    <td><p><input type="text" placeholder = "Identificador de venta"/></p></td>
                </tr>
                <tr>
                    <td><p>Nombre del cliente: </p></td>
                    <td><p><input type="text" placeholder ="Nombre del cliente"/></p></td>
                </tr>
                <tr>
                    <td><p>Identificación del cliente: </p></td>
                    <td><p><input type="text" placeholder ="Identificación del cliente"/></p></td>
                </tr>
                <tr>
                    <td><p>Fecha de la venta: </p></td>
                    <td><p><input type="date" placeholder ="Fecha de la venta"/></p></td>
                </tr>
                <tr>
                    <td><p>Responsable: </p></td>
                    <td><p><input type="text" placeholder ="Responsable"/></p></td>
                </tr>                      
            </table>
        
          </form>
              <form>
                <table>
                <tr>
                    <td><p>Producto:</p></td>
                    <td><p><input type="text" placeholder = "Producto"/></p></td>
                </tr>
                <tr>
                    <td><p>Descripción: </p></td>
                    <td><p><input type="text" placeholder ="Descripcion"/></p></td>
                </tr>
                <tr>
                    <td><p>Valor unitario: </p></td>
                    <td><p><input type="text" placeholder ="Valor unitario"/></p></td>
                </tr>
                <tr>
                    <td><p>Cantidad: </p></td>
                    <td><p><input type="number" placeholder ="Cantidad"/></p></td>
                </tr>
                <tr>
                    <td><p>Estado</p></td>                
                    <td><p><select>
                        <option selected disabled>Estado</option>
                        <option value="Cancelado">Cancelado</option>
                        <option value="Entregado">Entregado</option>
                        <option value="En proceso">En proceso</option>
                    </select></p></td>              
                </tr>    
                <tr>
                    <td><p>Valor total: </p></td>
                    <td><p><input type="number" placeholder ="Valor total"/></p></td>
                </tr> 
                <tr>
                <button className>
                    <h3 className="font-bold">Agregar otro producto</h3>
                    <img className='h-5 m-2 transform hover:scale-110' src={agregar} alt="agregar" />
                </button>
                </tr> 
             
            </table>
          </form>
          </div>
          <div className=" flex items-center place-self-end">
          <table className="bg-gray-400 m-10 w-32 text-center">
            <h3 className="font-bold">Total venta</h3>
          <label htmlFor="Total venta"></label> Total Venta
          </table>
        </div>   
        </SectionMainForm>
    )
}

export default FormVentas
