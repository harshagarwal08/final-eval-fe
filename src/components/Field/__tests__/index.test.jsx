import { render, screen } from '@testing-library/react';
import React from 'react';
import Field from '..';

describe('Field', () => {
  it('should show the text when the component is rendered', () => {
    render(<Field />);
    expect(screen.getByTestId('field-text')).toBeTruthy();
  });
});