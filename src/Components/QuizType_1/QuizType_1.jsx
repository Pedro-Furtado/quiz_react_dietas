import './QuizType_1.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import suaurl from '../../main';

function QuizType_1({quest, options}) {
    const params = useParams()
    const navigate = useNavigate()
    const [clickResponse, setClickResponse] = useState(null)
    const pageNumber = parseInt(params.page.split('-')[1], 10);

    const salvarResposta = (responseId, responseText) => {
        options.forEach((option) => {
        const btn = document.getElementById(`btnQuest-${option.id}`);
        if (btn) {
            btn.classList.remove('check');
        }
        });
        const btnQuestCheck = document.getElementById(`btnQuest-${responseId}`);
        btnQuestCheck.classList.add('check')
        setClickResponse(`btnQuest-${responseId}`)
        localStorage.setItem(`Quiz${pageNumber}`, JSON.stringify({ id: responseId, quest: responseText }));
        setTimeout(() => {
        navigate(`/${suaurl}/quiz/${params.genero}/quiz-${pageNumber + 1}`)
        }, 500)
    };

    useEffect(() => {
        const storedResponse = localStorage.getItem(`Quiz${pageNumber}`);
        
        if (storedResponse) {
        const { id } = JSON.parse(storedResponse);

        const btnQuestCheck = document.getElementById(`btnQuest-${id}`);
        if (btnQuestCheck) {
            btnQuestCheck.classList.add('check')
            setClickResponse(`btnQuest-${id}`)
        }
        }
    }, [pageNumber]);

    return (
        <div className='containerQuizType_1'>
            <h2>{quest}</h2>
            {options.map(option => (
                <div key={option.id} id={`btnQuest-${option.id}`} className={`btnQuest ${params.genero}`} onClick={() => salvarResposta(option.id, option.quest)}>
                    <div className='divBtnQuestText'>
                        <span className='textBig'>{option.quest}</span>
                        {option.questSmall != '' && <span className='textSmall'>{option.questSmall}</span>}
                    </div>
                    <div>
                        {clickResponse === `btnQuest-${option.id}` ? <FaCircleCheck color='rgb(226, 121, 0)' size={16}/> : <FaRegCircle color='#adadad' size={15}/>}
                    </div>
                </div>
            ))}
        </div>
    )
}
QuizType_1.propTypes = {
    quest: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        quest: PropTypes.string.isRequired,
    })).isRequired,
};

export default QuizType_1