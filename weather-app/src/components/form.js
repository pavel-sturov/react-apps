import React from "react";

const Form = props => (
        <form className={'form'} onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="Enter city..."/>
            <button className={'conf-btn'}>Recognize!</button>
        </form>
);

export default Form;