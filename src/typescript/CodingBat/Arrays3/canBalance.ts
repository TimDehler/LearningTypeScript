type calculateFrontBackSumFromIndexTotalReturnObj = {
  sumBeforeIndex: number;
  sumAfterIndex: number;
};

const canBalance = (nums: number[]): boolean => {
  for (let i: number = 0; i < nums.length; i++) {
    const total = nums.reduce((sum, num) => sum + num, 0);
    const { sumBeforeIndex, sumAfterIndex } =
      calculateFrontBackSumFromIndexTotal(nums, i, total);
    if (sumBeforeIndex === sumAfterIndex) return true;
  }
  return false;
};

const calculateFrontBackSumFromIndexTotal = (
  nums: number[],
  index: number,
  total: number
): calculateFrontBackSumFromIndexTotalReturnObj => {
  let sumAfterIndex = 0;

  for (let i: number = index + 1; i < nums.length; i++)
    sumAfterIndex += nums[i];

  return {
    sumBeforeIndex: total - sumAfterIndex,
    sumAfterIndex: sumAfterIndex,
  };
};

export default canBalance;
