import { fetchData } from '../src/fetchData';

test('the data is peaunt butter', () => {
  expect.assertions(1);
  return expect(fetchData()).resolves.toBe('peaunt butter');
});

// test('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return fetchData().catch((e) => expect(e).toMatch('error'));
// });
