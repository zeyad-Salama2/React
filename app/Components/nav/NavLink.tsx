"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement } from 'react'

const NavLink = ({navLink}: {navLink : {link: string; label: string ; icon: React.ReactElement }}) => {
    const { label, icon } = navLink;
    const PathName= usePathname();
    const isActive = PathName===navLink.link;
  return (
    <Link href={navLink.link} className={` gap-5 flex items-center ${isActive ? "text-yellow-900" : "text-black-300"} py-3 p-2 rounded-md  text-xl hover:bg-red-200 space-x-3 duration-150 transition-colors focus:ring-red-400 `}>


        {React.cloneElement(icon, { className: 'w-4 h-4' })} {label}

        </Link>
  )
}

export default NavLink