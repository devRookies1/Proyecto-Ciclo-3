import React from 'react'
import Admin from 'media/admin.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='bg-blue-700 flex flex-row justify-between h-28 ml-72 '>
            
        <div class='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <h1 className="text-3xl font-mono"
            id="menu-btn" >Sistema Control Ventas</h1>
        </div>
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
        </nav>
        
        
        
    )
}


export default Navbar
