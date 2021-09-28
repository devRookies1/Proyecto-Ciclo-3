import React from 'react'


const Login = () => {
    return (
        <div className = "flex bg-fondo-login  justify-center items-center w-full h-screen bg-cover bg-center">
            
            <main className = "flex  justify-center place-items-center bg-black bg-opacity-50 h-96 w-96">
                <form className = "flex  justify-between" > 
                    <div className = "flex flex-col justify-between  " >
                        <input className = "bg-black bg-opacity-0 m-3 w-full px-3 py-2 border-b-2 border-black placeholder-white text-white font-semibold  focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
                         type="email" 
                         placeholder='Usuario'
                         required
                         />  
                        <input className = "bg-black bg-opacity-0 m-3 w-full px-3 py-2 border-b-2 border-black placeholder-white text-white font-semibold  focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
                         type="password" 
                         placeholder='Contraseña'
                         required
                         />
                         <button
                         className = "bg-gray-400 font-bold m-3 rounded-md p-px " 
                         type='submit'>
                             Ingresar
                        </button>
                        <div className= "bg-blue-400">
                          <button>Registrarse con google</button>
                          <img src="../media/logo-google.png" alt="logo-google" />
                        </div>
                        

                         
                    </div>

                </form>
            </main>
            
        </div>
    )
}

export default Login

