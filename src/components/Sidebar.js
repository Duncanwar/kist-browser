import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
        <p className="text-black">
          <h3> My Dashboard</h3>
          <Link className="text-black p-3" to="/dashboard">
            dashboard
          </Link>
        </p>
        <p>
          <h3 className="text-black">Requests</h3>
          <Link className="text-black p-3" to="#h">
            Make Request
          </Link>
        </p>
      </>
    );
};

export default Sidebar;