
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
     <Navegation/>
     <Hero/>
     <Tecnologias/>
     <Projetos/>
     <Redes/>
     <Sobre/>
    </>
    
  )
}

export default App
