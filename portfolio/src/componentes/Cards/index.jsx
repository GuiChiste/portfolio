import Button from '../Button'
import Google from '../Cards/assets/exemplo.png'
import "./styles.css"

export default function Cards(){
        return(
            <div className='card'>
                <img src={Google}/>
                <div>
                    <h3>Projeto 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing<br/>
                         elit Saepe soluta animi cumque recusandae <br/> 
                         asperiores deleniti odio voluptatum  Architecto<br/>
                         elit Saepe soluta animi cumque recusandae <br/> 
                         asperiores deleniti odio voluptatum  Architecto</p>
                    <Button text='Saiba Mais'/>
                </div>
            </div>
        )
}