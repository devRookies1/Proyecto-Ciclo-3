import React from 'react'
import inicio from 'media/inicio.png'

const Index = () => {
    return (
        <div className='flex justify-center items-center w-full h-full'>
        <main >
            <span className='font-bold text-3xl text-center text-gray-900  '> BIENVENIDOS AL SISTEMA <br/> DE GESTION DE VENTAS.</span>
            <img className='flex w-72 h-72 m-6' src={inicio} alt="Bienvidad" />
           
           
           
        </main>
        </div>
    )
}

export default Index
