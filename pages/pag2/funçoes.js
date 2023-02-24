// funcao que alem de ler o conteudo de uma pagina html em outra, so retorna a div com a classe .ret1

const card=$(document).ready(function(){
    $("#card1").click(function(){
        $(function(){
            $("#cardMusica1").load("musicas.html .ftautor,.infor, .coracao");
        });
    })
});

function Skiller(){
    document.getElementById("cardMusica1").innerHTML=card;
}