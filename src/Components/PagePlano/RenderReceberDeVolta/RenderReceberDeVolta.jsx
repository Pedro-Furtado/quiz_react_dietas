import './RenderReceberDeVolta.css'
import imgReceberDeVolta from '../../../Images/wallet-girl.png'

function RenderReceberDeVolta() {
    return(
        <div className='conatinerReceberDeVolta'>
            <span className='headline'>Receba seu dinheiro de volta por perder peso!</span>
            <img src={imgReceberDeVolta} alt="" />
            <span className='headline'>Fique na dieta por 28 dias completos e reembolsaremos sua compra.</span>
            <span className='text'>Temos certeza de que nossa dieta funciona, por isso iremos recompensá-lo por perder peso. Dessa forma, você pode continuar sua jornada para perder peso conosco gratuitamente.</span>
        </div>
    )
}

export default RenderReceberDeVolta