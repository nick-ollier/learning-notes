import {
    getHex,
    HeaderComponent,
    getFlyingSuperheroes,
    HeaderWrapperComponent,
    DebugComponent
} from "./index";
import React from "react";
import { render } from "@testing-library/react";

// getHex

test("returns #ff0000", () => {
    expect(getHex("red")).toBe("#ff0000");
});

test("returns #000000 as a fallback", () => {
    expect(getHex("not actually a colour")).toBe("#000000");
});

// HeaderComponent

test("component renders", () => {
    render(<HeaderComponent />);
});

test("component still renders", () => {
    // "container" is always a div
    const { container } = render(<HeaderComponent />);
    expect(container.firstChild);
    console.log(container.innerHTML);
});

// getFlyingSuperheroes

test("returns array of superheroes that can fly - manual", () => {
    const flyingSuperheroes = getFlyingSuperheroes();
    expect(flyingSuperheroes).toEqual([
        { name: "Dynaguy", powers: ["disintegration ray", "fly"] },
        { name: "Apogee", powers: ["gravity control", "fly"] }
    ]);
});

test("returns array of superheroes that can fly - snapshot", () => {
    const flyingSuperheroes = getFlyingSuperheroes();
    console.log(flyingSuperheroes);
    expect(flyingSuperheroes).toMatchSnapshot();
});

// HeaderWrapperComponent

test("component matches snapshot", () => {
    const { container } = render(
        <HeaderWrapperComponent header="New header" />
    );
    expect(container.firstChild).toMatchSnapshot();
});

test("**component debug**", () => {
    const { container, debug } = render(
        <HeaderWrapperComponent header="New header" />
    );
    debug(container.firstChild);
});

// DebugComponent
// chrome://inspect -or- node debug button in dev menu
// debugger; in component
// not working right now - module 4 video 12
test("**component debug in browser**", () => {
    const { container, debug } = render(<DebugComponent />);
    debug(container);
});
