import logo  from "../navegation/logo-JM.png"
export default function Navegation(){
    return(
        <>
            <header className="  md:w 48rem text-white flex items-center justify-around pt-2 md:fixed top-0 w-full">
                <div>
                <a href="#"><img className="size-10" src={logo} alt="logo" /></a>
                    
                </div>
                <nav className="hidden md:block">
                    <ul className="font-destaques flex gap-6 ">
                        <li className=" rounded-md p-2 hover:bg-zinc-900 transition duration-0.5" ><a href="#">Home</a></li>
                        <li className="rounded-md p-2 hover:bg-zinc-900 transition duration-0.5"><a href="#">Projets</a></li>
                        <li className="rounded-md p-2 hover:bg-zinc-900 transition duration-0.5"><a href="#">Contact</a></li>

                    </ul>
                </nav>

            </header>
        </>
    )
}