// var w = confirm("trapezoida");
// if (w == true) {
//   var i, j;
//   var n = 20;
//   for (i = 15; i < n; ++i) {
//     for (j = 0; j <= i; ++j) {
//       document.write("*");
//     }
//     document.write("<br>");
//   }
//   document.write("<br>");
// } else {
//   var i, j;
//   var n = 20;
//   for (i = 15; i < n; ++i) {
//     for (j = 0; j <= n - i; j++) {
//       document.write("&nbsp&nbsp");
//     }
//     for (j = 1; j <= 2 * i - 1; j++) {
//       document.write("*");
//     }
//     document.write("<br>");
//   }
// }

;

 function aumm() {
  // var n = 3 ;
var n= document.getElementById("sum").nodeValue() ;

  var sum = 0;
  for (var i = 0; i <= n; i++) 
    sum += i;
    return sum;
  
  // document.getElementById("#idsum").innerHTML = "asdasd" + "<br>" + sum;
  
}
document.write("Sum: " + aumm())
// 
// function main(){

// }