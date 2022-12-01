// load function just in one html page
$(document).ready(function(){
if (window.location.href == "http://127.0.0.1:5500/HTML/index.html") {
var contagem = 1;
fetch('https://api.rawg.io/api/games?key=84860f89c4ba45e0ab92ab9c686dd12c').then(resposta=>{return resposta.json()})
.then(corpo=>{corpo.results.forEach(game => {
    console.log(game);
    if(contagem<7){
    var contagemString = `${contagem}`;
    document.getElementById("jogotitulo"+contagemString).innerText=game.name.length<20 ?  game.name=game.name : game.name=game.name.substring(0,20)+"..."; 
    document.getElementById("avaliação"+contagemString).innerText="Nota do Metacritic: "+game.metacritic;
    document.getElementById("jogoimagem"+contagemString).src=game.background_image;
    $("#jogotitulo"+contagemString).click(function(){
        console.log("clicou",game);
        redirectGame(game);
    });
    contagem++;

}
});})
}});



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
    window.location.href = "detalhes.html?game="+game.id;
}


function getPlatforms(){
    var count = 1;
    fetch('https://api.rawg.io/api/platforms?key=84860f89c4ba45e0ab92ab9c686dd12c').then(resposta=>{return resposta.json()})
    .then(corpo =>{corpo.results.forEach(platform => {
        if(count<4){
        console.log(platform);
        $('#nomeplataforma'+count).html(platform.name);
        $('#imagemplataforma'+count).attr('src',platform.image_background);

        count++;
        }
    })})
}

getPlatforms();