// Random source
function flip() {
  return Math.random() >= 0.5;
}

/*
* Generates a random number between [0, n)
*/
function randomNumber(n) {
  /*
    Your implementation, using the flip() function
  */
  if(n >1000000)
     throw "error"; 
  var counter = 0;
  var random = 0;
  while (counter < n) {
    if( flip() )
    	random++;
    counter++;
  }

  // Returns a number between [0, n)
  return random;
}