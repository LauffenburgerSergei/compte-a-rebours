// Créer la logique de compte à rebours

//choice.value = 5 minutes

//choice.value * 60 = totalSeconds

//let minutes = Math.floor(totalSeconds / 60);
//let seconds = totalSeconds % 60

// Créer un événement à la validation du form pour lancer le compte à rebours

let totalSeconds;
let interval;

function countDown() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const sec = seconds < 10 ? "0" + seconds : seconds;

  countdownDisplay.textContent = `${minutes} : ${sec}`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "c'est terminé !";
    clearInterval(interval);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("entrez un chiffre avant que je me fâche");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
