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

// function aumm(n) {
//   // var n = document.getElementById("sum").value;
//   var sum = 0;

//   for (var i = 0; i <= n; i++) sum += i;

//   return sum;

//   // document.getElementById("idsum").innerHTML = "asdasd" + "<br>" + sum;
// }

// // document.write("Sum: " + aumm())

// //
// function main() {
//   var n = document.getElementById("sum").value;
//   // document.write("Sum: " + aumm(n));
//   document.getElementById("idsum").innerHTML = "Sum: "  + aumm(n);
// }
function tinhtb() {
  var t = document.getElementById("idtoan");
  var v = document.getElementById("idvan");
// if (t.value == "" && v.value == "") {
//   alert("enter");
// } else if (t.value == "") {
//   alert("chua nhap diem toan");
// } else if (v.value == "") {
//   alert("chua nhap diem van");
// } else if (isNaN(t.value) && isNaN(v.value)) {
//   alert("nhap ki tu la so lai");
// } else if (isNaN(t.value)) {
//   alert("nhap ksNaN(t.value)i tu la so lai");
// } else if (isNaN(v.value)) {
//   alert("nhap ki tu la so lai");
// }
  switch(t.value || v.value){

    case "":
      alert("chua nhap diem");
      break;
      
   
 case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "10":
    document.getElementById("iddtb").innerHTML = dtb;
      break;


    default: {
      alert("nhap ki tu la so lai hoac duoi 10 ");
    }
  }

  var dtb = document.getElementById("iddtb");
  dtb = (parseInt(t.value) + parseInt(v.value)) / 2;

  document.getElementById("iddtb").innerHTML = dtb;
}
// function switchcase() {
//   var a = document.getElementById("test");
//   switch (a.value)
//    {
//     case "0": 
//     case "1": 
//     case "2": 
//     case "3": 
//     case "4": 
//     case "5": 
//     case "6": 
//     case "7": 
//     case "8": 
//     case "9": 
//       document.getElementById("idp").innerHTML = a.value;
//       break;
//     default: {
//       alert("khong phai so");
//     }
//   }
// }
