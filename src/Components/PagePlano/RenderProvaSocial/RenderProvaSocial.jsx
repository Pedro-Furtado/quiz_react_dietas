import './RenderProvaSocial.css'
import RenderProvasImg from '../RenderProvasImg/RenderProvasImg'

function RenderProvaSocial() {
    return(
        <div className='containerProvaSocial'>
            <span className='headline'>Você está em boas mãos</span>
            <span className='text'>O Ciclo Keto ajudou mais de <span className='bold'>300.000</span> pessoas a perder peso com sucesso da maneira Keto</span>
            <RenderProvasImg />
        </div>
    )
}

export default RenderProvaSocial