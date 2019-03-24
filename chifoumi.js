// EXERCICE CHI FOU MI -- JAVASCRIPT 

let scoreOrdi = 0;

let scoreJoueur = 0;

function comparer(choixJoueur, choixOrdi) {
    if (choixJoueur === 'pierre' && choixOrdi === 2 || choixJoueur === 'feuille' && choixOrdi === 0 || choixJoueur === 'ciseaux' && choixOrdi === 1) {
        scoreJoueur++;
        return 'Gagné';
    } else if (choixOrdi === 0 && choixJoueur === 'ciseaux' || choixOrdi === 1 && choixJoueur === 'pierre' || choixOrdi === 2 && choixJoueur === 'feuille') {
        scoreOrdi++;
        return 'Perdu';
    } else if (choixOrdi === 0 && choixJoueur === 'pierre' || choixOrdi === 1 && choixJoueur === 'feuille' || choixOrdi === 2 && choixJoueur === 'ciseaux') {
        return 'Égalité';
    } else {
        return 'Choix Indisponible';
    }

}
// Même Principe avec un WHILE -- Dans ce cas le jeu est fini quand un des scores attend 3.


// while ((scoreJoueur !== 3 || scoreOrdi !== 3)) {

//     let choixJoueur = prompt('Pierre , Feuille , Ciseaux ?');

//     // Génere numéro aléatoire entre 0 et 2 .
//     let choixOrdi = Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1)) + 0;


//     console.log(comparer(choixJoueur, choixOrdi));
//     alert("Score Joueur: " + scoreJoueur + " \n Score Ordi: " + scoreOrdi);

//     if (scoreJoueur === 3) {
//         alert('Bravo le joueur gagné !!');
//         break;
//     } else if (scoreOrdi === 3) {
//         alert('Desolé l\'\ordi a gagné!');
//         break;
//     }

// }

for (let manche = 0; manche < 3; manche++) {
    let choixJoueur = prompt('Pierre , Feuille , Ciseaux ?');

    // Génere numéro aléatoire entre 0 et 2 .
    let choixOrdi = Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1)) + 0;

    console.log(comparer(choixJoueur, choixOrdi));
    alert("Score Joueur: " + scoreJoueur + " \n Score Ordi: " + scoreOrdi);
}


if (scoreJoueur === scoreOrdi) {
    alert('Fin de jeu. Aucun a gagné!!');
} else if (scoreJoueur > 2 || scoreOrdi < 2) {
    alert('Fin de jeu. Bravo le joueur gagné !!');
} else if (scoreOrdi > 2 || scoreJoueur < 2) {
    alert('Fin de jeu. Desolé l\'\ordi a gagné!');
}