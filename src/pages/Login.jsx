import React from 'react'
import logoGoogle from 'media/logoGoogle.png'
import logoDR from 'media/logoDR.png'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
    <div className = "flex bg-fondo-login  justify-center items-center w-full h-screen bg-cover bg-center ">
         
    <main className = "flex  justify-center items-center bg-black bg-opacity-50 h-3/4 w-80">
        <form className = "flex  " > 
            <div className = "flex flex-col justify-center items-center" >
                <div className="flex justify-center items-center ">
                <img src={logoDR} alt="logo marca carro" className="h-20 w-20 -mt-10 mb-10" />
                </div>
                <input className = "bg-black bg-opacity-0 m-3 w-full border-b-2 border-black placeholder-white text-white font-semibold  focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
                 type="email" 
                 placeholder='Usuario'
                 required
                 />  
                <input className = "bg-black bg-opacity-0 m-3 w-full border-b-2 border-black placeholder-white text-white font-semibold  focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
                 type="password" 
                 placeholder='Contraseña'
                 required
                 />
                 <Link to ="/">
                 <button
                 className = "bg-gray-300 font-bold m-3 rounded-md p-0.5 " 
                 type='submit'>
                     Ingresar
                </button>
                </Link>
                <div className= "bg-blue-400 flex justify-between p-1 m-1">
                  <img src={logoGoogle} alt="logo google" className="h-min  w-min" />
                  <button>Registrarse con google</button>
                  
                </div>
                

                 
            </div>

        </form>
    </main>
     
        </div>
    )
}

export default Login

