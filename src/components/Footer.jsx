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
        <footer className='bg-gray-400 h-24 '>
        

        <ul className=' relative flex  justify-center py-7'>

        <li>
                
                <div>
                <img src={misionTic} alt="mision" className='flex h-15 w-20 mx-5' hrf="https://github.com/devRookies1/Proyecto-Ciclo-3" />
                </div>
                
            </li>

            <li>
                <div>
                 <img src={github} alt="gith" className='flex h-10 w-15  mx-2' hrf= "https://www.misiontic2022.gov.co/portal/"/>
                </div>
                
            </li>     

        </ul>

        </footer>
        
      
        

        
    )


}

export default Footer
