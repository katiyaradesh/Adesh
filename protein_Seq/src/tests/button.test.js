import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../atoms/Button/index';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
});

test("renders button correctly", () => {
    const {getByTestId} = render(<Button text="Search"></Button>);
    const element=getByTestId("button");
   expect(element.textContent).toBe("Search")
});