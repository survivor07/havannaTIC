function validar_formulario(){
    
    let usuario=document.getElementById("user2")
    let password=document.getElementById("pass2")
    let password2=document.getElementById("pass3")
    let email=document.getElementById("email")

    if(usuario.value.length < 1) {
        alert("el usuario esta vacio")
    }else{
    }

    if(password.value.length < 1) {
        alert("La contraseña esta vacia")
    }else {
    }

    if(password2.value.length < 1) {
        alert("La confirmacion de la contraseña esta vacia")
    }else {
    }

    if(email.value.length < 1) {
        alert("El correo esta vacio")
    }else {
        if(!/\S+@\S+\.\S+/i.test(email.value)){
            alert("el correo no tiene un formato de correo valido")
        }
    }

    if(password.value != password2.value) {
        alert("Las contraseñas no coinciden")
    }else{
    }
}
