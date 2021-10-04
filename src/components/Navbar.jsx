import React from 'react'
import Admin from 'media/admin.png'
//import { Link } from 'react-router-dom'
import menu from 'media/menu.ico'
import { useState, useEffect } from 'react'


const Navbar = () => {
  const [mostarSalir, setMostrarSalir] = useState(false)
  
  
    return (
        <nav class="bg-blue-700">
      <div class=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class=" flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <button id="sidebarBtn" class="px-4 py-2 text-gray-700 text-2xl rounded-lg hover:bg-gray-200">
              <img src={menu} alt='menu' className='mx-5 h-8 w-8 '/>
            </button>  
            <span className='ml-72  text-2xl font-mono text-white'>Sistema Control Ventas</span>
          </div>


          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="ml-3 relative">
              <div id="notificationsDiv" class="hidden origin-top-right absolute right-0 mt-2 w-64
              rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5
              focus:outline-none">
                <p class="p-2 text-sm text-gray-700">Not results...</p>
              </div>
            </div>
  
            

            <div class="ml-3 relative ">
              
                <button type="button" class="my-1 flex w-max text-sm  focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="profileBtn"
                onClick={()=>{
                  setMostrarSalir(!mostarSalir)}}
                >
                <img src={Admin} alt="admin" className='mx-5 h-8 w-8 rounded-full'/>
                  
                </button>
                {mostarSalir &&(
                  <div id="profileDiv" className=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                
                  <a href="/Login" class="block px-4 py-2 text-sm text-gray-700">
                    <i class="fas fa-user mr-2"></i>Salir
                  </a>
                  </div> 
                )}
                
              
      
              

              </div>
            </div>
          </div>
        </div>
      
    </nav>
                
    )
}


export default Navbar
