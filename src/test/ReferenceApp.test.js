import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReferenceApp from '../component/ReferenceApp';
import ListItemComponent from '../component/ListItemComponent';
import { createMemoryHistory } from 'history'
import "@testing-library/jest-dom/extend-expect";
import { Router } from 'react-router-dom';

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