'use strict'

const lista = [
    {
        titulo: "Card 1",
        texto: "Este é o texto do card 1.",
        imagem: "https://via.placeholder.com/300"
    },
    {
        titulo: "Card 2",
        texto: "Este é o texto do card 2.",
        imagem: "https://via.placeholder.com/300"
    },
    {
        titulo: "Card 3",
        texto: "Este é o texto do card 3.",
        imagem: "https://via.placeholder.com/300"
    }
];

{/* <div class="card border border-success border-3" style="width: 18rem;">
<img src="../assets/ghost.png" class="card-img-top" alt="...">
<div class="card-body text-center">
    <h5 class="card-title">Ghost of Tsushima</h5>
    <p class="card-text">No final do século XIII, o império mongol devastou nações em sua
        campanha para conquistar o Oriente. A Ilha de Tsushima é tudo que resta entre a ilha
        principal do Japão e a imensa frota invasora dos mongóis liderada por um general
        ardiloso e implacável, Khotun Khan.</p>
    <a href="#" class="btn btn-primary">Saiba Mais</a>
</div> */}

function criarCards(lista) {
    const container = document.getElementById('container__card');

    lista.forEach(item => {

        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('border');
        card.classList.add('border-success');
        card.classList.add('border-3');
        card.style.width = '18rem';
        card.id = item.id;

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = item.imagem;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.classList.add('text-center');
        
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = item.titulo;

        const text = document.createElement('p');
        text.classList.add('card-text');
        text.textContent = item.texto

        const btn = document.createElement('a');
        btn.href = '#';
        btn.textContent = 'Saiba Mais';
        btn.classList.add('btn');
        btn.classList.add('btn-primary');

        cardBody.append(title, text, btn)
        card.append(img, cardBody);

        container.appendChild(card);
    });
}

criarCards(lista);
