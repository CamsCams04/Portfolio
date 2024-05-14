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
            Ce logiciel a pour but de calculer les meilleurs chemins à emprunter en fonction de leur fiabilité, 
             durée et distance.</p>
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
          de voiture très fortement inspiré de Trackmania et de Geometry Dash. Avec mon groupe, nous avons implémenté la 
          création de circuits et leur utilisation par les autres joueurs. Enfin, grâce à la monnaie mise en place dans 
          le jeu (VroumCoins), les joueurs peuvent acheter et personnaliser leurs karts.</p>
        </div>
        <h3>Gogo Itinero :</h3>
        <img id="logo" src="./img/gogoItinero/logo.png" alt="logo application gogoItinero">
        <div class="divProjet">
          <p class="textSlide">Ce projet est une application Android, réalisée à l'aide de Android Studio. Elle permet 
          de prévisualiser et d'enregistrer des itinéraires GPS automobiles à l'aide de l'API Google Maps. Nous pouvons 
          également créer un compte à l'aide de Firebase pour conserver nos itinéraires en cas de changement d'appareil. 
          Enfin, quelques paramètres ont été mis en place comme le changement de mode d'affichage (sombre/clair), la sauvegarde 
          ou non de l'historique, et l'activation ou non de la musique de début.</p>
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
          Deux modes de jeux sont proposés :
          <ul>
            <li>en mode automatique, le tirage des nombres est fait automatiquement par la machine et</li>
            <li>en mode manuel, c'est une personne physique à côté de la machine
          qui effectue le tirage, par exemple avec un boulier, et entre les numéros tirés sur l'application.</li>
          </ul>
          Au moment de jouer, l'organisateur peut également choisir le déroulement de sa partie en fonction de son règlement. 
          Enfin, sur la droite de la page du jeu, nous retrouvons un leaderboard qui affiche les deux derniers numéros tirés.</p>
          <Slide
              img1="./img/Loto/PrincipaleLoto.png"
              img2="./img/Loto/ModeJeuLoto.png"
              img3="./img/Loto/JeuLoto.png"
          />
      </div>
    `
});

App.mount("#myApp");