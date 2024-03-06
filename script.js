const imagens = ['oppeheimerSlide.png', 'BerserkSlide.png', 'relatosSelvagensSlide.png', 'gravityFallsSlide.png', 'interestelarSlide.png', 'TheWalkingDeadSlide.png', 'bridgertonSlide.png'];
let titulos = ["Assista ja Oppenheimer!", "Assista ja Berseker!", "Assista ja Relatos Selvagens!", "Assista ja Gravity Falls!", "Assista ja The Walking Dead!", "Assista ja Interestrelar!", "Assista ja Bridgerton!"]
let index = -1;
let time = 2000;

function alterarImagem() {
    document.getElementById("carrocel").style.opacity = 0.03;
    setTimeout(() => {
        index = (index + 1) % imagens.length;

        document.getElementById("carrocel").src = imagens[index];

        document.getElementById("carrocel").style.opacity = 1;
    }, 500);
}

setInterval(alterarImagem, 2500);

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

  