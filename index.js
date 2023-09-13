//1.Variables :
//Sans valeur de départ car évolutive (let) :
let totalSeconds;

//Pour stopper le set interval :
let interval;


//2.Fonctions :

function countDown() {
    //Pour avoir les minutes : secondes/60 et arrondir avec Math.floor
    const minutes = Math.floor(totalSeconds / 60);
    //Pour les secondes : secondes MODULO de 60 pour avoir ce qu'il reste :
    const seconds = totalSeconds % 60;

    //Pour afficher un zéro en plus en dessous de dix secondes :
    //Si seconds est inférieur à 10 (?) alors tu affiches un zéro avant (+) seconds. Sinon(:) tu affiches seconds :
    const sec = seconds < 10 ? "0" + seconds : seconds;

    countdownDisplay.textContent = `${minutes} : ${sec}`;

     //Une fois que tu as joué tout ça, décrémente totalSeconds (si inférieur à 0):
    if (totalSeconds > 0){
       totalSeconds--;
    } else {
        countdownDisplay.textContent = "Compte à rebours terminé"
        //Nettoyer le setinterval grâce à la variable dans laquelle il est stocké :
        clearInterval(interval);
    }
}



//3.Evènements :

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //Test : est-ce que l'utilisateur a bien envoyé un chiffre (méthode "isNaN")
    if (isNaN(choice.value)) {
        alert("Entrez un chiffre");
    } else {

        //Dire à quoi correspond la boite "totalSeconds" :
        totalSeconds = choice.value * 60;
        //Vider l'input aprés validation :
        choice.value = "";
        
        //Nettoyer le setInterval avant de le redéclencher pour ne pas que l'utilisateur puisse en lancer plusieurs :
        clearInterval(interval);
        //Déclencher le compte à rebours en appelant la fonction correspondante (le stocker dans la variable de départ pour pouvoir le nettoyer) :
        interval = setInterval(countDown, 1000);
    }
});


