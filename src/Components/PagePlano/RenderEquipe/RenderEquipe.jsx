import './RenderEquipe.css'
import { FaCircleCheck } from "react-icons/fa6";
import imgSocial from '../../../Images/socializing.png'

function RenderEquipe() {
    return(
        <div className='containerProvaSocial'>
            <div className='StepDiv'>
                <span className='numberStep'>4</span>
                <span className='headlineStep'>Tenha sua equipe de perda de peso ao seu lado</span>
            </div>
            <span className='textStepBold'>Vamos fazer mudanças duradouras juntos.</span>
            <span className='textStep'>Unimos milhares de entusiastas, profissionais e especialistas em bem-estar do Keto em uma comunidade para inspirar as transformações do Keto em todo o mundo.</span>
            <div className='divChecks'>
                <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                <span className='textStepBold'>Junte-se à comunidade de 58 mil pessoas que pensam como você.</span>
            </div>
            <div className='divChecks'>
                <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                <span className='textStepBold'>Faça perguntas e ajude outras pessoas.</span>
            </div>
            <div className='divChecks'>
                <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
                <span className='textStepBold'>Compartilhe (e experimente) novas receitas com baixo teor de carboidratos</span>
            </div>
            <div className='imgDivSocial'>
                <img src={imgSocial} alt="" />
            </div>
        </div>
    )
}

export default RenderEquipe