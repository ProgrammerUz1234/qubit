import React, {useState} from 'react';import './Main.css'function Main() {    // Define a state variable to hold the input value    const [inputValue, setInputValue] = useState('');    // Function to handle input changes    const handleChange = (event) => {        setInputValue(event.target.value);    };    // Function to handle form submission    const handleSubmit = (event) => {        event.preventDefault(); // Prevents page refresh        alert(`Your email has been added to our database`);    };    return (        <div className='main'>            <div className='main-text'>                <p className='top-description'>Driving growth with personalization.</p>                <h1 className='title1'>Make ecommerce</h1>                <h1 className='title2'>More personal.</h1>                <p className='end-description'>Hundreds of brands use <b>Qubit CommerceAI</b>  to power the next generation of product recommendations, badging and insights to build exceptional customer experiences.</p>                <form onSubmit={handleSubmit}>                    {/*<label htmlFor="input">Enter text:</label>*/}                    <input                        type="email"                        id="input"                        value={inputValue}                        onChange={handleChange}                        placeholder={'Enter your email address'}                    />                    <button type="submit">Book a demo</button>                </form>            </div>        </div>    );}export default Main;