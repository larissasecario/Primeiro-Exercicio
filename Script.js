let hora = document.querySelector("#conteudo-hora");
let imagem = document.querySelector("#imagem");
let fundo =  document.querySelector(".main");


window.onload = setInterval(PegarHorario);


function PegarHorario(){
    let data = new Date();
    horaAtual = data.getHours();
    minuto = data.getMinutes();
    segundo = data.getSeconds();
    hora.innerHTML = `Agora são: ${horaAtual}:${minuto}:${segundo} .`;

    if(horaAtual >= 0 && horaAtual< 12){
    imagem.src = "image/manha.jpg";
    fundo.style.background= "#ffaf1c";

    }else if(horaAtual >= 12 && horaAtual< 18){
    imagem.src = "image/tarde.jpg";
    fundo.style.background= "#527a87";
    
    }else{
    imagem.src = "image/noite.jpg";
    fundo.style.background= "#272928";

}

};






