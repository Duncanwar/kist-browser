import React from 'react';
import Sidebar  from './components/nav/sidebar'

const Admin = () => {
    return (
        <div className='row' style={{backgroundColor:"yellow"}}>
            <div className='col-sm-4'>
             
            <Sidebar>
            <div className="col-sm-1" style={{backgroundColor:'blue'}}>Duncan</div> 
                </Sidebar>
            
            </div>
            
           
        </div>
    );
};

export default Admin;