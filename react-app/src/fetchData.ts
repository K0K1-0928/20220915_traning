export function fetchData(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve('peaunt butter');
    }, 3000)
  );
}
