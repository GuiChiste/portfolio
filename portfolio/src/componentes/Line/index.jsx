import tempo from '../Line/assets/tempo.svg'
import './styles.css'

export default function Line(){
    return(
        <div className='line'>
            <div className='texto1'>
                <h1>Sobre mim</h1>
            </div>
            <img src={tempo}></img>
        </div>
    )
}