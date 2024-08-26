function criptografa() {
    const campoTexto = document.getElementById("texto-principal");
    const btnCryptography = document.querySelector("#criptografar");

    btnCryptography.addEventListener("click", (event) => {
        event.preventDefault();
        const textoCriptografado = criptografaTexto(campoTexto.value);

        toggleRetornoDisplay(false);
        exibeResultadoCriptografia(textoCriptografado);
    });
}

function descriptografa() {
    const campoTexto = document.getElementById("texto-principal");
    const btnCryptography = document.querySelector("#descriptografar");

    btnCryptography.addEventListener("click", (event) => {
        event.preventDefault();
        const textoDescriptografado = descriptografaTexto(campoTexto.value);

        toggleRetornoDisplay(false);
        exibeResultadoCriptografia(textoDescriptografado);
    });
}

function toggleRetornoDisplay(isEmpty) {
    const campoVazio = document.querySelector(".sem-retorno");
    const campoPreenchido = document.querySelector(".texto-criptografado");

    campoVazio.classList.toggle("d-none", !isEmpty);
    campoPreenchido.classList.toggle("d-none", isEmpty);
}

function exibeResultadoCriptografia(texto) {
    const paragrafo = document.querySelector(".texto-criptografado p");
    const textoNormalizado = texto.normalize("NFD").toLowerCase();

    if (isTextoValido(texto, textoNormalizado)) {
        paragrafo.textContent = texto;
    } else {
        paragrafo.textContent = "Apenas letras minúsculas e sem acento.";
    }
}

function isTextoValido(original, normalizado) {
    return original === normalizado && !temCaracterEspecial(original);
}

function temCaracterEspecial(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

// Inicializa os eventos de criptografia e descriptografia
criptografa();
descriptografa();
