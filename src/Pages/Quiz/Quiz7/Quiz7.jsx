import '../QuizGeral/QuizGeral.css'
import QuizType_3 from '../../../Components/QuizType_3/QuizType_3';

function Quiz7() {
    //Sua Pergunta Quiz
    const Quest = 'Alguma das seguintes situações se aplica a você?'

    //Suas Respostas Quiz
    const Response2 = [
        {
            id: 1,
            quest: 'Diabetes (qualquer estágio)',
            type: 1
        },
        {
            id: 2,
            quest: 'Doenças ou problemas renais',
            type: 1
        },
        {
            id: 3,
            quest: 'Doenças ou problemas hepáticos',
            type: 1
        },
        {
            id: 4,
            quest: 'Doenças ou problemas no pâncreas',
            type: 1
        },
        {
            id: 5,
            quest: 'Estou me recuperando de uma cirurgia',
            type: 1
        },
        {
            id: 6,
            quest: 'Problemas de saúde mental',
            type: 1
        },
        {
            id: 7,
            quest: 'Câncer',
            type: 1
        },
        {
            id: 8,
            quest: 'Doença cardíaca ou acidente vascular cerebral',
            type: 1
        },
        {
            id: 9,
            quest: 'Pressão alta',
            type: 1
        },
        {
            id: 10,
            quest: 'Problemas de tireóide',
            type: 1
        },
        {
            id: 11,
            quest: 'Colesterol alto',
            type: 1
        },
        {
            id: 12,
            quest: 'Outros problemas de saúde',
            type: 1
        },
    ]

    const Response3 = [
        {
            id: 1,
            quest: 'Não me aplico a nenhuma das situações',
            type: 3
        },
    ]
    
    return (
        <div className='containerQuiz'>
            <div className='quest'>
                <QuizType_3 quest={Quest} options_1={Response2} options_2={Response3}/>
            </div>
        </div>
    )
}

export default Quiz7