import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import agregar from 'media/agregar.png'
//import { ToastContainer } from 'react-toastify'


const SectionMain = ({children,logo,nombre}) => {
    return (        
    <main className='flex flex-col h-screen w-full justify-between  overflow-x-hidden  p-4'>
        <div className='flex flex-col bg-gray-300 h-screen w-full  mb-12  justify-between overflow-y-auto overflow-x-hidden'>
            <nav className='flex bg-gray-400 h-14 w-full justify-between border-b-2 border-blue-700'>
                <div className='flex items-center'>
                    <img className='w-10 mt-2' src={logo} alt="logo" />
                    <span className='font-bold text-xl uppercase'>{`${nombre}`}</span>
                </div>
                <div className=' flex flex-row items-center'>

                    {(nombre == "usuarios")? (<></>):(<><Link to={`/${nombre}/form`}>
                        <i></i>
                        <img className='h-8 m-2  transform hover:scale-110 ' src={agregar} alt="agregar" />
                    </Link></>)}

                    
                </div>
            </nav>
            
            {children}
            
            <Footer/>
         </div>
         
    </main>     
 
    )
}

export default SectionMain