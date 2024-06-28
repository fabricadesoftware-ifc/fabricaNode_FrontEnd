import { Api } from '@/plugins';
export default class AuthService {
  constructor(private api: Api) {}

  async postUserToken() {
    const response = await this.api.get('/api/auth/');
    return response.data;
  }
}