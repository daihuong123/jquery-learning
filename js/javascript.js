document.getElementById("btn2").addEventListener("click", generatediv);
function generatediv() {
  var div = document.createElement("div");
  div.innerHTML = "created div";
  document.body.appendChild(div);
}
var a = [1, 2, 3, 4, 5, 6, "a", "b", "n"];
var tex = "";
var num = "";
var so = "";
var wor = "";
var i = 0;
document.getElementById("demo").addEventListener("click", numnstr);
function numnstr() {
  do {
    if (typeof a[i] === "string") {
      tex += a[i] + "<br>";
    }
    if (typeof a[i] === "number") {
      num += a[i] + "<br>";
    }
    if (a[i] < 4) {
      so += a[i] + "<br>";
    }
    if (typeof a[i] === "string") {
      wor += a[i] + "<br>";
    }
    i++;
  } while (i < a.length);
  document.getElementById("demo").innerHTML = "so ra so :" + "<br>" + tex;
  document.getElementById("de").innerHTML = "chu ra chu :" + "<br>" + num;
  document.getElementById("numb").innerHTML = "gia tri < 4 :" + "<br>" + so;
  document.getElementById("word").innerHTML = "chu:" + "<br>" + wor;
}
document.getElementById("f3").addEventListener("keydown", twoarray);
var f = [1, 2, 3, 4, 5, 6, "a", "b", "n"];
var g = ["ABC", "a", 1, 9, 6, 2];
var same = "";
var t = 0;
function twoarray() {
  do {
    var y = 0;
    do {
      if (f[t] == g[y]) {
        same += f[t] + "<br>";
      }
      y++;
    } while (y < g.length);
    t++;
  } while (t < f.length);
  document.getElementById("gn").innerHTML =
    "các số giống nhau keydown:" + "<br>" + same;
}
// twoarray();
document.getElementById("gnn").addEventListener("click", arraysame);
var f = [1, 2, 3, 4, 5, 6, "a", "b", "n"];
var g = ["ABC", "a", 1, 9, 6, 2];
var same = "";
var t;
var y;
function arraysame() {
  for (t = 0; t < f.length; t++) {
    for (y = 0; y < g.length; y++) {
      if (f[t] == g[y]) {
        same += f[t] + "<br>";
      }
    }
  }
  document.getElementById("gnn").innerHTML =
    "các số giống nhau click:" + "<br>" + same;
}
var songuyen = "";
var k,
  l,
  count = 0;
document.getElementById("f4").addEventListener("keyup", primenumber3);
function primenumber3() {
  for (k = 2; k <= 30; k++) {
    count = 0;
    for (l = 2; l < k; l++) {
      if (k % l == 0) {
        count++;
        break;
      }
    }
    if (count == 0) {
      songuyen += +k + "<br>";
    }
  }
  document.getElementById("ssss").innerHTML = songuyen;
}
var k = 2;
var count = 0;
document.getElementById("ss").addEventListener("click", primenumber);
function primenumber() {
  do {
    count = 0;
    var l = 2;
    do {
      if (k % l == 0) {
        count++;
        break;
      }
      l++;
    } while (l < k);
    if (count == 0) {
      songuyen += +k + "<br>";
    }
    k++;
  } while (k <= 30);

  document.getElementById("ss").innerHTML = songuyen;
}
document.getElementById("f2").addEventListener("keyup", primenumber2);
function primenumber2() {
  var k = 2;
  var count = 0;
  while (k <= 30) {
    count = 0;
    var l = 2;
    while (l < k) {
      if (k % l == 0) {
        count++;
        break;
      }
      l++;
    }
    if (count == 0) {
      songuyen += +k + "<br>";
    }
    k++;
  }
  document.getElementById("sss").innerHTML = songuyen;
}
