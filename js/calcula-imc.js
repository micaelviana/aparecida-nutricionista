// POC
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//INICIO da logica de verdade
//color o imc de cada paciente na tabela
////querySelectorAll retorna um array
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura)

  if (!pesoEhValido) {
    tdImc.textContent = "Peso invalido";

    //eh boa pratica no javascript na hora de alterar um estilo adicionar uma classe aquele componente em vez de usar objeto.style.propriedade, entao a gente adiciona essa classe no css, ('paciente-invalido') no caso e depois usa esse add pra alterar o estilo
    paciente.classList.add("paciente-invalido");
  } else if (!alturaEhValida) {
    tdImc.textContent = "Altura invalida";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) 
    return true;
  return false;
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3) 
    return true;
  return false;
}
