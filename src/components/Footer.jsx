import React from 'react'
import misionTic from 'media/misionTic.png'
import github from 'media/github.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='flex flex-col w-full bg-gray-400 h-16 '>
        

        <ul className=' relative flex  justify-center py-2'>

        <li>
                <a href="https://www.misiontic2022.gov.co/portal/">
                <div className='flex justify-center items-center'>
                <img src={misionTic} alt="mision" className='flex h-15 w-20 mx-5' />
                </div>
                </a>
                
            </li>

            <li>
                <a href="https://github.com/devRookies1/Proyecto-Ciclo-3">  
                <div className='flex justify-center items-center'>
                 <img src={github} alt="gith" className='flex h-10 w-15  mx-2'  />
                </div>
                </a>
                
            </li>     

        </ul>

        </footer>
        
      
        

        
    )


}

export default Footer
