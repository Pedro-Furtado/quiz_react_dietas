import './QuizType_3.css'
import PropTypes from 'prop-types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';

function QuizType_3({quest, options_1, options_2}) {
    const params = useParams()
    const [selectedResponses, setSelectedResponses] = useState([]);
    const [clickResponse3, setClickResponse3] = useState(false)
    const [msgNotific, setMsgNotific] = useState(false)
    const navigate = useNavigate()

    const ClickResponse2 = (responseId, responseText, responseType) => {
        const isResponseSelected = selectedResponses.find((response) => response.id === responseId);
    
        if (isResponseSelected) {
            const updatedResponses = selectedResponses.filter((response) => response.id !== responseId);
            setSelectedResponses(updatedResponses);
        } else {
            setSelectedResponses([...selectedResponses, { id: responseId, quest: responseText, type: responseType }]);
        }
    };

    const ClickResponse3 = () => {
        setClickResponse3(!clickResponse3)
    }

    useEffect(() => {
        if(selectedResponses.length > 0){
            setClickResponse3(false)
            setMsgNotific(false)
        }
    }, [selectedResponses])

    useEffect(() => {
        if(clickResponse3 === true){
            setSelectedResponses([]);
            setMsgNotific(false)
        }
        
    }, [clickResponse3]);

    const pageNumber = parseInt(params.page.split('-')[1], 10);

    let proximaPagina = `/keto/quiz/${params.genero}/quiz-${pageNumber + 1}`;

    const salvarResposta = () => {
        if(selectedResponses.length > 0){
            localStorage.setItem(`Quiz${pageNumber}`, JSON.stringify(selectedResponses));
        }else if(clickResponse3){
            localStorage.setItem(`Quiz${pageNumber}`, JSON.stringify(options_2[0]));
        }else{
            setMsgNotific(true)
            return
        }
        navigate(proximaPagina)
    };

    useEffect(() => {
        const storedResponse = localStorage.getItem(`Quiz${pageNumber}`);
        
        if (storedResponse) {
            const { id, type } = JSON.parse(storedResponse);
        
            const btnQuest = document.getElementById(`btnQuest-${id}-${type}`);
            if(btnQuest && type === 3) {
                setClickResponse3(true)
            }else{
                const parseResponse = JSON.parse(storedResponse)
                setSelectedResponses(parseResponse);
            }
        }
    }, [pageNumber]);
    
    return (
        <div className='containerQuizType_3'>
                <h2>{quest}</h2>
                {options_1.map((q, index) => (
                    <div 
                        id={`btnQuest-${q.id}-${q.type}`}
                        className={`btnQuest ${params.genero} ${selectedResponses.some((response) => response.id === q.id) ? 'check' : ''}`}
                        key={index}
                        onClick={() => ClickResponse2(q.id, q.quest, q.type)}
                    >
                        <span>{q.quest}</span>
                        {selectedResponses.some((response) => response.id === q.id) ? <IoCheckbox size={20} color='rgb(226, 121, 0)' /> : <MdCheckBoxOutlineBlank size={20}/>}
                        
                    </div>
                ))}
                {options_2.map((q, index) => (
                    <div 
                        id={`btnQuest-${q.id}-${q.type}`}
                        className={`btnQuest ${params.genero} ${clickResponse3 ? 'check' : ''}`} 
                        key={index}
                        onClick={ClickResponse3}
                    >
                        <span>{q.quest}</span>
                        {clickResponse3 ? <IoCheckbox size={20} color='rgb(226, 121, 0)' /> : <MdCheckBoxOutlineBlank size={20}/>}
                    </div>
                ))}
                {msgNotific && 
                    <div className='notificMsg'>
                        <span>Selecione uma resposta</span>
                    </div>
                }
                <Link className='btnProximo' onClick={salvarResposta} >
                    <div></div>
                    <span>Próximo</span>
                    <FaAngleRight size={20}/>
                </Link>
        </div>
    )
}
QuizType_3.propTypes = {
    quest: PropTypes.string.isRequired,
    options_1: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        quest: PropTypes.string.isRequired,
        type: PropTypes.number.isRequired,
    })).isRequired,
    options_2: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        quest: PropTypes.string.isRequired,
        type: PropTypes.number.isRequired,
    })).isRequired,
};

export default QuizType_3