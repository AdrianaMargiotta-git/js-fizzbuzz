/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/

//dichiaro le variabili
var stampare = document.getElementById('stampare');

//stampo i numeri da 1 a 100
for (var i = 1; i <= 100; i++) {

  //if (numero % confronto == 0) per calcolare il mutliplo

  if(i % 15 == 0){
    //multipli sia di 3 che 5 stampo "FizzBuzz"
    console.log("FizzBuzz");
    stampare.innerHTML += "<li> FizzBuzz </li>";
  }  else if (i % 3 == 0) {
    //multipli di 3 stampo "Fizz"
    console.log("Fizz");
    stampare.innerHTML += "<li> Fizz </li>";
  } else if (i % 5 == 0) {
    //multipli di 5 stampo "Buzz"
    console.log("Buzz");
    stampare.innerHTML += "<li> Buzz </li>";
  } else {
    console.log(i);
    stampare.innerHTML += '<li>' + i + '</li>';
  }

};
