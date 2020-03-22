import React from 'react';//import depencies
import { render } from "@testing-library/react"; //import react-testing methods
import Greeting from './Greeting';

//testing "my-greeting" class
//use render method to arrange
//use getByText method to Act
//use expect and toBrInDocument methods
test("renders greetig on Greeting component", async () => {
    //Arrange
    const { getByText } = render(<Greeting />);
    //Act
    const greeting = getByText(/hello lambdalorians!/i);
    //Assert
    expect(greeting).toBeInTheDocument();
}); 

//use render method to test a react component
it('renders without crash', () => {
   render (
        <span className="greet">hello world</span> 
    );
    


})