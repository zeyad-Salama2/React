import Link from 'next/link';
import React, { ReactElement } from 'react'

const NavLink = ({navLink}: {navLink : {link: string; label: string ; icon: ReactElement }}) => {
    const { label, icon } = navLink;
  return (
    <Link href={navLink.link} className="">
        {icon}
        {label}

        </Link>
  )
}

export default NavLink