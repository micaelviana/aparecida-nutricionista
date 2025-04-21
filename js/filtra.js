var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  //pra checar o conteudo do input
  console.log(this.value);

  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;

        //jeito de criar expressao regular, o this.value eh o texto do meu input
        //i eh insensitive case
        //aqui essa regex pesquisa uma substring 
      var expressao = new RegExp(this.value, 'i')

        //se nao achou sao pacientes que eu nao quero ver
      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  }else{
      for(var i =0; i < pacientes.length; i++){
          var paciente = pacientes[i]
          paciente.classList.remove('invisivel')
      }
  }
});
