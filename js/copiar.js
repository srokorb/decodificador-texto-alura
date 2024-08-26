function copiarTexto() {
    const textoCopiado = document.querySelector(".texto-criptografado p");
    const btnCopy = document.querySelector("#copiar");

    btnCopy.addEventListener("click", () => {
        navigator.clipboard.writeText(textoCopiado.innerText)
            .then(() => {
                alert("Texto copiado");
                location.reload();
            })
            .catch(err => {
                console.error("Erro ao copiar o texto: ", err);
            });
    });
}
