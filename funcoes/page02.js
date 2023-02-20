
var botaoN = document.getElementById("bts1");
var botaoL = document.getElementById("bts2");
var fundoCorpo = document.getElementById("corpo2");
var fundoLogin = document.getElementById("loginP");
var fundoFormulario = document.getElementById("cabeca");

// ----------cards----
var carde = document.getElementById("cardMusica1");
var carde2 = document.getElementById("cardMusica2");
var carde3 = document.getElementById("cardMusica3");
var carde4 = document.getElementById("cardMusica4");
var carde5 = document.getElementById("cardMusica5");
var carde6 = document.getElementById("cardMusic61");
// ---------

function Noite() {
    fundoLogin.style.border = "solid 2px #45e01e";
    carde.style.border = "solid 2px #45e01e";
    carde2.style.border = "solid 2px #45e01e";
    carde3.style.border = "solid 2px #45e01e";
    carde4.style.border = "solid 2px #45e01e";
    carde5.style.border = "solid 2px #45e01e";
 

    fundoFormulario.style.border = "solid 2px #45e01e";
    fundoFormulario.style.background = "linear-gradient(90deg,#097927 26%,#010a0d 96%)";
    fundoFormulario.style.color = "#000000";
    fundoCorpo.style.background = "#000000";


}

function Dia() {
    fundoLogin.style.border = "solid 2px #000000";
    fundoFormulario.style.border = "solid 3px #000000";
    fundoCorpo.style.background = "radial-gradient(circle, rgba(9,121,39,1) 10%, rgba(19,47,27,1) 65%)";
    fundoCorpo.style.color = "#fff";
    fundoFormulario.style.color = "#fff";
   
    
}
