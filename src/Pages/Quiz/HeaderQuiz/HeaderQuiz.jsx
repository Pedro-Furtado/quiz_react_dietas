import './HeaderQuiz.css'
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from 'react';
import suaurl from '../../../main';

function HeaderQuiz() {
    const [progressWidth, setProgressWidth] = useState(0);
    const params = useParams()

    const pageNumber = parseInt(params.page.split('-')[1], 10);

    const toLink = pageNumber > 1 ? `/${suaurl}/quiz/${params.genero}/quiz-${pageNumber - 1}` : `/${suaurl}/`;

    const animationBar = (pageNumber) => {
        const newWidth = pageNumber * 11; // Adjust the multiplier as needed
        setProgressWidth(newWidth);
    }

    useEffect(() => {
        animationBar(pageNumber)
    }, [pageNumber])
  
    return (
        <div className='containerHeaderQuiz'>
            <div className='headerContent'>
                <Link className='backBtn' to={toLink}>
                    <IoIosArrowBack style={{cursor: 'pointer'}} color='black'/>
                </Link>
                <span style={{fontSize: 25, fontWeight: 'bold'}}>Sua Logo</span>
                <div className='complemento'></div>
            </div>
            <div className='progressBar' style={{ width: `${progressWidth}%`, transition: 'width 0.3s ease-in-out', }}></div>
        </div>
    )
}

export default HeaderQuiz