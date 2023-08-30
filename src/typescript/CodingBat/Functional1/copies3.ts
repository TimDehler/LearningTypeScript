const copies3 = (strings: Array<string>): Array<string> => {
  return strings.map((string) => string + string + string);
};

//console.log(copies3(["a", "bb", "ccc"]));
export default copies3;
