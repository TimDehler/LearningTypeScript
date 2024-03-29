const maxMirror = (nums: number[]): number => {
  let maxLengthSequenz = 0;

  createSequenzes(nums).forEach((sequenz) => {
    if (searchForReoccurringSequenz(nums, sequenz)) {
      if (sequenz.length > maxLengthSequenz) maxLengthSequenz = sequenz.length;
    }
  });

  return maxLengthSequenz;
};

const createSequenzes = (nums: number[]): Array<number[]> => {
  let sequenzes: Array<number[]> = [];

  let done: boolean = false;
  let startIndex: number = 0;
  let endIndex: number = 1;

  while (!done) {
    let temp: number[] = nums.slice(startIndex, endIndex);
    sequenzes.push(temp);
    endIndex += 1;

    if (endIndex === nums.length + 1) {
      startIndex += 1;
      endIndex = startIndex + 1;
    }

    if (startIndex === nums.length) {
      done = true;
    }
  }
  //sequenzes.forEach((sequenz) => console.log(sequenz));
  return sequenzes;
};

const searchForReoccurringSequenz = (
  nums: number[],
  sequenzToSearchFor: number[]
): boolean => {
  return nums.join(",").includes(sequenzToSearchFor.reverse().join(","));
};

//console.log(maxMirror([1, 2, 1, 20, 21, 1, 2, 1, 2, 23, 24, 2, 1, 2, 1, 25]));

export default maxMirror;
