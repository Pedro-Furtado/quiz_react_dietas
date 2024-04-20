import './RenderGraficoObjetivo.css'
import imgGraficoObj from '../../../Images/weight-loss-forecast.svg'

function RenderGraficoObjetivo() {
    const infosUser = JSON.parse(localStorage.getItem('infosUser'));
    const pesoAtual = infosUser.pesoAtual
    return(
        <div className='containerGraficoObj'>
            <span className='headlineStep'>Previsão de perda de peso*</span>
            <div className='infos'>
                <span>{parseInt(pesoAtual) - 2.2}kg</span>
                <span>{parseInt(pesoAtual) - 4.3}kg</span>
                <span>{parseInt(pesoAtual) - 6.5}kg</span>
                <span>{parseInt(pesoAtual) - 8.5}kg</span>
            </div>
            <div className='imgDiv'>
                <img src={imgGraficoObj} alt="" />
                <div className='infos kg'>
                    <span>-2,2kg</span>
                    <span>-4,3kg</span>
                    <span>-6,5kg</span>
                    <span>-8,5kg</span>
                </div>
            </div>
            <div className='semanas'>
                <span>Semana 1</span>
                <span>Semana 2</span>
                <span>Semana 3</span>
                <span>Semana 4</span>
            </div>
            <div className='text'>
                <span>Este não é um gráfico personalizado. Consulte seu médico antes de iniciar qualquer programa de perda de peso, dieta, exercícios ou outro programa de saúde.</span>
            </div>
        </div>
    )
}

export default RenderGraficoObjetivo