var formLogin = document.getElementById("formLogin");
var dni = document.getElementById("user");
var contraseña = document.getElementById("password");
var bIngresar = document.getElementById("bIngresar");


formLogin.addEventListener("submit", function(event) {
    if (verificarDni() == false || verificarContraseña() == false) {
        event.preventDefault();
    }
})

function verificarDni() {
    if (dni.value.toString().length != 8 || isNaN(dni.value)) {
        alert("dni no valido")
        return false;
    }
}

function verificarContraseña() {
    if(contraseña.value.length < 4) {
        alert("contraseña muy corta")
        return false;
    }
}