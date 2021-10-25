import React, { useEffect } from 'react'
import inicio from 'media/inicio.png'
import { useUser } from 'context/userContext'
import { toast, ToastContainer } from 'react-toastify';


const Index = () => {
    const { userData } = useUser();
    useEffect(() => {
        if(userData.estado == ("pendiente")){
            toast.warning("Estas pendiente, habla con el administrador");}
        
    }, [userData])
 
    

    
    return (
        
        <div className='flex justify-center items-center w-full h-full'>
        <main >
            <span className='font-bold text-3xl text-center text-gray-900  '> BIENVENIDOS AL SISTEMA <br/> DE GESTION DE VENTAS.</span>

            <img className='flex w-72 h-72 m-6' src={inicio} alt="Bienvida" />

          {(<ToastContainer position="bottom-center" autoClose={0} />)}   

           
           
        </main>
        </div>
    )
}

export default Index
