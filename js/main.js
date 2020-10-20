$(document).ready(function () {
  console.log("jquery start");
  $("#fname").blur(function () {
    if ($("#fname").val() == "") {
      alert("nhap vao");
    }
    if ($("#fname").val().length > 1) {
      $("#pf").text("");
    }
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
      return;
    }
    if (x != Number) {
      $("#pa").text("ko nhap chu");
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
    var m = $("#fname").val();
    if (m == "") {
      alert("nhap vao first name");
      return false;
    }
    var n = $("#lname").val();
    if (n == "") {
      alert("nhap vao last name");
      return false;
    } else if (0 < n.length && n.length < 4) {
      alert("nhap vao nhiu hon 4 vao last name");
      return false;
    }
    var x = $("#age").val();
    if (x == "") {
      alert("khong de trong age");
      return false;
    } else if (x <= 5) {
      alert("tuoi ko hop lệ");
      return false;
    }
    //  else if (typeof x!= "number" ) {
    //   alert("khong nhap chu");
    //   return false;

    // }
    var t = $("#addr").val();
    if (t == "") {
      alert("khong de trong address");
      return false;
    } else if (t.length > 25) {
      alert("nhap duoi 25");
      return false;
    }
    var h = $("#uname").val();
    if (h == "") {
      alert("ko bo trong");
      return false;
    } else if (h.length < 5) {
      alert("nhap tren 5");
      return false;
    } else if (h.length > 10) {
      alert("nhap duoi 10");
      return false;
    }

    var q = $("#pass").val();
    if (q == "") {
      alert("ko bo trong pass");
      return false;
    } else if (q.length < 8) {
      alert("nhap nhieu hon 8 ki tu");
      return false;
    } else {
      $("#fn").append($("#fname").val()) 
      $("#ln").append($("#lname").val());
      $("#ag").append($("#age").val());
      $("#ad").append($("#addr").val());
      $("#us").append($("#uname").val());
      $("#pw").append($("#pass").val());
    }
  });
});
