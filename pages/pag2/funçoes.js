// funcao que alem de ler o conteudo de uma pagina html em outra, so retorna a div com a classe .ret1

// musicas MICHAEL JACKSON
const card = $(document).ready(function () {
    $(".card1").click(function () {
        $(function () {
            $("#listaMusicas").load("musicas.html #cardMusica1, #cardMusica2, #cardMusica3, #cardMusica4, #cardMusica5");
        });
    })
});


const card2 = $(document).ready(function () {
    $(".card2").click(function () {
        $(function () {
            $("#listaMusicas").load("musicas.html #cardMusica6, #cardMusica7, #cardMusica8, #cardMusica9, #cardMusica10");
        });
    })
});

const card3 = $(document).ready(function () {
    $(".card3").click(function () {
        $(function () {
            $("#listaMusicas").load("musicas.html #cardMusica11, #cardMusica12, #cardMusica13, #cardMusica14, #cardMusica15");
        });
    })
});



const card4 = $(document).ready(function () {
    $(".card4").click(function () {
        $(function () {
            $("#listaMusicas").load("musicas.html #cardMusica16, #cardMusica17, #cardMusica18, #cardMusica19, #cardMusica20");
        });
    })
});


const card5 = $(document).ready(function () {
    $(".card5").click(function () {
        $(function () {
            $("#listaMusicas").load("musicas.html #cardMusica21, #cardMusica22, #cardMusica23, #cardMusica24, #cardMusica25");
        });
    })
});



const card6 = $(document).ready(function () {
    $(".card6").click(function () {
        $(function () {
            $("#listaMusicas").load("musicas.html #cardMusica26, #cardMusica27, #cardMusica28, #cardMusica29, #cardMusica30");
        });
    })
});



function Skiller() {
    document.getElementById("listaMusicas").innerHTML = card;

}


function Marilia() {
    document.getElementById("listaMusicas").innerHTML = card2;

}
function Maroon5() {
    document.getElementById("listaMusicas").innerHTML = card3;

}

function Dbz() {
    document.getElementById("listaMusicas").innerHTML = card4;

}

function Naruto() {
    document.getElementById("listaMusicas").innerHTML = card5;

}



function Cdz() {
    document.getElementById("listaMusicas").innerHTML = card6;

}


