 
//Funções 
var m = document.getElementById('ModalCadastros')

function abrirModal(){
    m.style.display = 'block'
}

function fecharModal(){
    m.style.display = 'none'
}

//Funções Modal Anúncios
let anuncio = document.getElementById('ModalAnuncio')
 
function ModalAnuncio(){
    anuncio.style.display = 'block'
}

function fecharModalAnuncio(){
    anuncio.style.display = 'none'
}

function directPag(){
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value
    
    if(login == '' && senha == ''){
        alert("Informe Login e Senha!")
    }
    else if (login == 'Brito' && senha == 'Freitas'){
    window.location.href = 'home.html'
    }else{
        alert("Login ou Senha Inválidos!")
        window.location.reload();
    }
}


//******************************************** */
