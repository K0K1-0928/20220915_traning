import { expect, jest, test } from '@jest/globals';
import { forEach } from '../src/forEach';

test('forEachが正しくコールバックすること', () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);

  // 実行回数
  expect(mockCallback.mock.calls.length).toBe(2);

  // 1回目実行時の第1引数
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // 2回目実行時の第1引数
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // 1回目実行時の戻り値
  expect(mockCallback.mock.results[0].value).toBe(42);

  // 2回目実行時の戻り値
  expect(mockCallback.mock.results[1].value).toBe(43);
});
