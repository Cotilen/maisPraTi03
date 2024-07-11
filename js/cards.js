function limitarTexto(texto) {
    if (texto.length > 245) {
      return texto.slice(0, 245) + "...";
    } else {
      return texto;
    }
  }
  
  export function criarCarrossel() {
    console.log(window.innerWidth);
    const carouselSlide = document.querySelector('.container__card');
    const cards = document.querySelectorAll('.card-carousel');
    let cardWidth
  
    let counter = 0;
    if(innerWidth <= 425){
      cardWidth = cards[0].clientWidth + 54;
  
    }else{
      cardWidth = cards[0].clientWidth + 55;
  
    }
  
    function slide() {
      carouselSlide.style.transform = `translateX(${-cardWidth * counter}px)`;
    }
  
    document.querySelector('.proximo-btn').addEventListener('click', () => {
      if(window.innerWidth <= 425){
        if (counter >= cards.length - 1) return;
      }else if(window.innerWidth <= 1024){
        if (counter >= cards.length - 2) return;
      }else if(window.innerWidth <= 1440){
        if (counter >= cards.length - 3) return;
      }else if(window.innerWidth <= 1900){
        if (counter >= cards.length - 4) return;
      }else{
        if (counter >= cards.length - 5) return;
      }
      counter++;
      slide();
    });
  
    document.querySelector('.anterior-btn').addEventListener('click', () => {
      if (counter <= 0) return;
      counter--;
      slide();
    });
  
  }
  
  
 export function criarCards(lista) {
    const container = document.getElementById('container__card');
    container.innerHTML = '';
  
    lista.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card-carousel');
      card.classList.add('border');
      card.classList.add('border-success');
      card.classList.add('border-3');
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
      window.open(item.link)
    });
  
    header.append(title, buttonHeader);
    body.append(img)
    footer.append(buttonFooter);
    content.append(header, body, footer);
    dialog.append(content);
    modal.append(dialog);
  }
  