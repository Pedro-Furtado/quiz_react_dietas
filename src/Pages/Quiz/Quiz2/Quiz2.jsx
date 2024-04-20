import '../QuizGeral/QuizGeral.css'
import QuizType_1 from '../../../Components/QuizType_1/QuizType_1';

function Quiz2() {
    //Sua Pergunta Quiz
    const Quest = 'Quanto tempo você dispõe diariamente para preparar as refeições?'

    //Suas Respostas Quiz
    const Response = [
        {
            id: 1,
            quest: 'Até 30 minutos',
        },
        {
            id: 2,
            quest: 'Até 1 hora',
        },
        {
            id: 3,
            quest: 'Mais de 1 hora',
        },
    ]

    return (
        <div className='containerQuiz'>
            <div className='quest'>
                <QuizType_1 quest={Quest} options={Response}/>
            </div>
        </div>
    )
}

export default Quiz2