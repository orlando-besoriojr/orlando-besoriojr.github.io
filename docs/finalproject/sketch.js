/* form input to put into an object "pin" */
var song;
var artist;
var genre;
var canvas = document.getElementById("canvas");

/* grabs form input */
function info() {
  song = document.getElementById("Song").value;
  artist = document.getElementById("Artist").value;
  genre = document.getElementById("Genre").value;
}

/* tests if it takes form input correctly */
function test() {
  alert(song);
  alert(artist);
  alert(genre);
}

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
