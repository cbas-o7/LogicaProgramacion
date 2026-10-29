let celcius;
celcius = parseInt(celcius);

let condicion = false;

do {
    celcius = prompt("Ingresa los grados Celcius: ");
    celcius = parseInt(celcius);

    console.log(celcius)
    if (Number.isNaN(celcius)) {
        alert("Se ingreso un valor no numerico")
    } else {
        condicion = true;
    }


} while (condicion === false)

celciusToFarenheit = (cel) => {
  return cel * 1.8 + 32;
};

celciusToKelvin = (cel) => {
  return cel + 273.15;
};

console.log(`La temperatura en celcius es de ${celcius}`);
console.log(`La temperatura en farenheit es de ${celciusToFarenheit(celcius)}`);
console.log(`La temperatura en celcius es de ${celciusToKelvin(celcius)}`);
