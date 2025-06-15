function setUnionOfAnyAmountOfSets(...args) {
  const unionSet = new Set()

  for (const set of args){
    for (const num of set)
      unionSet.add(num)
  }
  return unionSet
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;