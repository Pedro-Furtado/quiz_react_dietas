import './RenderObjetivo.css'
import { FaCircleCheck } from "react-icons/fa6";
import RenderGraficoObjetivo from '../RenderGraficoObjetivo/RenderGraficoObjetivo';

function RenderObjetivo() {
    return(
        <div className='containerProvaSocial'>
            <div className='StepDiv'>
                <span className='numberStep_1'>1</span>
                <span className='headlineStep'>Muito bem – você está um passo à frente de seus objetivos</span>
            </div>
            <span className='textStepBold'>O teste foi o primeiro passo que você deu.</span>
            <span className='textStep'>Agora, suas respostas honestas nos ajudam a determinar suas preferências e a criar um plano de refeições Keto personalizado que:</span>
            <div className='divChecks'>
                <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                <span className='textStepBold'>Ajuda você a perder peso</span>
            </div>
            <div className='divChecks'>
                <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                <span className='textStepBold'>Aumenta seu nível de energia</span>
            </div>
            <div className='divChecks'>
                <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                <span className='textStepBold'>Dá-lhe clareza mental</span>
            </div>
            <RenderGraficoObjetivo />
        </div>
    )
}

export default RenderObjetivo