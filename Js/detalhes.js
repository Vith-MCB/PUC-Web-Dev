var url = window.location.href;
              url = url.split('?game=');
              url = url[1];
console.log(url);

var id = url;
getGameById(id);
//rawg api get game by id
function getGameById(id){
    fetch('https://api.rawg.io/api/games/'+id+'?key=84860f89c4ba45e0ab92ab9c686dd12c').then(resposta=>{return resposta.json()})
    .then(corpo=>{console.log(corpo);
    })
}