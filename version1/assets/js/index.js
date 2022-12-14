var option = {
    strings: ["$ Hello world! My name is"],
    typeSpeed: 10,
    onComplete: function () {
      document.querySelectorAll(".typed-cursor")[0].style.display = "none";
      var typed2 = new Typed(".text2", option2)
    }
}

var option2 = {
    strings: ["Edward Chen ^300"],
    typeSpeed: 10,
    onComplete: function () {
      document.querySelectorAll(".typed-cursor")[1].style.display = "none";
      var typed2 = new Typed(".text3", option3)
    }
}

var option3 = {
    strings: ["<br><br>$ ^200 I am a software engineer ^300 <br><br>$ ^200 And a part time Pokemon Go player . . . ^300 <br><br>$ ^200 anyways ^100 <br><br>$ ^200 Check out some of my personal "],
    typeSpeed: 10,
    onComplete: function () {
      document.querySelectorAll(".typed-cursor")[2].style.display = "none";
      var typed2 = new Typed(".text4", option4)
    }
}

var option4 = {
    strings: ["projects below ^300"],
    typeSpeed: 10,
    onComplete: function () {
      document.querySelectorAll(".typed-cursor")[3].style.display = "none";
      var typed3 = new Typed(".text5", option5)
    }
}

var option5 = {
    strings: ["<br><br>$ ^200 Or contact me at"],
    typeSpeed: 10,
    onComplete: function () {
      document.querySelectorAll(".typed-cursor")[4].style.display = "none";
      var typed4 = new Typed(".text6", option6)
    }
}

var option6 = {
    strings: ["edward98c@gmail.com ^300"],
    typeSpeed: 10,
    onComplete: function () {
      document.querySelectorAll(".typed-cursor")[5].style.display = "none";
      var typed4 = new Typed(".text7", option7)
    }
}

var option7 = {
    strings: ["<br><br>$ ^200 Error message: ^300 <br><br>$ ^200 Segmentation fault (core dumped) ^300 <br><br>$ ^200 .  ^100 <br><br>$ ^200 .  ^100 <br><br>$ ^200 .  ^100 <br><br>$ ^200"],
    typeSpeed: 10,
    onComplete: function () {
      document.querySelectorAll(".typed-cursor")[6].style.display = "none";
      var typed4 = new Typed(".text8", option8)
    }
}

var option8 = {
    strings: ["Heap corruption ^300", "Running gdb ^300", "Placing break statements ^300", "Null pointer found ^300", "Refactoring code ^300", "Need more coffee ^300", "Adding more code ^300", "Doing a barrel roll ^300", "More bugs found ^300"],
    typeSpeed: 25,
    backSpeed: 20,
    smartBackspace: true, // this is a default
    loop: true
}


var typed = new Typed(".text", option)

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("logo").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("logo").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

var logo = document.getElementById("logo");
logo.onclick = function() {
  window.scrollTo({
       top: 0,
       behavior: "smooth"
  });
}

var nav_about = document.getElementById("nav_about");
nav_about.onclick = function() {
  var element = document.getElementById('about_title')
  var offset = 45;
  var bodyRect = document.body.getBoundingClientRect().top;
  var elementRect = element.getBoundingClientRect().top;
  var elementPosition = elementRect - bodyRect;
  var offsetPosition = elementPosition - offset;

  window.scrollTo({
       top: offsetPosition,
       behavior: "smooth"
  });
}

var nav_projects = document.getElementById("nav_projects");
nav_projects.onclick = function() {
  var element = document.getElementById('project_title')
  var offset = 45;
  var bodyRect = document.body.getBoundingClientRect().top;
  var elementRect = element.getBoundingClientRect().top;
  var elementPosition = elementRect - bodyRect;
  var offsetPosition = elementPosition - offset;

  window.scrollTo({
       top: offsetPosition,
       behavior: "smooth"
  });
}

var below = document.getElementById("below");
below.onclick = function() {
  var element = document.getElementById('project_title')
  var offset = 45;
  var bodyRect = document.body.getBoundingClientRect().top;
  var elementRect = element.getBoundingClientRect().top;
  var elementPosition = elementRect - bodyRect;
  var offsetPosition = elementPosition - offset;

  window.scrollTo({
       top: offsetPosition,
       behavior: "smooth"
  });
}

var nav_exp = document.getElementById("nav_exp");
nav_exp.onclick = function() {
  var element = document.getElementById('exp_title')
  var offset = 45;
  var bodyRect = document.body.getBoundingClientRect().top;
  var elementRect = element.getBoundingClientRect().top;
  var elementPosition = elementRect - bodyRect;
  var offsetPosition = elementPosition - offset;

  window.scrollTo({
       top: offsetPosition,
       behavior: "smooth"
  });
}

var nav_contact = document.getElementById("nav_contact");
nav_contact.onclick = function() {
  var element = document.getElementById('contact_title')
  var offset = 45;
  var bodyRect = document.body.getBoundingClientRect().top;
  var elementRect = element.getBoundingClientRect().top;
  var elementPosition = elementRect - bodyRect;
  var offsetPosition = elementPosition - offset;

  window.scrollTo({
       top: offsetPosition,
       behavior: "smooth"
  });
}



