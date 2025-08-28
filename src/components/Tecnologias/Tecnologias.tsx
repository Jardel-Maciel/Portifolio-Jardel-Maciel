import react from "../Tecnologias/React.png";
import html from "../Tecnologias/html.png";
import css from "../Tecnologias/css-3.png";
import js from "../Tecnologias/js.png";
import net from "../Tecnologias/NET.png";

export default function Tecnologias() {
  return (
    <section className="grid items-center justify-center md:mr-100">
      <div>
        <h2 className="grid items-center justify-center pt-10 pb-10 text-white text-3xl font-destaques font-light">
          Tecnologias
        </h2>
      </div>

      <div className="flex gap-2.5 ">
        <img className="w-15" src={react} alt="logo React.js" />
        <img className="w-15" src={html} alt="html" />
        <img className="w-15" src={css} alt="css" />
        <img className="w-15" src={js} alt="JavaScript" />
        <img className="w-15" src={net} alt=".Net" />
      </div>
    </section>
  );
}
