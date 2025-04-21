var pacientes = document.querySelectorAll('.paciente')
console.log(pacientes)


//vamos usar a tabela inteira em vez de cada filho, ai daqui detecta qual o filho da tabela 
var tabela = document.querySelector("table")
tabela.addEventListener('dblclick', function(){
    //adiciona uma classe para ter uma animacao na remocao
    //o event se refere ao meu alvo do listener, que aqui eh a tabela
    event.target.parentNode.classList.add('fadeOut')

    //tive que salvar antes mas nao sei porque, dentro do settimeout ele nao conseguiu fazer event.target direto
    //apesar do table ser o alvo do listener aqui pega o tr
    var alvo = event.target

    //espera para fazer a proxima operacao
    //repare que isso eh uma funcao, mas dentro dela tem uma sintaxe de OO, 
        //mas settimeout nao tem uma classe relacionada, 
        //eh meio estruturada misturada com OO
    setTimeout(function(){
        alvo.parentNode.remove()
    },500)

})
//
// //essa implementacao funciona para pacientes que foram adicionados no html, mas nao via o form, porque ele ta escutando a classe .paciente antes da adicao 
// pacientes.forEach(paciente => {
//     //evento de duplo clique
//     paciente.addEventListener('dblclick',function(){
//     console.log('fui clicado com um duplo click')
//         //isso remove um elemento da pg
//     this.remove()
//     });
// });
