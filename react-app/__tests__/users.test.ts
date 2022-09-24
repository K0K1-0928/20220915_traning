import { expect, jest, test } from '@jest/globals';
import axios from 'axios';
import Users from '../src/users';

jest.mock('axios');

const axiosMock = axios as jest.Mocked<typeof axios>;

test('should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  axiosMock.get.mockResolvedValue(resp);

  return Users.all().then((data) => expect(data).toEqual(users));
});
