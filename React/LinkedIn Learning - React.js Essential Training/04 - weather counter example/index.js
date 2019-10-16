import React, { Component } from "react";
import { render } from "react-dom";

let weatherData = {
    total: 70,
    rainy: 35,
    sunny: 15,
    cloudy: 20
};

class WeatherCounter extends Component {
    render() {
        const { total, rainy, sunny, cloudy } = this.props; // ES6 Destructuring
        return (
            <div>
                <div>
                    <p>Total Days: {total}</p>
                </div>
                <div>
                    <p>Rainy: {rainy}</p>
                </div>
                <div>
                    <p>Sunny: {sunny}</p>
                </div>
                <div>
                    <p>Cloudy: {cloudy}</p>
                </div>
            </div>
        );
    }
}

render(
    <WeatherCounter
        total={weatherData.total}
        rainy={weatherData.rainy}
        sunny={weatherData.sunny}
        cloudy={weatherData.cloudy}
    />,
    document.getElementById("root")
);
