import './HelloUser.css'
import { Link } from 'react-router-dom';

import Logo from '../../Images/Logo.png'
//import imgCapa from '../../Images/imgcapa.png'

function HelloUser({ setShowHome, setShowHelloUser }) {
    const btnContinuar = () => {
        setShowHome(true);
        setShowHelloUser(false);
    }

    return (
        <div className='containerHelloUser'>
            <header>
                <img src={Logo} alt="" style={{width: 150}}/>
                <span className='textGreen'>Dieta cetogenica</span>
            </header>
            
            <span className='textBold'>Emagreça de 3 a 7 quilos por semana de maneira fácil, siga nossos passos.</span>

            
            
            <button onClick={btnContinuar}>Continuar</button>
        </div>
    )
}

export default HelloUser;
