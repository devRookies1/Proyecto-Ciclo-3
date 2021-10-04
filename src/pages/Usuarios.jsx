import SectionMain from 'components/SectionMain'
import React from 'react'
import usuarios1 from 'media/usuarios1.png'
import editar from 'media/editar.png'
import eliminar from 'media/eliminar.png'

const Usuarios = () => {
    return (
        <SectionMain nombre='usuarios' logo={usuarios1} >
          <TablaUsuarios/>
        </SectionMain>
    )
}

const TablaUsuarios = () => {
    return (
        <div className="flex flex-col items-center justify-center">
        <table className=" tabla border-separate bg-gray-400 w-3/4"> 
            <thead>
                    <th className="border-separate border border-gray-500 p-3">No.</th>
                    <th className="border-separate border border-gray-500 p-3">Nombre usuario</th>
                    <th className="border-separate border border-gray-500 p-3">Rol</th>
                    <th className="border-separate border border-gray-500 p-3">Estado</th>
                    <th className="border-separate border border-gray-500 p-3"></th>
                
            </thead>
            <tbody className="bg-white">
                <tr>
                    <td>1</td>
                    <td>Admin</td>
                    <td>Administrador</td>
                    <td>Autorizado</td>
                    <td>
                    <button>
                    <img className='h-8 m-2 transform hover:scale-110' src={editar} alt="editar" />
                    </button>
                    <button>
                    <img className='h-8 m-2 transform hover:scale-110' src={eliminar} alt="eliminar" />
                    </button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Carol</td>
                    <td>Vendedor</td>
                    <td>Pendiente</td>
                    <td>
                    <button>
                    <img className='h-8 m-2 transform hover:scale-110' src={editar} alt="editar" />
                    </button>
                    <button>
                    <img className='h-8 m-2 transform hover:scale-110' src={eliminar} alt="eliminar" />
                    </button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Vanessa</td>
                    <td>Administrador</td>
                    <td>No autorizado</td>
                    <td>
                    <button>
                    <img className='h-8 m-2 transform hover:scale-110' src={editar} alt="editar" />
                    </button>
                    <button>
                    <img className='h-8 m-2 transform hover:scale-110' src={eliminar} alt="eliminar" />
                    </button>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    )
}


export default Usuarios
