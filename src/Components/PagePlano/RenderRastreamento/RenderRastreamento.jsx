import './RenderRastreamento.css'
import { FaCircleCheck } from "react-icons/fa6";

function RenderRastreamento() {
    return(
        <div className='containerProvaSocial'>
            <div className='StepDiv'>
                <span className='numberStep'>3</span>
                <span className='headlineStep'>Mantenha seu peso ideal com rastreamento completo</span>
            </div>
            <span className='textStepBold'>Deixe a ciência conosco enquanto você se concentra na sua saúde.</span>
            <span className='textStep'>Keto é o único aplicativo que você precisa para integrar perfeitamente o Keto à sua vida, desde o rastreamento inteligente até o planejamento de refeições.</span>
            <div className='divChecks'>
                <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                <span className='textStepBold'>Conte calorias e macros automaticamente.</span>
            </div>
            <div className='divChecks'>
                <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                <span className='textStepBold'>Desenvolva hábitos saudáveis com rastreadores de água e passos.</span>
            </div>
            <div className='divChecks'>
                <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                <span className='textStepBold'>Veja resultados mais rapidamente com exercícios eficazes.</span>
            </div>
        </div>
    )
}

export default RenderRastreamento