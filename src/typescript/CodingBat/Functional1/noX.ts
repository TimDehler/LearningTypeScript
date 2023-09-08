const noX = (strings: Array<string>): string[] => {
  return strings.map((string) => {
    while (string.includes("x")) string = string.replace("x", "");
    return string;
  });
};
console.log(noX(["a", "axax", "xaxaxax"]));

export default noX;
