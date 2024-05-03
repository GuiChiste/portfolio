import {  FaLinkedin, FaGithub } from "react-icons/fa";
import './styles.css'

export default function Footer() {
    return(
        <div className="footer">
        <ul>
             <li><a href='https://github.com/GuiChiste/'><FaGithub size={30}/></a></li>
             <li><a href='https://www.linkedin.com/in/guilherme-martins-dourado-3b4185303/'><FaLinkedin size={30}/></a></li>
         </ul>
       
     </div>
 )
    
}