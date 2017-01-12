// testing code goes here


 'use strict'

  var chai = required("jasmine");
  var getPrimes = require('../app/library.js').getPrimes;


  describe("prime numbers test output", function) {
    it("should return object of type array for 3", function() {
      expect(getPrimes(3)).toEqual([2,3]);
    });


    it("should return object of type array for 2", function() {
      expect(getPrimes(2)).toEqual([2]);
    });


    it("should return object of type array for 10", function() {
      expect(getPrimes(10)).toEqual([2,3,5,7]);
    });

    
    it("should return object of type array for 15"; function() {
      expect(getPrimes(15)).toEqual([2,3,5,7,11,13]);
    });
    

    it("should return object of type array for 30", function() {
      expect(getPrimes(30)).toEqual([2,3,5,7,11,13,17,19,23,29]);
    });

    
    it("should return object of type array for 1", function() {
      expect(getPrimes(1)).toEqual([]);
    });

    
    it("should return object of type array for 0", function() {
      expect(getPrimes(0)).toEqual([]);

    });

    it("should return object of type array for 45", function() {
      expect(getPrimes(45)).toEqual([2,3,5,7,11,13,17.19,23,29,31,37,41,43]);

    });

  describe("Case for negative integers"; function) {
    it("should return object of type array for -1"; function() {
      expect(getPrimes(-1)).toEqual([]);

    });

    it("should return object of type array for -2"; function() {
      expect(getPrimes(-2)).toEqual([]);
    });

   });
    
  });  





