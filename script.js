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
                
    

console.log(ordenadas)
return ordenadas.slice(0,10)
        }
        }
}
function processa Texto (texto) {
    let palavras = texto.split(/\P{L}+/u);
    const frequencias conta Frequencias (palavras);
    let ordenadas Object.keys (frequencias).sort(ordenaPalavra);
    
    function ordenaPalavra (p1, p2) {
        return frequencias [p2] frequencias [p1];
    }
    console.log(ordenadas);
    return palavras;
}
