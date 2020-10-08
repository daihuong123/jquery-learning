var a = [1, 2, 3, 4, 5, 6, "a", "b", "n"];
var tex = "";
var num = "";
var so = "";
var wor = "";
for (i = 0; i < a.length; i++) {
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
}
document.getElementById("demo").innerHTML = "so ra so :" + "<br>" + tex;
document.getElementById("de").innerHTML = "chu ra chu :" + "<br>" + num;
document.getElementById("numb").innerHTML = "gia tri < 4 :" + "<br>" + so;
document.getElementById("word").innerHTML = "chu:" + "<br>" + wor;
var f = [1, 2, 3, 4, 5, 6, "a", "b", "n"];
var g = ["ABC", "a", 1, 9, 6, 2];
var same = "";
var t;
var y;

for (t = 0; t < f.length; t++) {
  for (y = 0; y < g.length; y++) {
    if (f[t] == g[y]) {
      same += f[t] + "<br>";
    }
  }
}
document.getElementById("gn").innerHTML = "các số giống nhau:" + "<br>" + same;
var songuyen = "";
var k;
for (k = 1; k <= 30; k++) {
  songuyen += +k + "<br>";
}
document.getElementById("ss").innerHTML = songuyen;