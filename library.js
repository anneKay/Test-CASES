var dataTypes = function(val) {
  var callback = function(arg) {
    if (arg === true) {
    return "called callback";
    }
  };
  
  if (val === null || val === undefined) {
    return "no value";
  
  } else if (val === false){
    return false;
  
  } else if (val === true){
    return true;
  
  } else if (typeof(val) === 'number') {
    if (val < 100) {
      return "less than 100";
     
    } else if (val === 100) {
      return "equal to 100" ;
      
    } else if (val > 100) {
    return "greater than 100";
    }
    
  } else if (typeof(val) === 'string') {
    return val.length;
  
  } else if (Array.isArray(val) === true) {
    return val[2];
    
  } else if (typeof(val) === 'function'){
  return callback(true);
  } else {
    return undefined;
  }
}

primeNumb: function(num) {
  for (var i = 2; i < num; i ++ ) {
    if (num % i === 0) {
      return false;
    } else {
      return true;
    }
}
};
var getPrimes = function(n) {
  var myArray = [2];
  for (var i = 3; i < n; i += 2) {
    if (primeNumb(i)) {
      myArray.push(i);
  }
}  


}     