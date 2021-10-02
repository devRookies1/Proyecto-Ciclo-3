import SectionMainForm from 'components/SectionMainForm'
import React from 'react'
import agregar from 'media/agregar.png'

const FormVentas = () => {
    return (
        <SectionMainForm nombre='ventas'>
            
        
         <form className=" justify-center p-2 h-12 ml-4 mr-4 bg-white  border-2 my-16 ">

             <div className=" ml-16 mr-32 ">
             <input type="text" placeholder = "Identificador de venta"/>
             <input type="text" placeholder ="Nombre del cliente"/>
             <input type="text" placeholder ="Identificación del cliente"/>
             <input type="text" placeholder ="Fecha de la venta"/>
            
             </div> 
         </form>
       
 
         <form className=" justify-center p-2 ml-4 mr-4 bg-white  ">
             <div className="ml-12  ">

             <input type="text" placeholder = "Producto"/>
             <input type="text" placeholder ="Descripción"/>
             <input type="text" placeholder ="Valor unitario"/>
             <select>
             <option disabled>Estado</option>
             <option>En proceso</option>
             <option>Cancelada</option>
             <option>Entregada</option>
             </select>
             <select>
             <option>Cantidad</option>
             </select>

             <input type="text" placeholder ="Valor unitario"/>
             </div> 
         </form>

         

         <div className=' flex flex-row items-center ml-5'>  
          <img className='h-6 m-2  transform hover:scale-110 ' src={agregar} alt="agregar" />
         </div>

         <form className="flex justify-center p-6">

        <div className="border-gray-500 p-1  border-collapse  ">
            <input type="text " placeholder = "TOTAL DE VENTA"/>
        </div> 

    </form>


      


        </SectionMainForm>
    )
}

export default FormVentas
