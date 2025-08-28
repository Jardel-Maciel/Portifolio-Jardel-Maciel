import med from "../Projetos/pro-med.jpg";
import login from "../Projetos/pro-login.jpg";
import cordel from "../Projetos/pro.coredel.jpg";
export default function Projetos() {
  return (
    <>
      <section className="grid grid-col justify-center gap-5">
        <div>
          <h2 className="text-white grid font-destaques font-light pt-9 text-3xl justify-center items-center">
            Projetos
          </h2>
        </div>

        {/*Inicio dos Projetos - projeto med*/}
        <div className="bg-zinc-900 w-85  text-white grid grid-cols-1 justify-center rounded-b-2xl">
          <img src={med} alt="pojeto maciel med" />
          <h2 className="pl-2 pt-5 pb-5 font-destaques font-bold">
            Projeto Maciel Med
          </h2>
          <p className=" pl-2 font-textoCorrido font-light ">
            Projeto pessoal criado apartir de um projeto proposto na faculdade
            que original mente era escrito em Python, então decidi recriar o
            desafio usando as tecnicas de desenvolvimento web.
          </p>

          <div className="flex gap-10 justify-center pt-10">
            <button className="bg-destaques-botoes p-4 w-30  mb-10 rounded-2xl ">
              <a href="#">Demo</a>
            </button>

            <button className="bg-botoes p-4 w-30  mb-10 rounded-2xl ">
              <a href="#">Guit Hub</a>
            </button>
          </div>
        </div>

        {/*Inicio dos Projetos - projeto login*/}
        <div className="bg-zinc-900 w-85  text-white grid grid-cols-1 justify-center rounded-b-2xl">
          <img src={login} alt="projeto login" />
          <h2 className="pl-2 pt-5 pb-5 font-destaques font-bold">
            Projeto Login
          </h2>
          <p className=" pl-2 font-textoCorrido font-light pb-20">
            Projeto pessoal criado apartir de um projeto proposto na faculdade
            que original mente era escrito em Python, então decidi recriar o
            desafio usando as tecnicas de desenvolvimento web.
          </p>

          <div className="flex gap-10 justify-center pt-10">
            <button className="bg-destaques-botoes p-4 w-30  mb-10 rounded-2xl ">
              <a href="#">Demo</a>
            </button>

            <button className="bg-botoes p-4 w-30  mb-10 rounded-2xl ">
              <a href="#">Guit Hub</a>
            </button>
          </div>
        </div>

        {/*Inicio dos Projetos cordel*/}
        <div className="bg-zinc-900 w-85  text-white grid grid-cols-1 justify-center rounded-b-2xl">
          <img src={cordel} alt="projeto cordel" />

          <h2 className="pl-2 pt-5 pb-5 font-destaques font-bold">
            Projeto Cordel
          </h2>
          <p className=" pl-2 font-textoCorrido font-light pb-20">
            Projeto pessoal criado apartir de um projeto proposto na faculdade
            que original mente era escrito em Python, então decidi recriar o
            desafio usando as tecnicas de desenvolvimento web.
          </p>

          
          <div className="flex gap-10 justify-center pt-10">
            <button className="bg-destaques-botoes p-4 w-30  mb-10 rounded-2xl ">
              <a href="#">Demo</a>
            </button>

            <button className="bg-botoes p-4 w-30  mb-10 rounded-2xl ">
              <a href="#">Guit Hub</a>
            </button>
          </div>
        </div>

        {/*Inicio dos Projetos*/}

        <div className="bg-zinc-900 w-85 h-100"></div>
      </section>
    </>
  );
}
