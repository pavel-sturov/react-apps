import React from "react";

const Weather = props => (
        <div >
            {props.city &&
            <div className={'weather-info'}>
                <p><span>City: </span> {props.city}, {props.country}</p>
                <p><span>Temperature: </span> {props.temp} °C</p>
                <p><span>Sunrise: </span> {props.sunrise}</p>
                <p><span>Sunset: </span> {props.sunset}</p>
            </div>
            }
            <p>{props.error}</p>
        </div>
    );

export default Weather;