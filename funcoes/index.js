var x = document.getElementById("corpo")
x.addEventListener("click", function musica(){
    const a = document.getElementById("musica")
    a.play();
})

var botaoN = document.getElementById("bts1");
var botaoL = document.getElementById("bts2");
var fundoCorpo = document.getElementById("corpo");
var fundoLogin = document.getElementById("loginP");
var fundoFormulario = document.getElementById("formulario");

function Noite() {
    fundoLogin.style.border = "solid 2px #45e01e";
    fundoFormulario.style.border = "solid 2px #45e01e";
    fundoFormulario.style.background = "linear-gradient(90deg,#097927 26%,#010a0d 96%)";
    fundoFormulario.style.color = "#0000000";
    fundoCorpo.style.background = "#000000";
    fundoCorpo.style.color = "#fff"

}

function Dia() {
    fundoLogin.style.border = "solid 2px #000000";
    fundoFormulario.style.border = "solid 3px #000000";
    fundoCorpo.style.background = "radial-gradient(circle, rgba(9,121,39,1) 10%, rgba(19,47,27,1) 65%)";
    fundoCorpo.style.color = "#fff";
}

