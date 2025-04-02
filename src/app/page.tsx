"use client";
import style from "./page.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className={style.main}>
        <section className={style.profile_container}>
          <h1>Sobre Mim</h1>
          
          <div className={style.profile}>

            <Image 
              src="/github-profile.jpg" 
              alt="Foto do GitHub."
              width={240}
              height={240}
            />
            
            <div>
              <h2>Olá! Sou o Victor</h2>
              <p>
                Estudante de Engenharia de Software com foco em se tornar Desenvolvedor Fullstack. 
                Atualmente estudando:
              </p>
              <div className={style.profile_skills}>
                <span>🚀 Foco Atual:</span>
                <p>Java, Next.js, TypeScript e Design Systems</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}