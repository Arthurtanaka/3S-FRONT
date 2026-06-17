function add() {

    // Pega o container que já tem o card do Vini Jr.
    const cardsContainer = document.getElementById('Cards');

    // Cria o novo card mantendo a mesma estrutura/classes do card existente
    const novoCard = document.createElement('div');
    novoCard.className = 'card';
    novoCard.style.width = '22rem';
    novoCard.style.marginLeft = '20px';
    novoCard.setAttribute('aria-hidden', 'true');

    novoCard.innerHTML = `
        <img src="img/Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paquetá">
        <div class="card-body">
            <h5 class="card-title">
                <span class="card-title">Lucas Paquetá</span>
                <span class="badge text-bg-secondary">8,8</span>
            </h5>
            <p class="card-text">
                <span><strong>Nascimento:</strong> 27/08/1997 (28 anos)</span><br>
                <span><strong>Altura:</strong> 1,80 m</span><br>
                <span><strong>Posição:</strong> Meio-campista</span><br>
            </p>
        </div>
    `;

    // Insere o novo card ao lado do anterior, sem remover/alterar o existente
    cardsContainer.appendChild(novoCard);
}
