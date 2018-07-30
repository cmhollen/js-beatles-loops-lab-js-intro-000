// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments){
  var arrNew = [];
  for(var i = 0; i < arrMusicians.length; i++){
    arrNew.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`);
  }
  return arrNew;
}

function iLoveTheBeatles(n){
  var arr = [];
  do{
    arr.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return arr;
}
