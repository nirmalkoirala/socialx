import React, {useEffect} from 'react'
import './Faq.css'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import Question from './Question'
import { questions } from './data'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Faq = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])
    return (
        <section id="faq" data-aos="fade-up" data-aos-duration="1500">
        <div className="container faq" >
        <div className="u-title">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>FAQs</h2>
          <p className="u-text-small u-text-dark">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
        </div>
        <div className="questions">
            {
                questions.map((question) => (
                    <Question title={question.title} answer={question.answer}/>
                ))
            }
                
            </div>
        </section>
    )
}

export default Faq
