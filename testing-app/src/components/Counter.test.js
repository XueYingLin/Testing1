import React from 'react';

import { render, fireEvent } from "@testing-library/react";
import Counter from './Counter';

it("increments count when increment button is clicked", async () => {
    //Arrange
    const { getByText } = render(<Counter />);
    //Act
    const count = getByText(/0/i);
    //get the button node
    const button = getByText(/increment/i);
    //simulate a user click
    fireEvent.click(button);
    //Assert
    expect(count).toHaveTextContent("1");//passes with 1 because we expect it to be 1 after a button click
    expect(count).not.toHaveTextContent("0");
})