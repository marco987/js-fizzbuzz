// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1 a 100
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Esattamente quelle devono essere le stringhe di output.

// Assegnazione variabili
var num_min, num_max,

// Elenco numeri da 1 a 100
num_min = 1;
num_max = 101;

// Condizioni particolari
for (num_min; num_min <= num_max; num_min++) {
  if ((num_min % 15) == 1) {
    console.log("FizzBuzz");
  } else if ((num_min % 3) == 1) {
    console.log("Fizz");
  } else if ((num_min % 5) == 1) {
    console.log("Buzz");
  } else {
    console.log(num_min - 1);
  }
}
