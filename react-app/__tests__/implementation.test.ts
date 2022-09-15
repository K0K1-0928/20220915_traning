test('振る舞いの変更', () => {
  const myMock = jest.fn();
  myMock.mockImplementation((arg: string) => {
    switch (arg) {
      case 'hoge':
        return 1;
      case 'fuga':
        return 2;
      default:
        return 0;
    }
  });

  expect(myMock('hoge')).toBe(1);
  expect(myMock('fuga')).toBe(2);
  expect(myMock('moge')).toBe(0);
});
