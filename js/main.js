$(document).ready(function () {
  console.log("jquery start");
  $("#fname").blur(function () {
    if ($("#fname").val() == "") {
      alert("enter");
    }
    if ($("#fname").val().length > 1) {
      $("#pf").text("");
    }
  });
  $("#lname").change(function () {
    console.log("change event");
    if ($("#lname").val() == "") {
      $("#p1").text("enter");
    }

    var n = $("#lname").val();
    if (0 < n.length && n.length < 4) {
      $("#p1").text("enter againt");
    }
    if (n.length >= 4) {
      $("#p1").text("");
    }
  });
  $("#age").blur(function () {
    if ($("#age").val() == "") {
      $("#pa").text("enter againt");
      return;
    }
    var x = $("#age").val();
    if (5 < x && x < 20) {
      $("#pa").text("child");
      return;
    }
    if (x != Number) {
      $("#pa").text("dont enter word");
    }
    if (x >= 20) {
      $("#pa").text("Adults");
    }
    if (x <= 5) {
      $("#pa").text("illegal");
    }
  });
  $("#addr").blur(function () {
    if ($("#addr").val() == "") {
      $("#pad").text("enter againt");
      return;
    }
    var t = $("#addr").val();
    if (t.length > 25) {
      $("#pad").text("Enter less than 25 characters");
    }
    if (25 > t.length > 0) {
      $("#pad").text("");
    }
  });
  $("#uname").keyup(function () {
    var h = $("#uname").val();
    if (h == "") {
      $("#pu").text("enter againt");
      return;
    }
    if (h.length < 5) {
      $("#pu").text("Enter over 5 characters");
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

