// Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
// Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// Cola 1: [ amarillo, rojo, azul, morado]
// Cola 2: [rosa, verde, negro, blanco]

function dividirColaEnDosColas(colaOriginal) {
    const colaPar = [];
    const colaImpar = [];
  
    for (let i = 0; i < colaOriginal.length; i++) {
      if (i % 2 === 0) {
        colaPar.push(colaOriginal[i]);
      } else {
        colaImpar.push(colaOriginal[i]);
      }
    }
  
    return [colaPar, colaImpar];
  }
  
  // Ejemplo de uso:
  const colaOriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
  
  const [colaPar, colaImpar] = dividirColaEnDosColas(colaOriginal);
  
  console.log("Cola 1:", colaPar);
  console.log("Cola 2:", colaImpar);
  