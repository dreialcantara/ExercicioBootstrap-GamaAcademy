// Animação ao hover

const tituloNav = document.querySelector(".navbar-brand");

tituloNav.onmouseover = () => {
    tituloNav.classList.add("animate__animated", "animate__fadeIn");
    setTimeout(function() {
        tituloNav.classList.remove('animate__animated','animate__fadeIn');
      }, 500)
}



// adicionando toast ao evento de click
const bntSubmit = document.querySelector("#btnSubmit");
const inputEmail = document.querySelector("#floatingInput")
const inputPassword = document.querySelector("#floatingPassword")
const dropdownNav = document.querySelector("#dropdownNav");

toastr.options.positionClass = "toast-bottom-left"

bntSubmit.onclick = () => {
if (!inputEmail.value){
    return toastr.error('Dados inválidos!')

}

if (!inputPassword.value){
    return toastr.error('Dados inválidos!')

}

    toastr.success('Logado com sucesso!')
    dropdownNav.classList.remove('d-none')







}
