const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    campoResultado.textContent = palavrasChave.join(', ');
    
    campoResultado.textContent = palavras.join(', ');

}
function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
        let frequencias = {};
        for(let i of palavras) {
            frequencias[i] = 0;
            for (let j of palavras) {
                if (i == j) {
                    frequencias [i]++;
                }
                
        console.log(frequencias);
        return palavras;
        }
        }
}

