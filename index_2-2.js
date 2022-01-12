// Sujet 1 :

const firstSubjectArr1 = [10, 15, 3, 7];
const firstSubjectK1 = 17;
const firstSubjectArr2 = [1, 8, 10, 21];
const firstSubjectK2 = 19;

// Sujet 2 :

const secondSubjectArr1 = [3, 7, 8, 3, 6, 1];
const secondSubjectArr2 = [1, 4, 5, 8];

// Exercice 1
// Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

const checkSum = (array, num) => {
    const numbers = [...array]; // ... ==> Syntaxe de décomposition
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === num) return true;
      }
      return false;
    }
  };

  console.log("Exercice 1:");
  console.log(checkSum(firstSubjectArr1, firstSubjectK1)); // retourne vrai
  console.log(checkSum(firstSubjectArr2, firstSubjectK2)); // retourne faux
   
// Exercice 2
// Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

  const getSun = (array) => {
    const buildings = [...array];
    let count = 1;
    for (let i = 0; i < buildings.length - 2; i++) {
      let hasView = true;
      for (let j = i + 1; j < buildings.length - i; j++) {
        if (buildings[i] <= buildings[j]) hasView = false;
      }
      hasView ? count++ : null;
    }
    return count;
  };
  console.log("Exercice 2:");
  console.log(getSun(secondSubjectArr1)); // retourne 3
  console.log(getSun(secondSubjectArr2)); // retourne 1
 
// Exercice 3 & 5
// Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

  const checkSum2 = (array, num) => {
    const numbers = [...array];
     let searchValues = new Set();
     searchValues.add(num - numbers[0]);
     for (let i = 1, length = numbers.length; i < length; i++) {
       let searchVal = num - numbers[i];
       if (searchValues.has(numbers[i])) {
         return true;
       } else {
         searchValues.add(searchVal);
       }
     }
     return false;

    //La méthode set.has() a une complexité d'exécution de seulement O (1), ce qui signifie que la complexité temporelle globale de cette fonction est linéaire.

  };;
  console.log("Exercice 3 & 5:");
  console.log(checkSum2(firstSubjectArr1, firstSubjectK1)); // retourne vrai
  console.log(checkSum2(firstSubjectArr2, firstSubjectK2)); // retourne faux
   
// Exercice 4 & 6 
// Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

  const getSun2 = (array) => {
    const numbers = [...array];
    let counter = 1
    let maxHeight = numbers[numbers.length-1]
    for (i = numbers.length -2; i >= 0; i--) {
      if (numbers[i] > maxHeight) {
        maxHeight = numbers[i]
        counter++
      }      
    }
    return counter
  };
  
  console.log("Exercice 4 & 6:");
  console.log(getSun2(secondSubjectArr1)); // retourne 3
  console.log(getSun2(secondSubjectArr2)); // retourne 1
