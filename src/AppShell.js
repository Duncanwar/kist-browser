import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AppShell = ({children}) => {
    return (
        <div className="row content">
      <div className="col">
      <Navbar/>
      <div className="">
        {children}
      </div>
      <Footer />  
      </div>
    </div>
    );
}

export default AppShell;