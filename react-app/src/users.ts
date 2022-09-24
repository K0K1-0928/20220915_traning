import axios from 'axios';
import type { AxiosResponse } from 'axios';

class Users {
  static all<T>(): Promise<T> {
    return axios.get('/users.json').then((resp: AxiosResponse<T>) => resp.data);
  }
}

export default Users;
