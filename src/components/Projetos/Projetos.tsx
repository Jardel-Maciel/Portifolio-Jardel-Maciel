import med from "../Projetos/pro-med.jpg";
import login from "../Projetos/pro-login.jpg";
import cordel from "../Projetos/pro.coredel.jpg";
export default function Projetos() {
  return (
    <>
      <section className="grid grid-col justify-center gap-5 pt-20">
        <div>
          <h2 className="text-white grid font-destaques font-light pt-9 text-3xl justify-center items-center">
            Projetos
          </h2>
        </div>

        {/*Inicio dos Projetos - projeto med*/}

        <section className="md:flex md:flex-wrap md:w-300 md:gap-7 md:pt-10 md:justify-center ">
          <div className="bg-zinc-900 w-85  text-white grid grid-cols-1 justify-center rounded-b-2xl mb-5">
            <img src={med} alt="projeto maciel med" />
            <h2 className="pl-2 pt-5 pb-5 font-destaques font-bold">
              Projeto Maiel Med
            </h2>
            <p className=" pl-2 font-textoCorrido font-light pb-20">
              Projeto pessoal criado apartir de um projeto proposto na faculdade
              que original mente era escrito em Python, então decidi recriar o
              desafio usando as tecnicas de desenvolvimento web.
            </p>

            <div className="flex gap-10 justify-center pt-10">
              <button className="bg-destaques-botoes  md:hover:bg-red-800 md:cursor-pointer transition-all p-4 w-30  mb-10 rounded-2xl  ">
                <a href="https://jardel-maciel.github.io/plano-de-saude2/" target="_blank">Demo</a>
              </button>

              <button className="bg-botoes transition-all md:hover:bg-blue-800 md:cursor-pointer p-4 w-30  mb-10 rounded-2xl ">
                <a href="https://github.com/Jardel-Maciel/plano-de-saude2" target="_blank">GitHub</a>
              </button>
            </div>
          </div>

          {/*Inicio dos Projetos - projeto login*/}
          <div className="bg-zinc-900 w-85  text-white grid grid-cols-1 justify-center rounded-b-2xl mb-5">
            <img src={login} alt="projeto login" />

            <h2 className="pl-2 pt-5 pb-5 font-destaques font-bold">
              Projeto Login
            </h2>

            <p className=" pl-2 font-textoCorrido font-light pb-20">
              Este projeto foi criado durante o curso de HTML e CSS, do site Curso Em Vídeo
              com o Gustavo Guanabara, tendo como finalidade a pratica da criação de formularios e a responsividade
              do site.
        
            </p>

            <div className="flex gap-10 justify-center pt-10">
              <button className="bg-destaques-botoes md:hover:bg-red-800 md:cursor-pointer transition-all p-4 w-30  mb-10 rounded-2xl ">
                <a href="https://jardel-maciel.github.io/projeto_login/" target="_blank">Demo</a>
              </button>

              <button className="bg-botoes transition-all md:hover:bg-blue-800 md:cursor-pointer p-4 w-30  mb-10 rounded-2xl ">
                <a href="https://github.com/Jardel-Maciel/projeto_login" target="_blank">GitHub</a>
              </button>
            </div>
          </div>

          {/*Inicio dos Projetos cordel*/}
          <div className="bg-zinc-900 w-85  text-white grid         grid-cols-1 justify-center rounded-b-2xl mb-5">
            <img src={cordel} alt="projeto cordel" />

            <h2 className="pl-2 pt-5 pb-5 font-destaques font-bold">
              Projeto Cordel
            </h2>

            <p className=" pl-2 font-textoCorrido font-light pb-20">
              Este projeto foi criado durante o curso de HTML e CSS, do site Curso Em Vídeo com o Gustavo Guanabara, onde usamos 
              efeitos tipo paralax, e treinamos também a responsividade do site.
            </p>

            <div className="flex gap-10 justify-center pt-10">
              <button className="bg-destaques-botoes md:hover:bg-red-800 md:cursor-pointer transition-all p-4 w-30  mb-10 rounded-2xl ">
                <a href="https://jardel-maciel.github.io/projeto_cordel/" target="_blank">Demo</a>
              </button>

              <button className="bg-botoes  md:hover:bg-blue-800 md:cursor-pointer transition-all p-4 w-30  mb-10 rounded-2xl ">
                <a href="https://github.com/Jardel-Maciel/projeto_cordel" target="_blank">GitHub</a>
              </button>
            </div>       
          </div>

         
          
        </section>
      </section>
    </>
  )
}
