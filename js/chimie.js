function gotoPendu() {
    window.location.href="jeu/pendu_chimie.html";
}

function gotoRelier() {
    window.location.href="jeu/relier.html";
}

function gotoIndex() {
    window.location.href="index.html";
}

window.addEventListener('load', (event) => {
    
    if ( document.URL.includes("/chimie.html") ) {
        //Définition des graphique, pas toucher sans regarder la doc : https://www.chartjs.org/docs/latest/
        let scorePendu = []
        scorePendu = JSON.parse(sessionStorage.getItem('scorePenduChimie'));
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
        
        let scoreRelier = []

        scoreRelier = JSON.parse(sessionStorage.getItem('scoreRelier'));
        console.log(scoreRelier);

        const labelsRelier = [];
        //Boucle pour taille graph
        for(i = 0; i<10; i++)
        {
            labelsRelier.push("");
        }

        const dataRelier = {
            labels: labelsRelier,
            datasets: [{
              label: 'Relier',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: scoreRelier,
            }]
        };
        
        const configRelier = {
            type: 'line',
            data: dataRelier,
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
        
        const myChartRelier = new Chart(
            document.getElementById('myChartRelier'),
            configRelier
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

    //Création de la sessionStorage 'scorePenduChimie' + ajout de la première valeur
    if (sessionStorage.getItem("scorePenduChimie") === null) {
        console.log("Création sessionStorage scorePenduChimie");
        sessionStorage.setItem("scorePenduChimie", JSON.stringify(ScorPenduTab));
    } else 
    {
        //Ajout valeur dans la sessionStorage "scorePenduChimie"
        let scorePendu = [];
        scorePendu = JSON.parse(sessionStorage.getItem('scorePenduChimie'));
        console.log(scorePendu);

        scorePendu.push(ScorPenduTab);
        sessionStorage.setItem('scorePenduChimie', JSON.stringify(scorePendu))
    }
    window.location.href="../chimie.html";
}

//JS fonction pour relier
//Utilise la en passant le score en paramètre pour sauvegarder le score
//Ca renvoie automatiquement à la page d'avant
function saveScoreRelier(NouvScoreRelier) {
    //NouvScoreRelier = 2;
    ScorRelierTab = [];
    ScorRelierTab.push(NouvScoreRelier);

    //Création de la sessionStorage 'scoreRelier' + ajout de la première valeur
    if (sessionStorage.getItem("scoreRelier") === null) {
        sessionStorage.setItem("scoreRelier", JSON.stringify(ScorRelierTab));
    } else 
    {
        //Ajout valeur dans la sessionStorage "ScoreRelier"
        let scoreRelier = [];
        scoreRelier = JSON.parse(sessionStorage.getItem('scoreRelier'));
        console.log(scoreRelier);

        scoreRelier.push(ScorRelierTab);
        sessionStorage.setItem('scoreRelier', JSON.stringify(scoreRelier))
    }
    window.location.href="../chimie.html";
}

//Fonction pour supprimer le score
function deleteScore() {
    sessionStorage.removeItem('scorePenduChimie');
    sessionStorage.removeItem('scoreRelier');
    window.location.reload();
}