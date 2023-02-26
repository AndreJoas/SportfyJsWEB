
var botaoN = document.getElementById("bts1");
var botaoL = document.getElementById("bts2");
var fundoCorpo = document.getElementById("corpo2");
var fundoLogin = document.getElementById("loginP");
var fundoFormulario = document.getElementById("cabeca");

// ----------cards----
var carde = document.getElementById("listaMusicas");

// ---------

function Noite() {
  
    carde.style.border= "solid 2px #45e01e";
    fundoLogin.style.border = "solid 2px #45e01e";
    fundoFormulario.style.border = "solid 2px #45e01e";
    fundoFormulario.style.background = "linear-gradient(90deg,#097927 26%,#010a0d 96%)";
    fundoFormulario.style.color = "#fff";
    fundoCorpo.style.background = "#000000";


}

function Dia() {
    carde.style.border= "solid 2px #000000";
    fundoLogin.style.border = "solid 2px #fff";
    fundoFormulario.style.border = "solid 3px #000000";
    fundoCorpo.style.background = "radial-gradient(circle, rgba(9,121,39,1) 10%, rgba(19,47,27,1) 65%)";
    fundoCorpo.style.color = "#fff";
   
    fundoFormulario.style.color = "#fff";
   
    
}
