
import './App.css'
import Hero from './components/Hero/Hero'
import Navegation from './components/Navegation/navgation'
import Projetos from './components/Projetos/Projetos'
import Redes from './components/Redes/Redes'
import Sobre from './components/Sobre/Sobre'
import Tecnologias from './components/Tecnologias/Tecnologias'

function App() {
  return (
    <>
      <Navegation />
      <section id="hero">
        <Hero />
      </section>

      <section id="tecnologias">
        <Tecnologias />
      </section>

      <section id="projetos">
        <Projetos />
      </section>

      <section id="redes">
        <Redes />
      </section>

      <section id="sobre">
        <Sobre />
      </section>
    </>
  )
}

export default App
