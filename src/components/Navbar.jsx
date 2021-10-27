import React, { useEffect } from 'react'
// import Admin from 'media/admin.png'
import { Link } from 'react-router-dom'
import menu from 'media/menu.ico'
import { useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  
  const [mostarSalir, setMostrarSalir] = useState(false)
  const { user, logout } = useAuth0()

  const cerrarSesion = () => {
    logout({ returnTo: 'https://boiling-crag-86589.herokuapp.com/'});
    localStorage.setItem('token', null);
  };
  
    return (
        <nav className="bg-blue-700">
      <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className=" flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <button id="sidebarBtn" className="px-4 py-2 text-gray-700 text-2xl rounded-lg hover:bg-gray-200">
              <img src={menu} alt='menu' className='mx-5 h-8 w-8 '/>
            </button> 
              {mostarSidebar &&(  <BtnSidebar/>)} 
              <span className='ml-72  text-2xl font-mono text-white'>Sistema Control Ventas</span>
          </div>


          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div id="notificationsDiv" className="hidden origin-top-right absolute right-0 mt-2 w-64
              rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5
              focus:outline-none">
                <p className="p-2 text-sm text-gray-700">Not results...</p>
              </div>
            </div>
  
            

            <div className="ml-3 relative ">
              
                <button type="button" className="my-1 flex w-max text-sm  focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="profileBtn"
                onClick={()=>{
                  setMostrarSalir(!mostarSalir)}}
                >
                <img src={user.picture} alt="admin" className='mx-5 h-8 w-8 rounded-full'/>
                  {user.name}
                </button>
                {mostarSalir &&(
                  <div id="profileDiv" className=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <button class="fas fa-user mr-2" onClick={() => cerrarSesion()}>Salir</button>
                  </div> 
                )}
                
              
      
              

              </div>
            </div>
          </div>
        </div>
      
    </nav>
                
    )
}



const BtnSidebar = () => {
  
  return (
              <div className='origin-top-left absolute left-0 mt-60 w-48 rounded-md px-2 py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>    
                      <ul className='bg-blue-700 flex flex-col w-44 '>
                      <ResponsiveRoute nombre='Inicio' ruta='/inicio' />
                      <ResponsiveRoute nombre='Vehículos' ruta='/vehiculos' />
                      <ResponsiveRoute nombre='Ventas' ruta='/ventas' />
                      <ResponsiveRoute nombre='Usuarios' ruta='/usuarios' />
                    </ul>    
              </div>                       
  )
}



const ResponsiveRoute  = ({nombre,ruta}) => {
  return (
    <div>
       <Link to={ruta}>
      <li className='text-gray-200 border border-gray-300 p-1'>{nombre}</li>
    </Link>
    </div>
  )
}





export default Navbar
