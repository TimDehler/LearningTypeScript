const testArr = [1, 4, 2, 1, 4, 1, 4];

const maxSpanMain = (arr: number[]): number => {
  let spans: number[] = [];

  while (arr.length > 0) {
    let actual: number | undefined = arr.shift();
    let toSave: number = 0;

    let savedSpan: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
      if (arr[i] === actual) {
        savedSpan = i + 1;
        toSave = savedSpan;
      }
      savedSpan++;
    }
    spans.push(toSave + 1);
  }
  return Math.max(...spans);
};

console.log(maxSpanMain(testArr));

export default maxSpanMain;
