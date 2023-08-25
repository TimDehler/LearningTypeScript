const fix34 = (nums: number[]): number[] => {
  let referenceArray: number[] = [...nums];
  for (let i: number = 0; i < referenceArray.length; i++) {
    if (referenceArray[i] === 3) {
      executeLogic(i, nums);
    }
  }
  return nums;
};

const executeLogic = (indexOf3: number, numsArray: number[]) => {
  numsArray = swtichNumbersByIndexes(
    indexOf3 + 1,
    searchFor4WithNoPre3(numsArray),
    numsArray
  );
};

const searchFor4WithNoPre3 = (numsArray: number[]): number => {
  for (let i: number = 0; i < numsArray.length; i++) {
    if (numsArray[i] === 4 && numsArray[i - 1] !== 3) return i;
  }
  return 0;
};

const swtichNumbersByIndexes = (
  index1: number,
  index2: number,
  numsArray: number[]
): number[] => {
  const value1 = numsArray[index1];
  numsArray[index1] = numsArray[index2];
  numsArray[index2] = value1;
  return numsArray;
};

console.log(fix34([1, 3, 1, 4, 4, 3, 1]));

export default fix34;
