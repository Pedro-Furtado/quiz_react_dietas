import '../QuizGeral/QuizGeral.css'
import QuizType_2 from '../../../Components/QuizType_2/QuizType_2';

import ImgCebola from '../../../Images/cebola.png'
import ImgCogumelos from '../../../Images/cogumelo.png'
import ImgOvos from '../../../Images/ovos.png'
import ImgNozes from '../../../Images/nozes.png'
import ImgQueijo from '../../../Images/queijo.png'
import ImgLeite from '../../../Images/leite.png'
import ImgAbacate from '../../../Images/abacate.png'
import ImgFrutosMar from '../../../Images/frutos_mar.png'
import ImgAzeitonas from '../../../Images/azeitonas.png'
import ImgAlcaparras from '../../../Images/alcaparras.png'
import ImgCoco from '../../../Images/coco.png'


function Quiz4() {
    //Sua Pergunta Quiz
    const Quest = 'Quais ingredientes você NÃO GOSTA?'

    //Suas Respostas Quiz
    const Response = [
        {
            id: 1,
            quest: 'Eu como todos eles',
            type: 1
        },
    ]

    const Response2 = [
        {
            id: 1,
            quest: 'Cebolas',
            type: 2,
            img: ImgCebola
        },
        {
            id: 2,
            quest: 'Cogumelos',
            type: 2,
            img: ImgCogumelos
        },
        {
            id: 3,
            quest: 'Ovos',
            type: 2,
            img: ImgOvos
        },
        {
            id: 4,
            quest: 'Nozes',
            type: 2,
            img: ImgNozes
        },
        {
            id: 5,
            quest: 'Queijo',
            type: 2,
            img: ImgQueijo
        },
        {
            id: 6,
            quest: 'Leite',
            type: 2,
            img: ImgLeite
        },
        {
            id: 7,
            quest: 'Abacates',
            type: 2,
            img: ImgAbacate
        },
        {
            id: 8,
            quest: 'Frutos do mar',
            type: 2,
            img: ImgFrutosMar
        },
        {
            id: 9,
            quest: 'Azeitonas',
            type: 2,
            img: ImgAzeitonas
        },
        {
            id: 10,
            quest: 'Alcaparras',
            type: 2,
            img: ImgAlcaparras
        },
        {
            id: 11,
            quest: 'Coco',
            type: 2,
            img: ImgCoco
        },
        {
            id: 12,
            quest: 'Queijo de cabra',
            type: 2,
            img: ImgQueijo
        },
    ]

    const Response3 = [
        {
            id: 1,
            quest: 'Não como nenhum desses',
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

export default Quiz4