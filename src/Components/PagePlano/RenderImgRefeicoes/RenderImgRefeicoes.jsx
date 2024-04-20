import './RenderImgRefeicoes.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import imgRefeicao_1 from '../../../Images/Refeicao/breakfast-1.jpg'
import imgRefeicao_2 from '../../../Images/Refeicao/breakfast-2.jpg'
import imgRefeicao_3 from '../../../Images/Refeicao/breakfast-3.jpg'

import imgRefeicao_4 from '../../../Images/Refeicao/dinner-1.jpg'
import imgRefeicao_5 from '../../../Images/Refeicao/dinner-2.jpg'
import imgRefeicao_6 from '../../../Images/Refeicao/dinner-3.jpg'

import imgRefeicao_7 from '../../../Images/Refeicao/lunch-1.jpg'
import imgRefeicao_8 from '../../../Images/Refeicao/lunch-2.jpg'
import imgRefeicao_9 from '../../../Images/Refeicao/lunch-3.jpg'

import imgRefeicao_10 from '../../../Images/Refeicao/snack-1.jpg'
import imgRefeicao_11 from '../../../Images/Refeicao/snack-2.jpg'
import imgRefeicao_12 from '../../../Images/Refeicao/snack-3.jpg'

function RenderImgRefeicoes() {
    const itens = [
        {
            hora: 'Café da manhã',
            img: imgRefeicao_1,
            title: 'Panquecas De Manteiga De Amendoim',
            carb: 12,
            prot: 31,
            gord: 70
        },
        {
            hora: 'Café da manhã',
            img: imgRefeicao_2,
            title: 'Fritada de Couve e Bacon',
            carb: 5,
            prot: 26,
            gord: 11
        },
        {
            hora: 'Café da manhã',
            img: imgRefeicao_3,
            title: 'Torrada Com Queijo Mussarela E Pesto',
            carb: 6,
            prot: 17,
            gord: 7
        },
        {
            hora: 'Jantar',
            img: imgRefeicao_4,
            title: 'Frango Com Abacate Grelhado',
            carb: 5,
            prot: 21,
            gord: 3
        },
        {
            hora: 'Jantar',
            img: imgRefeicao_5,
            title: 'Caçarola Com Atum e Couve-Flor',
            carb: 5,
            prot: 17,
            gord: 15
        },
        {
            hora: 'Jantar',
            img: imgRefeicao_6,
            title: 'Hambúrguer De Cordeiro Com Queijo Halloumi',
            carb: 5,
            prot: 26,
            gord: 15
        },
        {
            hora: 'Almoço',
            img: imgRefeicao_7,
            title: 'Salmão Cremoso Com Alho Toscano',
            carb: 5,
            prot: 23,
            gord: 15
        },
        {
            hora: 'Almoço',
            img: imgRefeicao_8,
            title: 'Keto Alfredo Zoodles Com Nozes Macadâmia e Limão',
            carb: 8,
            prot: 26,
            gord: 16
        },
        {
            hora: 'Almoço',
            img: imgRefeicao_9,
            title: 'Espetadas de Porco e Pimenta',
            carb: 8,
            prot: 21,
            gord: 9
        },
        {
            hora: 'Lanche',
            img: imgRefeicao_10,
            title: 'Iogurte Com Amêndoas e Nozes',
            carb: 7,
            prot: 18,
            gord: 1
        },
        {
            hora: 'Lanche',
            img: imgRefeicao_11,
            title: 'Mini Pizzas De Berinjela',
            carb: 4,
            prot: 16,
            gord: 15
        },
        {
            hora: 'Lanche',
            img: imgRefeicao_12,
            title: 'Trufas de Amêndoa',
            carb: 2,
            prot: 2,
            gord: 5
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return(
        <div className='containerImgRefeicoes'>
            <Slider {...settings}>
                {itens.map((item, index) => (
                    <div className='item' key={index}>
                        <span className='hora'>{item.hora}</span>
                        <img src={item.img} alt="" />
                        <div className='infosDiv'>
                            <span className='title'>{item.title}</span>
                            <div className='infosAli'>
                                <span>{item.carb}g de carboidratos</span>
                                <span className='center'>{item.prot}g de proteína</span>
                                <span>{item.gord}g de gordura</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default RenderImgRefeicoes