import { Card } from 'react-bootstrap'
import './styles.css'
import Cards from '../Cards'

export default function Projects() {
    return (
        <div className="projects">
            <h1>Projetos</h1>
            <div className='grade'>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            </div>
            </div>
    )
}