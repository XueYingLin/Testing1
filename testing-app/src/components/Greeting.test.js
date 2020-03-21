import React from 'react';//import depencies
import { render } from "@testing-library/react"; //import react-testing methods
import Greeting from './Greeting';

test("renders greetig on Greeting component", async () => {
    //Arrange
    const { getByText } = render(<Greeting />);
    //Act
    const greeting = getByText(/hello lambdalorians!/i);
    //Assert
    expect(greeting).toBeInTheDocument();
}); 