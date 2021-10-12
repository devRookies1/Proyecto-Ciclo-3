import SectionMainForm from 'components/SectionMainForm'
import React, {useState} from 'react'
import agregar from 'media/agregar.png'

const FormVentas = () => {
  const [agregr,setagregr]=useState(false)
  const nuevo =(e)=>{
    e.preventDefault();
    setagregr(true)

      }
      return (
        <SectionMainForm nombre='ventas'>
            <div className="flex flex-col  w-full items-center justify-start  " >
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
                  <td><input type="text" placeholder = "Identificador de venta"/></td>
                  <td><input type="text" placeholder ="Nombre del cliente"/></td>
                  <td><input type="text" placeholder ="Identificación del cliente"/></td>
                  <td><input type="date" placeholder ="Fecha de la venta"/></td>
                  <td><input type="text" placeholder ="Responsable"/></td>
                </tr>
                </tbody>                        
            </table>
          </form>
              <form>
                <table className="border-separate bg-gray-400"> 
                    <thead>
                        <tr>
                        <th className="border-separate border border-gray-500 ">Producto</th>
                        <th className="border-separate border border-gray-500 ">Descripción </th>
                        <th className="border-separate border border-gray-500 ">Valor unitario</th>
                        <th className="border-separate border border-gray-500 ">Cantidad</th>
                        <th className="border-separate border border-gray-500 ">Estado</th>
                        <th className="border-separate border border-gray-500 ">Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                    <tr id="fieldlist">
                        <td><input type="text" placeholder = "Producto"/></td>
                        <td><input type="text" placeholder ="Descripcion"/></td>
                        <td><input type="text" placeholder ="Valor unitario"/></td>
                        <td><input type="number" placeholder ="Cantidad"/></td>                
                        <td><p><select>
                        <option selected disabled>Estado</option>
                        <option value="Cancelado">Cancelado</option>
                        <option value="Entregado">Entregado</option>
                        <option value="En proceso">En proceso</option>
                    </select></p></td>
                        <td><input type="text" placeholder ="Total"/></td>
                      </tr>
                      {agregr&& <NuevaFila/>}

                    </tbody>   
            </table>
                <button onClick={nuevo}>
                  
                    <img className='h-5 m-2 transform hover:scale-110' src={agregar} alt="agregar" />
                </button>
          </form>
          </div>
          <div className=" flex place-self-end">
          <table className="bg-gray-400 m-10 w-32 text-center">
            <h3 className="font-bold">Total venta</h3>
          <label htmlFor="Total venta">Total Venta</label> 
          </table>
        </div>   
        </SectionMainForm>
    )
}
const NuevaFila=()=>{
  return(
  <tr>
                        <td><input type="text" placeholder = "Producto"/></td>
                        <td><input type="text" placeholder ="Descripcion"/></td>
                        <td><input type="text" placeholder ="Valor unitario"/></td>
                        <td><input type="number" placeholder ="Cantidad"/></td>                
                        <td><p><select>
                        <option selected disabled>Estado</option>
                        <option value="Cancelado">Cancelado</option>
                        <option value="Entregado">Entregado</option>
                        <option value="En proceso">En proceso</option>
                    </select></p></td>
                        <td><input type="text" placeholder ="Total"/></td>
                      </tr> 
  )}

export default FormVentas
