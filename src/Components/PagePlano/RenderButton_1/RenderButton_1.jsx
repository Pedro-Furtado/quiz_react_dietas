import './RenderButton_1.css'

function RenderButton_1() {
    const goPlan = () => {
        const primeiroBotaoPagar = document.querySelector('.pagar');
        if (primeiroBotaoPagar) {
            const meioDaTela = window.innerHeight / 2;
            const posicaoBotao = primeiroBotaoPagar.getBoundingClientRect().top;
            const posicaoFinal = posicaoBotao - meioDaTela;
            window.scrollTo({ top: posicaoFinal, behavior: 'smooth' });
        }
    };

    return(
        <div className='divBtnObter'>
            <div className='btnObter' onClick={goPlan}>
                <span>Receber meu plano</span>
            </div>
        </div>
      
    )
}

export default RenderButton_1