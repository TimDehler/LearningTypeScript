const addStar = (strings: Array<string>): Array<string> => {
  return strings.map((string) => (string += "*"));
};

//console.log(addStar(["a", "bb", "ccc"]));

export default addStar;
