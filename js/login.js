function Userlogar() {
    var cpf = document.querySelector('#cpf');
    var pass = document.querySelector('#password');

    if (cpf.value == "") {
        alert("Digite seu CPF");
    } else if (pass.value == ""){
        alert("digite sua senha");
    }
    else if (pass.value == "pinguim") {
        alert("Logado com sucesso");
    } else {
        alert("Dica de senha : São aves marinhas que não voam");
    }
}

function mascara(i) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0, v.length - 1);
        return;
    }
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}

function esqueciSenha(){
    alert("Dica de senha : São aves marinhas que não voam");
}
