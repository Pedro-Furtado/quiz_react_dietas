import '../QuizGeral/QuizGeral.css'
import QuizType_1 from '../../../Components/QuizType_1/QuizType_1'

function Quiz5() {
  //Sua Pergunta Quiz
  const Quest = 'Quão fisicamente ativo você é?'

  //Suas Respostas Quiz
  const Response = [
    {
      id: 1,
      quest: 'Herói do treino (3-5 treinos/semana)',
    },
    {
      id: 2,
      quest: 'Modo leve (1-2 treinos/semana)',
    },
    {
      id: 3,
      quest: 'Um novato (apenas começando)',
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

export default Quiz5