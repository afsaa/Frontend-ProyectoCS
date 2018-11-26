//import * as amqp from "amqplib/callback_api";
var allSongs;
var songsList = [];
var songDetails;

// Función para obtener el indice de la fila clickeada.
/*function getRowIndex(x) {
  songsListIndex = x.rowIndex - 1;
  console.log("Row index is: " + x.rowIndex);
  console.log("Index to charge the data -> " + songsListIndex);
}*/

function cargarNombre() {
  fetch("../keys.json")
    .then(res => res.json())
    .then(data => {
      songsList[0] = data[0].song1;
      songsList[1] = data[1].song2;
      songsList[2] = data[2].song3;
      songsList[3] = data[3].song4;
      document.getElementById("songName1").innerHTML = songsList[0];
      document.getElementById("songName2").innerHTML = songsList[1];
      document.getElementById("songName3").innerHTML = songsList[2];
      document.getElementById("songName4").innerHTML = songsList[3];
    });
}

function cargarDetalles(index) {
  var songsListIndex = index.rowIndex - 1;
  //console.log("Indice de la canción actual: " + songsListIndex);
  fetch("../keys.json")
    .then(res => res.json())
    .then(data => {
      songsList[0] = data[0].song1;
      songsList[1] = data[1].song2;
      songsList[2] = data[2].song3;
      songsList[3] = data[3].song4;
    });
  fetch("../details.json")
    .then(res => res.json())
    .then(data => {
      songDetails = data[songsListIndex];

      document.getElementById("Detalle1").innerHTML =
        songDetails[songsList[songsListIndex]].title;
      document.getElementById("Detalle2").innerHTML =
        songDetails[songsList[songsListIndex]].artist;
      document.getElementById("Detalle3").innerHTML =
        songDetails[songsList[songsListIndex]].album;
      document.getElementById("Detalle4").innerHTML =
        songDetails[songsList[songsListIndex]].genre;
      document.getElementById("Detalle5").innerHTML =
        songDetails[songsList[songsListIndex]].tracknumber;
      document.getElementById("Detalle6").innerHTML =
        songDetails[songsList[songsListIndex]].version;
      document.getElementById("Detalle7").innerHTML =
        songDetails[songsList[songsListIndex]].date;
      document.getElementById("Detalle8").innerHTML =
        songDetails[songsList[songsListIndex]].composer;
      document.getElementById("Detalle9").innerHTML =
        songDetails[songsList[songsListIndex]].lyricist;
    });
}
