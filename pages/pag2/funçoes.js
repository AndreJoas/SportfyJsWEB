// funcao que alem de ler o conteudo de uma pagina html em outra, so retorna a div com a classe .ret1

// musicas MICHAEL JACKSON
const card=$(document).ready(function(){
    $(".card1").click(function(){
        $(function(){
            $("#listaMusicas").load("musicas.html #cardMusica1, #cardMusica2, #cardMusica3, #cardMusica4, #cardMusica5");
        });
    })
});


const card2=$(document).ready(function(){
    $(".card2").click(function(){
        $(function(){
            $("#listaMusicas").load("musicas.html #cardMusica6, #cardMusica7, #cardMusica8, #cardMusica9, #cardMusica10");
        });
    })
});

const card3=$(document).ready(function(){
    $(".card3").click(function(){
        $(function(){
            $("#listaMusicas").load("musicas.html #cardMusica11, #cardMusica12, #cardMusica13, #cardMusica14, #cardMusica15");
        });
    })
});





function Skiller(){
    document.getElementById("listaMusicas").innerHTML=card;

}


function Marilia(){
    document.getElementById("listaMusicas").innerHTML=card2;

}
function Maroon5(){
    document.getElementById("listaMusicas").innerHTML=card3;

}

