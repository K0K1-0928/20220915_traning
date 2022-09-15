const audio = {
  _volume: 0,
  set volume(value) {
    this._volume = value;
  },
  get volume() {
    return this._volume;
  },
};

test('volume getter test', () => {
  const spy = jest.spyOn(audio, 'volume', 'get').mockReturnValue(100);
  try {
    expect(audio.volume).toBe(100);
    expect(spy).toHaveBeenCalled();
  } finally {
    // エラーが発生しても解除されるようにfinallyで実行すること
    spy.mockRestore();
  }
});

test('volume setter test', () => {
  const spy = jest.spyOn(audio, 'volume', 'set');
  try {
    audio.volume = 25;
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0][0]).toBe(25);
  } finally {
    // エラーが発生しても解除されるようにfinallyで実行すること
    spy.mockRestore();
  }
});
