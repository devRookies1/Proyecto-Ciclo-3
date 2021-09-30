import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import React from 'react';


const Layout = ({children}) => {
    return (
      <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <Sidebar />
        <div>
        <main className='flex h-full bg- '> {children} </main>
        </div>
      <Footer />
      </div>
    
    
    );
};

export default Layout