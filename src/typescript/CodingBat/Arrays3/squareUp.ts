const squareUp = (n: number): number[] => {
  let retArr: number[] = [];
  for (let i: number = 0; i < n; i++) {
    retArr = [...retArr, ...createNthPattern(i, n)];
  }
  return retArr;
};

const createNthPattern = (iter: number, numCount: number): number[] => {
  let pattern: number[] = [];
  for (let i: number = 0; i < numCount; i++) {
    if (i > iter) {
      pattern.push(0);
    } else {
      pattern.push(i + 1);
    }
  }

  return reverseArray(pattern);
};

const reverseArray = (pattern: number[]): number[] => {
  let reversedArray: number[] = [];

  for (let i: number = pattern.length - 1; i >= 0; i--)
    reversedArray.push(pattern[i]);

  return reversedArray;
};

//console.log(`Square up: ${squareUp(4)}`);

export default squareUp;
