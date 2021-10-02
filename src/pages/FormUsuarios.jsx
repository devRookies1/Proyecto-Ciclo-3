import React from 'react'
import SectionMainForm from 'components/SectionMainForm'


const FormUsuarios = () => {
    return (
        <SectionMainForm nombre='usuarios'>
            <div className=" p-10 flex flex-col items-center justify-center">
            <h2 className=" p-2 text-2xl text-gray-800 font-extrabold items-center">Agregar usuario</h2>
             <form className="p-2 border-4 flex flex-col">
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
                     <input
                      name="Rol"
                      className="bg-gray-100 border-gray-500 p-2 rounded-lg m-2"
                      type="text"
                      placeholder="Rol usuario"
                     />
                 </label>
                 <label className="flex flex-col font-bold" htmlFor="estado">
                     Estado
                     <select bg-gray-100 border-gray-500 p-2 rounded-lg m-2 name="estado">
                         <option disabled>Seleccione estado</option>
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
