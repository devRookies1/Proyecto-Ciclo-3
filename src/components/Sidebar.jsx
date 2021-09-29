import React from 'react'
import logoDR from 'media/logoDR.png' 
import { Link } from 'react-router-dom'
import home from 'media/home.png'
import ventas from 'media/ventas.png'
import productos from 'media/productos.png'
import usuarios from 'media/usuarios.png'
const Sidebar = () => {
    return (
        <nav className= 'h-full w-72 bg-blue-700  flex flex-col -mt-40 -mb-48 '>
            
            <ul className= 'h-full flex flex-col justify-around items-center font-mono'>
            <li>
            <img src={logoDR} alt="Logo" className= 'flex w-max-32 h-max-32 ' />
            </li>

            <li>
                <Link to ='/'>
                <div className='flex justify-between'>
                <img src={home} alt="home" className='flex h-10 w-10 mr-1' />
                <button className='font-bold'>INICIO</button>
                </div>
                </Link>
            </li>
                
            <li>
                <Link to ='/ventas'>
                <div className='flex justify-between'>
                <img src={ventas} alt="ventas" className='flex h-10 w-10 mr-1' />
                <button className='font-bold'>VENTAS</button>
                </div>
                </Link>
            </li>
            <li>
                <Link to ='/productos'>
                <div className='flex justify-between'>
                <img src={productos} alt="productos" className='flex h-10 w-10 mr-1' />
                <button className='font-bold'>PRODUCTOS</button>
                </div>
                </Link>
            </li>
            <li className=''>
            <Link to ='/usuarios'>
                <div className='flex justify-between'>
                <img src={usuarios} alt="usuarios" className='flex h-10 w-10 mr-1' />
                <button className='font-bold'>USUARIOS</button>
                </div>
                </Link>
            </li>
            
            </ul>

            

            
        </nav>
    )
}

export default Sidebar
