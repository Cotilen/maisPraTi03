import { criarCards, criarCarrossel } from './cards.js';
import { deleteGame, getGames, postGame, updateGame } from './services.js';

localStorage.setItem("id", '1')
await getGames()

cards()
openDash()
createGame()
gamesList()
contact()

function contact(){
  const btn = document.getElementById('button')

  btn.addEventListener('click', () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    if (nome == "" || email == "" || mensagem == "") {
      var modal = new bootstrap.Modal(document.getElementById('modalError'), {
        keyboard: false
      });
      modal.show();
  
    } else {
      var modal = new bootstrap.Modal(document.getElementById('modalSuccess'), {
        keyboard: false
      });
      modal.show();
    }
  })
}

function openDash() {
  let validator = true
  const btn = document.getElementById('btn-dash');
  const main = document.getElementById('main')
  const dash = document.getElementById('dashboard')

  btn.onclick = () => {
    if (validator) {
      main.style.display = "none";
      dash.style.display = "flex"
      validator = !validator

      createRowTable(JSON.parse(localStorage.getItem('games')))


    } else {
      main.style.display = "block";
      dash.style.display = "none"
      cards()


      validator = !validator
    }

    console.log("O");
  }

}

function createGame() {
  const btn = document.getElementById("btn-create");
  const form = document.getElementById("formAdd");

  btn.addEventListener('click', function () {
    if(form.reportValidity()){
      const title = document.getElementById('title').value;
      const text = document.getElementById('descricao').value;
      const img = document.getElementById('imgGame').files[0].name;
      const link = document.getElementById('link').value;
  
      postGame(title, text, img, link)
      createRowTable(JSON.parse(localStorage.getItem('games')))
  
      document.getElementById('title').value = "";
      document.getElementById('descricao').value = "";
      document.getElementById('imgGame').value = "";
      document.getElementById('link').value = "";
    }else{
      alert('Todos os campos devem ser preenchidos.')
    }
   
  })
}


function createRowTable(){
  const table = document.getElementById('table')
  table.innerHTML = ''
  lista.games.forEach(item => {
      const row = document.createElement('tr')
      row.setAttribute('class', 'table-row')
      row.id = `${item._id}`
      row.classList.add('item')
  
      const nome = document.createElement('td')
      const divNome = document.createElement('div')
      divNome.classList.add('titulo')
      divNome.textContent = item.title
  
      const descricao = document.createElement('td')
      const divDescricao = document.createElement('div')
      divDescricao.classList.add('scroll')
      divDescricao.textContent = item.text
      descricao.classList.add('item')
  
      const imagem = document.createElement('td')
      const img = document.createElement('img')
      img.classList.add('img-table')
      img.src = item.img
      img.alt = 'Imagem Jogo'
      imagem.classList.add('item')
  
      const acoes = document.createElement('td')
      const acoesDiv = document.createElement('div')
      acoesDiv.classList.add('acao')
  
      const trashIcon = document.createElement('i')
      trashIcon.classList.add('fas')
      trashIcon.classList.add('fa-trash-alt')
      trashIcon.classList.add('trash-icon')
      
      const editIcon = document.createElement('i')
      editIcon.classList.add('fas')
      editIcon.classList.add('fa-edit')
      editIcon.classList.add('edit-icon')
  
  
      nome.append(divNome)
      descricao.append(divDescricao)
      imagem.append(img)
      acoes.append(acoesDiv)
      acoesDiv.append(editIcon, trashIcon)
  
      row.append(nome, descricao, imagem, acoes)

      trashIcon.addEventListener('click', () =>{

          let modal = document.getElementById("modalDelete");
          let span = document.getElementsByClassName("btn-close")[3];
          let button = document.getElementById("btn-delete")
          let buttonCancel = document.getElementById("btn-cancel")
  
          modal.style.display = "block";
  
          span.onclick = function () {
              modal.style.display = "none";
          }
  
          buttonCancel.onclick = function () {
              modal.style.display = "none";
          }
  
          window.onclick = function (event) {
              if (event.target == modal) {
                  modal.style.display = "none";
              }
          }
  
          button.onclick = async () =>{
             await deleteGame(item.id)
             createRowTable(JSON.parse(localStorage.getItem('games')))
             modal.style.display = "none";
          }
      })

      editIcon.addEventListener('click', () => {

        let modal = document.getElementById("editModal");
        let span = document.getElementsByClassName("btn-close")[3];
        let button = document.getElementById("btn-edit")

        let title = document.getElementById("titleEdit");
        title.value = item.title

        let descricao = document.getElementById("descricaoEdit");
        descricao.value = item.text

        let img = document.getElementById("imgGameEdit");
        img.value = ""

        let link = document.getElementById("linkEdit");
        link.value = item.link

        modal.style.display = "block";

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        button.addEventListener('click', async () => {
            let form = document.getElementById('formEdit')
            let imagem = item.img
            console.log(imagem);

            if (img.value !== "") {
              imagem = "../assets/" + img.files[0].name

            }

            await updateGame(item.id, title.value, descricao.value, imagem, link.value)
            createRowTable(JSON.parse(localStorage.getItem('games')))
            modal.style.display = "none";

        })
    })
      table.append(row)
  });


}
function openModal(){
  var modal = document.getElementById("addModal");
  var btn = document.getElementById("btn-add");
  var span = document.getElementsByClassName("btn-close")[2];
  var save = document.getElementById("btn-create")

  btn.onclick = function () {
      modal.style.display = "block";
  }

  span.onclick = function () {
      modal.style.display = "none";
  }

  save.onclick = function () {
      modal.style.display = "none";
  }

  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

function gamesList(){
  createRowTable(JSON.parse(localStorage.getItem('games')))
  openModal()
}

function cards(){
  criarCards(JSON.parse(localStorage.getItem('games')).games)
  criarCarrossel()
}
