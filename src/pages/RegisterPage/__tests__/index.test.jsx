import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import RegisterPage from '..';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

describe('RegisterPage', () => {
  it('should show the image text when the component is rendered', () => {
    render(<RegisterPage />);
    expect(screen.getByTestId('image-text')).toBeTruthy();
  });
  it('should show the register button when the component is rendered', () => {
    render(<RegisterPage />);
    expect(screen.getByTestId('register-button')).toBeTruthy();
  });
  it('should update email and password on input change', () => {
    render(<RegisterPage />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    expect(emailInput.value).toBe('test@email.com');
    expect(passwordInput.value).toBe('password');
  });
 
});
