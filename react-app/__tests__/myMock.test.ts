import { expect, jest, test } from '@jest/globals';

test('戻り値の変更', () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

  expect(myMock()).toBe(10);
  expect(myMock()).toBe('x');
  expect(myMock()).toBe(true);
  expect(myMock()).toBe(true);
});
