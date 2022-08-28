import './Question.css'
import {useRef} from 'react';



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
    
    const dropRef = useRef(null) 

    function handleDropPress(val){
        const input = dropRef.current;
        input.value = val.target.textContent;
    }
    
    const dropDownJSX = (
        <div className="QuestionHolder" id={`${id}`}>  
            <div className="DropLabelDiv">
                <label className="DropQuestionLabel" htmlFor={`${id}`}  id={`${id}Label`}>
                    {`${labalText}:`}
                </label>
            </div>

            <div className='Dropdown'>

                <input ref={dropRef} className='DropInput' type="text" id={`${id}Input`} name={`${id}`} readOnly>
                </input>
                
                <div className='DropValues'>
                    {
                       options.map(val => 
                       {
                        return <button className='DropVal' onClick={handleDropPress}>
                            <p className='DropValText'>{val}</p>
                        </button>
                        }
                        )
                    }
                </div>

            </div>

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