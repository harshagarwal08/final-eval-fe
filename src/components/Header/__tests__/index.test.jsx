import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '..';

const mockedNavigate = jest.fn();
const mockedParams = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
  useParams: () => mockedParams,
}));

describe('Header', () => {
  it('should show Content Types heading initially when the component is rendered', () => {
    render(<Header title="Content Types" />);
    expect(screen.getByTestId('title')).toBeTruthy();
  });
});
