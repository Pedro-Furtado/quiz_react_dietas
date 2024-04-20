import './QuizGeral.css'
import { useParams } from 'react-router-dom';
import HeaderQuiz from '../HeaderQuiz/HeaderQuiz'
import Quiz1 from '../Quiz1/Quiz1'
import Quiz2 from '../Quiz2/Quiz2'
import Quiz3 from '../Quiz3/Quiz3';
import Quiz4 from '../Quiz4/Quiz4';
import Quiz5 from '../Quiz5/Quiz5';
import Quiz6 from '../Quiz6/Quiz6';
import Quiz7 from '../Quiz7/Quiz7';
import Quiz8 from '../Quiz8/Quiz8';
import Explicacao from '../Explicacao/Explicacao';

function QuizGeral() {
    const params = useParams()

    const page = params.page 

    const salvarGenero = (responseText) => {
        localStorage.setItem('Genero', responseText);
    };

    salvarGenero(params.genero)

    return (
        <div>
            <HeaderQuiz />
            <div style={{paddingTop: 60}}>
                {page === 'quiz-1' ? <Quiz1/> : ''}
                {page === 'quiz-2' ? <Explicacao/> : ''}
                {page === 'quiz-3' ? <Quiz2/> : ''}
                {page === 'quiz-4' ? <Quiz3/> : ''}
                {page === 'quiz-5' ? <Quiz4/> : ''}
                {page === 'quiz-6' ? <Quiz5/> : ''}
                {page === 'quiz-7' ? <Quiz6/> : ''}
                {page === 'quiz-8' ? <Quiz7/> : ''}
                {page === 'quiz-9' ? <Quiz8/> : ''}
            </div>
            
        </div>
        
    )
}

export default QuizGeral