//import * as amqp from "amqplib/callback_api";
var allSongs;
var songsList;
var songDetails;

// Función para obtener el indice de la fila clickeada.
/*function getRowIndex(x) {
  songsListIndex = x.rowIndex - 1;
  console.log("Row index is: " + x.rowIndex);
  console.log("Index to charge the data -> " + songsListIndex);
}*/

function cargarDetalles(index) {
  var songsListIndex = index.rowIndex - 1;
  console.log("Indice de la canción actual: " + songsListIndex);

  fetch("../details.json")
    .then(res => res.json())
    .then(data => {
      songDetails = data[songsListIndex];
      //console.log(data[0].Object.keys());
      console.log(songDetails["Ctrl + Alt + Supr"].title);

      document.getElementById("Detalle1").innerHTML =
        songDetails["Ctrl + Alt + Supr"].title;

      /*document.getElementById("Detalle2").innerHTML =
        data.songsListKeys[songsListIndex].artist;
      document.getElementById("Detalle3").innerHTML =
        data.songsListKeys[songsListIndex].album;
      document.getElementById("Detalle4").innerHTML =
        data.songsListKeys[songsListIndex].genre;
      document.getElementById("Detalle5").innerHTML =
        data.songsListKeys[songsListIndex].tracknumber;
      document.getElementById("Detalle6").innerHTML =
        data.songsListKeys[songsListIndex].version;
      document.getElementById("Detalle7").innerHTML =
        data.songsListKeys[songsListIndex].date;
      document.getElementById("Detalle8").innerHTML =
        data.songsListKeys[songsListIndex].composer;
      document.getElementById("Detalle9").innerHTML =
        data.songsListKeys[songsListIndex].lyricist;*/
    });
}
