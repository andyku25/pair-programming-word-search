const wordSearch = (letters, word) => {
  //combine arrays horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  if (letters.length === 0) return undefined;
  // iterating through  each horizontal word
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  //callback tranpose for letters array
  const columns = transpose(letters);
  // joining
  const verticalJoin = columns.map(ls => ls.join(''));
  //console.log(verticalJoin)
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

const transpose = function(matrix) {
  // Put your solution here
  // Initialize an empty array
  let outputArray = [];
  // Loop through the rows of the matrix
  for (let i = 0; i < matrix[0].length; i++) {
    let colArray = [];
    // Loop through the columns of the matrix
    for (let j = 0; j < matrix.length; j++) {
      colArray.push(matrix[j][i]);
    }
    outputArray.push(colArray);
    //push colArray to outputArray
  }
  return outputArray;
};

module.exports = wordSearch;



