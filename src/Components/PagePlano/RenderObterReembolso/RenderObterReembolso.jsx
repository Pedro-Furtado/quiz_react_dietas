import './RenderObterReembolso.css'
import imgObterReembolso from '../../../Images/photo-challenge.png'
import { FaCamera } from "react-icons/fa";
import { MdOutlineCloudUpload } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";

function RenderObterReembolso() {
    return(
        <div className='containerObterReembolso'>
            <img src={imgObterReembolso} alt="" />
            <span className='headline'>Como obter um reembolso total?</span>
            <span className='text'>Prove que você segue dieta com 3 passos simples:</span>
            <div className='dicasDiv'>
                <FaCamera size={25} color='rgb(226, 83, 0)'/>
                <span className='headline_2'>1. Tire fotos das suas refeições</span>
            </div>
            <div className='dicasDiv'>
                <MdOutlineCloudUpload size={25} color='rgb(226, 83, 0)'/>
                <span className='headline_2'>2. Envie suas fotos</span>
            </div>
            <div className='dicasDiv'>
                <MdOutlineShoppingBag size={25} color='rgb(226, 83, 0)'/>
                <span className='headline_2'>3. Tenha sua viagem coberta por nós</span>
            </div>
        </div>
    )
}

export default RenderObterReembolso