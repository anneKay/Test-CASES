module.exports = {
 
 function: findMaxMin(n) {
  var myArr = [];
  myMax = a[0];
  myMin = a[0];
  for(var i = 0; i < n.length; i++) {
    if (n[i] > myMax) {
      myMax = n[i];
    }
    else if (n[i] < myMin) {
      myMin = n[i];
    }
  }
  myArr = [myMin, myMax]
  return myArr;
}

