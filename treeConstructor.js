function TreeConstructor(strArr) { 

  var noPai = {};
  var nosfilhos = {};

  for(let i = 0; i < strArr.length; i++){

    var numDupla = strArr[i].replace(/[()]/g, "").split(",");
    var filho = numDupla[0];
    var pai = numDupla[1];

    if(noPai[pai])
      noPai[pai].push(filho);
    else 
      noPai[pai] = [filho];

    if(noPai[pai].length > 2)
      return false;
    
    if(nosfilhos[filho])
      return false;
    else
      nosfilhos[filho] = noPai;
  }

  return true; 

}
 
console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])); // retorna true
console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(3,2)"])); // retorna false