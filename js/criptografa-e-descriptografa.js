const listaCriptografica = ["enter", "imes", "ai", "ober", "ufat"];
const listaNormal = ["e", "i", "a", "o", "u"];

const cifras = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

function criptografaTexto(texto) {
    return listaNormal.reduce((acc, letra) => acc.replaceAll(letra, cifras[letra]), texto);
}

function descriptografaTexto(texto) {
    return listaCriptografica.reduce((acc, cifra) => acc.replaceAll(cifra, cifras[cifra]), texto);
}
