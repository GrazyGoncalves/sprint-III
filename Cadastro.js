function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imge/menu_isl36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imge/close_isl36dp.svg"
    }
}

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("btnCadastrar").onclick= function() {
  var mensagem = ""
  var valorNome = document.getElementById("txtNome").value;
  var valorCpf = document.getElementById("txtCpf").value;
  var valorCel = document.getElementById("txtCel").value;
  var valorEmail = document.getElementById("txtEmail").value;
                         
  if (valorNome.trim() === "") {
      mensagem +="Campo Nome Completo é obrigatório." + "\n";
  } 
  if (valorCpf.trim() === "") {
      mensagem +="Campo Cpf é obrigatório." + "\n";
  } 
  if (valorCel.trim() === "") {
      mensagem +="Campo Celular é obrigatório." + "\n";
  } 
  if (valorEmail.trim() === "") {
      mensagem +="Campo E-mail é obrigatório." + "\n";
  } 

  if (mensagem != "")
    alert(mensagem)
};
});