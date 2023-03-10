import { render, screen } from '@testing-library/react';
import React from 'react';
import Entry from '..';

describe('Entry', () => {
  it('should show the id when the component is rendered', () => {
    render(<Entry index={1} />);
    expect(screen.getByTestId('entry-id')).toBeTruthy();
  });
});
