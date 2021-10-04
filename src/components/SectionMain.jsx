import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import eliminar from 'media/eliminar.png'
import ajustes from 'media/ajustes.png'
import agregar from 'media/agregar.png'
import buscar from 'media/buscar.png'



const SectionMain = ({children,logo,nombre}) => {
    return (        
    <main className='flex flex-col h-full w-full justify-between '>
        <div className='bg-gray-300 h-full w-auto mx-4 my-8'>
            <nav className='flex bg-gray-400 h-14 w-auto justify-between border-b-2 border-blue-700'>
                <div className='flex items-center'>
                    <img className='w-10 mt-2' src={logo} alt="logo" />
                    <span className='font-bold text-xl uppercase'>{`${nombre}`}</span>
                </div>
                <div className=' flex flex-row items-center'>

                    <Link to={`/${nombre}/form`}>
                        <i></i>
                        <img className='h-8 m-2  transform hover:scale-110 ' src={agregar} alt="agregar" />
                    </Link>
                    <button>
                        <img className='h-8 m-2 transform hover:scale-110' src={ajustes} alt="ajustes" />
                    </button>
                    
                    <button>
                        <img className='h-8 m-2 transform hover:scale-110' src={eliminar} alt="eliminar" />
                    </button>

                </div>
            </nav>
            
            <div className='flex flex-row-reverse my-4 mr-4 ' >

                <img className=' opacity-75 transform hover:scale-105 hover:opacity-100   ' src={buscar} alt="buscar" />
                <input className='outline-none border border-gray-900 mx-1 focus:ring-1 focus:border-blue-700 ' type="text"  />
                
        
            </div>
            {children}
         </div>
        <Footer/>
    </main>     
 
    )
}

export default SectionMain