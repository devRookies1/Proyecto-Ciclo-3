import SectionMain from 'components/SectionMain'
import React from 'react'
import productos from 'media/productos1.png'

const Productos = () => {
    return (
        <SectionMain nombre='Vehiculos' logo={productos}>
            <TablaProductos/>
        </SectionMain>
    )
}


const TablaProductos = () => {
    return (
        <div className="flex flex-col items-center justify-center">
        <table className="tabla border-separate bg-gray-400 w-3/4"> 
            <thead>

                    <th className="border-separate border border-gray-500 p-3">#Identificacion</th>
                    <th className="border-separate border border-gray-500 p-3">Nombre</th>
                    <th className="border-separate border border-gray-500 p-3">Valor unitario</th>
                    <th className="border-separate border border-gray-500 p-3">Estado</th>
                
            </thead>
            <tbody className="bg-white">
                <tr>
                    <td>001</td>
                    <td>Mazda</td>
                    <td>$156.000.000</td>
                    <td>Disponible</td>
                </tr>
                <tr>
                <td>002</td>
                    <td>Renault</td>
                    <td>$140.000.000</td>
                    <td>Disponible</td>
                </tr>
                <tr>
                <td>003</td>
                    <td>Toyota</td>
                    <td>$139.000.000</td>
                    <td>No Disponible</td>
                </tr>
                <tr>
                <td>004</td>
                    <td>Citroen</td>
                    <td>$127.490.000</td>
                    <td>No Disponible</td>
                </tr>  
                <tr>
                <td>005</td>
                    <td>Citroen</td>
                    <td>$127.490.000</td>
                    <td>No Disponible</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
}


export default Productos
