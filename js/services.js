export const getGames = async () => {
    const url = '/games.json'

const data = await fetch(url)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    console.error('Erro ao buscar arquivo JSON:', error);
  });

  localStorage.setItem('games', JSON.stringify(data))

}

export const postGame = async (title, text, img, link) =>{

  const lista = JSON.parse(localStorage.getItem('games'))
  const newGame = {
    "id": lista.games.length + 1,
    "title": title,
    "text": text,
    "img": "../assets/" + img,
    "link": link
  };

  lista.games.push(newGame);
  localStorage.setItem('games', JSON.stringify(lista));

}

export const updateGame = async (id, title, text, img, link) =>{
  const lista = JSON.parse(localStorage.getItem('games'))

  const index = lista.games.findIndex(game => game.id === id);

  if (index > -1) {
    lista.games[index].title = title;
    lista.games[index].text = text;
    lista.games[index].img =  img;
    lista.games[index].link = link;
  }

  localStorage.setItem('games', JSON.stringify(lista));
}

export const deleteGame = async (id) =>{
  const lista = JSON.parse(localStorage.getItem('games'))

  lista.games = lista.games.filter(game => game.id!== id);

  localStorage.setItem('games', JSON.stringify(lista));
}
