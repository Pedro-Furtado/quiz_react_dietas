import './RenderRefeicoes.css'
import { FaCircleCheck } from "react-icons/fa6";
import RenderImgRefeicoes from '../RenderImgRefeicoes/RenderImgRefeicoes';

function RenderRefeicoes() {
    return(
        <div className='containerProvaSocial'>
            <div className='StepDiv'>
                <span className='numberStep'>2</span>
                <span className='headlineStep'>Comece a perder peso com seu plano de refeições Keto personalizado</span>
            </div>
            <span className='textStepBold'>Será o último plano que você precisará.</span>
            <span className='textStep'>Com Keto, você terá café da manhã, almoço e jantar planejados, para nunca mais comer a mesma refeição duas vezes. A não ser que você queira!</span>
            <div className='divChecks'>
                <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                <span className='textStepBold'>10.000 receitas fáceis de preparar</span>
            </div>
            <div className='divChecks'>
                <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                <span className='textStepBold'>Personalizado de acordo com sua saúde, objetivo e preferências</span>
            </div>
            <div className='divChecks'>
                <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                <span className='textStepBold'>Projetado para ser saudável, saboroso e mantê-lo satisfeito</span>
            </div>
            <RenderImgRefeicoes />
        </div>
    )
}

export default RenderRefeicoes