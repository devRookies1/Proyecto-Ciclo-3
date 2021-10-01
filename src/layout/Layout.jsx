import Sidebar from 'components/Sidebar';
import SectionMain from 'components/SectionMain';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import React from 'react';


const Layout = ({children}) => {
    return (
    <div className='flex flex-col w-screen h-screen  '>
      
      
      <Navbar/>
      
        <main className='flex bg-gray-100 w-screen h-screen overflow-y-scroll'>
          <Sidebar/>
          <SectionMain>
             {children}
            </SectionMain>  
        </main>
        <Footer/>
        
      </div>

        
        
       
      
    
    );
};

export default Layout