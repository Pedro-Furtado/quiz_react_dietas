import './RenderProvasImg.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import imgProvaSocial_1 from '../../../Images/Provas_1/prova_1.jpeg'
import imgProvaSocial_2 from '../../../Images/Provas_1/prova_2.jpeg'
import imgProvaSocial_3 from '../../../Images/Provas_1/prova_3.jpeg' 
import imgProvaSocial_4 from '../../../Images/Provas_1/prova_4.jpeg' 
import imgProvaSocial_5 from '../../../Images/Provas_1/prova_5.jpeg'

function RenderProvasImg() {
    const itens = [
        {
            img: imgProvaSocial_1,
            peso: '-6kg',
            nome: 'Marcela F.'
        },
        {
            img: imgProvaSocial_2,
            peso: '-23kg',
            nome: 'Alice'
        },
        {
            img: imgProvaSocial_3,
            peso: '-16kg',
            nome: 'Luana'
        },
        {
            img: imgProvaSocial_4,
            peso: '-8kg',
            nome: 'Geovana'
        },
        {
            img: imgProvaSocial_5,
            peso: '-12kg',
            nome: 'Mariana'
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    
    return(
        <div className='containerImgProvas'>
            <Slider {...settings}>
                {itens.map((item, index) => (
                    <div className='item' key={index}>
                        <img src={item.img} alt="" />
                        <div className='results'>
                            <span className='boldResults'>{item.peso}</span>
                            <span>{item.nome}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default RenderProvasImg