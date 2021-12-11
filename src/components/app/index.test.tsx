import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders HOC components', () => {
  render(<App />);
  const today = screen.getByTestId('today');
  const location = screen.getByTestId('location');
  const forecast = screen.getByTestId('forecast');
  expect(today).toBeInTheDocument();
  expect(location).toBeInTheDocument();
  expect(forecast).toBeInTheDocument();
});
