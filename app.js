canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


const rayonBalle = 10, barreHeight = 10, barreWidth = 75;
const nbCol = 8, nbRow = 5, largeurBrique = 75, hauteurBrique = 20;


let x = canvas.width / 2;
let y = canvas.height - 30;

let barreX = (canvas.width - barreWidth) / 2;
 


// FONCTION DESSINER BALLE

function dessineBalle() {

    ctx.beginPath();
    ctx.arc(x, y, rayonBalle, 0, Math.PI * 2);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.closePath();
}

dessineBalle();




// FONCTION DESSINER BARRE DE DEPLACEMENT

function dessineBarre() {

    ctx.beginPath();
    ctx.rect(barreX, canvas.height - barreHeight - 2, barreWidth, barreHeight);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.closePath();
}

dessineBarre();



// TABLEAU AVEC TOUTES LES BRIQUES

const briques = [];

for (let i = 0; i < nbRow; i++) {                       // Création des lignes 

    briques[i] = [];                                     // On fait un tableau pour chaque rangées

    for (let j = 0; j < nbCol; j++) {                   // Création des colonnes

        briques[i][j] = { x: 0, y: 0, statut: 1 }        // Chaque brique sera un objet avec position x, y et un statut(supprimer si la balle touche)
    }
}

// console.log(briques);



// FONCTION DESSINER BRIQUES

function dessineBriques() {

    for (let i = 0; i < nbRow; i++) {
        for (let j = 0; j < nbCol; j++) {

            if (briques[i][j].statut === 1) {

                let briqueX = (j * (largeurBrique + 10) + 35);              // (j * (75 + 10(espace entre les cases)) + 35(espace gauche-droite) )
                let briqueY = (i * (hauteurBrique + 10) + 30);

                console.log(briqueX, briqueY);

                // Positionner
                briques[i][j].x = briqueX;
                briques[i][j].y = briqueY;

                // Dessiner
                ctx.beginPath();
                ctx.rect(briqueX, briqueY, largeurBrique, hauteurBrique);
                ctx.fillStyle = '#333';
                ctx.fill();

            } 
        } 
    }
}
dessineBriques();








/*
NOTES :

ctx.rect(barreX, canvas.height - barreHeight - 2, barreWidth, barreHeight);
        x : coordonnées pour le côté gauche
        y : coordonnées pour le coté droit
        width : largeur du rectangle 
        height : hauteur du rectange 



tableau briques : 
0: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]     
1: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
2: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
3: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
4: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]


0: Array(8)
0: {x: 0, y: 0, statut: 1}
1: {x: 0, y: 0, statut: 1}
2: {x: 0, y: 0, statut: 1}
3: {x: 0, y: 0, statut: 1}
4: {x: 0, y: 0, statut: 1}
5: {x: 0, y: 0, statut: 1}
6: {x: 0, y: 0, statut: 1}
7: {x: 0, y: 0, statut: 1}


*/


