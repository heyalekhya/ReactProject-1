import React from 'react';
import './sidebar.css'
import Logo from '../../imgs/logo.png'
import { SidebarData } from '../../Data/Data';
import {UilSignOutAlt} from "@iconscout/react-unicons";
import { useEffect, useState } from "react";
const Sidebar=()=>{
    const [selected, setSelected] = useState(0)


    return(
        <div className='Sidebar'>
            <div className='logo'>
          <img src={Logo}></img>
          <span>
            H<span>O</span>ME
          </span>
        </div>

        <div className="menu">
            {SidebarData.map((item,index)=>{
                return(
                    <div className={selected==index? 'menuItems active': 'menuItems'} key={index}
                    onClick={()=>setSelected(index)}
                    >
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}
            <div className="menuItems">
                <UilSignOutAlt></UilSignOutAlt>
            </div>
        </div>
        </div>
    )
}
export default Sidebar;