import SectionMainForm from 'components/SectionMainForm'
import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import Productos from './Productos'


const FormProductos = () => {
  const form = useRef(null)
  
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevoVehiculo = {};
    fd.forEach((value, key) => {
      nuevoVehiculo[key] = value;
      
    Productos.setVehiculos([...Productos.listaVehiculos,nuevoVehiculo])
    toast.success('Vehiculo agregado con exito')

    })
  }

    return (
      
        <SectionMainForm nombre='vehiculos'>
            <div className="flex flex-col items-center justify-center p-5 space-y-8" >
              <form ref={form} onSubmit={submitForm}>
                <table className=" border-separate bg-gray-400 "> 
                    <thead>
                        <tr>
                        <th className="border-separate border border-gray-500 ">#Identificacion</th>
                        <th className="border-separate border border-gray-500 ">Nombre </th>
                        <th className="border-separate border border-gray-500 ">Marca </th>
                        <th className="border-separate border border-gray-500 ">Valor unitario</th>
                        <th className="border-separate border border-gray-500 ">Estado</th>
                        </tr>
                    </thead>

                <tbody className="bg-white">
                <tr>
                  <td>
                    <input
                  name='id' 
                  type="number" 
                  placeholder = "#Identificacion"/>
                  </td>
                  <td>
                  <input 
                  name='nombre'
                  type="text" 
                  placeholder ="Nombre"/>
                  </td>
                  <td>
                    <input 
                    name='marca'
                    type="text" 
                    placeholder ="Marca"/>
                  </td>
                  <td>
                    <input 
                    nombre='precio'
                    type="text" 
                    placeholder ="Valor unitario"/>
                  </td>
                  <td>
                    <select name="estado">
                            <option disabled selected>Selecciona una opción</option>
                            <option>Disponible</option>
                            <option>No Disponible</option>
                    </select>
                  </td>
                </tr>
                </tbody>   
                <button type='submit'>
                  Guardar vehiculo
                  </button>                     
            </table>
          </form>
          </div>       
        </SectionMainForm>
        
    )
}


export default FormProductos
