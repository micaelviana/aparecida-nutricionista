var botaoAdicionar = document.querySelector('#adicionar-paciente')
//eventListener eh exatamente o que o nome diz
botaoAdicionar.addEventListener('click', function(){
    //o default do form eh enviar os dados, apagar os campos e recarregar a pagina
    event.preventDefault()
    // o form eh especial, da pra acessar os inputs usando sintaxe de atributo, sem precisar do textContent
    // a sintaxe fica form.campo.value
    var form = document.querySelector('#form-adiciona')
    //essa funcao retorna um objeto do tipo paciente
    var paciente = obtemPacienteFormulario(form)

    //array de erros
    var erros = validaPaciente(paciente)

    //debuga
    console.log(erros)
    if(erros.length > 0){
        exibeMensagensErro(erros)
        return
    }

    adicionaPacienteTabela(paciente)

    //limpar o formulario
    form.reset()
    var mensagensErro = document.querySelector('#mensagens-erro')
    mensagensErro.innerHTML = ''

})

function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente)
    //esse conteudo agora tem que ir para a tabela
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function obtemPacienteFormulario(form){
    //essa sintaxe tem virgula, estranho
    var paciente = {
        //acessando campos do formulario
        nome: form.nome.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        altura: form.altura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    return paciente
}

function montaTr(paciente){
    //adicionar html 
    //criar elementos eh uma parte do processo mas no caso de uma tabela uma tr tem tds la dentro, entao vai precisar appendar isso
    var pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    //appendar o conteudo das tds na tr
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura,'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc,'info-imc'))

    return pacienteTr
}

function montaTd(dado,classe){
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente){
    var erros = []

    if (paciente.nome.length == 0){
        erros.push('O nome nao pode ser em branco')
    }
    if (paciente.gordura.length == 0){
        erros.push('A gordura nao pode ser em branco')
    }
    if (paciente.altura.length == 0){
        erros.push('A altura nao pode ser em branco')
    }
    if (paciente.peso.length == 0){
        erros.push('O peso nao pode ser em branco')
    }


    if (!validaPeso(paciente.peso)) {
        erros.push("O peso eh invalido")
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("A altura eh invalida")
    }
    return erros
}

function exibeMensagensErro(erros){
    var ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''
    //nas aulas ele usa outra sintaxe para o array.forEach(element => {
      //  ele faz array.forEach(function(element))
        //  ambas funcionam, mas sem a funcao fica mais bonito 
    //});
    erros.forEach(erro => {
       var li = document.createElement('li') 
        li.textContent = erro
        ul.appendChild(li)
    });
}
