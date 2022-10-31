function gotoMotCroise() {
    window.location.href="jeu/motcroise.html";
}

function gotoPenduAnatomie() {
    window.location.href="jeu/pendu_anatomie.html";
}

function gotoIndex() {
    window.location.href="index.html";
}

window.addEventListener('load', (event) => {
    
    if ( document.URL.includes("/anatomie.html") ) {
        //Définition des graphique, pas toucher sans regarder la doc : https://www.chartjs.org/docs/latest/
        let scorePendu = []
        scorePendu = JSON.parse(sessionStorage.getItem('scorePenduAnatomie'));
        console.log(scorePendu);

        const labelsPendu = [];
        //Boucle pour taille graph
        for(i = 0; i<10; i++)
        {
            labelsPendu.push("");
        }
            
        const dataPendu = {
        labels: labelsPendu,
        datasets: [{
            label: 'Pendu',
          backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
          data: scorePendu,
        }]
        };
            
        const configPendu = {
        type: 'line',
        data: dataPendu,
        options: {
            scales: {
                y: {
                    min: 0,
                    max: 4
                }
            }
        }
        };

        //
        
        let scoreMotCroise = []

        scoreMotCroise = JSON.parse(sessionStorage.getItem('scoreMotCroise'));
        console.log(scoreMotCroise);

        const labelsMotCroise = [];
        //Boucle pour taille graph
        for(i = 0; i<10; i++)
        {
            labelsMotCroise.push("");
        }

        const dataMotCroise = {
            labels: labelsMotCroise,
            datasets: [{
              label: 'MotCroise',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: scoreMotCroise,
            }]
        };
        
        const configMotCroise = {
            type: 'line',
            data: dataMotCroise,
            options: {
                y: {
                    min: 0,
                    max: 4
                }
            }
        };

        
        const myChartPendu = new Chart(
            document.getElementById('myChartPendu'),
            configPendu
        );
        
        const myChartMotCroise = new Chart(
            document.getElementById('myChartMotCroise'),
            configMotCroise
        ); 
    }
})

//JS fonction pour pendu_chimie
//Utilise la en passant le score en paramètre pour sauvegarder le score
//Ca renvoie automatiquement à la page d'avant
function saveScorePendu(NouvScorePendu) {
    //NouvScorePendu = 2;
    ScorPenduTab = [];
    ScorPenduTab.push(NouvScorePendu);

    //Création de la sessionStorage 'scorePenduAnatomie' + ajout de la première valeur
    if (sessionStorage.getItem("scorePenduAnatomie") === null) {
        console.log("Création sessionStorage scorePendu");
        sessionStorage.setItem("scorePenduAnatomie", JSON.stringify(ScorPenduTab));
    } else 
    {
        //Ajout valeur dans la sessionStorage "scorePenduAnatomie"
        let scorePendu = [];
        scorePendu = JSON.parse(sessionStorage.getItem('scorePenduAnatomie'));
        console.log(scorePendu);

        scorePendu.push(ScorPenduTab);
        sessionStorage.setItem('scorePenduAnatomie', JSON.stringify(scorePendu))
    }
    window.location.href="../anatomie.html";
}

//JS fonction pour MotCroise
//Utilise la en passant le score en paramètre pour sauvegarder le score
//Ca renvoie automatiquement à la page d'avant
function saveScoreMotCroise(NouvScoreMotCroise) {
    //NouvScoreMotCroise = 2;
    ScorMotCroiseTab = [];
    ScorMotCroiseTab.push(NouvScoreMotCroise);

    //Création de la sessionStorage 'scoreMotCroise' + ajout de la première valeur
    if (sessionStorage.getItem("scoreMotCroise") === null) {
        console.log("Création sessionStorage scoreMotCroise");
        sessionStorage.setItem("scoreMotCroise", JSON.stringify(ScorMotCroiseTab));
    } else 
    {
        //Ajout valeur dans la sessionStorage "scoreMotCroise"
        let scoreMotCroise = [];
        scoreMotCroise = JSON.parse(sessionStorage.getItem('scoreMotCroise'));
        console.log(scoreMotCroise);

        scoreMotCroise.push(ScorMotCroiseTab);
        sessionStorage.setItem('scoreMotCroise', JSON.stringify(scoreMotCroise))
    }
    window.location.href="../anatomie.html";
}

function deleteScore() {
    sessionStorage.removeItem('scorePenduChimie');
    sessionStorage.removeItem('scoreRelier');
    window.location.reload();
}