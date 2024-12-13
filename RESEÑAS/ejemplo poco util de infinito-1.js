//let a=3
//console.log(a)

a=-10
b=10
function  suma(a,b)   {

   sumadeinfinito=0 
   for (i=0;i<1e9;i++) {
   sumadeinfinito+=a+b
   }  
  console.log(typeof(sumadeinfinito)) 
  return sumadeinfinito/1e8+Infinity-Infinity
}

console.log (suma(.05,.05))
console.log(Math.atan2(-Infinity,-1)*2-Math.PI)