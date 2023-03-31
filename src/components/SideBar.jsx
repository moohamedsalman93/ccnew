import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';
import SidebarItems from '../Data/SidebarItem';
import '../css/SideBar.css';


function SideBar() {
  return (
    <div className="drawer"> 
        <div className='sidebar'>
            {
                SidebarItems.map((item,index)=>(
                    <NavLink to={item.path} key={index} className='icontile'>
                            <img src={item.icon} alt="no img" className='icon-sidebar'/>
                            <div className='label-sidebar'>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <Outlet />
    </div>
  )
}

export default SideBar