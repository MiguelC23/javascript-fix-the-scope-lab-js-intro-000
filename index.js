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
