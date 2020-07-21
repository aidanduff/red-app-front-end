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

it('renders the page header', () => {
    const { getByText } = render(<ReferenceApp />);
    const headerElement = getByText('Reference Application');
    expect(headerElement).toBeInTheDocument();
  });

it('navigates to create item on add button click', () => {

    const { container, getByTestId } = render(<ReferenceApp />) 
    const addButton = getByTestId('add-button');
    fireEvent.click(addButton);
  
    expect(container.innerHTML).toMatch('Create Item');
});



