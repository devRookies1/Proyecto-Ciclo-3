import Sidebar from 'components/Sidebar';
import SectionMain from 'components/SectionMain';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import React from 'react';


const Layout = ({children}) => {
    return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <Sidebar />
      <SectionMain/>
      <Footer />
    </div>
    );
};

export default Layout
