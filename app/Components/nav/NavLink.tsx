"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement } from 'react'

const NavLink = ({navLink}: {navLink : {link: string; label: string ; icon: React.ReactElement }}) => {
    const { label, icon } = navLink;
    const PathName= usePathname();
    const isActive = PathName === navLink.link;
  return (
    <Link href={navLink.link} className={` gap-5 flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-colors text-2xl ${isActive ? 'text-rose-400' : 'text-yellow-900'}`}>


        {React.cloneElement(icon, { className: 'w-6 h-6' })} {label}

        </Link>
  )
}

export default NavLink