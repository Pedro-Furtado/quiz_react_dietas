import './RenderPreco.css'
import PropTypes from 'prop-types';
import { RiTimer2Line } from "react-icons/ri";

function RenderPreco({selectedItem, timeLeft, selecionarPlano}) {
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const precos = [
        {
            id: 1,
            ticket: 37,
            parcela: 8,
            plano: 3,
            popular: false,
            valorParcelado: 5.27
        },
        {
            id: 2,
            ticket: 67,
            parcela: 8,
            plano: 6,
            popular: true,
            valorParcelado: 9.54
        },
        {
            id: 3,
            ticket: 97,
            parcela: 8,
            plano: 9,
            popular: false,
            valorParcelado: 13.81
            
        },
    ]
    return(
        <div className='divPreco pagar'>
            {precos.map((preco) => (
                <div 
                    className={`containerPreco ${selectedItem === preco.id ? 'selected' : ''}`} 
                    key={preco.id} 
                    onClick={() => selecionarPlano(preco.id)}
                >
                    {preco.popular && 
                        <div className='divPopular'>
                            <span>Mais popular</span>
                        </div>
                    }
                    
                    <div className='preco'>
                        <div className='leftDiv'>
                            <div className='circuloEx'>
                                <div className='circuloIn'></div>
                            </div>
                            <div className='textPreco'>
                                <span>Plano de {preco.plano} meses</span>
                            </div>
                        </div>
                        <div className='ticketDiv'>
                            <span className='small'>Por apenas {preco.parcela}x de</span>
                            <span className='hard'>R$ {preco.valorParcelado.toFixed(2).replace('.', ',')}</span>
                        </div>
                    </div>
                </div>
            ))}
            <div className='timerDiv'>
                <RiTimer2Line size={20}/>
                <span>Seu desconto expira em <span className='valorTimer'>{formatTime(timeLeft)}</span> min</span>
            </div>
        </div>
    )
}
RenderPreco.propTypes = {
    selectedItem: PropTypes.number.isRequired,
    timeLeft: PropTypes.number.isRequired,
    selecionarPlano: PropTypes.func.isRequired,
};


export default RenderPreco