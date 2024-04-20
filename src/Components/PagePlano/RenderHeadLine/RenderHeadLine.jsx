import './RenderHeadLine.css'
import PropTypes from 'prop-types';

function RenderHeadLine({userName}) {
    return (
        <div className='containerHeadLine'>
            <span className='headLine inicil'>{userName}, Obtenha sua Dieta pessoal</span>
            <span className='text_inicial inicil'>A dieta mais popular! Mais de 270.000 planos encomendados</span>
        </div>
    )
}
RenderHeadLine.propTypes = {
    userName: PropTypes.string.isRequired,
};

export default RenderHeadLine