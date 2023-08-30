const rightDigit = (nums: number[]): number[] => {
  return nums.map((num) => num % 10);
};

//console.log(rightDigit([1, 12, 123]));

export default rightDigit;
