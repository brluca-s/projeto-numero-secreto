/* 
A função document.querySelector busca o trecho do HTML correspondente à tag passada entre parêteses
Já a .innerHTML insere os comandos ou textos passados após o = para dentro da tag usada na consulta
anterior. 
   
Para criar funções precisamos usar a palavra reservada function + descrição() e descrever os comandos
entre chaves {}. Opcionalmente funções podem ser chamadas com parâmetros, que são descritos dentro
dos parênteses em sua criação e também invocação.

*/ 
let listaDeNumerosSorteados = [] // iniciando uma lista vazia para armazenar todos os sorteados (sem valores dentro)
let secretoMin = 1;
let secretoMax = 1000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// console.log(numeroSecreto)

function exibeTextoNaTela (tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   /*
   Uma abordagem alternativa, porém que gera a repetição de código (MÁ PRÁTICA) está descrita abaixo:

   let titulo = document.querySelector('h1')
   titulo.innerHTML = 'Bem vind@ ao jogo do número secreto'

   let paragrafo = document.querySelector('p')
   paragrafo.innerHTML = 'Escolha um número de 1 a 10'
   */
}

function mensagemInicial() {  //uma função composta de outras funções
   //Chamando a função com parâmetros   
   exibeTextoNaTela('h1','Bem vind@ ao jogo do número secreto');
   exibeTextoNaTela('p',`Escolha um número de ${secretoMin} a ${secretoMax}`);
}

mensagemInicial(); //é necessário chamar a função após criação para que elas seja devidamente executada

function verificarChute() {
   let chute = document.querySelector('input').value;
   let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
   let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

   if (chute == numeroSecreto) {
      exibeTextoNaTela('h1', 'Você acertou!');
      exibeTextoNaTela('p', mensagemTentativas);
      /* ao invés de descrever a mensagem na função com template strings por limitações do HTML,
      usamos a lógica em outra variável, e a função exibeTextoNaTela é chamada com o valor dessa variável */
      document.getElementById('reiniciar').removeAttribute('disabled');
      /*Estamos procurando um elemento pela sua ID no HTML. Nesse caso, ao localizar o elemento com
      atributo 'reiniciar', vamos remover o atributo 'disabled' do mesmo. Isso ativará o botão NOVO JOGO
      quando o usuário acertar o número secreto */


   } else {
      if (chute > numeroSecreto) {
         exibeTextoNaTela('p','O número secreto é MENOR que ' + chute);
      } else {
         exibeTextoNaTela('p','O número secreto é MAIOR que ' + chute);
      }
      tentativas++ //adicionar +1 ao valor de tentativas se errar
      limparCampo()
   }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * (parseInt(secretoMax) - parseInt(secretoMin) + 1)) + parseInt(secretoMin);
   
   if(listaDeNumerosSorteados.length == (secretoMax-secretoMin)){
      listaDeNumerosSorteados = [];
      /* esse if ACIMA reseta a lista de números sorteados caso o limite de possíveis números seja atingido,
       evitando o crash do jogo */
   }
   
   if(listaDeNumerosSorteados.includes(numeroEscolhido)) { // verifica se o número gerado já está na lista de sorteados (evitar repetição jogo)
      gerarNumeroAleatorio();
   } else {
      listaDeNumerosSorteados.push(numeroEscolhido); //se o número não foi sorteado antes, ele é incluído (PUSH, add, POP, remover) na lista para evitar novo sorteio
   }
   return numeroEscolhido;
}

function limparCampo() {
   chute = document.querySelector('input')
   chute.value = ''
   /* Esse trecho de código seleciona o valor que está dentro do campo de input e o altera para 
   um valor vazio ''   */
}

function reiniciarJogo() {
/* Essa função reseta o jogo para o estado inicial. 
O componente HTML precisa ter a função ONCLICK setada para essa função */
   numeroSecreto = gerarNumeroAleatorio(); // gera novo número aleatório e atribui a numeroSecreto
   limparCampo() // limpa o campo de entrada
   mensagemInicial(); // exibe as mensagens iniciais
   tentativas = 1; // reinicia o contador de tentativas
   //console.log(numeroSecreto)
   document.getElementById('reiniciar').setAttribute('disabled', true); // desabilita o botão novo jogo até que haja acertos
}