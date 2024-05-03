import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
import "./styles.css"

export default function Navbar() {
    return (
        <div className="navbar">
        <ul className="lista1">
            <li><Nav.Link href='#Presentation'>Apresentenção</Nav.Link></li>
            <li><Nav.Link href='Skills'>Habilidades</Nav.Link></li>
            <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
        </ul>
        <ul className="lista2">
            <li><a href='https://github.com/GuiChiste/'><FaGithub size={30}/></a></li>
            <li><a href='https://www.linkedin.com/in/guilherme-martins-dourado-3b4185303/'><FaLinkedin size={30}/></a></li>
        </ul>
    </div>
    )
}