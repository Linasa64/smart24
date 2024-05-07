# SMART 2024 L'histoire des glaciers

![Insalogo](./images/logo-insa_0.png)

Project [SMART(PLD)](riccardotommasini.com/teaching/smart) is provided by [INSA Lyon](https://www.insa-lyon.fr/).

Students: **Lina Borg, Léa Durand, Billy Villeroy et Kaiming Zhu**

### Abstract
L'histoire des glaciers est un site internet ayant pour vocation la vulgarisation de l'importance des glaciers, et de leur avenir.

## Description 
Ce site propose des visualisations de données les plus simples possibles, afin d'être accessibles par un public de collégiens et de lycéens. Nous avons attaché une grande importance à la possblité d'interragir avec les plots que nous avons générés, et dès que cela est possible, un icône l'indique.

Les données utilisées proviennent toutes de bases de données scientifiques, et les prévisions d'évolution des glaciers suivent les paramètres de différents scénarios du GIEC.

## Project Goal
Le but est de sensibiliser les lecteurs (principalement des jeunes aux collège / lycée) afin de leur donner des ordres de grandeur concrets sur les effets du réchauffement climatique sur les glaciers, et de l'impact de leur disparition.

## Requirements
Nous recommandons d'utiliser un environnement virtuel python pour utiliser ce projet.

- Créer le venv

`python -m venv glaciers_venv`


- Activer le venv

`source oggm_env/bin/activate`

Certains packages (notamment pour la partie notebooks) ne fonctionnent pas sous windows. Il est donc nécessaire de travailler dans un sous-système Linux (bash). Exécuter la commande ci-dessous permet de réouvrir votre  fenêtre d'IDE (VSCode) dans le sous-système Linux.

`code .`

### 1. Lancer le site internet
- Packages nécessaires : 

`pip install Flask flask-cors flask-restx SQLAlchemy dash plotly numpy pycountry pandas`

- Lancer le site internet en local :

`cd glaciers__vulgarisation`
`./exe`

### 2. Utiliser les notebooks
Les noteook sont situés dans le dossier `notebooks`
- Packages nécessaires : 

`pip install numpy scipy pandas matplotlib shapely requests configobj netcdf4 xarray pytest seaborn oggm tables geopandas salem rasterio`

Si cela ne marche pas, faire :

`pip install -r requirements.txt --upgrade`

Utiliser l'environnement virtuel comme kernel de calcul pour  le notebook.

## Material
Les 3 principales bases de données utilisées pour le projet sont :
- https://oggm.org/
- https://wgms.ch/
- https://zenodo.org/records/6382554 (AR6 sea level projections)

## Note for Students

* Clone the created repository offline;
* Add your name and surname into the Readme file and your teammates as collaborators
* Complete the field above after project is approved
* Make any changes to your repository according to the specific assignment;
* Ensure code reproducibility and instructions on how to replicate the results;
* Add an open-source license, e.g., Apache 2.0;
* README is automatically converted into pdf

