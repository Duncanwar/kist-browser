import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import classNames from "classnames";

const navItems = [
  {
    label: "Visitors",
    path : "Visitors"
  }
]
const NavItem = ({ navItem }) => {
  const location = useLocation();
  const isCurrentRoute =
    location.pathname === `/${navItem.path}`;
  const classes = classNames({
    'px-2 sm:px-6 justify-center sm:justify-start py-3 rounded-full flex': true,
    'text-gray-600 hover:text-blue-500 transform hover:translate-x-1 transition ease-in-out duration-100': !isCurrentRoute,
    'bg-gradient text-gray-100 shadow-lg': isCurrentRoute
  });
  return (
    <Link to={navItem.path} className={classes}>
      <div className="flex items-center">
        <div className="mr-0 sm:mr-4">
        </div>
        <span className="hidden sm:block">
          {navItem.label}
        </span>
      </div>
    </Link>
  );
};
const NavItemContainer = ({children}) => (
  <div>{children}</div>
);

const Sidebar = () => {
    return (
       <section>
         <div>
           {navItems.map((navItem, i) => (
             <NavItemContainer key={i}>
               <NavItem navItem={navItem} />
             </NavItemContainer>
           ))}
         </div>
       </section>
    );
};

export default Sidebar;