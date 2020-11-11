import React from 'react';
import { Link } from 'react-router-dom';

const sidebar = () => {
    return (   
        <div class="wrapper col-sm-4 fixed">
        {/* <!-- Sidebar --> */}
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
            </div>
    
            <ul class="list-unstyled components">
                <p>Dummy Heading</p>
                <li class="active">
                    <Link to="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</Link>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <Link to="#">Home 1</Link>
                        </li>
                        <li>
                            <Link to="#">Home 2</Link>
                        </li>
                        <li>
                            <Link to="#">Home 3</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="#">About</Link>
                </li>
                <li>
                    <Link to="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</Link>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <Link to="#">Page 1</Link>
                        </li>
                        <li>
                            <Link to="#">Page 2</Link>
                        </li>
                        <li>
                            <Link to="#">Page 3</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="#">Portfolio</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
            </ul>
        </nav>
    
    </div>

    );
};

export default sidebar;