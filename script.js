let imagens = ['oppenheimer fundo.jpg', 'berserk fundo 2.jpg', 'selvagens fundo_resized.jpg', 'gravity falls fundo.jpg', '/img/img5.jpg', 'interestelar fundo.jpg', '/img/img7.jpg'];
let titulos = ["Assista ja Oppenheimer!", "Assista ja Berseker!", "Assista ja Relatos Selvagens!", "Assista ja Gravity Falls!", "Assista ja The Walking Dead!", "Assista ja Interestrelar!", "Assista ja Bridgerton!"]
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
  
    /*fazendo  if e else para validar os campos */
    if (usuario == 'indio' && senha == 'tupiflix@2023') {
      //chama a tela do index
      window.open('perfil.html');
      //fecha a tela login
       window.close('index.html');
    } else {
      alert("usuarío ou senha inválidos");
    }
  }

  