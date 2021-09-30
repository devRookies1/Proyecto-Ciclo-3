import React from 'react'
import Admin from 'media/admin.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='bg-blue-700    '>
            
        <div className='max-w-7xl mx-auto px-2  sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
                <div className='flex-1 flex items-center justify-center 
                sm:items-stretch sm:justify-start '>

                </div>

            </div>
            <h1 className="text-3xl font-mono"
            id="menu-btn" >Sistema Control Ventas</h1>
        </div>
        </nav>
        )
    }
        /*{ 
        <div className=' mx-14 my-4 flex justify-between'>
            <label className='bg-gray-200 rounded-3xl mt-1 p-2
            text-sm w-72 h-16 py-4 flex justify-between font-bold font-sans'>         
                <img src={Admin} alt="admin" className='flex h-10 w-10 mr-1' />
                Adminnistrador
                
                <select  className='bg-gray-200 font-mono'>
                    <option> </option>
                    <option> salir</option>   
                    
                </select>
                
                
               
            </label>
        </div> 
        */
        
        
        
        
    



export default Navbar
