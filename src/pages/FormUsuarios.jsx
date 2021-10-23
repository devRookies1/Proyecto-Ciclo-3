import {React, useRef} from 'react'
import SectionMainForm from 'components/SectionMainForm'
//import Usuarios from './Usuarios'
import { toast, ToastContainer } from 'react-toastify'
//import axios from 'axios'
import { crearUsuario } from 'utils/api'

const FormUsuarios = () => {

    const form = useRef(null)
  
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevoUsuario = {};
    fd.forEach((value, key) => {
      nuevoUsuario[key] = value;
    })

    crearUsuario(
        nuevoUsuario,
        (response) => {
          console.log(response.data);
          toast.success('Usuario agregado con éxito');
        },
        (error) => {
          console.error(error);
          toast.error('Error creando un usuario');
        });
        form.current.reset()
}
    return (
        <SectionMainForm nombre='usuarios'>
            <div className=" p-10 flex flex-col h-full items-center justify-center">
            <h2 className=" p-2 text-2xl text-gray-800 font-extrabold items-center">Agregar usuario</h2>
             <form ref={form} onSubmit={submitForm} className="p-2 border-4 flex flex-col">
                 <label className="flex flex-col font-bold" htmlFor="nombre">
                     Nombre usuario
                     <input
                      name="nombre"
                      className="bg-gray-100 border-gray-500 p-2 rounded-lg m-2"
                      type="text"
                      placeholder="Nombre usuario"
                     />
                 </label>
                 <label className="flex flex-col font-bold" htmlFor="Rol">
                     Rol
                     <select bg-gray-100 border-gray-500 p-2 rounded-lg m-2 name="rol">
                         <option selected disabled>Seleccione Rol Usuario</option>
                         <option>Administrador</option>
                         <option>Vendedor</option>
                     </select>
                 </label>
                 <label className="flex flex-col font-bold" htmlFor="estado">
                     Estado
                     <select bg-gray-100 border-gray-500 p-2 rounded-lg m-2 name="estado">
                         <option selected disabled>Seleccione estado</option>
                         <option>Autorizado</option>
                         <option>No autorizado</option>
                         <option>Pendiente</option>
                     </select>
                 </label>
                 <button 
                 type='submit'
                  className='col-span-2 bg-green-400 p-2 m-2 rounded-full shadow-md hover:bg-green-600 text-white'>
                      Guardar Usuario

                 </button>
             </form>
             <ToastContainer position="bottom-center" autoClose={5000}/>

            </div>
        
        </SectionMainForm>
    )
}

export default FormUsuarios
