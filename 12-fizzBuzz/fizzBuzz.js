function fizzBuzz(start, end) {
  let fb = []
  
  for (let i = start; i <= end; i++){
    if (i % 3 === 0 && i % 5 === 0)
      fb.push("FizzBuzz")
    else if (i % 3 === 0) 
      fb.push("Fizz")
    else if (i % 5 === 0 )
      fb.push("Buzz")
    else
    fb.push(i)
    
  }
  return fb
}

// Do not edit this line;
module.exports = fizzBuzz;