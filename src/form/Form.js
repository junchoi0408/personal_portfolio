import React from 'react';
import './Form.css';

const Form = () => {
    return(
        <div id='form' className='title contact'>
            <h1>Get in Touch</h1>
            <form>
                <input placeholder="Your email"></input>
                <textarea placeholder="Your message"></textarea>
                <button>Send</button>
            </form>
        </div>
    ) 
}

export default Form;