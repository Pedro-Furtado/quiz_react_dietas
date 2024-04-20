import '../QuizGeral/QuizGeral.css'
import QuizType_1 from '../../../Components/QuizType_1/QuizType_1';

function Quiz1() {
  //Sua Pergunta Quiz
  const Quest = 'Você tem familiaridades com dietas cetogênicas?'

  //Suas Respostas Quiz
  const Response = [
    {
      id: 1,
      quest: 'Sim, já fiz essas dietas',
    },
    {
      id: 2,
      quest: 'Não, mas conheço',
    },
    {
      id: 3,
      quest: 'Não sei do que se trata',
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

export default Quiz1