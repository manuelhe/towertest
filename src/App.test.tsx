import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main title', () => {
  render(<App />);
  const element = screen.getByText(/tower test/i);
  expect(element).toBeInTheDocument();
});
