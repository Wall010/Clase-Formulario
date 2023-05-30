function ingreso(){
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    var bDUser = localStorage.getItem('user00');
    var bDPass = localStorage.getItem('pass00');

    if(username === bDUser && password === bDPass){
        alert("Inicio de sesion exitoso!!");
        window.location.href = "./galeria/index.html" ;
    }else{
        alert("Credenciales invalidas, Intentelo nuevamente");
    }
    //alert(username);
    //alert(password);
}

localStorage.setItem("user00","Robert");
localStorage.setItem("pass00", 1234);

function cargarPag(){
    //alert ("asasasas");
    var iframe = document.getElementById('miIframe');
    iframe.src = "./galeria/index.html"
}