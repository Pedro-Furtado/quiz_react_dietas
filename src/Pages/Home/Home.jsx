import './Home.css'
import PropTypes from 'prop-types';
import { LuMenu } from "react-icons/lu";
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import suaurl from '../../main';

function Home({abrirMenu}) {

    return (
        <div className='containerHome'>
            <header>
                <h2>Sua Logo</h2>
                <LuMenu size={25} onClick={abrirMenu} style={{cursor: 'pointer'}}/>
            </header>
            {/*<img src={imgCapa} alt="" className='imgCapa'/>*/}
            <h2>Comece a perder peso em poucos dias</h2>
            <h3>Selecione o tipo de dieta:</h3>
            <div className='btnsDiv'>
                <Link style={{textDecoration: 'none'}} to={`/${suaurl}/quiz/mulher/quiz-1`}>
                    <div className='btn mulher'>
                        <FaFemale size={20} />
                        <span>Dieta para mulheres</span>
                        <FaAngleRight />
                    </div>
                </Link>
                <Link style={{textDecoration: 'none'}} to={`/${suaurl}/quiz/homem/quiz-1`}>
                    <div className='btn homem'>
                        <FaMale size={20} />
                        <span>Dieta para homens</span>
                        <FaAngleRight />
                    </div>
                </Link>
            </div>
            
            
        </div>
    )
}

Home.propTypes = {
    abrirMenu: PropTypes.func.isRequired,
};

export default Home
