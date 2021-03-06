fetch('https://aws.random.cat/meow')
// https://cataas.com/cat : chats de secours
.then(function(body) { // body est la réponse de la requête effectuée
  return body.json(); // Evalue la réponse de l'objet
})
.then(function(json) {
  var image = document.createElement('img');
  image.src = json.file;
  var container = document.getElementById('container');
  container.appendChild(image);
});

fetch('https://api.kanye.rest/')
.then(function(body) { // body est la réponse de la requête effectuée
  return body.json(); // Evalue la réponse de l'objet
})
.then(function(json) {
  var span = document.getElementById('kanyequote');
  span.innerHTML = json.quote;
});
