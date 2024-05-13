import Slide from "./entity/Slide.js";

const App = Vue.createApp({
    components: {
        Slide
    },
    template: `
      <h2> Projet réalisé dans le cadre du BUT :</h2>
      <section class="partProjet">
        <h3>Graph Map :</h3>
        <div class="divProjet">
            <p class="textSlide">Réalisé en Java, ce projet a pour but d'aider un responsable de plus de 30 établissements 
            à prendre des décisions, via une interface IHM. 
            Ce logiciel a pour but d'aider à connaître les meilleurs chemins à emprunter en fonction de la fiabilité, 
            de la durée et de la distance la plus courte.</p>
              <Slide
                  img1="./img/Graph/Principale.png"
                  img2="./img/Graph/chargement.png"
                  img3="./img/Graph/fonctionnalité.png"
              />
        </div>
        <h3>VroumVoum :</h3>
        <div class="divProjet">
              <Slide
                  img1="./img/vroumvroum/principale.png"
                  img2="./img/vroumvroum/jeu.png"
                  img3="./img/vroumvroum/creationCircuit.png"
              />
          <p class="textSlide">Ce projet est un site web réalisé en HTML, JavaScript et CSS. Il s'agit d'un jeu de course 
          de voiture. Très fortement inspiré de Trackmania et de Geometry Dash, nous avons implémenté avec mon groupe la 
          possibilité de créer nos propres circuits et de les rendre jouables par les autres utilisateurs. Nous pouvons 
          également jouer à des circuits prêts et ceux des autres joueurs. Enfin, grâce à la monnaie mise en place dans 
          le jeu (VroumCoins), nous pouvons personnaliser nos karts.</p>
        </div>
        <h3>Gogo Itinero :</h3>
        <img id="logo" src="./img/gogoItinero/logo.png" alt="logo application gogoItinero">
        <div class="divProjet">
          <p class="textSlide">Ce projet est une application Android, réalisée à l'aide de Android Studio. Grâce à cette 
          application, nous pouvons prévisualiser des itinéraires que nous pouvons enregistrer en favoris. Nous pouvons 
          également créer un compte à l'aide de Firebase pour pouvoir conserver nos itinéraires si nous changeons d'appareil. 
          Enfin, quelques paramètres ont été mis en place comme le changement de mode (sombre/clair), mais aussi la sauvegarde 
          ou non de l'historique, et enfin la désactivation de la musique de début.</p>
          <Slide
              img1="./img/gogoItinero/carte.png"
              img2="./img/gogoItinero/historique.png"
              img3="./img/gogoItinero/itineraire.png"
          />
        </div>
      </section>
      <h2>Projet personnel :</h2>
      <h3>Loto :</h3>
      <div class="divProjet">
          
          <p class="textSlide">Réalisé en JavaScript, HTML et CSS, ce projet a été réalisé pour aider à l'organisation 
          et au bon déroulement d'un loto.
          Deux modes de jeux sont proposés : le premier en mode automatique, c'est-à-dire que le tirage des nombres est 
          fait automatiquement par la machine, et le deuxième mode est quant à lui manuel, c'est-à-dire qu'il doit y 
          avoir une personne à côté de la machine qui, avec un boulier par exemple, fait le tirage des nombres et ensuite 
          les sélectionne sur le site.
          Au moment de jouer, l'organisateur peut également choisir la composition de sa partie en fonction de son règlement. 
          Enfin, nous retrouvons sur la page de jeux un leaderboard à droite qui affiche le dernier nombre tiré et celui d'avant.</p>
          <Slide
              img1="./img/Loto/PrincipaleLoto.png"
              img2="./img/Loto/ModeJeuLoto.png"
              img3="./img/Loto/JeuLoto.png"
          />
      </div>
    `
});

App.mount("#myApp");