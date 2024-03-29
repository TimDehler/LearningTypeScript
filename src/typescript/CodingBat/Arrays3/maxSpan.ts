const maxSpanMain = (arr: number[]): number => {
  return arr.length ? executeLogic(arr) : 0;
};

const executeLogic = (arr: number[]): number => {
  let spans: number[] = [];

  while (arr.length > 0)
    spans.push(calculateSpanForActual(arr.shift(), arr) + 1);

  return Math.max(...spans);
};

const calculateSpanForActual = (
  actual: number | undefined,
  arr: number[]
): number => {
  let maxSpanForActual: number = 0;

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === actual) maxSpanForActual = i + 1;
  }

  return maxSpanForActual;
};

//console.log(maxSpanMain([1, 4, 2, 1, 4, 1, 4]));

export default maxSpanMain;
