return animal
}

function myAnimal() {
var animal = 'dog';
return animal;
}

function yourAnimal() {
 // How can we make sure that this function
 // and the above function both pass?
 // P.S.: You can't just hard-code 'cat' below
 return animal
}

function yourAnimal() {
 var animal = 'cat';
 return animal;
}

function add2(n) {
 return n + two

 // Feel free to move things around!
 const two = 2
}

function add2(n) {
var two = 2
 return n + two;
}

var funkyFunction = function() {
 return function() {
   return "FUNKY!"
@@ -26,3 +41,4 @@ var funkyFunction = function() {

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction
var theFunk = funkyFunction()()
 30  test/index-test.js 
Viewed
@@ -7,6 +7,11 @@ describe('Fix the Scope', function() {
   })
 })

   function myAnimal() {
   var animal = 'dog';
   return animal;
 }

 describe('yourAnimal()', function() {
   it('returns your animal', function(){
     expect(window.yourAnimal()).toEqual('cat')
@@ -17,23 +22,48 @@ describe('Fix the Scope', function() {
   })
 })

 function yourAnimal() {
   var animal = 'cat';
   return animal;
 }

 describe('add2(n)', function() {
   it('adds two to n', function() {
     const n = Math.floor(Math.random() * 1000)
     expect(window.add2(n)).toEqual(n + 2)
   })
 })

 function add2(n) {
  var two = 2
   return n + two;
 }

 describe('funkyFunction()', function() {
   it('returns a function', function() {
     expect(typeof window.funkyFunction()).toEqual('function')
   })
 })

 var funkyFunction = function() {
   return function(){
     return "FUNKY!"
   }
}


 describe('theFunk', function() {
   it('is "FUNKY!"', function() {
     expect(window.theFunk).toEqual('FUNKY!')
   })
 })

 var funkyFunction = function() {
   return function(){
     return "FUNKY!"
   }
 }

 var theFunk = funkyFunction()()

})