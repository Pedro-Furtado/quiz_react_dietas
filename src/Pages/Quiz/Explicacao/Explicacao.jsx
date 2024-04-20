import '../Explicacao/Explicacao.css'
import { Link, useParams } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import suaurl from '../../../main';

function Explicacao() {
    const params = useParams()

    const pageNumber = parseInt(params.page.split('-')[1], 10);

    return (
        <div className='containerQuiz'>
            <div className='quest'>
                <h3>O que é dieta cetogênica?</h3>
                <span>
                    A dieta cetogênica é uma dieta com muito baixo teor de carboidratos 
                    e alto teor de gordura. Para obter resultados positivos, 
                    esta dieta deve ser muito pobre em carboidratos, rica em gordura e 
                    incluir uma quantidade moderada de proteínas. Essa redução de 
                    carboidratos coloca seu corpo em um estado metabólico chamado cetose. 
                    Quando isso acontece, seu corpo se torna incrivelmente eficiente na 
                    queima de gordura para obter energia. A dieta cetogênica pode causar 
                    reduções massivas nos níveis de açúcar no sangue e de insulina e 
                    ajudar na perda de peso.
                </span>
                <span className='bold'>Benefícios da dieta cetogênica:</span>
                <div className='checks'>
                    <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                    <span>Perda de peso</span>
                </div>
                <div className='checks'>
                    <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                    <span>Pressão arterial reduzida</span>
                </div>
                <div className='checks'>
                    <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                    <span>Processo de envelhecimento mais lento</span>
                </div>
                <div className='checks'>
                    <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                    <span>Melhor sono e humor</span>
                </div>
                <div className='checks'>
                    <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                    <span>Maior eficiência energética</span>
                </div>
                <Link to={`/${suaurl}/quiz/${params.genero}/quiz-${pageNumber + 1}`} className='btnEntendi'>
                    <span>Entendi</span>
                </Link>
            </div>
        </div>
    )
}

export default Explicacao