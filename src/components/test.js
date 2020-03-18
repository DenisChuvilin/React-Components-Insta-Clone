// Write a function "flatten" that takes an N-dimensional array
// and returns a flatten (1 level ) array.

// e.g flatten([1, [2]]) => [1, 2]

//1. create and empty array: stdarr = []
//2. loop, if item is array, use Array.isArray method in conditional
//3. return stdarr
function flatten(input) {
  const arr = [];
  input.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(nItem => {
        //in nItem is itself a nested item, repeat l13-16
        arr.push(nItem);
      });
    } else arr.push(item);
  });

  return arr;
}

console.log(flatten([1, [2, [7, [9, [9, [9, [0, [7]]]]]]]]));
