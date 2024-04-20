import { useEffect, useState } from 'react'
import './PagePrincipal.css'

import ImgGrafico from '../../Images/grafico.png'
import ImgMaleBefore from '../../Images/male-before.png'
import ImgMaleAfter from '../../Images/male-after.png'
import ImgFemaleBefore from '../../Images/female-before.png'
import ImgFemaleAfter from '../../Images/female-after.png'
import { Link, useParams } from 'react-router-dom'

import { FaCircleCheck } from "react-icons/fa6";

import ImgPaletaFoods from '../../Images/food-plates-mobile.png'
import suaurl from '../../main'

function PagePrincipal() {
  const params = useParams()

  const [genero, setGenero] = useState('')

  const [pesoAlvo, setPesoAlvo] = useState('')
  const [pesoAtual, setPesoAtual] = useState('')
  const [altura, setAltura] = useState('')
  const [IMC, setIMC] = useState('')
  const [imcStatus, setImcStatus] = useState('')
  const [porcentImc, setPorcentImc] = useState('')
  const [cursorIMC, setCursorIMC] = useState('')
  const [mes, setMes] = useState('')
  const [mesFuturo, setMesFuturo] = useState('')

  useEffect(() => {
    setGenero(params.genero)
  }, [params])

  const DateToday = () => {
    const meses = [
      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
      "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];

    const today = new Date();
    const monthNumber  = today.getMonth() + 1; 
    const monthNumberFuture = today.getMonth() + 4
    const monthName = meses[monthNumber];
    const monthNameFuture = meses[monthNumberFuture];

    setMes(monthName)
    setMesFuturo(monthNameFuture)
  }


  const buscarPesoAlvo = () => {
    const infosUserString = localStorage.getItem('infosUser');

    const infosUserObj = JSON.parse(infosUserString);

    const pesoAlvoStorage = infosUserObj.pesoAlvo;

    setPesoAlvo(pesoAlvoStorage);
  };

  const buscarPesoAtual = () => {
    const infosUserString = localStorage.getItem('infosUser');

    const infosUserObj = JSON.parse(infosUserString);

    const pesoAtualStorage = infosUserObj.pesoAtual;

    setPesoAtual(pesoAtualStorage);
  }

  const buscarAltura = () => {
    const infosUserString = localStorage.getItem('infosUser');

    const infosUserObj = JSON.parse(infosUserString);

    const pesoAlturaStorage = infosUserObj.altura;

    setAltura(pesoAlturaStorage);
  }

  useEffect(() => {
    buscarPesoAlvo()
    buscarPesoAtual()
    buscarAltura()
    DateToday()
  }, [])

  const calcularImc = (pesoAtual, altura) => {
    const IMC = (pesoAtual) / ((altura / 100) * (altura / 100))
    setIMC(IMC.toFixed(2))

    if(IMC < 18.5){
      setImcStatus('Abaixo do peso')
      setCursorIMC('Abaixo')
    } else if( IMC > 18.5 && IMC < 24.9){
      setImcStatus('Normal')
      setCursorIMC('Normal')
    } else if(IMC > 24.9 && IMC < 29.9){
      setImcStatus('Sobrepeso')
      setCursorIMC('Obeso')
    } else if(IMC > 29.9 && IMC < 34.9){
      setImcStatus('Obesidade classe 1')
      setCursorIMC('Obeso')
    } else if(IMC > 34.9 && IMC < 39.9){
      setImcStatus('Obesidade classe 2')
      setCursorIMC('Obeso')
    } else if(IMC > 39.9){
      setImcStatus('Obesidade classe 3')
      setCursorIMC('Obeso')
    }

    const porcentImc = ((IMC - 24.9) / 24.9) * 100
    setPorcentImc(porcentImc.toFixed(0))
  }

  useEffect(() => {
    calcularImc(pesoAtual, altura)
  }, [pesoAtual, altura])

  const renderGrafico = () => {
    return(
      <div className='grapfDiv'>
        <div className='pesosDiv'>
          <span className='peso peso3'>{parseInt(pesoAlvo, 10) + 3}</span>
          <span className='peso peso2'>{parseInt(pesoAlvo, 10) + 2}</span>
          <span className='peso peso1'>{parseInt(pesoAlvo, 10) + 1}</span>
          <span className='pesoAtual main'>{pesoAlvo}kg</span>
          <span className='peso peso1'>{parseInt(pesoAlvo, 10) - 1}</span>
          <span className='peso peso2'>{parseInt(pesoAlvo, 10) - 2}</span>
          <span className='peso peso3'>{parseInt(pesoAlvo, 10) - 3}</span>
        </div>
        <span className='spanSmall'>Até {mesFuturo} de 2024</span>
        <div className='grafico'>
          <div className='graficoGrade cantoLeft'></div>
          <div className='graficoGrade meio'></div>
          <div className='graficoGrade'></div>
          <div className='graficoGrade cantoRight'></div>
          <div className='linhaGrafico'>
            <img src={ImgGrafico} alt="" />
            
          </div>
          <div className='labelGrafico atual'>
            <span>{mes} {pesoAtual - 8} kg</span>
          </div>
          <div className='labelGrafico alvo'>
            <span>{mesFuturo} {pesoAlvo} kg</span>
          </div>
        </div>
      </div>
    )
  }

  const renderPorcentUsers = () => {
    return(
      <div className='divContent'>
        <span className='porcentText'><span className='porcentValue'>87</span>%</span>
        <span className='text'> Os usuários perderam peso usando a dieta</span>
      </div>
    )
  }

  const renderSemana = () => {
    return(
      <div className='divContent'>
        <div className='daysDiv'>
          <div className='divDay'>
            <span className='semana'>S</span>
            <span className='dia'>1</span>
          </div>
          <div className='divDay'>
            <span className='semana'>T</span>
            <span className='dia'>2</span>
          </div>
          <div className='divDay'>
            <span className='semana'>Q</span>
            <span className='dia'>3</span>
          </div>
          <div className='divDay'>
            <span className='semana'>Q</span>
            <span className='dia'>4</span>
          </div>
          <div className='divDay'>
            <span className='semana'>S</span>
            <span className='dia'>5</span>
          </div>
          <div className='divDay'>
            <span className='semana'>S</span>
            <span className='dia'>6</span>
          </div>
          <div className='divDay'>
            <span className='semana'>D</span>
            <span className='dia'>7</span>
          </div>
        </div>
        <span className='pesoPerdido'>-2,2kg</span>
        <span className='spanCopy'>Depois da primeira semana</span>
      </div>
    )
  }

  const renderIMC = () => {
    return(
      <div className='divContent'>
        <div className='imcText'>
          <span>Seu IMC</span>
        </div>
        <div style={{width: '90%'}}>
          <span className='IMC'>{IMC}</span>
          <span className='statusIMC'>{imcStatus}</span>
        </div>
        <span style={{fontSize: 14, width: '90%'}}>Seu IMC está {porcentImc}% {porcentImc < 0 ? 'abaixo' : 'acima'} da média</span>
        <div className='divMarcadorIMC'>
          <div className={`blue ${cursorIMC === 'Abaixo' ? 'Abaixo' : ''}`}></div>
          <div className={`green ${cursorIMC === 'Normal' ? 'Normal' : ''}`}></div>
          <div className={`red ${cursorIMC === 'Obeso' ? 'Obeso' : ''}`}></div>
        </div>
        <div className='divBarImc'>
          <div className='barImc blue'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='barImc green'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='barImc red'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='divNivelIMC'>
          <span className='nivelIMC blue'>ABAIXO DO PESO</span>
          <span className='nivelIMC green'>NORMAL</span>
          <span className='nivelIMC red'>OBESO</span>
        </div>
      </div>
    )
  }

  const renderCorpo = () => {
    return(
      <div className='divContent'>
        <div className='imcText'>
          <span>Estimativa de mudança corporal</span>
        </div>
        <div className='divCorpo'>
          <div className='divAntesDepois'>
            <span>Antes</span>
            <span>Depois</span>
          </div>
          <div className='divImg'>
            {genero === 'mulher' ? <img src={ImgFemaleBefore} alt="" /> : <img src={ImgMaleBefore} alt="" />}
            <div className='locaisCorpo'>
              <div>
                <span>Cintura <span className='porcent'>-14%</span></span>
                <div className='line'></div>
              </div>
              <div>
                <span>Quadril <span className='porcent'>-10%</span></span>
                <div className='line'></div>
              </div>
              <div>
                <span>Coxas <span className='porcent'>-12%</span></span>
                <div className='line'></div>
              </div>
            </div>
            {genero === 'mulher' ? <img src={ImgFemaleAfter} alt="" /> : <img src={ImgMaleAfter} alt="" />}
          </div>
        </div>
      </div>
    )
  }

  const renderButton = () => {
    return(
      <Link className='btnObter' to={`/${suaurl}/quiz/${params.genero}/emailpage`}>
        <span>Obtenha seu plano</span>
      </Link>
    )
  }

  const renderReceitas = () => {
    return(
      <div className='divContent receitas'>
        <div className='imcText'>
          <span>Variações alimentares para você</span>
        </div>
        <div className='divImgReceitas'>
          <img src={ImgPaletaFoods} alt="" />
        </div>
        <div className='divTextReceitas'>
          <span className='label'>1000+</span>
          <span>Receitas</span>
        </div>
      </div>
    )
  }

  const renderCopyEscolher = () => {
    return(
      <div className='divCopyEscolher'>
        <h3>Ao escolher nosso aplicativo você obtém</h3>
        <div className='copy'>
          <div>
            <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
          </div>
          <div>
            <span className='label'>Plano de refeições personalizado</span>
            <span>
              Café da manhã, almoço, jantar e até lanches – tudo planejado para você no app. 
              Você não precisa perder tempo monitorando calorias ou contando carboidratos porque 
              todas as refeições já são personalizadas para queima instantânea de gordura.
            </span>
          </div>
        </div>
        <div className='copy'>
          <div>
            <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
          </div>
          <div>
            <span className='label'>Receitas e lista de compras</span>
            <span>
              Com receitas fáceis e rápidas de preparar, você nunca mais terá que se perguntar 
              o que tem para o jantar. Cada prato vem com uma lista de ingredientes baratos que 
              você pode encontrar no supermercado local. Abra seu aplicativo no telefone ou online, 
              imprima a lista e faça um estoque para as próximas semanas.
            </span>
          </div>
        </div>
        <div className='copy'>
          <div>
            <FaCircleCheck color='rgb(16, 179, 16)' size={20}/>
          </div>
          <div>
            <span className='label'>Rastreador diário</span>
            <span>
              Quer use o aplicativo no telefone ou on-line, você monitorará seus passos, 
              consumo de água, calorias e peso todos os dias, fornecendo informações valiosas 
              sobre seu progresso. O aplicativo irá ajudá-lo a tomar decisões informadas e 
              desenvolver novos hábitos.
            </span>
          </div>
        </div>
      </div>
    )
  }

  const renderPilulaMagica = () => {
    return(
      <div className='containerPilula'>
        <span>UMA PALAVRA DO NOSSO CONSULTOR</span>
        <h3>A dieta cetogênica é a pílula mágica que deixa seu corpo saudável</h3>
        <i>
          O estilo de vida cetogênico vai ao fundo de quase todas 
          as doenças crônicas conhecidas pela humanidade. 
          Essa dieta não trata essas doenças uma por uma, como fazem 
          os médicos convencionais, mas chega à raiz do problema – a resistência à insulina.
        </i>
        <i>
          Quando você tem os níveis de insulina sob controle, 
          você reduz a inflamação e, portanto, o risco de doenças crônicas.
        </i>
        {renderButton()}
      </div>
    )
  }

  return (
    <div className='containerPagePrincipal'>
      <div className='contentDiv'>
        <h2>Sua Logo</h2>
        <h2 className='headLine'>Obtenha sua dieta <span>personalizada</span></h2>
        <span className='copy'>Com base nas suas respostas, você terá...</span>
        {renderGrafico()}
        {renderPorcentUsers()}
        {renderSemana()}
        {renderButton()}
        {renderIMC()}
        {renderCorpo()}
        {renderReceitas()}
        {renderButton()}
        {renderCopyEscolher()}
        {renderPilulaMagica()}
      </div>
    </div>
  )
}

export default PagePrincipal