import React from "react";

import { fireEvent, render } from "@testing-library/react-native";

import Counter from "./Counter";

describe("Counter", () => {
  it("renders correctly", () => {
    render(<Counter />);
  });

  it("shows an initial state of 0", () => {
    const { queryByText } = render(<Counter />);

    const initialState = queryByText("Counter: 0");
    expect(initialState).not.toBeNull();
  });

  it("increments by 1 each time increment is pressed", () => {
    const { queryByText, queryByTestId } = render(<Counter />);

    const initialState = queryByText("Counter: 0");
    expect(initialState).not.toBeNull();

    const increment = queryByTestId("incrementButton");
    expect(increment).not.toBeNull();

    fireEvent.press(increment);

    const oneState = queryByText("Counter: 1");
    expect(oneState).not.toBeNull();

  });

  it("decrements by 1 each time decrement is pressed", () => {
    const { queryByText, queryByTestId } = render(<Counter />);

    const initialState = queryByText("Counter: 0");
    expect(initialState).not.toBeNull();

    const decrement = queryByTestId("decrementButton");
    expect(decrement).not.toBeNull();

    fireEvent.press(decrement);

    const oneState = queryByText("Counter: -1");
    expect(oneState).not.toBeNull();
    
  });

});

// I want the app to...
// Render correctly
// Show an initial state of zero counter
// Increment counter by one each time increment button is pressed
// Decrement counter by one each time decrement button is pressed