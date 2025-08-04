const button = document.querySelector(".ex-but");
console.log(button);
button.addEventListener("click", function () {
  let ex1, ex2, ex3, ex4, ex5, score;
  score = 0;
  ex1 = document.getElementById("ex1").value;
  if (ex1.trim().toLowerCase() != "32") {
    document.getElementById("s1").innerHTML =
      '<img height=20px src="/images/cross.png" />';
  } else {
    document.getElementById("s1").innerHTML =
      '<img height=20px src="/images/ok.png" />';
    score++;
  }

  ex2 = document.getElementById("ex2").value;
  if (ex2.trim().toLowerCase() != "electricity") {
    document.getElementById("s2").innerHTML =
      '<img height=20px src="/images/cross.png" />';
  } else {
    document.getElementById("s2").innerHTML =
      '<img height=20px src="/images/ok.png" />';
    score++;
  }

  ex3 = document.getElementById("ex3").value;
  if (ex3.trim() != "Internet") {
    document.getElementById("s3").innerHTML =
      '<img height=20px src="/images/cross.png" />';
  } else {
    document.getElementById("s3").innerHTML =
      '<img height=20px src="/images/ok.png" />';
    score++;
  }

  ex4 = document.getElementById("ex4").value;
  if (ex4.trim().toLowerCase() != "bus") {
    document.getElementById("s4").innerHTML =
      '<img height=20px src="/images/cross.png" />';
  } else {
    document.getElementById("s4").innerHTML =
      '<img height=20px src="/images/ok.png" />';
    score++;
  }

  ex5 = document.getElementById("ex5").value;
  if (ex5.trim() != "Hooper") {
    document.getElementById("s5").innerHTML =
      '<img height=20px src="/images/cross.png" />';
  } else {
    document.getElementById("s5").innerHTML =
      '<img height=20px src="/images/ok.png" />';
    score++;
  }
  ex6 = document.getElementById("ex6").value;
  if (ex5.trim() != "Hooper") {
    document.getElementById("s6").innerHTML =
      '<img height=20px src="/images/cross.png" />';
  } else {
    document.getElementById("s6").innerHTML =
      '<img height=20px src="/images/ok.png" />';
    score++;
  }
  ex7 = document.getElementById("ex7").value;
  if (ex5.trim() != "Hooper") {
    document.getElementById("s7").innerHTML =
      '<img height=20px src="/images/cross.png" />';
  } else {
    document.getElementById("s7").innerHTML =
      '<img height=20px src="/images/ok.png" />';
    score++;
  }
  ex8 = document.getElementById("ex8").value;
  if (ex5.trim() != "Hooper") {
    document.getElementById("s8").innerHTML =
      '<img height=20px src="/images/cross.png" />';
  } else {
    document.getElementById("s8").innerHTML =
      '<img height=20px src="/images/ok.png" />';
    score++;
  }
  ex9 = document.getElementById("ex9").value;
  if (ex5.trim() != "Hooper") {
    document.getElementById("s9").innerHTML =
      '<img height=20px src="/images/cross.png" />';
  } else {
    document.getElementById("s9").innerHTML =
      '<img height=20px src="/images/ok.png" />';
    score++;
  }
  ex10 = document.getElementById("ex10").value;
  if (ex5.trim() != "Hooper") {
    document.getElementById("s10").innerHTML =
      '<img height=20px src="/images/cross.png" />';
  } else {
    document.getElementById("s10").innerHTML =
      '<img height=20px src="/images/ok.png" />';
    score++;
  }
});
//   for (var i = 11; i < 17; i++) {
//     document.getElementById("s" + i).innerHTML = "";
//     text = "ch" + i;
//     if (document.getElementById(text).checked == true) {
//       if (document.getElementById(text).value == 1) {
//         document.getElementById("s" + i).innerHTML =
//           '<img align="absmiddle" height=20px src="/images/ok.png" />';
//         score++;
//       } else
//         document.getElementById("s" + i).innerHTML =
//           '<img align="absmiddle" height=20px src="/images/cross.png" />';
//     }
//   }

//   for (var i = 9; i < 11; i++) {
//     text = "a" + i;
//     text2 = "s" + i;
//     if (document.getElementById(text).checked == true) {
//       document.getElementById(text2).innerHTML =
//         '<img align="absmiddle" height=20px src="/images/ok.png"  />';
//       score++;
//     } else {
//       document.getElementById(text2).innerHTML =
//         '<img align="absmiddle" height=20px src="/images/cross.png"  />';
//     }
//   }

//   removeCookie("first");
//   removeCookie("second");
//   removeCookie("third");
//   removeCookie("fourth");
//   setCookie("first", score, 3);

//   document.getElementById("result").innerHTML =
//     "<div class='result'>Your result for Section 1 is " +
//     score +
//     "/10 </div>";
// })

// function toggle() {
//   var e = document.getElementById("answers");
//   if (e.style.display == "block") {
//     document.getElementById("b2").innerHTML =
//       ' <img height="25px" src="/images/show.png" style="vertical-align: middle"  /> Show answers';
//     e.style.display = "none";
//   } else {
//     document.getElementById("b2").innerHTML =
//       '<img height="25px" src="/images/hide.png" style="vertical-align: middle"  /> Hide answers';
//     e.style.display = "block";
//   }
// }
