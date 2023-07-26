//? BMI = 72 kg / (1.65 x 1.65) = peso kg / altezza in metri x metri           cm -> m /100
//* BMI da 16 a 18.4 è sottopeso TRA 18.5 e 25 è normale da 25.1 a 30 è sovrappeso da 30.1 a 35 è obeso è in su è obesità grave.
//* considerare casistica di errore in caso il valore sia sotto i 12.8 o sia maggiore di  43.4.

const height = document.getElementById("height");

const weight = document.getElementById("weight");

const result = document.querySelector("#result");
const button = document.getElementById("calculate");
button.addEventListener("click", function () {
  result.innerHTML = "";
  const heightvalue = height.value; 
  const weightvalue = weight.value; 
  const heightnumber = parseFloat(heightvalue);
  const weightnumber = parseFloat(weightvalue);
  if (isNaN(heightnumber) || isNaN(weightnumber)) {  
    result.innerHTML =
      "<h1 class='text-red-500'>Inserisci l'Altezza / Peso correttamente!</h1>";
  
  } else {
    const heightmeters = heightvalue / 100;
    const bmi = weightvalue / (heightmeters * heightmeters);
    let bminumber = bmi.toFixed(2);
    let messaggio;
    if (bmi >= 16 && bmi <= 18.4) {
      messaggio = "sottopeso";
    } else if (bmi >= 18.5 && bmi <= 25) {
      messaggio = "normopeso";
    } else if (bmi >= 25.1 && bmi <= 30) {
      messaggio = "sovrappeso";
    } else if (bmi >= 30.1 && bmi <= 35) {
      messaggio = "obeso";
    } else if (bmi <= 12.8 || bmi >= 43.4) {
      messaggio = "errore";
    } else if (bmi >= 35.1) {
      messaggio = "obesità grave";
    }
    result.innerHTML = `<h1>${messaggio}, ${bminumber}</h1>`;
  }
});
