# maven-grunt

Projet d'intégration légère de maven et Grunt
Grunt réalise l'intégralité des tâches de build js, maven se contente de run la task grunt dans le bon profil

## install

### Global dependencies

Les dépendances qui ne dépendent pas du projet

node.js >= 0.8.0
grunt-cli 0.4.X
maven 3.0.X

Comment les installer

installer node.js à dl sur le site de node
installer le client en ligne de commande : npm install grunt-cli
installer maven à dl sur le site d'apache-maven

### Projet dependencies

grunt.js 0.4.X
grunt-contrib-clean 0.6.X
grunt-contrib-uglify 0.5.X

## run maven

run global :

en dev mode : mvn install 
en prod mode : mvn install -Pprod

run unitaire :

mvn grunt:npm pour installer les dépendances

mvn grunt:grunt -Dtarget=build_dev pour lancer grunt en mode dev
mvn grunt:grunt -Dtarget=build_prod pour lancer grunt en mode prod

