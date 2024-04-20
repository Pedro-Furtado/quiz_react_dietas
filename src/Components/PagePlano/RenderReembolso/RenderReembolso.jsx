import './RenderReembolso.css'
import imgCarteira from '../../../Images/wallet.png'

function RenderReembolso() {
    return(
        <div className='divContainerReembolso'>
            <div className='containerReembolso'>
                <img src={imgCarteira} alt="" />
                <div>
                    <span>Fique na dieta por completo</span>
                    <span className='bold'>28 dias e receba um reembolso total!</span>
                </div>
            </div>
        </div>
        
    )
}

export default RenderReembolso