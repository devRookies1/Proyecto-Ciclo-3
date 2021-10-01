import React from 'react'

const Ventas = () => {
    return (
       
        <div>   
         < TablaVentas/>
        </div>
   
    
    )
}


const TablaVentas = () => {
    return (
        <div className="flex flex-col h-full w-full items-center ">
        <table>
         <tr>
             <th># Identificación</th> 
             <th>Descripción</th>
             <th>Fecha Venta</th>
             <th>Responsable</th>
             <th>Estado</th>
             <th>Valor Total</th>
         </tr>
        </table>
    
    </div>
    )
}




export default Ventas
