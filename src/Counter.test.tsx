import React from "react";

import { render } from "@testing-library/react-native";

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

  it.todo("increments by 1 each time increment is pressed");

  it.todo("decrements by 1 each time decrement is pressed");

});

// I want the app to...
// Render correctly
// Show an initial state of zero counter
// Increment counter by one each time increment button is pressed
// Decrement counter by one each time decrement button is pressed