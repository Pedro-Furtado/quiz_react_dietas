import './Menu.css'
import PropTypes from 'prop-types';
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import Logo from '../../Images/Logo.png'

function Menu({fecharMenu, menuOpen}) {
    return (
        <div className={`containerMenu ${menuOpen ? 'open' : ''}`}>
            <header>
                <img src={Logo} alt="" style={{width: 70}}/>
                <FaXmark size={20} onClick={fecharMenu} style={{cursor: 'pointer'}}/>
            </header>
            <Link className='btnPage' to={`/keto/avaliacoes`}>A Keto serve para você?</Link>
            <Link className='btnPage' to={`/keto/termos`}>Termos de uso</Link>
            <Link className='btnPage' to={`/keto/politicas`}>Políticas de Privacidade</Link>
        </div>
    )
}

Menu.propTypes = {
    fecharMenu: PropTypes.func.isRequired,
    menuOpen: PropTypes.bool.isRequired,
};

export default Menu