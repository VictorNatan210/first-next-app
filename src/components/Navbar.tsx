"use client"

import style from "../styles/Navbar.module.css";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const resize = () => {
            if (window.innerWidth > 768) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

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

            <button className={`${style.navbar_menu_button} ${isOpen ? style.open : ""}`} onClick={() => setOpen(!isOpen)}>
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