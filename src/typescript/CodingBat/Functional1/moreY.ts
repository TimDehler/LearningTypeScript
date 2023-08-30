const moreY = (strings: Array<string>): Array<string> => {
  return strings.map((string) => "y" + string + "y");
};

//console.log(moreY(["a", "bb", "ccc"]));

export default moreY;
