$(document).ready(function () {
  console.log("jquery start");
  $("#fname").blur(function () {
    if ($("#fname").val() == "") {
      alert("nhap vao");
    }
    // if($("#fname").val().length > 1){
    //   $("#pf")
    // }
  });
  $("#lname").change(function () {
    console.log("change event");
    if ($("#lname").val() == "") {
      $("#p1").text("nhap vao");
    }

    var n = $("#lname").val();
    if (0 < n.length && n.length < 4) {
      $("#p1").text("nhap lai");
    }
    if (n.length >= 4) {
      $("#p1").text("");
    }
  });
  $("#age").blur(function () {
    if ($("#age").val() == "") {
      $("#pa").text("khong de trong");
      return;
    }
    var x = $("#age").val();
    if (5 < x && x < 20) {
      $("#pa").text("tre em");
    }
    if (x >= 20) {
      $("#pa").text("nguo i lon");
    }
    if (x <= 5) {
      $("#pa").text("ko hop le");
    }
  });
  $("#addr").blur(function () {
    if ($("#addr").val() == "") {
      $("#pad").text("ko bo trong");
      return;
    }
    var t = $("#addr").val();
    if (t.length > 25) {
      $("#pad").text("nhap lai nho hon 25 ki tu");
    }
    if (25 > t.length > 0) {
      $("#pad").text("");
    }
  });
  $("#uname").keyup(function () {
    var h = $("#uname").val();
    if (h == "") {
      $("#pu").text("ko bo trong");
      return;
    }
    if (h.length < 5) {
      $("#pu").text("nhap tren 5");
    }
    if (h.length > 10) {
      $("#pu").text("nhap duoi 10");
    }
    if (5 < h.length && h.length < 10) {
      $("#pu").text("");
    }
  });
  $("#pass").keyup(function () {
    var q = $("#pass").val();
    if (q == "") {
      $("#pp").text("ko bo trong");
      return;
    }

    if (0 < q.length < 8) {
      $("#pp").text("nhap nhieu hon 8 ki tu");
    }
    if (q.length > 8) {
      $("#pp").text("");
    }
  });
  $("#btn").click(function () {
    var q = $("#pass").val();
    if (q == "") {
      $("#pp").text("ko bo trong test");
    }
    var h = $("#uname").val();
    if (h == "") {
      $("#pu").text("ko bo trong test");
    }
    if ($("#addr").val() == "") {
      $("#pad").text("ko bo trong test");
    }
    $("#fn").append($("#fname").val());
    var n = $("#lname").val();
    if (n.length >= 4){
    $("#ln").append($("#lname").val());
    }
    var x = $("#age").val();
    if (5 < x && x < 20){
    $("#ag").append($("#age").val());
    }
    if (x >= 20){
    $("#ag").append($("#age").val());
    }
    var t = $("#addr").val();
    if (25 > t.length > 0) {
      $("#ad").append($("#addr").val());
    }
    if (5 < h.length && h.length < 10) {
      $("#us").append($("#uname").val());
    }
    if (q.length > 8) {
      $("#pw").append($("#pass").val());
    }
	console.log('commit')
  });
});
