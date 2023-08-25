const linearIn = (outer: number[], inner: number[]): boolean => {
  for (let i: number = 0; i < inner.length; i++) {
    if (outer.find((el) => el === inner[i])) continue;
    else return false;
  }
  return true;
};

console.log(linearIn([1, 2, 3, 4], [2, 4]));
