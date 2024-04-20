import '../QuizGeral/QuizGeral.css'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';

function Quiz8() {
    const params = useParams()
    const navigate = useNavigate()

    const [idade, setIdade] = useState('')
    const [altura, setAltura] = useState('')
    const [pesoAtual, setPesoAtual] = useState('')
    const [pesoAlvo, setPesoAlvo] = useState('')

    const [msgIdade, setMsgIdade] = useState(false)
    const [msgAltura, setMsgAltura] = useState(false)
    const [msgPesoAtual, setMsgPesoAtual] = useState(false)
    const [msgPesoAlvo, setMsgPesoAlvo] = useState(false)

    useEffect(() => {
        const infosUser = localStorage.getItem('infosUser');
    
        if (infosUser) {
            try {
                const parsedInfosUser = JSON.parse(infosUser);
    
                if (
                    'idade' in parsedInfosUser &&
                    'altura' in parsedInfosUser &&
                    'pesoAtual' in parsedInfosUser &&
                    'pesoAlvo' in parsedInfosUser
                ) {
                    setIdade(parsedInfosUser.idade);
                    setAltura(parsedInfosUser.altura);
                    setPesoAtual(parsedInfosUser.pesoAtual);
                    setPesoAlvo(parsedInfosUser.pesoAlvo);
                } else {
                    console.error('Sem informações de usuário');
                }
            } catch (error) {
                console.error('Erro ao analisar as informações do usuário', error);
            }
        }
    }, []);

    let mainPage = `/keto/quiz/${params.genero}/mainpage`

    const salvarInfos = () => {
        if (idade === '' || altura === '' || pesoAtual === '' || pesoAlvo === '') {
            if (idade === '') setMsgIdade(true);
            if (altura === '') setMsgAltura(true);
            if (pesoAtual === '') setMsgPesoAtual(true);
            if (pesoAlvo === '') setMsgPesoAlvo(true);
        } else {
            const userInfos = {
                idade: idade,
                altura: altura,
                pesoAtual: pesoAtual,
                pesoAlvo: pesoAlvo
            }
    
            localStorage.setItem('infosUser', JSON.stringify(userInfos));
    
            setIdade('');
            setAltura('');
            setPesoAtual('');
            setPesoAlvo('');
    
            navigate(mainPage);
        }
    }

    return (
            <div className='conatinerForm'>
                <div className='inputsDiv'>
                <div className='divLabel'>
                    <span className='label'>Idade</span>
                    <div className={`divInput ${msgIdade ? 'msgOpen' : ''}`}>
                        <input type="number" placeholder='exp: 41' value={idade} onChange={(e) => {setIdade(e.target.value), setMsgIdade(false)}} />
                    </div>
                    {msgIdade && <span className='msgText'>Preencha com sua idade</span>}
                </div>
                <div className='divLabel'>
                    <span className='label'>Altura</span>
                    <div className={`divInput ${msgAltura ? 'msgOpen' : ''}`}>
                        <input type="number" placeholder='exp: 165cm é (1,65m)' value={altura} onChange={(e) => {setAltura(e.target.value), setMsgAltura(false)}}/>
                        <span>cm</span>
                    </div>
                    {msgAltura && <span className='msgText'>Preencha com sua altura em cm</span>}
                </div>
                <div className='divLabel'>
                    <span className='label'>Peso atual</span>
                    <div className={`divInput ${msgPesoAtual ? 'msgOpen' : ''}`}>
                        <input type="number" placeholder='exp: 85' value={pesoAtual} onChange={(e) => {setPesoAtual(e.target.value), setMsgPesoAtual(false)}}/>
                        <span>kg</span>
                    </div>
                    {msgPesoAtual && <span className='msgText'>Preencha com o seu peso hoje em kg</span>}
                </div>
                <div className='divLabel'>
                    <span className='label'>Peso objetivo</span>
                    <div className={`divInput ${msgPesoAlvo ? 'msgOpen' : ''}`}>
                        <input type="number" placeholder='exp: 65' value={pesoAlvo} onChange={(e) => {setPesoAlvo(e.target.value), setMsgPesoAlvo(false)}}/>
                        <span>kg</span>
                    </div>
                    {msgPesoAlvo && <span className='msgText'>Preencha com o peso que você quer em kg</span>}
                </div>
                <Link className='btnProximo2' onClick={salvarInfos}>
                    <div></div>
                    <span>Próximo</span>
                    <FaAngleRight size={20}/>
                </Link>
                </div>
                
            </div>  
    )
}

export default Quiz8