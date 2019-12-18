import React from "react";

const colours = [
    { name: "red", hex: "#ff0000" },
    { name: "green", hex: "#00ff00" },
    { name: "blue", hex: "#0000ff" }
];

export const getHex = colour => {
    const colourObj = colours.find(c => c.name === colour);

    return colourObj ? colourObj.hex : "#000000";
};

/************************************ */

export const HeaderComponent = ({ header = "Hello World" }) => {
    return <h1>{header}</h1>;
};

/************************************ */

const superheroes = [
    { name: "Dynaguy", powers: ["disintegration ray", "fly"] },
    { name: "Apogee", powers: ["gravity control", "fly"] },
    {
        name: "Blazestone",
        powers: ["control of fire", "pyrotechnic discharges"]
    },
    { name: "Frozone", powers: ["freeze water"] },
    { name: "Mr. Incredible", powers: ["physical strength"] },
    { name: "Elastigirl", powers: ["physical stretch"] },
    { name: "Violet", powers: ["invisibility", "force fields"] },
    { name: "Dash", powers: ["speed"] }
    // {name: 'Jack-Jack', powers: ['shapeshifting', 'fly']},
];

export const getFlyingSuperheroes = () => {
    return superheroes.filter(hero => {
        return hero.powers.includes("fly");
    });
};

/************************************ */

export const HeaderWrapperComponent = ({ header, children }) => {
    return (
        <header>
            <HeaderComponent header={header} />
            {children && children}
        </header>
    );
};

/************************************ */

export const DebugComponent = ({ isTrue = true }) => {
    const one = 1;
    const two = 2;

    const doSum = (num1, num2) => {
        debugger;
        return num1 + num2;
    };

    const three = doSum(one, two);

    return (
        <HeaderWrapperComponent>
            {isTrue && <p>Some Conditional Text</p>}
            <p>{three}</p>
        </HeaderWrapperComponent>
    );
};
