/* Pure Functions | Funções Puras */
/*
Dado um conjunto de parâmetros, uma função pura sempre retorna o mesmo resultado.
Não produz efeitos colateriais
*/
const getFive = () => 5;
console.log(get());

const addFive = x => x + 5;
console.log(addFive(15))

/* Função impura, pois sempre retorna valores diferentes */
const addRandom = x => x = Math.random();
console.log(addRandom(10));

/* Impura */
Math.random()

/* Puro */
console.log(Math.max(1, 5, 8, 15, 2, 5));




/* ************************* IMMUTABILITY | IMUTABILIDADE **************************** */
let a = 123;

//Não pura
const incrementA = () => {
    return a++;
}
incrementA();
incrementA();
incrementA();
console.log(a);

//Pura
const immutableIncrement = x => {
    return x + 1;
}

var retorno1 = immutableIncrement(a);
var retorno2 = immutableIncrement(a);
var retorno3 = immutableIncrement(a);
console.log(aretorno1, retorno2, retorno3)

//------------------------------------------------------------------//
let state = {
    number: 123,
    name: 'Uilton Rocha'
}
console.log(state);
const incrementNumber = () => {
    state.number++;
} 
// incrementNumber();
// console.log(state);

 const incrementState = paramState => {
    stateparamState.number++;
} 

// incrementState(state);
// console.log(state);
const pureIncrementNumber = state => {
    const newState = Object.assign({}, state);
    newState.number++;
    return newState;
}
state = pureIncrementNumber(state)
console.log(state);