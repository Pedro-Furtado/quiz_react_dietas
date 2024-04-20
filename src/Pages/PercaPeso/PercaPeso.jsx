import { Link, useParams } from 'react-router-dom';
import './PercaPeso.css'
import { FaCircleCheck } from "react-icons/fa6";

import Logo from '../../Images/Logo.png'

import Graph from '../../Images/graph-mobile.png'
import suaurl from '../../main';

function PercaPeso() {
    const params = useParams()
    return (
        <div className='containerPercaPeso'>
            <div className='contentDiv'>
                <header>
                    <img src={Logo} alt="" style={{width: 70}}/>
                </header>
                <span className='text mid'>Antes de continuar...</span>
                <span className='text great'>Perca peso e nós recompensaremos você!</span>
                <div className='divImg'>
                    <img src={Graph} alt="" />
                </div>
                <span className='text small'>
                    Se você permanecer na dieta por pelo menos 28 dias, 
                    receberá seu dinheiro de volta. Nenhuma pergunta foi feita.
                </span>
                <div className='checkDiv'>
                    <div>
                        <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                    </div>                
                    <span>Siga o plano e receba seu primeiro pagamento de volta</span>
                </div>
                <div className='checkDiv'>
                    <div>
                        <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                    </div>
                    <span>Perder peso mais rápido e fácil</span>
                </div>
                <div className='checkDiv'>
                    <div>
                        <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                    </div>                
                    <span>Esqueça as taxas ocultas</span>
                </div>
                <Link className='btnEntendi' to={`/${suaurl}/quiz/${params.genero}/plano`}>
                    <span>ENTENDI</span>
                </Link>
            </div>
            
        </div>
    )
}

export default PercaPeso
