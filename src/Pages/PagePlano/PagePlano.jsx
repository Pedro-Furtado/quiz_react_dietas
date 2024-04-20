import './PagePlano.css'
import { useEffect, useState } from 'react';
import RenderHeader from '../../Components/PagePlano/RenderHeader/RenderHeader';
import RenderHeadLine from '../../Components/PagePlano/RenderHeadLine/RenderHeadLine';
import RenderReembolso from '../../Components/PagePlano/RenderReembolso/RenderReembolso';
import RenderReceberDeVolta from '../../Components/PagePlano/RenderReceberDeVolta/RenderReceberDeVolta';
import RenderButton_1 from '../../Components/PagePlano/RenderButton_1/RenderButton_1';
import RenderObterReembolso from '../../Components/PagePlano/RenderObterReembolso/RenderObterReembolso';
import RenderProvaSocial from '../../Components/PagePlano/RenderProvaSocial/RenderProvaSocial';
import RenderObjetivo from '../../Components/PagePlano/RenderObjetivo/RenderObjetivo';
import RenderRefeicoes from '../../Components/PagePlano/RenderRefeicoes/RenderRefeicoes';
import RenderRastreamento from '../../Components/PagePlano/RenderRastreamento/RenderRastreamento';
import RenderEquipe from '../../Components/PagePlano/RenderEquipe/RenderEquipe';
import RenderPreco from '../../Components/PagePlano/RenderPreco/RenderPreco';
import RenderProvaSocial_2 from '../../Components/PagePlano/RenderProvaSocial_2/RenderProvaSocial_2';
import RenderButton from '../../Components/PagePlano/RenderButton/RenderButton';

function PagePlano() {
    const [selectedItem, setSelectedItem] = useState(2);
    const [timeLeft, setTimeLeft] = useState(600);
    const [userName, setUserName] = useState('')

    useEffect(() => {
        if (timeLeft === 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    useEffect(() => {
        const infosPessoais = localStorage.getItem('infosPessoais')
        if(infosPessoais){
            const parse = JSON.parse(infosPessoais)
            setUserName(parse.nome)
        }
    }, [])

    const selecionarPlano = (id) => {
        setSelectedItem(id);
    };

    return (
        <div className='containerPagePlano'>
            <div className='contentDiv'>
                <RenderHeader />
                <RenderHeadLine userName={userName}/>
                <RenderReembolso />
                <RenderButton_1 />
                <RenderReceberDeVolta />
                <RenderObterReembolso />
                <RenderProvaSocial />
                <RenderObjetivo />
                <RenderRefeicoes />
                <RenderRastreamento />
                <RenderEquipe />
                <RenderPreco selectedItem={selectedItem} timeLeft={timeLeft} selecionarPlano={selecionarPlano}/>
                <RenderButton selectedItem={selectedItem}/>
                <RenderProvaSocial_2 />
                <RenderPreco selectedItem={selectedItem} timeLeft={timeLeft} selecionarPlano={selecionarPlano}/>
                <RenderButton selectedItem={selectedItem}/>
            </div>
        </div>
    )
}

export default PagePlano
