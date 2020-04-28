const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood",
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl",
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore",
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner",
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger",
        }
    ]
};

const imprimeTitulo = (question) => {
    return ;
};

const imprimeLabel = (answer) => {
    return ;
};

const imprimeInput = (answer) => {
    return ;
};

const imprimeRespuesta = (answer) => {
    return ;
};

const imprimeRespuestas = (question) => {
    return ;
};

const imprimePregunta = (question) => {
    return `
        <form>
            ${imprimeTitulo(question)}
            ${imprimeRespuestas(question)}
        </form>
    `;
};

document.querySelector('article').innerHTML = imprimePregunta(pregunta);
