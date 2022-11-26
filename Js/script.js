var contagem = 1;
fetch('https://api.rawg.io/api/games?key=84860f89c4ba45e0ab92ab9c686dd12c').then(resposta=>{return resposta.json()})
.then(corpo=>{corpo.results.forEach(game => {
    console.log(game);
    if(contagem<7){
    var contagemString = `${contagem}`;
    document.getElementById("jogotitulo"+contagemString).innerText=game.name;
    document.getElementById("avaliação"+contagemString).innerText="Nota do Metacritic: "+game.metacritic;
    contagem++;
}
});})


  

/*
função para checar se game está na pag

function isGameInArray (name, results){
    return results.includes(name);
}
var searchGame = "grand-theft-auto-v";
var gameExists = isGameInArray(searchGame, results.game);
*/