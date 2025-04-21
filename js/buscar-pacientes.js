var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function () {
  console.log("buscando pacientes");

  var xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"
  );

  xhr.addEventListener("load", function () {
    var erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      pacientes.forEach((paciente) => {
        adicionaPacienteTabela(paciente);
      });
    } else {
      console.log(xhr.status, xhr.response);
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});
