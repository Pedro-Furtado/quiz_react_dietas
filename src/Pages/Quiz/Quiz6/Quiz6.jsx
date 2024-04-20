import '../QuizGeral/QuizGeral.css'
import QuizType_1 from '../../../Components/QuizType_1/QuizType_1'

function Quiz6() {
  //Sua Pergunta Quiz
  const Quest = 'Quão disposto você está a perder peso?'

  //Suas Respostas Quiz
  const Response = [
    {
      id: 1,
      quest: 'Eu só quero experimentar a dieta keto',
    },
    {
      id: 2,
      quest: 'Quero experimentar e perder peso',
    },
    {
      id: 3,
      quest: 'Eu quero perder o máximo de peso',
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

export default Quiz6