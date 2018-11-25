//import * as amqp from "amqplib/callback_api";

var songsListIndex;
// Función para obtener el indice de la fila clickeada.
function getRowIndex(x) {
  songsListIndex = x.rowIndex - 1;
  console.log("Row index is: " + x.rowIndex);
  console.log("Index to charge the data -> " + songsListIndex);
}
