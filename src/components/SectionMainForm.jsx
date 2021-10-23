import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'
import form from 'media/form.png'


const SectionMainForm = ({children,nombre}) => {


    
    return (
    <main className='flex flex-col h-full w-full justify-between p-4 '>
    <div className='bg-gray-300 h-full w-full overflow-y-scroll'>
        <nav className='flex bg-gray-400 h-14 w-full justify-between border-b-2 border-blue-700'>
            <div className='flex items-center'>
                <img className='w-8 mt-2 mx-1' src={form} alt="logo" />
                <span className='font-bold text-xl uppercase'>{`FORMULARIO ${nombre}`}</span>
            </div>
            
        </nav>
        
        
        {children}
        <Footer/>
    </div>
    
    
    </main>     
    
  )
}

export default SectionMainForm
