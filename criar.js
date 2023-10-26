function criar() {
    /* declarando as variáveis*/
    let usuario = document.getElementById('txb').value;
    let senha = document.getElementById('txbs').value;
    let senha2 = document.getElementById('txbs2').value;
  
    /*fazendo  if e else para validar os campos */
    if (usuario == 'indio' && senha == 'tupiflix@2023') {
      alert("Usuário já existente");
    } else if(usuario == '' || senha == '' || senha2 == ''){
      alert("Preencha os campos corretamente.");
    } else if(senha != senha2){
        alert("As senhas não coincidem.")
    } else{
        window.close('criacao.html');
        window.open('index.html');
    }
  }