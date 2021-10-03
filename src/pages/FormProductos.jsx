import SectionMainForm from 'components/SectionMainForm'
import React from 'react'

const FormProductos = () => {
    return (
        <SectionMainForm nombre='ventas'>
            <div className="flex flex-col items-center justify-center p-5 space-y-8" >
              <form>
                <table className=" border-separate bg-gray-400 "> 
                    <thead>
                        <tr>
                        <th className="border-separate border border-gray-500 ">#Identificacion</th>
                        <th className="border-separate border border-gray-500 ">Nombre </th>
                        <th className="border-separate border border-gray-500 ">Valor unitario</th>
                        <th className="border-separate border border-gray-500 ">Estado</th>
                        </tr>
                    </thead>

                <tbody className="bg-white">
                <tr>
                  <td><input type="text" placeholder = "#Identificacion"/></td>
                  <td><input type="text" placeholder ="Nombre"/></td>
                  <td><input type="text" placeholder ="Valor unitario"/></td>
                  <td><select name="Estado">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Disponible</option>
                            <option>No Disponible</option>
                       </select>
                  </td>
                </tr>
                </tbody>                        
            </table>
          </form>
          </div>       
        </SectionMainForm>
    )
}

export default FormProductos
