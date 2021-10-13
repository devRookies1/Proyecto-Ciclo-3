import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import agregar from 'media/agregar.png'
import { ToastContainer } from 'react-toastify'


const SectionMain = ({children,logo,nombre}) => {
    return (        
    <main className='flex flex-col h-screen w-full justify-between overflow-y-scroll overflow-x-auto'>
        <div className='flex flex-col bg-gray-300 h-auto w-auto mx-4 mt-8 mb-16  justify-between '>
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
                </div>
            </nav>
            
            {children}
            <Footer/>
         </div>
         
    </main>     
 
    )
}

export default SectionMain