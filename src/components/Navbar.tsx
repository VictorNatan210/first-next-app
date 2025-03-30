"use client"

import style from "../styles/Navbar.module.css";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className={style.navbar_container}>

            <div className={style.navbar_logo}>
                <div className={style.navbar_logo_circle}></div>
                <Link href="/" className={style.navbar_logo_underline}>
                VictorNatan</Link>
            </div>

            <ul className={style.navbar_menu}>
                <li><Link href="#">Página Inicial</Link></li>
                <li><Link href="#">Projetos</Link></li>
            </ul>

            <button className={style.navbar_menu_button} onClick={() => setOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Menu para telas pequenas */}
            <ul className={`${style.navbar_menu_mobile} ${isOpen ? style.open : ""}`}>
                <li><Link href="#">Página Inicial</Link></li>
                <li><Link href="#">Projetos</Link></li>
            </ul>
        </nav>
    );
}


{/* <ul>
<li><Link href="#">Página Inicial</Link></li>
<li><Link href="#">Projetos</Link></li>
</ul> */}