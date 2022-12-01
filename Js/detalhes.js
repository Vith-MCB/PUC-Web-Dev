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
        $('#destaque-titulo').html(corpo.name);
        $('#destaque-descricao').html(corpo.description);
        $('#destaque-avaliacao').html("Nota do Metacritic: "+corpo.metacritic);
        $('#destaque-data').html("Data de lançamento: "+corpo.released);

        //use the game image as background at css file
        document.getElementById("corpoSite").style.backgroundColor = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.8+')';
        document.getElementById("corpoSite").style.backgroundBlendMode = "multiply";
        document.getElementById("corpoSite").style.backgroundImage = "url("+corpo.background_image+")";
        document.getElementById("corpoSite").style.backgroundSize = "cover";
        document.getElementById("corpoSite").style.backgroundRepeat = "no-repeat";
        document.getElementById("corpoSite").style.backgroundPosition = "center";
        document.getElementById("corpoSite").style.backgroundAttachment = "fixed";
        document.getElementById("corpoSite").style.backgroundSize = "100% 100%";
        

        
    })
}
