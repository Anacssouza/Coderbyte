function ABCheck(str) { 

  str = str.split("");
  
  for(var i = 0; i < str.length; i++){
    if(/a/.test(str[i]))
      var a = i;
    if(/b/.test(str[i]))
      var b = i;
  }
  
  if(b - a == 4)
    trueOrFalse = true;
  else
    trueOrFalse = false;

  return trueOrFalse; 

}

console.log(ABCheck("a123b")); // retorna true
console.log(ABCheck("a1234b")); // retorna false