import Link from 'next/link';
import React, { ReactElement } from 'react'

const NavLink = ({navLink}: {navLink : {link: string; label: string ; icon: ReactElement }}) => {
    const { label, icon } = navLink;
  return (
    <Link href={navLink.link} className=" gap-5 flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-colors">


        {icon} {label}
        

        </Link>
  )
}

export default NavLink