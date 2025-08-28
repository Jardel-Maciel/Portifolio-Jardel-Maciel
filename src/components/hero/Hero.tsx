
import foto from "../hero/foto-desk.png";
export default function Hero() {
  return (
    <>
      <section className="flex flex-col justify-center items-center pt-20 md:flex-row md:items-center  md:gap-20 ">
        <div>
          <img
            className="size-70 border-2 border-destaques-botoes md:h md:size-100 rounded-full"
            src={foto}
            alt="foto jardel maciel"
          />
        </div>

        <div className="text-white flex flex-col pt-10 justify-center items-center md:items-start w-90 gap-y-2.5 ">
          <h1 className="font-destaques font-bold md:text-5xl md:w-95 text-3xl ">
            Jardel Maciel
          </h1>
          <h2 className=" font-destaques font-semi-bold text-3xl md:text-3xl">
            Front-End Developer
          </h2>
          <p className="md:w-90 gap-y-10 font-textoCorrido font-light">
            React, Type Script, JavaScript, HTML, CSS <br /> Inovação,
            performance e design na palma da sua mão.
          </p>

          <div className="flex gap-10 justify-center pt-10">
            <button className="bg-destaques-botoes md:hover:bg-red-800 md:cursor-pointer transition-all p-4 w-30  mb-10 rounded-2xl ">
              <a href="#sobre">Sobre</a>
            </button>

            <button className="bg-botoes p-4 md:hover:bg-blue-800 md:cursor-pointer transition-all w-30  mb-10 rounded-2xl ">
              <a href="https://github.com/Jardel-Maciel" target="_blank" rel="noopener noreferrer">GitHub</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
