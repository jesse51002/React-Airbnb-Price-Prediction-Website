import './Question.css'
import Dropdown from './Dropdown.js';
import React from 'react'

function Question({id='NoId', labalText='No Label', type='Text', options=[]}){



    const textJSX = (
        <div className="QuestionHolder">  
            <div className="TextLabelDiv">
                <label className="TextQuestionLabel" htmlFor={`${id}`}  id={`${id}Label`}>
                    {`${labalText}:`}
                </label>
            </div>

            <input className='TextInput' type="text" id={`${id}Input`} name={`${id}`}>
            </input>

        </div>
    )
    
    
    const dropDownJSX = (
        <div className="QuestionHolder" id={`${id}`}>  
            <div className="DropLabelDiv">
                <label className="DropQuestionLabel" htmlFor={`${id}`}  id={`${id}Label`}>
                    {`${labalText}:`}
                </label>
            </div>

            <Dropdown id={id} options={options} />

        </div>
    )
    
    if(type === 'Text'){
        return textJSX;
    }
    else if (type === 'Dropdown'){
        return dropDownJSX;
    }

    
}


export default Question;