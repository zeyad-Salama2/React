import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { IoIosBulb } from 'react-icons/io';
import { TbHomeFilled } from 'react-icons/tb';
import NavLink from './NavLink';

const Nav_Link = [
  {
    label: 'Home',
    link: '/',
    icon: <TbHomeFilled />,
  },
  {
    label: 'Explore',
    link: '/',
    icon: <GiBrain />,
  },
  {
    label: 'My Learning',
    link: '/',
    icon: <IoIosBulb />,
  },
];

const Sidebar = () => {
  return (
    <div className=" gap-5 flex flex-col items-start text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-colors">
      {Nav_Link.map((navLink, idx) => (
        <NavLink key={idx} navLink={navLink} />
      ))}
    </div>
  );
};

export default Sidebar;