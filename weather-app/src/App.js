import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weathe-info";

const API_KEY = '3193bf54b0f2d581763974cb9767bb1b';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined,
    };

    gettingWeather = async (event) => {

    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
        const API_URL = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await API_URL.json();

        let rise = new Date();
        rise.setTime(data.sys.sunrise*1000);
        let set = new Date();
        set.setTime(data.sys.sunset*1000);
        let sunriseTime = `${rise.getHours()} : ${rise.getMinutes()} : ${rise.getSeconds()}`;
        let sunsetTime = `${set.getHours()} : ${set.getMinutes()} : ${set.getSeconds()}`;

        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            sunrise:  sunriseTime,
            sunset:  sunsetTime,
            error: '',
        });
    }
    else {
        this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            sunrise: undefined,
            sunset: undefined,
            error: "Чтобы узнать погоду - введите название города.",
        });
    }
    };

  render () {
    return (
        <div>
          <Info />
          <Form weatherMethod={this.gettingWeather} />
          <Weather
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            sunrise={this.state.sunrise}
            sunset={this.state.sunset}
            error={this.state.error}
          />
        </div>
    )
  }
}

export default App;