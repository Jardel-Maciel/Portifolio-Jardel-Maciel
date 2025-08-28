import guithub from "../Redes/logo.png"
import instagram from "../Redes/instagram.png"
import email from "../Redes/mail (1).png"

export default function Redes(){
    return(
        <>
            <section className="pt-10">
                <div>
                    <h2 className="text-3xl font-light font-destaques text-white grid justify-center">Redes</h2>
                </div>
                <div className="flex justify-center items-center pt-10 pb-10 gap-8">
                    <a href="#"><img className="w-10" src={instagram} alt="instagram" /></a>
                    <a href="https://github.com/Jardel-Maciel" target="_blank"><img className="w-10" src={guithub} alt="github" /></a>
                    <a href="#"><img className="w-10" src={email} alt="email" /></a>
                </div>
            </section>
        </>
    )
}