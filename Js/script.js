
$(document).ready(function(){
if (!window.location.href.includes("?game=")) {

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
  
function redirectGame(game){
    window.location.href = "HTML/detalhes.html?game="+game.id;
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