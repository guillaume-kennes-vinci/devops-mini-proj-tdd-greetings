# devops-mini-proj-tdd-greetings

## Description

Mini-projet : Hello World

### Prerequisites

-   [Node JS / NPM](https://nodejs.org/en/)

### Installing

Install dependencies

```
npm i
```

## Getting Started

Run the test

```
npm test
```

## Contributors

Group 19

Contributors names

-   Gabriel Crokaert
-   Lionel Janssens
-   Guillaume Kennes

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
Ce fichier .yml est une pipeline se déclenchant sur les pull requests ouvertes ou si une pull request existante a été modifiée.
Il exécute alors le job nommé Explore-GitHub-Actions sur la version la plus récente de Ubuntu en effectuant les étapes suivantes:
- Récupérer le code du référentiel.
- Installer les dépendances npm.
- Afficher l'heure de début du pipeline.
- Formater code avec Prettier.
- Linter le code.
- Exécuter les tests avec Jest et vérifier le taux de couverture (>80%).
- Construire le code.
- Afficher l'heure de fin du pipeline.
- Afficher un message indiquant le succès du pipeline sans erreurs.
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
Le "on" est un trigger qui se déclenche à chaque action spécifié (ici sur une pull request) et indiquant à GitHub Actions quand exécuter le workflow.
Le “on push”  désigne simplement que le pipeline va s'effectuer à chaque push du code et “on pull request” désigne que le pipeline s'effectuera sur les pull requests.
Nous conseillons aux développeurs juniors de de'utiliser le “on pull request” car les changements, étant sur une autre branche, sont isolés et nécessite une confirmation avant d'être appliqués sur la branche main, ce qui évite les fusions trop hatives et facilite la collaboration entre développeurs. De plus, la pipeline permetra une vérification sur le code et le workflow associé à "on pull_request" offre une vérification du code et un feedback immédiat, contribuant ainsi à une meilleure qualité du code.
```
- Quelle est la différence entre run et runs_on ?  Expliquez par rapport à votre pipeline.  
```bash 
"run" est le mot-clé qui est utilisé à chaque étape et qui précise la commande ou le script qui doit être exécuté. Il est utilisé pour définir les actions : installer les dépendances avec npm i par exemple.
"runs_on" est le mot-clé utilisé pour définir l'environnement virtuel (OS) dans lequel le job va s'effectuer. Dans notre pipeline le code va s'effectuer dans un environnement Ubuntu.
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
Le "use" est utilisé pour spécifier une action ou un script provenant d'une source externe, dans ce code nous l'utilisons inclure l'action "checkout".
Le "run" quant à lui est utilisé pour exécuter ddes commandes, ou scripts, directement dans l'environnement d'exécution du workflow, ici nous l'utilisons pour l'installation des dépendances, le formattage du code, le linting et le test afin d'ensuite être capable de le build.
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
Oui, les étapes peuvent être interverties, mais pas de manière aléatoire car les dépendances doivent bien être installées après la récupération du code source, le echo est là pour indiquer le début au bon endroit (après l'installation des dépendances). Le formattage, le linting, le test et le build sont dans cet ordre mais on pourrait très bien décider d'intervertir le linting et le formattage ou encore de mettre les tests avant le formattage et le linting. ET les 2 derniers messages, étant des echo servant globalement le même but(annoncer la réussite du pipeline), ils sont facilement interchangeables.
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
Pour ajouter un test de sécurité dans mon pipeline, je dois être sûr que les dépendances du programme secure_app soient correctement installées. Sinon je les installe via "run". Ensuite je dois exécuter le programme. Finalement je peux traiter les résultats du test si nécessaire.
Les questions que je dois toujours me poser avant d'utiliser un programmem sont : Est-ce que le programme est installé? ; Comment exécuter le programme? ; Est-ce que je veux traiter les résultats?
```
