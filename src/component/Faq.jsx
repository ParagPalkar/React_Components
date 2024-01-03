import React, { useState } from 'react'

import './Faq.css';

const Faq = () => {

  const questions = [
        {
          id: 1,
          title: "Is this a good product?",
          info:
            "1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
          id: 2,
          title: "How much does it cost?",
          info:
            "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
          id: 3,
          title: "When can I get it?",
          info:
            "3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        }
      ];
    
  const [select, setSelect] = useState(false);  

    
    

     

      
  return (
    <div className='faq' >
        <h1>FAQ</h1>
        <div className="container">
            <h2>Frequently Asked Questions</h2>
            
                
                {questions.map((question) =>
                <div className="quest" key={question.id} >

                    <div className="single-quest" onClick={() => setSelect(!select)} >
                      <h4 >{question.title}</h4>
                      <button className='faq-button'> 
                          {(select)? '-' : '+' }
                        </button>
                    </div>
                    {select  && <p className='show-info'>
                     {question.info} 
                    </p> } 
                </div>                    
                )} 
                 
                   
           
            
        </div>
    </div>
  )
}

export default Faq