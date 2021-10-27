import React from 'react'
import logoDR from 'media/logoDR.png' 
import { Link } from 'react-router-dom'
import home from 'media/home.png'
import ventas from 'media/ventas.png'
import productos from 'media/productos.png'
import usuarios from 'media/usuarios.png'

const Sidebar = () => {
    return (
        
        <aside className= 'bg-blue-700  relative-h-screen w-72 md:64 hidden sm:block shadow-xl  '>
         <div className='p-6 '>

         <div className='w-full flex flex-col h-screen '>
            <header className='w-full py-5 px-6 '>
                <div className= 'flex justify-center mb-4'>
                
                <img src={logoDR} alt="Logo" className= 'flex w-20 h-20 ' />
                
                </div>

             <nav className='text-white text-base font-semibold pt-3'>

                <Link to ='/'>
                <div className='flex flex-row justify-start  text-w  text-white opacity-75 hover:opacity-100 py-4 pl-6 mb-4 '>
                <img src={home} alt="home" className='flex h-10 w-10 mr-1' />
                <button className='font-bold'>INICIO</button>
                </div>
                </Link>
                <Link to ='/ventas'>
                <div className='flex flex-row justify-start text-w  text-white opacity-75 hover:opacity-100 py-4 pl-6 mb-4'>

                <img src={ventas} alt="ventas" className='flex h-10 w-10 mr-1' />
                <button className='font-bold'>VENTAS</button>
                </div>
                </Link>
                <Link to ='/vehiculos'>
                <div className='flex flex-row justify-start text-w  text-white opacity-75 hover:opacity-100 py-4 pl-6 mb-4'>

                <img src={productos} alt="productos" className='flex h-10 w-10 mr-1' />
                <button className='font-bold'>VEHICULOS</button>
                </div>
                </Link>
                <Link to ='/usuarios'>
                <div className='flex flex-row justify-start text-w  text-white opacity-75 hover:opacity-100 py-4 pl-6 mb-2'>

                <img src={usuarios} alt="usuarios" className='flex h-10 w-10 mr-1' />
                <button className='font-bold'>USUARIOS</button>
                </div>
                </Link>
             </nav>
             </header>
             </div>
         </div>
        </aside>
        
        
        
        
         )
}
        



            
        
    

export default Sidebar
