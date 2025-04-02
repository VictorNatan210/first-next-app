"use client"
import style from "../styles/Navbar.module.css"
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
        <div className={style.navbar_container_wrapper}>
            <nav className={style.navbar}>
                <div className={style.navbar_container}>
                    <Link className={style.logo} href="/">VictorNatan</Link>

                    <div className={`${style.navbar_links} ${isOpen ? style.open : ""}`}>
                        <ul>
                            <li><Link href="#section_aboutme">Sobre Mim</Link></li>
                            <li><Link href="#">Redes Sociais</Link></li>
                            <li><Link href="#">Projetos</Link></li>
                        </ul>
                    </div>
            
                    
                    <button className={`${style.navbar_button} ${isOpen ? style.open : ""}`}
                    onClick={() => setOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label="Abrir menu de navegação">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button> 
                   
                </div>
            </nav>

            <div className={`${style.navbar_links_mobile} ${isOpen ? style.open : ""}`}>
                        <ul>
                            <li><Link 
                            href="#"
                            onClick={() => setOpen(false)}
                            >Sobre Mim</Link></li>

                            <li><Link 
                            href="#"
                            onClick={() => setOpen(false)}>Projetos</Link></li>
            
                            <li><Link 
                            href="#"
                            onClick={() => setOpen(false)}>Redes Sociais</Link></li>
                        </ul>
            </div>
        </div>
    );
}