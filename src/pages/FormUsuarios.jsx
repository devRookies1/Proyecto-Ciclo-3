import {React, useRef} from 'react'
import SectionMainForm from 'components/SectionMainForm'
import Usuarios from './Usuarios'
import { toast } from 'react-toastify'


const FormUsuarios = () => {

    const form = useRef(null)
  
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevoUsuario = {};
    fd.forEach((value, key) => {
      nuevoUsuario[key] = value;
      
    Usuarios.setUsuarios([...Usuarios.listaUsuarios,nuevoUsuario])
    toast.success('Usuario agregado con exito')

    })
}
    return (
        <SectionMainForm nombre='usuarios'>
            <div className=" p-10 flex flex-col items-center justify-center">
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
             </form>

            </div>
        
        </SectionMainForm>
    )
}

export default FormUsuarios
