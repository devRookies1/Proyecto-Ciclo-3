import React from 'react'
import logoGoogle from 'media/logoGoogle.png'
import logoDR from 'media/logoDR.png'


const Login = () => {
    return (
    <div className = "flex bg-fondo-login  justify-center items-center w-full h-screen bg-cover bg-center ">
         
    <main className = "flex  justify-center items-center bg-black bg-opacity-50 h-3/4 w-80">
        <form className = "flex  " > 
            <div className = "flex flex-col " >
                <div className="flex justify-center items-center ">
                <img src={logoDR} alt="logo marca carro" className="h-min w-min -mt-10 mb-10" />

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
                 <button
                 className = "bg-gray-300 font-bold m-3 rounded-md p-px " 
                 type='submit'>
                     Ingresar
                </button>
                <div className= "bg-blue-400 flex justify-between p-1 m-1">
                  <img src={logoGoogle} alt="logo google" className="h-min w-min" />
                  <button>Registrarse con google</button>
                  
                </div>
                

                 
            </div>

        </form>
    </main>
     
        </div>
    )
}

export default Login

