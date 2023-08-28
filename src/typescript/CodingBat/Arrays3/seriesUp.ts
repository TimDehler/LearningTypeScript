const seriesUp = (n: number): number[] => {
  let x: number[] = [];

  for (let i: number = 1; i <= n; i++) x = [...x, ...createSequenze(i)];

  return x;
};

const createSequenze = (max: number): number[] => {
  let arr: number[] = [];

  for (let i: number = 0; i < max; i++) {
    arr.push(i + 1);
  }
  return arr;
};

export default seriesUp;
