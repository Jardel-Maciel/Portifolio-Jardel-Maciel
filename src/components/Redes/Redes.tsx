import guithub from "./github.png";
import instagram from "./instagram (2).png";
import youtube from "./youtube (1).png";
import linkedin from "./linkedin.png";

export default function Redes() {
  return (
    <>
      <section className="pt-10">
        <div>
          <h2 className="text-3xl font-light font-destaques text-white grid justify-center">
            Redes
          </h2>
        </div>
        <div className="flex justify-center items-center pt-10 pb-10 gap-8">
          <a href="https://www.instagram.com/dellmaciel?igsh=MXcyZHlkcmtoejJ0cA==" target="_blank"><img className="w-10" src={instagram} alt="instagram" /> </a>
          <a href="https://github.com/Jardel-Maciel" target="_blank"><img className="w-10" src={guithub} alt="github" /></a>
          <a href="https://www.youtube.com/@DellMaciell"target="_blank"><img className="w-10" src={youtube} alt="youtube" /> </a>
          <a href="https://www.linkedin.com/in/jardel-maciel-dos-santos"target="_blank"><img className="w-10" src={linkedin} alt="linkedin" /></a>
        </div>
      </section>
    </>
  );
}
