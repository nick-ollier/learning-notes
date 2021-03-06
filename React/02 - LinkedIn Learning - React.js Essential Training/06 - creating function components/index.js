import React, { Component } from "react";
import { render } from "react-dom";

let weatherData = {
    total: 70,
    goal: 100,
    rainy: 35,
    sunny: 15,
    cloudy: 20
};

const getPercent = decimal => {
    return decimal * 100 + "%";
};

const calcGoalProgress = (total, goal) => {
    return getPercent(total / goal);
};

const WeatherCounter = ({ total, goal, rainy, sunny, cloudy }) => {
    return (
        <div>
            <div>
                <p>Total Days: {total}</p>
                <p>Goal: {goal}</p>
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
            <div>
                <p>Completion: {calcGoalProgress(total, goal)}</p>
            </div>
        </div>
    );
};

render(
    <WeatherCounter
        total={weatherData.total}
        goal={weatherData.goal}
        rainy={weatherData.rainy}
        sunny={weatherData.sunny}
        cloudy={weatherData.cloudy}
    />,
    document.getElementById("root")
);
