function LongestIncreasingSequence(arr) { 
  
  var l = arr.length - 1;
  var list = [];

  for(let i = 0; i <= l; i++){
    list[i] = 1;

    for(let j = 0; j <= i; j++){
      if(arr[j] < arr[i] && list[i] < list[j]+1){
        list[i] = list[j]+1;
      }
    }
  }

  return (Math.max.apply(null, list)); 

}
   
console.log(LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90])); // retorna 7