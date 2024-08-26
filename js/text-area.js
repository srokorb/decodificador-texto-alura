const textArea = document.querySelector("#texto-principal");

textArea.addEventListener('input', function autoResize() {
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight}px`;
}, false);
