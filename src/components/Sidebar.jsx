import React from 'react'
import logoDR from 'media/logoDR.png' 
import { Link } from 'react-router-dom'
import home from 'media/home.png'
import ventas from 'media/ventas.png'
import productos from 'media/productos.png'
import usuarios from 'media/usuarios.png'
const Sidebar = () => {
    return (
        <div className='flex'>
        <aside className= 'bg-blue-700  relative-h-scream w-72 md:64 hidden sm:block shadow-xl  '>
         <div className='p-6'>

         <div className='w-full flex flex-col h-scream overflow-y-hidden'>
            <header className='w-full py-5 px-6 '>

             <nav className='text-gray-900 text-base font-semibold pt-3'>

                <Link to ='/'>
                <div className='block  text-gray-900 opacity-75 hover:opacity-100 py-4 pl-6 '>

                <img src={home} alt="home" className='flex h-10 w-10 mr-1' />
                <button className='font-bold'>INICIO</button>
                </div>
                </Link>
                <Link to ='/ventas'>
                <div className='block  text-gray-900 opacity-75 hover:opacity-100 py-4 pl-6 '>

                <img src={ventas} alt="ventas" className='flex h-10 w-10 mr-1' />
                <button className='font-bold'>VENTAS</button>
                </div>
                </Link>
                <Link to ='/'>
                <div className='block  text-gray-900 opacity-75 hover:opacity-100 py-4 pl-6 '>

                <img src={productos} alt="productos" className='flex h-10 w-10 mr-1' />
                <button className='font-bold'>PRODUCTOS</button>
                </div>
                </Link>
                <Link to ='/'>
                <div className='block  text-gray-900 opacity-75 hover:opacity-100 py-4 pl-6 '>

                <img src={usuarios} alt="usuarios" className='flex h-10 w-10 mr-1' />
                <button className='font-bold'>USUARIOS</button>
                </div>
                </Link>
             </nav>
             </header>
             </div>
         </div>
        </aside>
        </div>
        
        
        
        /*{
        <nav className= ' '>
            
            <ul className= ''>
            <li>
            <img src={logoDR} alt="Logo" className= 'flex w-max-32 h-max-32 ' />
            </li>

        
*/ )
}
            

            
        
    

export default Sidebar
