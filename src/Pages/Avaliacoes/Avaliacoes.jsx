import './Avaliacoes.css'
import Logo from '../../Images/Logo.png'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";

import img_1 from '../../Images/Provas_3/avali_1.png'
import img_2 from '../../Images/Provas_3/avali_2.png'
import img_3 from '../../Images/Provas_3/avali_3.png'
import img_4 from '../../Images/Provas_3/avali_4.png'
import img_5 from '../../Images/Provas_3/avali_5.png'
import img_6 from '../../Images/Provas_3/avali_6.png'
import img_7 from '../../Images/Provas_3/avali_7.png'

function Avaliacoes() {
    const clientes = [
        {
            id: 1,
            img: img_1,
            nome: 'Marcela',
            idade: '38',
            local: 'São Paulo',
            peso: '6',
            coment: '“Já tentei o ceto várias vezes, mas sempre não consegui cumpri-lo. Fiquei um pouco cético quando encontrei o Keto. Meu único arrependimento hoje é não ter recebido antes. É um salva-vidas, literalmente! É totalmente personalizado, super fácil de seguir e tem muitas receitas saborosas”'
        },
        {
            id: 2,
            img: img_2,
            nome: 'Michelle',
            idade: '52',
            local: 'Minas Gerais',
            peso: '8',
            coment: ', “Adorei o teste! Mencionei minhas alergias, outras preferências e, o mais importante, minha meta de peso. Após o teste, recebi uma refeição Keto totalmente personalizada, criada apenas para mim.”'
        },
        {
            id: 3,
            img: img_3,
            nome: 'Heloisa',
            idade: '42',
            local: 'São Paulo',
            peso: '10',
            coment: '“Depois de saber que receberei um plano de refeições totalmente personalizado com tantas receitas Keto saborosas e fáceis de fazer, fiquei totalmente convencido! A propósito, é realmente gostoso!”'
        },
        {
            id: 4,
            img: img_4,
            nome: 'Jéssica',
            idade: '55',
            local: 'Rio de Janeiro',
            peso: '7',
            coment: '“Não gosto de balança, nem tenho, então não sei quanto peso perdi, mas meu marido perguntou se eu arrumei o cabelo. Não, eu não fiz. Meu jeans ficou muito grande. :))”'
        },
        {
            id: 5,
            img: img_5,
            nome: 'Giovana',
            idade: '32',
            local: 'São Paulo',
            peso: '12',
            coment: '“As sobremesas Keto são as melhores! Eu não conseguia acreditar que um alimento dietético pudesse ser tão saboroso!”'
        },
        {
            id: 6,
            img: img_6,
            nome: 'Bárbara',
            idade: '46',
            local: 'Bahia',
            peso: '8',
            coment: '“Recrutei toda a minha família para o Keto! É incrível!"'
        },
        {
            id: 7,
            img: img_7,
            nome: 'Karen',
            idade: '33',
            local: 'Santa Catarina',
            peso: '10',
            coment: '“Com este plano Keto, começo 2024 sem estresse.”'
        },
    ]
    return (
        <div className='containerAvaliacoes'>
            <header>
                <img src={Logo} alt="" style={{width: 70}}/>
            </header>
            <div className='divContent'>
                <h3>Avaliações de clientes</h3>
                <span>Nossos clientes alcançam ótimos resultados</span>
                {clientes.map((cliente) => (
                    <div key={cliente.id} className='clienteDiv'>
                        <img src={cliente.img} alt="" className='img'/>
                        <span className='bold'>{cliente.nome}, {cliente.idade}, {cliente.local}</span>
                        <span>Perdeu {cliente.peso} kg</span>
                        <span className='border'>Cliente validado</span>
                        <span className='text'>{cliente.coment}</span>
                    </div>
                ))}
                <span className='textCenter'>Complete nosso teste de 60 segundos e <span className='bold'>obtenha seu próprio plano de dieta Keto !</span> Comece selecionando seu gênero:</span>
                <Link to={'/keto/quiz/mulher/quiz-1'} className='btn mulher'>
                    <span>Mulher</span>
                    <FaAngleRight />
                </Link>
                <Link to={'/keto/quiz/homem/quiz-1'} className='btn homem'>
                    <span>Homem</span>
                    <FaAngleRight />
                </Link>
            </div>
        </div>
    )
}

export default Avaliacoes
