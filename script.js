var numeroSecreto = parseInt(Math.random() * 10);
var tentativa = 3;
var elementoTentativa = document.getElementById("tentativa");
var elementoStatus = document.getElementById("status");
var elementoTentativa = document.getElementById("tentativa");
var elementoResultado = document.getElementById("resultado");
var chute = parseInt(document.getElementById("valor").value);
var input = document.getElementById("valor");
input.focus();
elementoTentativa.innerHTML = "Tentativas: " + tentativa;
document.getElementById("button-58").style.visibility = "hidden";
elementoStatus.innerHTML = "-----";
function Verificar() {
  var elementoStatus = document.getElementById("status");
  var elementoTentativa = document.getElementById("tentativa");
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    document.getElementById("button-57").disabled = true;
    document.getElementById("button-57").style.borderColor = "cyan";
    elementoStatus.innerHTML = "-----";
    document.getElementById("status").style.color = "#0D0E0D";
    document.getElementById("button-58").style.visibility = "visible";
    elementoResultado.innerHTML = "Correto";
    elementoResultado.style.color = "cyan";
    console.log("Correct");
  } else if (tentativa === 0) {
    document.getElementById("button-57").disabled = true;
    document.getElementById("button-57").style.borderColor = "red";
    elementoStatus.innerHTML = "-----";
    document.getElementById("status").style.color = "#0D0E0D";
    document.getElementById("button-58").style.visibility = "visible";
  } else if (chute > 10 || chute < 0) {
    document.getElementById("valor").value = "";
    input.focus();
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    elementoResultado.style.color = "red";
    elementoTentativa.innerHTML = "Tentativas: " + tentativa;
    console.log("Input a number from 0 to 10");
  } else if (chute > numeroSecreto) {
    document.getElementById("valor").value = "";
    input.focus();
    tentativa = tentativa - 1;
    document.getElementById("status").style.color = "white";
    elementoStatus.innerHTML = "O número é menor que " + chute;
    elementoResultado.innerHTML = "Errado";
    elementoResultado.style.color = "red";
    elementoTentativa.innerHTML = "Tentativas: " + tentativa;
    console.log("Wrong");
  } else if (chute < numeroSecreto) {
    document.getElementById("valor").value = "";
    input.focus();
    tentativa = tentativa - 1;
    document.getElementById("status").style.color = "white";
    elementoStatus.innerHTML = "O número é maior que " + chute;
    elementoResultado.innerHTML = "Errado";
    elementoResultado.style.color = "red";
    elementoTentativa.innerHTML = "Tentativas: " + tentativa;
    console.log("Wrong");
  }
}
function tentarNovamente() {
  tentativa = 3;
  document.getElementById("valor").value = "";
  input.focus();
  elementoStatus.innerHTML = "-----";
  elementoResultado.innerHTML = "";
  elementoTentativa.innerHTML = "Tentativas: " + tentativa;
  document.getElementById("button-57").style.borderColor = "#00E700";
  numeroSecreto = parseInt(Math.random() * 10);
  document.getElementById("button-57").disabled = false;
  document.getElementById("button-58").style.visibility = "hidden";
  document.getElementById("status").style.color = "#0D0E0D";
}

const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 30);
