var contagem = 1;
fetch('https://api.rawg.io/api/games?key=84860f89c4ba45e0ab92ab9c686dd12c').then(resposta=>{return resposta.json()})
.then(corpo=>{corpo.results.forEach(game => {
    console.log(game);
    if(contagem<7){
    var contagemString = `${contagem}`;
    document.getElementById("jogotitulo"+contagemString).innerText=game.name.length<20 ?  game.name=game.name : game.name=game.name.substring(0,20)+"..."; 
    document.getElementById("avaliação"+contagemString).innerText="Nota do Metacritic: "+game.metacritic;
    document.getElementById("jogoimagem"+contagemString).src=game.background_image;

    //if(game.name.length>20){game.name=game.name.substring(0,20)+"...";}
    contagem++;
}
});})



getGeneros();


getGamesByGenre("indie");
function getGeneros(){
    fetch('https://api.rawg.io/api/genres?key=84860f89c4ba45e0ab92ab9c686dd12c').then(resposta=>{return resposta.json()})
    .then(corpo =>{corpo.results.forEach(genre => {
    })})
}
  

//Rawg API get games by genre
function getGamesByGenre(genre){
    fetch('https://api.rawg.io/api/games?key=84860f89c4ba45e0ab92ab9c686dd12c&genres='+genre).then(resposta=>{return resposta.json()})
    .then(corpo=>{corpo.results.forEach(game => {
        console.log(game);
    });})
}

//Rawg API get games by platform
function getGamesByPlatform(platform){
    fetch('https://api.rawg.io/api/games?key=84860f89c4ba45e0ab92ab9c686dd12c&platforms='+platform).then(resposta=>{return resposta.json()})
    .then(corpo=>{corpo.results.forEach(game => {
        console.log(game);
    });})
}

//Rawg API get games by publisher
function getGamesByPublisher(publisher){
    fetch('https://api.rawg.io/api/games?key=84860f89c4ba45e0ab92ab9c686dd12c&publishers='+publisher).then(resposta=>{return resposta.json()})
    .then(corpo=>{corpo.results.forEach(game => {
        console.log(game);
    });})
}

//redirect to game page
function redirectGame(game){
    window.location.href = "detalhes.html";
}


//get game description
function getGameDescription(game){
    fetch('https://api.rawg.io/api/games?key=84860f89c4ba45e0ab92ab9c686dd12c').then(resposta=>{return resposta.json()})
    .then(corpo=>{corpo.results.forEach(game => {
        console.log(game.description);
    });})
}

//get game images
function getGameImages(game){
    fetch('https://api.rawg.io/api/games?key=84860f89c4ba45e0ab92ab9c686dd12c').then(resposta=>{return resposta.json()})
    .then(corpo=>{corpo.results.forEach(game => {
        console.log(game.background_image);
    });})
}

  
//game detail page
function getGameDetail(game){
    getGameDescription(game);
    getGameImages(game);
}

