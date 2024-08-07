function hello() {
    console.log = ('Olá, mundo!')
}

/////////////////////////////////////////////
/*
Funções com parâmetros não necessitam de que a entrada de dados seja feita dentro dela 
Basta declarar a lógica da função, enquanto o parâmetro é declarado na chamada dela */

function exibirNome(nome) {
    console.log = (`Olá, ${nome}`)
}
exibirNome(LUCAS)


////////////////////////////////////////////////
/*
Embora a função já retorne o valor nela mesma, é uma boa prática armazenar o valor dela
em uma variável intermediária para reutilização deste resultado sem refazer várias chamadas
de em diferentes momentos da execução de código */

function dobro(numero) {
    return numero * 2;
}
let resultadoDobro = dobro(4);
console.log(dobro);

////////////////////////////////////////////////

function calcularMedia(a, b, c) {
    return (a+b+c) / 3;
}
let media = calcularMedia(2,7,9);
console.log(media);

////////////////////////////////////////////////

function encontrarMaior(a,b) {
    return a > b ? a : b; // a é maior que b? se sim retorne a, senão b
}
let  maiorNumero = encontrarMaior(3,50);
console.log(maiorNumero);

////////////////////////////////////////////////

function quadrado(numero) {
    return numero * numero;
}
let resultadoQuadrado = quadrado(5);
console.log(quadrado);


/////////////////////////////////////////////////

function calculaIMC(alturaM,pesoKG) {
    let imc = pesoKG / (alturaM * alturaM); // criada uma var intermediária para receber os valores da operação e ser retornada
    return imc; //ANTERIORMENTE return >> a função return estava incorreta, pois não havia o que retorna
}

////////////////////////////////////////////////////

function calculaFatorial(num) {
    let fator = num;
    while (fator > 1) {
        num *= --fator;  /* ANTERIORMENTE num*fator;
                                          fator--
                            >> nesse exemplo corrigido, (lido da direita para esquerda) o valor de ${fator} é subtraído em 1 unidade
                            do seu valor atual ANTES da operação, e multiplicado pelo valor de ${num}. Depois, o valor resultante se torna o novo 
                            valor de ${num} (multiplicação + atribuição "*=")                                                     */
    }
    return num //ANTERIORMENTE return >> a função return estava incorreta, pois não havia o que retornar
    
}

calculaFatorial(6)
////////////////////////////////////////////////////

function converteDolarReal(valorDolar) {
    let multiplicaReal = 4.8;
    let conversao = valorDolar * multiplicaReal; // criada uma var intermediária para receber os valores da operação e ser retornada
    return conversao; //ANTERIORMENTE return >> a função return estava incorreta, pois não havia o que retorna
}
converteDolarReal(5.40) // números float devem ser descritos com . ao invés de ,. Pois ao passar o valor 5,40 é como se fossem dois parâmetros: 5 e 40


////////////////////////////////////////////////////

function calculaArea(altura, largura) {
    let areaTotal = area * largura;
    return
    alert(`A área da sala é de ${areaTotal}m²`);
}

/////////////////////////////////////////////////////

function tabuada(numero){
    let multiplicador = 1;
    while(multiplicador <=10) {
        let resultado = numero*multiplicador; 
        //return removido, pois ele interromperia a execução do trecho e ignoraria o resto (antes da impressão no console)
        console.log(`O valor de ${numero} x ${multiplicador} é ${resultado}.`);
        multiplicador++;
    };
    console.log(`Tabuada do ${numero} concluída!`); 
}

tabuada(7);

//outra implementação:

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) { /* laço FOR:
                                       iniciamos a variável i = 1
                                       testamos a cada loop se i <=10. Se sim:
                                       acrescemos 1 ao valor de i e executamos todo o código abaixo   */
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }

////////////////////////////////////////////////////

let listaGenerica = []

////////////////////////////////////////////////////

let linguagensDeProgramação = ['Javascript','C','C++','Kotlin','Python'];
linguagensDeProgramação.push('Java','Ruby','GoLang');

////////////////////////////////////////////////////

console.log(linguagensDeProgramação[0]);
console.log(linguagensDeProgramação[1]);


///////////////////////////////////////////////////////
let ultimoValor = (linguagensDeProgramação.length - 1);
console.log(linguagensDeProgramação[ultimoValor]);