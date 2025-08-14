import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { IoIosBulb } from 'react-icons/io';
import { TbHomeFilled } from 'react-icons/tb';
import NavLink from './NavLink';
import Logo from '../defaults/Logo';

const Nav_Link = [
  {
    label: 'Home',
    link: '/',
    icon: <TbHomeFilled />,
  },
  {
    label: 'Explore',
    link: '/Explore',
    icon: <GiBrain />,
  },
  {
    label: 'My Learning',
    link: '/learning',
    icon: <IoIosBulb />,
  },
];

const Sidebar = () => {
  return (
    <div className="col-span-2">
      <div className="mb-2 flex flex-col h-screen sticky top-0 p-4 bg-black/30 text-neutral-500 shadow-lg backdrop-blur-md">
        <Logo />

      <nav>
        {Nav_Link.map((navLink, idx) => (
          <NavLink key={idx} navLink={navLink} />
        ))}      

        </nav>  
        </div>
    </div>
  );
};

export default Sidebar;