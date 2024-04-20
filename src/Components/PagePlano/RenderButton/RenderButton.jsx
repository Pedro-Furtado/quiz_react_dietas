import './RenderButton.css'
import PropTypes from 'prop-types';

function RenderButton({selectedItem}) {
    const infosPessoais = localStorage.getItem('infosPessoais')
        const parsedInfosUser = JSON.parse(infosPessoais);
        const nome = parsedInfosUser.nome
        const email = parsedInfosUser.email

        const checkout = () => {
            if(selectedItem === 1){
                //window.location.href = `seulink?name=${nome}&email=${email}` // link do checkout baixo
                alert('-- Plano de 3 meses clicado')
            } else if(selectedItem === 2){
               //window.location.href = `seulink?name=${nome}&email=${email}` // link do checkout medio
               alert('-- Plano de 6 meses clicado')
            } else{
                //window.location.href = `seulink?name=${nome}&email=${email}` // link do checkout alto
                alert('-- Plano de 9 meses clicado')
            }
        }

        return(
            <div className='divBtnObter'>
                <div className='btnObter' onClick={checkout}>
                    <span>Receber meu plano</span>
                </div>
            </div>
          
        )
}
RenderButton.propTypes = {
    selectedItem: PropTypes.number.isRequired,
};

export default RenderButton