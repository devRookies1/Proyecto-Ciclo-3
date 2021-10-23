//import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import React from 'react';



const Layout = ({children}) => {
    return (
    <div className='flex flex-col w-full h-screen overflow-y-hidden  '>
      <Navbar/>
        <main className='flex bg-gray-100 w-full h-full overflow-y-hidden '>
          <Sidebar/>
             {children}
             
        </main>
        
        
        
      </div>

        
        
       
      
    
    
    );
};

export default Layout