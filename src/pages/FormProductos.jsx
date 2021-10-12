import SectionMainForm from 'components/SectionMainForm'
import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { crearVehiculo } from 'utils/api'
import { Link } from 'react-router-dom'

const notify = () =>
    toast.success('Agregado con éxito', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

const FormProductos = () => {
  const form = useRef(null)
  
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevoVehiculo = {};
    fd.forEach((value, key) => {
      nuevoVehiculo[key] = value;
    })
    console.log(nuevoVehiculo)
    await crearVehiculo(
      {
      id: nuevoVehiculo.id, 
      nombre: nuevoVehiculo.nombre, 
      marca: nuevoVehiculo.marca, 
      precio: nuevoVehiculo.precio,
      estado: nuevoVehiculo.estado 
      },
      (response)=> {
        console.log(response.data);
        toast.success('Vehículo agregado con éxito');
      },
      (error)=>{
        console.error(error);
        toast.error('Error creando un vehículo')
      },)
    };

    

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
                  placeholder = "#Identificacion"
                  required
                  />
                  </td>
                  <td>
                  <input 
                  name='nombre'
                  type="text" 
                  placeholder ="Nombre"
                  required/>
                  </td>
                  <td>
                    <input 
                    name='marca'
                    type="text" 
                    placeholder ="Marca"
                    required/>
                  </td>
                  <td>
                    <input 
                    name='precio'
                    type="text" 
                    placeholder ="Valor unitario"
                    required/>
                  </td>
                  <td>
                    <select name="estado"
                    required
                    >
                            <option disabled selected>Selecciona una opción</option>
                            <option>Disponible</option>
                            <option>No Disponible</option>
                    </select>
                  </td>
                </tr>
                </tbody>              
            </table>
            
            <button
                  type='submit'
                  onClick={notify}
                  className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
                  >
                  Guardar vehiculo
                </button>
               
          </form>
          </div>       
        </SectionMainForm>
        
    )
}


export default FormProductos
