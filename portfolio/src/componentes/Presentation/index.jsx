import {useEffect, useState} from 'react'
import Button from '../Button'
import './styles.css'

export default function Presentation() {
    const [text,setText] = useState('');
    const toRotate= ['Guilherme!', 'Desenvolvedor Front-end'];
    const [loop,setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    useEffect(()=>{
            let ticker = setInterval(()=>{
                toType()
            }, delta)
            return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length-1) :  fullText.substring(0,text.length+1)

        setText(updateText);

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }  

    return (
        <div className="presentation">
            <h1>Olá, eu sou {text}</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras. <br/>
                Como Product Manager, eu tenho o compromisso de resolver <br/>
                problemas complexos e trazer resultados excepcionais para os <br/>
                negócios. Meus projetos já geraram milhões de reais em receita <br/>
                anualestou sempre em busca de novos desafios para superar.
            </p>
            <Button text='Saber mais'/>
        </div>
    )
}