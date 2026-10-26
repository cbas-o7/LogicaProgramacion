let numbers = [];

let x = Number(prompt("Ingresa el primer numero: "));
let y = Number(prompt("Ingresa el segundo numero: "));
let z = Number(prompt("Ingresa el tercer numero: "));

numbers.sort((a, b) => b - a);
console.log(`El número mayor es: ${numbers[0]}`);
console.log(`El número del centro es: ${numbers[1]}`);
console.log(`El número menor es: ${numbers[2]}`);

console.log(`Numeros de mayor a menor: ${numbers}`);
numbers.reverse();
console.log(`Numeros de menor a mayor: ${numbers}`);

if (x == y && y == z) {
  console.log("Los 3 números son iguales.");
} else if (x == y || y == z || x == z) {
  console.log("Hay 2 números iguales.");
}
