// app/page.js (ou app/page.tsx)

import { Octokit } from "@octokit/rest";
import Image from "next/image";
import style from "./page.module.css";
import Navbar from "../components/Navbar";

// Função para buscar os dados do GitHub (Server-side)
async function getGithubUser(username: any) {
  const octokit = new Octokit();
  try {
    const { data } = await octokit.users.getByUsername({
      username: username,
    });
    return data.avatar_url; // Retorna a URL da foto
  } catch (err) {
    console.error("Erro ao buscar dados do GitHub:", err);
    return null; // Caso algo dê errado, retornamos null
  }
}

// Componente principal, sendo um Server Component
export default async function Home() {
  const avatarUrl = await getGithubUser("VictorNatan210"); // Chama a função no servidor

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className={style.main}>
        <section className={style.profile_container}>
          <h1>Sobre Mim</h1>
          
          <div className={style.profile}>
            {avatarUrl ? (
              <Image 
                src={avatarUrl} 
                alt="Foto do GitHub"
                width={240}
                height={240}
              />
            ) : (
              <div>Carregando imagem...</div>
            )}
            
            <div>
              <h2>Olá! Sou o Victor</h2>
              <p>
                Estudante de Engenharia de Software com foco em se tornar Desenvolvedor Fullstack.
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
