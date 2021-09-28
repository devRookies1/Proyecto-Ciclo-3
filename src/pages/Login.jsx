import React from 'react'


const Login = () => {
    return (
        <div className = "bg-fondo-login w-full h-screen bg-cover bg-center">
                <main className= " bg-black bg-opacity-50 w-64 center " >
                    <h2 className="items-center ">
                        Iniciar Sesion
                    </h2>
                    <form className= " apperence-none " >

                        <div className=" flex flex-col justify-content items-center ">
                            <input className="bg-black bg-opacity-25"  type="email" placeholder="Usuario" />
                            <input  type="password" />
                        </div>

                    </form>
                </main>
        </div>
    )
}

export default Login

