import React, {useState} from 'react';

export default function Dropdown({id='Noid', options=[]}){

    const [val, changeVal] = useState('')

    const clickOption = (event) => {
        console.log(event)

        event.preventDefault()

        changeVal(event.target.textContent)

    }

    return (
        <div className='Dropdown'>
            
            <input value={val} className='DropInput' type="text" id={`${id}Input`} name={`${id}`} readOnly>
            </input>
            
            {
            <div className='DropValues'>
                {
                    options.map(option => 
                    {
                    return <button className='DropVal' key={option} onClick={clickOption}>
                        <p className='DropValText'>{option}</p>
                    </button>
                    }
                    )
                }

                 
            </div>
            }
            
        </div>

    )




}