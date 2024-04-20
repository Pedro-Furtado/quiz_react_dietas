import './Menu.css'
import PropTypes from 'prop-types';
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import suaurl from '../../main';


function Menu({fecharMenu, menuOpen}) {
    return (
        <div className={`containerMenu ${menuOpen ? 'open' : ''}`}>
            <header>
                <span style={{fontSize: 20, fontWeight: 'bold'}}>Sua Logo</span>
                <FaXmark size={20} onClick={fecharMenu} style={{cursor: 'pointer'}}/>
            </header>
            <Link className='btnPage' to={`/${suaurl}/avaliacoes`}>A Keto serve para você?</Link>
            <Link className='btnPage' to={`/${suaurl}/termos`}>Termos de uso</Link>
            <Link className='btnPage' to={`/${suaurl}/politicas`}>Políticas de Privacidade</Link>
        </div>
    )
}

Menu.propTypes = {
    fecharMenu: PropTypes.func.isRequired,
    menuOpen: PropTypes.bool.isRequired,
};

export default Menu