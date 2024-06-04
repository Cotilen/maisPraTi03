'use strict'

const lista = [
  {
    id: 1,
    title: "Ghost of Tsushima",
    text: `No final do século XIII, o império mongol devastou nações em sua campanha para conquistar o Oriente. A Ilha de Tsushima é tudo que resta entre a ilha principal do Japão e a imensa frota invasora dos mongóis liderada por um general ardiloso e implacável, Khotun Khan.

        Enquanto a ilha é devastada pela primeira onda de ataques mongóis, surge Jin Sakai, um corajoso guerreiro samurai que é um dos últimos sobreviventes de seu clã. Ele está decidido a fazer o que for preciso, custe o que custar, para proteger seu povo e recuperar seu lar. Para isso, será necessário deixar de lado as tradições que o moldaram como guerreiro e forjar um novo caminho, o do Fantasma, travando uma guerra atípica pela liberdade de Tsushima.
        `,
    img: "../assets/ghost.png"
  },
];

localStorage.setItem("id", '1')

function limitarTexto(texto) {
  if (texto.length > 251) {
    return texto.slice(0, 251) + "...";
  } else {
    return texto;
  }
}

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
    img.src = item.img;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.classList.add('text-center');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = item.title;

    const text = document.createElement('p');
    text.classList.add('card-text');
    text.textContent = limitarTexto(item.text)

    const btn = document.createElement('a');
    btn.id = "btn";
    btn.textContent = 'Saiba Mais';
    btn.classList.add('btn');
    btn.classList.add('btn-primary');

    btn.addEventListener('click', function () {
      localStorage.setItem('id', item.id);

      criarModal(item)

      var modal = new bootstrap.Modal(document.getElementById('modal'), {
        keyboard: false
      });
      modal.show();

    });

    cardBody.append(title, text, btn)
    card.append(img, cardBody);

    container.appendChild(card);
  });
}

function criarModal(item) {
  const modal = document.getElementById('modal');

  while (modal.firstChild) {
    modal.removeChild(modal.firstChild);
}

  const dialog = document.createElement('div');
  dialog.classList.add('modal-dialog');
  dialog.classList.add('modal-lg');
  dialog.classList.add('modal-dialog-centered');

  const content = document.createElement('div');
  content.classList.add('modal-content');
  content.classList.add('bg-black');

  content.classList.add('border-success');
  content.classList.add('border-3');
  content.style.color = "rgb(116,249,75)"

  const header = document.createElement('div');
  header.classList.add('modal-header');

  const title = document.createElement('h5');
  title.classList.add('modal-title');
  title.textContent = item.title;

  const buttonHeader = document.createElement('button')
  buttonHeader.type = 'button'
  buttonHeader.classList.add('btn-close');
  buttonHeader.style.backgroundColor =  'rgb(116,249,75)'
  buttonHeader.setAttribute('data-bs-dismiss', 'modal');
  buttonHeader.setAttribute('aria-label', 'Close');

  const body = document.createElement('div');
  body.classList.add('modal-body');
  body.classList.add('d-flex');
  body.classList.add('align-items-center');
  body.classList.add('flex-column-reverse');
  body.textContent = item.text;

  const img = document.createElement('img');
  img.classList.add('card-img-top');
  img.classList.add('pb-5');
  img.style.width = "25rem"
  img.src = item.img;

  const footer = document.createElement('div');
  footer.classList.add('modal-footer');

  const buttonFooter = document.createElement('button');
  buttonFooter.type = 'button';
  buttonFooter.classList.add('btn');
  buttonFooter.classList.add('border-success');
  buttonFooter.classList.add('border-3');
  buttonFooter.setAttribute('data-bs-dismiss', 'modal');
  buttonFooter.setAttribute('aria-label', 'Close');
  buttonFooter.textContent = 'Fechar';

  header.append(title, buttonHeader);
  body.append(img)
  footer.append(buttonFooter);
  content.append(header, body, footer);
  dialog.append(content);
  modal.append(dialog);
}

criarCards(lista);
