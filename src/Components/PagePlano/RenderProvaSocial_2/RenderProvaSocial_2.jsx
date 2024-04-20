import './RenderProvaSocial_2.css'
import imgSocial_1 from '../../../Images/Provas_2/prova_4.png'
import imgSocial_2 from '../../../Images/Provas_2/prova_2.jpeg'
import imgSocial_3 from '../../../Images/Provas_2/prova_3.jpeg'
import imgSocial_4 from '../../../Images/Provas_2/prova_7.png'
import imgStars from '../../../Images/star-yellow-full.svg'
import imgVerificado from '../../../Images/verified-green.svg'

function RenderProvaSocial_2() {
    const provas = [
        {
            img: imgSocial_1,
            nome: 'Marcelo S',
            text: 'Keto é o assistente número um para perda de peso. O planejamento fica mais fácil com os cardápios pré-fabricados e listas de compras. Você sabe exatamente o que vai precisar. Também adoro as receitas, a maioria delas tem um sabor fantástico.'
        },
        {
            img: imgSocial_2,
            nome: 'Fernanda',
            text: 'Esta Dieta Keto realmente funciona! Perdi 9 kg em 2,5 meses. Não é uma corrida, é um processo! Continue trabalhando com o Keto e prometo que você verá os resultados!'
        },
        {
            img: imgSocial_3,
            nome: 'Juliana',
            text: 'É muito mais difícil fazer ceto sendo intolerante à lactose. No entanto, a Keto prova que é possível. Basta pegar o plano e cumpri-lo.'
        },
        {
            img: imgSocial_4,
            nome: 'Maria L',
            text: 'O Keto tornou muito fácil seguir o ceto e mantê-lo. Eles têm todas as receitas diárias e listas de compras semanais. Passei de 84 kg para 68 kg, mesmo tendo 60 anos. Meus triglicerídeos, glicose e colesterol caíram significativamente, o que era outro objetivo para mim. Muito obrigado. O trabalho duro valeu a pena.'
        },
    ]
    return(
        <div className='containerProvaSocial_2'>
            <span className='headline'>Conheça o último aplicativo de dieta que você vai precisar</span>
            <span className='text'>Recupere sua saúde, confiança e força interior com Keto. De uma vez por todas.</span>
            {provas.map((prova, index) => (
                <div className='divProva_2' key={index}>
                    <div className='headerProva'>
                        <div className='perfilProva'>
                            <img src={prova.img} alt="" className='imgPrefil'/>
                            <div className='nomeProva'>
                                <span>{prova.nome}</span>
                                <div>
                                    <img src={imgStars} alt="" />
                                    <img src={imgStars} alt="" />
                                    <img src={imgStars} alt="" />
                                    <img src={imgStars} alt="" />
                                    <img src={imgStars} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='divVerificadoProva'>
                            <img src={imgVerificado} alt="" />
                            <span>VERIFICADO</span>
                        </div>
                    </div>  
                    <span className='textProva'>{prova.text}</span>
                </div>
            ))}
        </div>
    )
}

export default RenderProvaSocial_2