const buton = document.getElementById('lienBouton');
const titre = document.getElementById('titre');
const nom = document.getElementById('nom');
const timelineStatusItems = document.querySelectorAll('.timeline-status');
const timelineObjects = document.querySelectorAll('.timeline_object');
const detailCompetence = document.querySelector('.detailCompétence');

const textTitre = 'PORTFOLIO';
const textNom = 'Camille Morfin';

const tailleTitre = textTitre.length;
const tailleNom = textNom.length;

const tailleTotal = tailleTitre + tailleNom;

let ind = 0;
// animation lors de l'ouverture de la page
let time = 350;

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(ecrire, 500);
});

function ecrire(){
    ind++;
    //let curseurvisible = ind % 2 === 0;

    if (ind<=tailleTitre) {
        titre.innerText = textTitre.substr(0, ind) + '|';
    }else{
        if(ind === tailleTitre + 1){
            titre.innerText = textTitre;
        }
        if(ind < tailleTotal){
            nom.innerText = textNom.substr(0, ind-tailleTitre) + '|' ;
        }else{
            nom.innerText = textNom;
        }

        time = 150;
    }

    if(ind<tailleTotal){
        setTimeout(function (){
            ecrire()
        }, Math.random() * time);
    }
}

// animation lors du clique sur le boutton
buton.addEventListener('click',function (e){
    // animation pour defiler d'un élément à un autre
    e.preventDefault();
    const targetElement = document.getElementById(this.getAttribute('href').substring(1));

    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    })

    // affichage du menu après avoir cliqué sur le bouton
    const menu = document.getElementById('menu');
    menu.style.display = 'flex';
})

document.addEventListener('DOMContentLoaded', function() {
    const premiereCompetence = timelineObjects[0];
    premiereCompetence.click();
});
