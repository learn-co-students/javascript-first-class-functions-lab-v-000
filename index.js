function countdown(callback)
{
   window.setTimeout(callback, 500);

 }

 function createMultiplier(multiplierValue) {
   return function(n) {
     return n*multiplierValue;
   }
 }



 function multiplier(n,m) {
   return n*m;
 }

 var doubler = multiplier.bind(null,2)
 var tripler = multiplier.bind(null,3)
 var doublerWithBind = multiplier.bind(null,2)
 var triplerWithBind = multiplier.bind(null,3)
