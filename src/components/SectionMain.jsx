import React from 'react'

import Footer from './Footer'

const SectionMain = ({children}) => {
    return (        
    <main className='flex flex-col h-full w-full justify-start items-center'> 
    {children}
    <Footer/>
    </main>     
 
    )
}

export default SectionMain
