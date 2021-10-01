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
