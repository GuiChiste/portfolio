import './App.css'
import Footer from './componentes/Footer'
import Line from './componentes/Line'
import Navbar from './componentes/Navbar'
import Presentation from './componentes/Presentation'
import Projects from './componentes/Projects'

function App() {
  return (
      <div>
      <Navbar/>
      <Presentation/>
      <Projects/>
      <Line/>
      <Footer/>
      </div>
  )
}

export default App
