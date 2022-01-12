# <p style="text-align: center; color: blue;">"__#Algo Francis__"</p>


## <p style="text-align: center; color: red;">__La complexité algorithmique(1/2)__</p> 

<br>

        La notion d'algorithme remonte à l'antiquité. Cela s'est précisé dans le domaine des mathématiques par l'emploi de variables. L'algorithme au sens informatique apparaît avec l'invention des premières machines dotées d'automatismes. Au fur et à mesure que l’algorithmie se développe, les scientifiques ont voulu énoncer formellement et rigoureusement ce qu'est l'efficacité d'un algorithme et ils se sont rendus compte que la comparaison des algorithmes entre eux était nécessaire. Nous survolerons donc ces méthodes au cours de cette leçon en comparant plusieurs algorithmes de tri entre eux.

<br>

### <p style="text-align: center; color: orange;">---  LE PROJET 1/2  ---</p>

<br>
        
* D'abord, il faut que ton programme soit capable de gérer une liste qu'on peut moduler facilement. C'est-à-dire qu'elle devra être donnée en argument au programme.

<br>

* Afin de rendre le programme le plus modulable possible, il faudra qu'il puisse lire un fichier en paramètre et utiliser les nombres qui sont à l'intérieur :

<br>

        Exemple de contenu du fichier list.txt :

        48 -2 6 12 0 -4

<br>

* Il faudra donc lancer ton programme de la manière suivante :

<br>

        $ node monProgramme.js list.txt
        ⚠️ Attention à bien gérer les différents cas d'erreurs dans les arguments. Par exemple un fichier qui n'existe pas, un fichier vide, un mot au lieu d'un nombre... Dans ce cas, tu devras console.error() l'erreur pour en informer l'utilisateur.

<br>

### *Voici les différents algorithmes de tri à implémenter*

<br>

* Tri à bulles. Tu pourras trouver une explication du tri à bulles par Mosh Hamedani ici (les 4 premières minutes)
* Tri par insertion. Tu pourras trouver une explication du par insertion par Mosh Hamedani ici (les 5 premières minutes) ou par Harsha Suryanarayana, ici
* Tri par sélection. Tu pourras trouver une explication du par sélection par Michael Sambol ici ou par Harsha Suryanarayana, ici
* Tri rapide (quicksort). Tu pourras trouver une explication du par sélection par YK Sugishita ici ou par Harsha Suryanarayana, ici

<br>

        Attention, ici on prendra le premier nombre du tableau comme pivot
        Essaie d'en faire un maximum, et assure-toi bien de tester chaque tri avec différentes configurations de tableaux (par exemple avec un tableau déjà trié) et d'afficher ton tableau pour voir s'il est bien trié à la fin.

<br>

*⚠️ Le tri rapide devra utiliser la récursivité et devrait te faire chauffer les méninges 🤯🤯🤯 Pas la peine d'annuler ta reconversion si tu n'y arrives pas du premier coup ;)*

<br>

## <p style="text-align: center; color: red;">__La complexité algorithmique (2/2)__</p>

<br>

        Dans le futur, cela pourra t'arriver de devoir travailler sur du code qui n'est pas le tien. Et crois en mon éxperience, ce n'est pas toujours très joli... Tu vas donc aujourd'hui t'entraîner en travaillant sur code Legacy absolument illisible, bon courage !

<br>

### <p style="text-align: center; color: orange;"> --- LE PROJET 2/2 ---</p>

<br>

#### 2.1 Sujet 1

<br>

        Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.

        Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

<br>

#### 2.2. Sujet 2

<br>

        Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

        Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

<br>

## 2.3. Exercices

<br>

### Voici les 6 exercices.

<br>

- ### 1. Exercice 

<br>

        Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

<br>

- ### 2. Exercice 

<br>

        Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

<br>

- ### 3. Exercice 

<br>

        Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

<br>

- ### 4. Exercice 

<br>

        Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

<br>

- ### 5. Exercice 

<br>

        Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.

<br>

*Si tu réussis cet exercice, sache qu'il a été posé en entretien par Google. Tu peux postuler à Google. La classe, non ?*

<br>

- ### 6. Exercice 

<br>

        Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.

<br>

*Si tu réussis cet exercice, sache qu'il a été posé en entretien par Mailchimp. Tu peux postuler à Mailchimp. La classe, non ?*

<br>

<br>

***<p style="text-align: right; color: red;">[BON CHANCE !]</p>***