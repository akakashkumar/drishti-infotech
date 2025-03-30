"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
    const [navItem, setNavItem] = useState([
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Courses",
          path: "/courses",
        },
        {
          name:"gallery",
          path: '/gallery'
        },
        {
          name: "Services",
          path: "/services",
        },
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Contact",
          path: "/contact",
        },
      ]);
      const [menuToggle, setMenuToggle] = useState('hidden')
      const menuHandler= ()=>{
        setMenuToggle('block ')
      }
    return(
        <div>
            <div className="container mx-auto px-4 lg:px-5 py-5 flex justify-between items-center">
                <Link href="/"><h2 className="text-sm lg:text-2xl text-blue-800 ">Drishti Infotech</h2></Link>
                <ul className="flex gap-7 items-center">
                <RxHamburgerMenu className="text-2xl  lg:hidden" onClick={menuHandler}/>
                {navItem.map((e,i)=>{
                    return(
                        <li className={`hidden lg:block`} key={i}><Link href={e.path}>{e.name}</Link></li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}