let imagens = ['oppenheimer fundo.jpg', 'berserk fundo 2.jpg', 'selvagens fundo_resized.jpg', 'gravity falls fundo.jpg', 'img5.jpg', 'interestelar fundo.jpg', 'img7.jpg'];
let index = 0;
let time = 2000;


function slideShow(){
    document.getElementById('carrocel').src = imagens[index];
     
    index++;

    if(index == imagens.length){
        index = 0;
    }

    setTimeout('slideShow()', time);
}

slideShow();

/*Função validar */
function validar() {
    /* declarando as variáveis*/
    let usuario = document.getElementById('user').value;
    let senha = document.getElementById('password').value;
    let usuario2 = document.getElementById('user').classList;
    let senha2 = document.getElementById('password').classList;
  
    /*fazendo  if e else para validar os campos */
    if ((usuario == 'indio' && senha == 'tupi') || (usuario == usuario2 && senha == senha2)) {
      //chama a tela do index
      window.open('perfil.html');
      //fecha a tela login
       window.close('index.html');
    } else {
      alert("usuarío ou senha inválidos");
    }
  }

  