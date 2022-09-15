test('spyon test', () => {
  const video = {
    play() {
      return true;
    },
  };

  // playメソッドの戻り値を変更する。
  const spy = jest.spyOn(video, 'play').mockReturnValue(false);
  expect(video.play()).toBe(false);

  // mockRestoreを実行すると解除される。
  spy.mockRestore();
  expect(video.play()).toBe(true);
});
