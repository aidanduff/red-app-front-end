import React from 'react';
import { act, render, fireEvent, wait } from '@testing-library/react';
import ReferenceApp from '../component/ReferenceApp';
import ItemComponent from '../component/ItemComponent';
import { createMemoryHistory } from 'history'
import "@testing-library/jest-dom/extend-expect";
import { Router } from 'react-router-dom';
import CreateItemComponent from '../component/CreateItemComponent';

const renderWithRouter = (component) => {
    const history = createMemoryHistory();
    return {
        ...render (
            <Router history={history}>
                {component}
            </Router>
        )
    }
}

it('should render the add page', () => {

    const { container, getByTestId } = renderWithRouter(<ReferenceApp />) 
    const addButton = getByTestId('add-button');
    fireEvent.click(addButton);
  
    expect(container.innerHTML).toMatch('Create Item');
});

// it("accepts input values", () => {
//     const { container, getByLabelText } = render(<CreateItemComponent/>);
//     const nameVal = "Aidan";
//     const descriptionVal = "testdesc";
  
//     fireEvent.change(getByLabelText(/Name/i), { target: { value: nameVal } });
//     fireEvent.change(getByLabelText(/Description/i), { target: { value: descriptionVal } });
    
//     expect(container.innerHTML).toMatch(nameVal);
//     expect(container.innerHTML).toMatch(descriptionVal);
//   });


