import React, { useState } from 'react'
import './Faq.css'
import UnionFaqImg from '../../../assets/images/UnionFaqImg.svg'
import { questionData } from '../../app/data'
const Faq = () => {
    const [showAnswerIndex, setShowAnswerIndex] = useState(null);

    const toggleAnswer = (index) => {
        setShowAnswerIndex(index === showAnswerIndex ? null : index);
    };
    return (
        <div className='faqMainContainer'>
            <div className='faqLeftSection'>
                <div className='faqtextContainer'>
                    <span>
                        What’s on your mind
                    </span>
                    <h2>
                        Ask Questions
                    </h2>
                </div>

                <img src={UnionFaqImg} alt='UnionFaqImg' />
            </div>
            <div className='faqQuestionSection'>
                {questionData?.map((question, index) => (
                    <div className='faqQuestionmaincontainer' key={index}>
                        <div className='questionContainer' onClick={() => toggleAnswer(index)}>
                            <span className='questionspan'>{question.question}</span>
                            <span className={showAnswerIndex === index ? 'minus' : 'plus'}></span>
                        </div>
                        <div className={showAnswerIndex === index ? 'faqanswer show' : 'faqanswer hide'}>
                            {question.answers}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Faq
