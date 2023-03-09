import axios from 'axios';
import { makeAuthRequest } from '..';
import { LOGIN_URL } from '../../../constants/apiEndpoints';
import { ERROR_ROUTE } from '../../../constants/routes';

jest.mock('axios');

describe('makeRequest', () => {
  const mockedAxios = axios;
  const mockNavigate = jest.fn();
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should navigate to error page with status code when API call returns error status code', async () => {
    mockedAxios.mockRejectedValueOnce({ response: { status: 500 } });
    expect(mockNavigate).not.toBeCalled();
    await makeAuthRequest(
      LOGIN_URL,
      mockNavigate,
      {
        data: {
          username: 'test',
          password: 'test'
        }
      }
    );
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(`${ERROR_ROUTE}/500`);
  });
  it('should navigate to error page without status code when API call returns error without status code', async () => {
    mockedAxios.mockRejectedValueOnce({});
    expect(mockNavigate).not.toBeCalled();
    await makeAuthRequest(
      LOGIN_URL,
      mockNavigate,
      {
        data: {
          username: 'test',
          password: 'test'
        }
      }
    );
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(ERROR_ROUTE);
  });
});