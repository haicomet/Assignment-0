function titleCaseEdit(title) {
  let words = title.split(' ')
  let titleCase = []
  for (let i = 0; i < words.length; i++){
    let word = words[i]
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    titleCase.push(capitalized)
  }
  return titleCase.join(' ')
}

// Do not edit this line;
module.exports = titleCaseEdit;