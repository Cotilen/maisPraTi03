'use strict'

const lista = [
  {
    id: 1,
    title: "Ghost of Tsushima",
    text: `No final do século XIII, o império mongol devastou nações em sua campanha para conquistar o Oriente. A Ilha de Tsushima é tudo que resta entre a ilha principal do Japão e a imensa frota invasora dos mongóis liderada por um general ardiloso e implacável, Khotun Khan.
        Enquanto a ilha é devastada pela primeira onda de ataques mongóis, surge Jin Sakai, um corajoso guerreiro samurai que é um dos últimos sobreviventes de seu clã. Ele está decidido a fazer o que for preciso, custe o que custar, para proteger seu povo e recuperar seu lar. Para isso, será necessário deixar de lado as tradições que o moldaram como guerreiro e forjar um novo caminho, o do Fantasma, travando uma guerra atípica pela liberdade de Tsushima.
        `,
    img: "../assets/ghost.png",
    link:"https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_VERSO_DO_DIRETOR/"
  },
  {
    id:2,
    title: "The Last of Us",
    text: `Conheça a história emocionante e os personagens inesquecíveis de The Last of Us™, vencedor de mais de 200 prêmios de Jogo do Ano.
    Em uma civilização devastada, em que infectados e sobreviventes veteranos estão à solta, Joel, um protagonista abatido, é contratado para tirar uma garota de 14 anos, Ellie, de uma zona de quarentena militar. No entanto, o que começa como um pequeno serviço se transforma em uma jornada brutal através do país.`,
    img: "../assets/tlou.png",
    link:"https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/"

  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    text: `Vencedor de mais de 175 prêmios de Jogo do Ano e avaliado com mais de 250 notas máximas, Red Dead Redemption 2 é uma história épica de honra e lealdade no alvorecer dos tempos modernos.

    Estados Unidos, 1899. Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou.`,
    img: "../assets/rdr2.jpg",
    link:"https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"

  },
  {
    id: 4,
    title: "The Witcher 3: Wild Hunt",
    text: `Você é Geralt, da cidade de Rívia. Ao seu redor, todas as cidades e os povoados dos Reinos do Norte estão sendo devastados pela força sobrenatural de um exército invasor, conhecido apenas como Caçada Selvagem, que deixa um rastro sangrento de pura destruição por onde passa.
    Você descobrirá uma história complexa e envolvente e conhecerá personagens inesquecíveis enquanto se prepara para um confronto estrondoso com a Caçada Selvagem. Ao explorar os Reinos do Norte, você descobrirá que há mistérios à espreita em cada vilarejo, árvore e sombra.`,
    img: "../assets/witcher3.webp",
    link:"https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"

  },
  {
    id: 5,
    title: "Hogwarts Legacy",
    text: `Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado no mundo introduzido pela primeira vez nos livros do Harry Potter. Embarque em uma jornada por locais novos e familiares enquanto explora e descubra animais fantásticos, personalize seu personagem e crie poções, domine o lançamento de feitiços, aprimore talentos e torne-se o bruxo que deseja ser.
    Experimente Hogwarts da década de 1800. Seu personagem é um estudante com chave de um antigo segredo que ameaça destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas e decida o destino do mundo bruxo. Seu legado é o que você faz dele. Viva o Inesperado.`,
    img: "../assets/hogwarts.jpeg",
    link:"https://store.steampowered.com/app/990080/Hogwarts_Legacy/" 
  }
  
];

localStorage.setItem("id", '1')

function limitarTexto(texto) {
  if (texto.length > 240) {
    return texto.slice(0, 240) + "...";
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
    img.style.height = '22rem';
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
    btn.classList.add('border-success');
    btn.classList.add('border-3');
    btn.style.backgroundColor = 'rgb(116,249,75)'

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
  img.style.maxWidth = "25rem"
  img.style.maxHeight = "35rem"
  img.src = item.img;

  const footer = document.createElement('div');
  footer.classList.add('modal-footer');

  const buttonFooter = document.createElement('button');
  buttonFooter.type = 'button';
  buttonFooter.classList.add('btn');
  buttonFooter.classList.add('border-success');
  buttonFooter.classList.add('border-3');
  buttonFooter.textContent = 'Abrir Loja';

  buttonFooter.addEventListener('click', function () {
    window.open(item.link);
  });

  header.append(title, buttonHeader);
  body.append(img)
  footer.append(buttonFooter);
  content.append(header, body, footer);
  dialog.append(content);
  modal.append(dialog);
}

criarCards(lista);
