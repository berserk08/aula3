let valor1 = prompt("digite um numero para cubo");

let cubo = valor1**3;

console.log (`valor ao cubo ${cubo}`);

//raiz

let valor2 = prompt("digite outro numero para raiz");

let raiz = Math.sqrt(valor2);

console.log (`valor da raiz ${raiz}`);

//menor e maior

const valores = [9, 0, 8, 1, 7, 190, 12, 87, -10, -200, 14, 1];

const menorvalor = Math.min(...valores);

const maiorvalor = Math.max(...valores);

console.log("Menor valor:", menorvalor);

console.log("Maior valor:", maiorvalor);

//elevado

let valorx = prompt("digite o valor de x")

let valory = prompt("digite o valor de y")

let elevadox = valorx**valory
let elevadoy = valory**valorx

console.log(`x elevado a y = ${elevadox}`)

console.log(`y elevado a x = ${elevadoy}`)