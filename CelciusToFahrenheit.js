function CelciusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
console.log(
  `Conversão de Celcius para Fahrenheit: ` + CelciusToFahrenheit(25) + `° graus`
);

function FahrenheitToCelcius(f) {
  return ((f - 32) * 5) / 9;
}
console.log(
  `Conversão de Fahrenheit para Celcius: ` + FahrenheitToCelcius(86) + `° graus`
);

var name = "thiago";
var sobrenome = "nome";
console.log(`${name} ${sobrenome}`);
