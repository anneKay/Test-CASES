// testing code goes here

describe("Data types tests ", function() {
 describe("Case for some falsy values", function() {

  it("should return 'no value' for null", function() {
   expect(dataTypes(null)).toEqual('no value');
  });

  it("should return 'no value' for undefined", function() {
   expect(dataTypes(undefined)).toEqual('no value');
  });

 });

 describe("Case for booleans", function() {

  it("should return true for `true`", function() {
   expect(dataTypes(true)).toBe(true);
  });

  it("should return false for `false`", function() {
   expect(dataTypes(false)).toBe(false);
  });

 });

 describe("Case for Numbers", function() {

  it("should return 'less than 100' for 44", function() {
   expect(dataTypes(44)).toBe('less than 100');
  });

  it("should return 'more than 100' for 144", function() {
   expect(dataTypes(144)).toBe('more than 100');
  });

  it("should return 'equal to 100' for 100", function() {
   expect(dataTypes(100)).toBe('equal to 100');
  });


 });

 describe("Case for Strings", function() {

  it("should return the length of `tergiversate`", function() {
   expect(dataTypes('tergiversate')).toBe(12);
  });

  it("should return the length of an empty string", function() {
   expect(dataTypes('')).toBe(0);
  });

  it("should return the length of `555`", function() {
   expect(dataTypes('555')).toBe(3);
  });

 });

 describe("Case for arrays", function() {

  it("should return `2` for `[0, 1, 2]`", function() {
   expect(dataTypes([0, 1, 2])).toBe(2);
  });

  it("should return `undefined` for `[]`", function() {
   expect(dataTypes([])).not.toBeDefined();
  });

  it("should return `undefined` for `[4, 9]`", function() {
   expect(dataTypes([4, 9])).not.toBeDefined();
  });

 });


 describe("Case for functions", function() {

  it("should call the `callback` function with argument true, and return `called callback`", function() {
   var callback = function(arg) {
    expect(arg).toBeTruthy();
    if(arg === true) {
     return 'called callback';
    }
   };
   expect(dataTypes(callback)).toBe('called callback');
  });

 });
});




describe("getPrimes", function() {
 describe("Case for input", function() {

  it("should return true for integers", function() {
   expect(getPrimes(20)).toEqual(true);
  });

  it("should return 'no value' for undefined", function() {
   expect(getPrimes("")).toEqual('no value');
  });
    it("should return false for 'strings'", function() {
   expect(getPrimes('5')).toEqual(false);
  });

 });

describe("Case for Numbers", function() {

  it("should return 'prime numbers' for numbers", function() {
   expect(getPrimes(7)).toBe(2,3,5,7);
  });

 });


describe("case for outputs", function() {

  it("should return an array as a result", function() {
   expect(getPrimes(10)).toBe[2,3,5,7,9];
  });