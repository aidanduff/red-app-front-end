import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the page header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText('Reference Application');
  expect(headerElement).toBeInTheDocument();
});
