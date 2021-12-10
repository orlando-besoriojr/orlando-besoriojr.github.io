var song = "";
var artist = "";
function addTo(list) {
  var text = "";
  var input = document.querySelectorAll("input[type=text]");
  for (var i = 0; i < input.length; i++) {
    if(i == 0) {
      text += input[i].value + ", ";
      song = input[i].value;
      song.split(' ').join('+');
    }
    else if (i == 1) {
      text += "by " + input[i].value;
      artist = input[i].value;
      artist.split(' ').join('+');
    }
    else {
      text += " || " + input[i].value;
    }
  }
  var u = document.getElementById("list");
  var li = document.createElement("li");
  li.classList.add("list-group-item");
  li.classList.add("list-group-item-success");
  var a = document.createElement("a");
  a.classList.add("nav-link");
  a.classList.add("fw-bold");
  a.classList.add("text-dark");
  a.classList.add("rounded");
  a.target = '_blank';
  a.textContent = text;
  var link = "https://youtube.com/results?search_query="+song+"+"+artist;
  a.setAttribute('href', link);
  li.appendChild(a);
  u.appendChild(li);
}
var arr = [];
var valueToAdd = "";
function setToArray() {
  valueToAdd = song + " " + artist;
  arr.push(valueToAdd);
  console.log(arr);
}
