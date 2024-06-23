import axios from 'axios';

export default class AuthService {
  async postUserToken(token: String) {
    const response = await axios.get('http://0.0.0.0:8000/users/me/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}