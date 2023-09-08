const noNeg = (nums: number[]): number[] => {
  return nums.filter((value) => value > 0);
};

//console.log(noNeg([1, 2, -3, 3, -19]));

export default noNeg;
