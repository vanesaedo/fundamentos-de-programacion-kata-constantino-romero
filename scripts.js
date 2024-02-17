const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  // Put your code here
 
  return `'<p> ${pregunta[0]} </p>'`;
}

function imprimeTodasLasRespuestas(pregunta) {
  // Put your code here:  devuelve **un string** con todas las posibles respuestas. Para ello, esta función llama a
  imprimeUnaRespuesta();

}

function imprimeUnaRespuesta(respuesta) {
  // Put your code here:Recibe un **objeto respuesta** y devuelve **un string** compuesto del resultado de las dos siguientes funciones:
 return `'${imprimeLabel()} \n ${imprimeInput()}'`;
 
}

function imprimeLabel(respuesta) {
  // Put your code here
  
  return  `'<label for = "${respuesta["id"]}"> ${respuesta["label"]}</label>'`;
}

function imprimeInput(respuesta) {
  // Put your code here
  return `'<input type="radio" id="${respuesta["id"]}" name="${respuesta["name"]} value="${respuesta["value"]}">'`
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);
