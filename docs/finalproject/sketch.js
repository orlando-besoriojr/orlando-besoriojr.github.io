// var song;
// var artist;

// function setInfo() {
//   song = document.getElementById("Song").value;
//   artist = document.getElementById("Artist").value;
// }

// function test() {
//   alert(song);
//   alert(artist);
// }

//   display() {
//     fill('black');
//     ellipse(400, 400, 100, 100);
//   }
// }

function addTo(list) {
  var text = "";
  var input = document.querySelectorAll("input[type=text]");
  for (var i = 0; i < input.length; i++) {
    if(i == 0) {
      text += input[i].value + ", ";
      var song = input[i].value;
      song.split(' ').join('+');
    }
    else if (i == 1) {
      text += "by " + input[i].value;
      var artist = input[i].value;
      artist.split(' ').join('+');
    }
    else {
      text += " || " + input[i].value;
    }
  }
  var u = document.getElementById("list");
  var li = document.createElement("li");
  li.classList.add("list-group-item");
  var a = document.createElement("a");
  a.classList.add("nav-link");
  a.textContent = text;
  var link = "https://youtube.com/results?search_query="+song+"+"+artist;
  a.setAttribute('href', link);
  li.appendChild(a);
  u.appendChild(li);
}



// window.addEventListener("load", () => {
//   let canvas = document.getElementById("canvas");
//   let ctx = canvas.getContext("2d");

//   canvas.height = window.innerHeight;
//   canvas.width = window.innerWidth;

//   class Circle {
//     constructor(xpos, ypos, radius, color) {
//       this.xpos = xpos;
//       this.ypos = ypos;
//       this.radius = radius;
//       this.color = color;
//     }

//     draw(ctx) {
//       ctx.beginPath();
//       ctx.arc(this.xpos, this.ypos, this.radius, 0, Math.PI*2, false);
//       ctx.stroke();
//       ctx.closePath();
//       ctx.fillText(song, this.xpos, this.ypos);
//     }

//   }
//   let all_circles = [];

//   let createCircle = function(circle) {
//     circle.draw(ctx);
//   }
  
//   for(var numbers = 0; numbers < 10; numbers++) {
//     let random_x = Math.random()*window.innerWidth;
//     let random_y = Math.random()*window.innerHeight;
//     let mc = new Circle(random_x, random_y, 50, "black");
//     all_circles.push(mc);
//     createCircle(all_circles[numbers]);
//   }
// });
  // let all_circles = [];

  // let createCircle = function(circle) {
  //   circle.draw(context);
  // }
  
  // for(var numbers = 0; numbers < 10; numbers++) {
  //   let my_circle = new Circle(100, 100, 50, "black");
  //   all_circles.push(my_circle);
  //   createCircle(all_circles[numbers]);
  // }




/* Pin class to make objects from and draw out as input is accepted */
// class Pin {
//   constructor() {
//     this.song = song;
//     this.artist = artist;
//     this.genre = genre;
//   }

//   display() {
//     fill('black');
//     ellipse(400, 400, 100, 100);
//   }
// }
