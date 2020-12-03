import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AppShell = ({children}) => {
    return (
        <div className="row">
      <div className="col s3">
      <Sidebar/>
      </div>
      <div className="col s9">
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