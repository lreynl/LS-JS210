function penultimate(string) {
  //return string.split(' ')[-2]; //-2 is coerced to a string, 
  //and since string.split has no '-1' property it returns
  //undefined.
  string = string.split(' ');
  return string[string.length - 2];//access with a numerical index
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"