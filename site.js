function mudarEstilo1() {
    document.getElementById('estilo').setAttribute('href', 'styles.css');
    document.getElementById('imagem').setAttribute('src', 'imagens/imagem_estilo1.png');
}
function mudarEstilo2() {
    document.getElementById('estilo').setAttribute('href', 'styles2.css');
    document.getElementById('imagem').setAttribute('src', 'imagens/imagem_estilo2.png');
}
function mudarEstilo3() {
    document.getElementById('estilo').setAttribute('href', 'styles3.css');
    document.getElementById('imagem').setAttribute('src', 'imagens/imagem_estilo3.png');
}

function tirarEstilo() {
    document.getElementById('estilo').setAttribute('href' , 'style-base.css');
    document.getElementById('imagem').setAttribute('src', 'imagens/imagem_base.png');
}