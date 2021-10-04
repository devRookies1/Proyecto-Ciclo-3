import React from 'react'
import SectionMain from 'components/SectionMain'
import grid from 'media/grid.png'


const Ventas = () => {
    return (

        <SectionMain logo= {grid} nombre={'ventas'} >
         <TablaVentas/>
         </SectionMain>
        

    )
}


const TablaVentas = () => {
    return (
        <div>  
        <div className="flex flex-col h-full w-full items-center ">

            
        <table className=" tabla border-separate bg-gray-400 ">  
            <thead>
        
             <th class="border border-gray-500 p-3"># Identificación</th> 
             <th class="border border-gray-500 p-3">Descripción</th>
             <th class="border border-gray-500 p-3">Fecha Venta</th>
             <th class="border border-gray-500 p-3">Responsable</th>
             <th class="border border-gray-500 p-3">Estado</th>
             <th class="border border-gray-500 p-3">Valor Total</th>
         </thead>

          <tbody class="bg-white">
         <tr >
             <th class=" p-3" >001</th> 
             <th class=" p-3">Toyota</th>
             <th class=" p-3">1/10/2021</th>
             <th class=" p-3">Tatiana</th>
             <th class=" p-3">Proceso</th>
             <th class=" p-3">$139.000.000</th>
         </tr>

         <tr >
             <th class=" p-3">002</th> 
             <th class=" p-3">Mazda</th>
             <th class=" p-3">1/10/2021</th>
             <th class=" p-3">Jonatan</th>
             <th class=" p-3">Cancelado</th>
             <th class=" p-3">$156.000.000</th>
         </tr>
          

         <tr >
             <th class=" p-3">003</th> 
             <th class=" p-3">Renault</th>
             <th class=" p-3">1/10/2021</th>
             <th class=" p-3">Vanessa</th>
             <th class=" p-3">Entregado</th>
             <th class=" p-3">$140.000.000</th>
         </tr>
         </tbody>
        </table>
        
       

    </div>

    
    </div>

    
    )
}


export default Ventas
