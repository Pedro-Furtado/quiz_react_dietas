import { useEffect, useState } from 'react'
import './PageEmail.css'
import { useNavigate, useParams } from 'react-router-dom'

import Logo from '../../Images/Logo.png'
import suaurl from '../../main'

function PageEmail() {
    const params = useParams()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')

    const [msgEmail, setMsgEmail] = useState(false)
    const [msgNome, setMsgNome] = useState(false)

    let percaPesoPage = `/${suaurl}/quiz/${params.genero}/plano`

    const salvarNomeEmail = () => {
        if(nome === '' || email === ''){
            if(nome === '') setMsgNome(true)
            if(email === '') setMsgEmail(true)
        } else {
            const userInfosPessoais = {
                nome: nome,
                email: email,
            }
    
            localStorage.setItem('infosPessoais', JSON.stringify(userInfosPessoais));
    
            setNome('');
            setEmail('');
    
            navigate(percaPesoPage);
        }
    }

    useEffect(() => {
        const infosPessoais = localStorage.getItem('infosPessoais')

        if (infosPessoais) {
            try {
                const parsedInfosUser = JSON.parse(infosPessoais);
    
                if (
                    'nome' in parsedInfosUser &&
                    'email' in parsedInfosUser
                ) {
                    setNome(parsedInfosUser.nome);
                    setEmail(parsedInfosUser.email);
                } else {
                    console.error('Sem informações de usuário');
                }
            } catch (error) {
                console.error('Erro ao analisar as informações do usuário', error);
            }
        }
    }, [])

    return (
        <div className='containerPageEmail'>
            <div className='contentDiv'>
                <header>
                    <img src={Logo} alt="" style={{width: 70}}/>
                </header>
                <span className='headline'>Criamos um <span className='chamativo'>plano de dieta cetogênica personalizado</span> que o ajudará a atingir seus objetivos.</span>
                <div className='divInputName'>
                    <span>Como podemos te chamar?</span>
                    <input className={`${msgNome ? 'msgOpen' : ''}`} type="text" placeholder='Seu nome' value={nome} onChange={(e) => {setNome(e.target.value), setMsgNome(false)}}/>
                    {msgNome && <span className='msgTextName'>Preencha com seu nome</span>}
                </div>
                <div className='divInputName'>
                    <span>Qual e-mail você gostaria de usar para acessar seu plano?</span>
                    <input className={`${msgEmail ? 'msgOpen' : ''}`} type="email" placeholder='Seu endereço de email' value={email} onChange={(e) => {setEmail(e.target.value), setMsgEmail(false)}}/>
                    {msgEmail && <span className='msgTextName'>Preencha com seu email</span>}
                </div>
                <div className='btnPlano' onClick={salvarNomeEmail}>
                    <span>Clique aqui para pegar seu plano</span>
                </div>
                <span className='seguranca'>Nós respeitamos sua privacidade. Nunca venderemos, alugaremos ou compartilharemos seu endereço de e-mail. Isso é mais do que uma apólice, é a nossa garantia pessoal!</span>
            </div>
            
        </div>
    )
}

export default PageEmail
