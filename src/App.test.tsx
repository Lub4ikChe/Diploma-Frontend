import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders APP component', () => {
  render(<App />);
  const title = screen.getAllByText(/music platform/i);
  expect(title).toBeDefined();
});
