function revelar() {

    // 1. Altera o src da imagem principal para o arquivo do jogador
    document.querySelector('.card-img-top').src = 'img/_vinicius_junior.png';

    // 2. Substitui o conteúdo dos <span> placeholders pelas informações do jogador
    //    e 3/4. remove a classe "placeholder" e aplica "card-text" em cada um

    // Nome (span sem id, dentro do h5#Nome, ao lado do span#Rank)
    const spanNome = document.querySelector('#Nome span.placeholder');
    spanNome.textContent = 'Vinícius José Paixão de Oliveira Júnior';
    spanNome.classList.remove('placeholder', 'col-6');
    spanNome.classList.add('card-text');

    // Rank
    document.getElementById('Rank').textContent = '9,5';

    // Data de nascimento
    const spanData = document.getElementById('Data_Nas');
    spanData.textContent = 'Nascimento: 12/07/2000 (25 anos)';
    spanData.classList.remove('placeholder', 'col-4');
    spanData.classList.add('card-text');

    // Altura
    const spanAltura = document.getElementById('Alutra');
    spanAltura.textContent = 'Altura: 1,76 m';
    spanAltura.classList.remove('placeholder', 'col-4');
    spanAltura.classList.add('card-text');

    // Posição (atenção: o id no HTML tem um espaço no final -> "Posição ")
    const spanPosicao = document.getElementById('Posição ');
    spanPosicao.textContent = 'Posição: Ponta-esquerda / Atacante';
    spanPosicao.classList.remove('placeholder', 'col-6');
    spanPosicao.classList.add('card-text');

    // Remove o efeito de "carregando" (placeholder-glow) do título e do parágrafo
    document.getElementById('Nome').classList.remove('placeholder-glow');
    document.querySelector('.card-body p').classList.remove('placeholder-glow');
}
