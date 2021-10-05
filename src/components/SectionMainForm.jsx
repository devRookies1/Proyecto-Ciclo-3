import React from 'react'
import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'
import { Link } from 'react-router-dom'
import guardar from 'media/guardar.png'
import form from 'media/form.png'


const SectionMainForm = ({children,nombre}) => {

    const notify = () =>
    toast.success('Agregado con éxito', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
    return (
    <main className='flex flex-col h-full w-full justify-between  '>
    <div className='bg-gray-300 h-full w-auto mx-4 my-8'>
        <nav className='flex bg-gray-400 h-14 w-auto justify-between border-b-2 border-blue-700'>
            <div className='flex items-center'>
                <img className='w-8 mt-2 mx-1' src={form} alt="logo" />
                <span className='font-bold text-xl uppercase'>{`FORMULARIO ${nombre}`}</span>
            </div>

            <div className=' flex flex-row items-center'>

                                    

                
                
               
                    <Link onClick={notify} to={`/${nombre}`}>
                    <img className='h-8 m-2  transform hover:scale-110 ' src={guardar} alt="guardar" />
                    </Link>   
                
                                    
 
            </div>
            
        </nav>
        
        
        {children}
        
    </div>
    <Footer/>
    </main>     
    
  )
}

export default SectionMainForm
