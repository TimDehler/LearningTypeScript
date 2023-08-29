const countClumps = (nums: number[]): number => {
  let clumpsCounter: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      while (nums[i] === nums[i + 1]) {
        i += 1;
      }
      clumpsCounter += 1;
    }
  }
  return clumpsCounter;
};

//console.log(countClumps([1, 2, 2, 3, 4, 4]));

export default countClumps;
