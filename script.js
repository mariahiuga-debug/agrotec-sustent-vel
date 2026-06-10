function alimentar() {
    const quantidade = document.getElementById('quantidade').value;
    const resultado = document.getElementById('resultado');

    if (quantidade === '' || quantidade <= 0) {
        resultado.textContent = "Por favor, digite uma quantidade válida!";
        resultado.style.color = "red";
    } else {
        resultado.textContent = `Foram liberados ${quantidade} kg de ração para os animais.`;
        resultado.style.color = "green";
    }
}
