import '../QuizGeral/QuizGeral.css'
import QuizType_2 from '../../../Components/QuizType_2/QuizType_2';

import ImgAves from '../../../Images/aves.png'
import ImgPorco from '../../../Images/porco.png'
import ImgBovina from '../../../Images/bovino.png'
import ImgPeixe from '../../../Images/peixe.png'
import ImgCordeiro from '../../../Images/cordeiro.png'


function Quiz3() {
    //Sua Pergunta Quiz
    const Quest = 'Quais carnes você NÃO GOSTA?'

    //Suas Respostas Quiz
    const Response = [
        {
            id: 1,
            quest: 'Eu como todas as carnes',
            type: 1
        },
    ]

    const Response2 = [
        {
            id: 1,
            quest: 'Aves',
            type: 2,
            img: ImgAves
        },
        {
            id: 2,
            quest: 'Carne de porco',
            type: 2,
            img: ImgPorco
        },
        {
            id: 3,
            quest: 'Carne bovina',
            type: 2,
            img: ImgBovina
        },
        {
            id: 4,
            quest: 'Peixe',
            type: 2,
            img: ImgPeixe
        },
        {
            id: 5,
            quest: 'Cordeiro',
            type: 2,
            img: ImgCordeiro
        },
    ]

    const Response3 = [
        {
            id: 1,
            quest: 'Eu sou vegetariano',
            type: 3
        },
    ]

    return (
        <div className='containerQuiz'>
            <div className='quest'>
                <QuizType_2 quest={Quest} options_1={Response} options_2={Response2} options_3={Response3}/>
            </div>
        </div>
    )
}

export default Quiz3