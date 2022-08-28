import './Questions.css';
import Question from './Question.js';
import React, {useRef} from 'react';
import Geocode from "react-geocode";
import axios from 'axios';

Geocode.setApiKey("AIzaSyDJO39qvhsgf5OkpWCK6EjN3L8aSmuyNh8");
Geocode.setRegion("na")

function Questions(){
    const qGroup1Ref = useRef(null);
    const qGroup2Ref = useRef(null);
    const formRef = useRef(null);
    
    function nextPage(event){
        event.preventDefault()

        const group1 = qGroup1Ref.current;
        const group2 = qGroup2Ref.current;

        group1.style.display = 'None';
        group2.style.display = 'Block';
    }

    function backPage(event){
        event.preventDefault()

        const group1 = qGroup1Ref.current;
        const group2 = qGroup2Ref.current;

        group1.style.display = 'Block';
        group2.style.display = 'None';             
    }

    async function getGeocode(location) {
        let address = location.Street.split(" ").join("+")
        let city = location.City.split(" ").join("+")
        let state = location.State
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address},+${city},+${state}&key=AIzaSyDJO39qvhsgf5OkpWCK6EjN3L8aSmuyNh8`
            
        const response = await axios.get(url)
        const data = response.data.results[0]
        const coords = {
            name: data.formatted_address,
            position: {
                lat: data.geometry.location.lat,
                lng: data.geometry.location.lng
            }
        }
        return coords
    }

    async function getPrice(event){
        event.preventDefault()

        const form = formRef.current;

        const formElements = form.elements;
        
        var addressInfo = {
            Street: formElements.StreetAddress.value,
            City: formElements.City.value,
            State: formElements.State.value,
            Country: formElements.Country.value
        }

        var cords = await getGeocode(addressInfo);

        console.log(cords);
    }
    
    return (
        <div className="QuestionsHolder">
            
            <div className="QuestionDirections">
                <p>Enter information in order to get your price recommendation:</p>
            </div>

            <form ref={formRef}>
                <div id="QuestionsGroup1" ref={qGroup1Ref}>

                    <div className='QuestionRow'>
                        <Question id='StreetAddress' labalText='Street Address' />    
                    </div>

                    <div className='QuestionRow'>
                        <Question id='City' labalText='City' />    
                        <Question id='State' labalText='State' />    
                    </div>

                    <div className='QuestionRow'>
                        <Question id='Country' labalText='Country' />    
                        <Question id='ZipCode' labalText='ZipCode' />    
                    </div>

                    <div className='QuestionRow'>
                        <Question id='NeighborhoodGroup' type='Dropdown' labalText='What group best defines your location'
                        options={['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island', 'Brookln']} />     
                    </div>

                    <div className='ButtonHolder'>
                        <button onClick={nextPage} className='Button' id='NextButton'>
                            <p>Next</p>
                        </button>
                    </div>
                </div>


                <div id="QuestionsGroup2" ref={qGroup2Ref}>
                    <div className='QuestionRow'>
                        <Question id='RoomType' type='Dropdown' labalText='What room type are you offering'
                            options={['Entire home/apt', 'Private Room', 'Shared Room', 'Hotel Room']} />
                    </div>

                    <div className='QuestionRow'>
                        <Question id='Minumum Nights' labalText='Minimum nights' />
                    </div>

                    <div className='QuestionRow'>
                        <Question id='CancelationPolicy' type='Dropdown' labalText='How strict is your cancelation Policy'
                            options={['Flexible', 'Moderate', 'Strict']} />
                    </div>

                    <div className='QuestionRow'>
                        <Question id='Bookability' type='Dropdown' labalText='Will your post be instant bookable'
                            options={['Yes', 'No']} />
                    </div>

                    <div className='ButtonHolder'>
                        <button onClick={backPage} className='Button' id='BackButton'>
                            <p>Back</p>
                        </button>

                        <button onClick={getPrice} className='Button' id='GenerateButton'>
                            <p>Get Price</p>
                        </button>
                    </div>
                </div>  
            </form>
        </div>
    )

}

export default Questions;