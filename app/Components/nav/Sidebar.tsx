import { link } from 'fs'
import React from 'react'
import { GiBrain } from 'react-icons/gi'
import { IoIosBulb } from 'react-icons/io'
import { TbHomeFilled } from 'react-icons/tb'
import NavLink from './NavLink'

const Nav_Link= [

    {
        label: 'Home',
        link: '/',
        icon: <TbHomeFilled />

    },
        {
        label: 'Explore',
        link: '/',
        icon: <GiBrain />


    },
        {
        label: 'My Learning',
        link: '/',
        icon: <IoIosBulb />


    }


]

const Sidebar = () => {
  return 
    <div className="">
        {Nav_Link.map((navLink) => <NavLink navLink={navLink}/> )}
        

    
    </div>;
};


export default Sidebar