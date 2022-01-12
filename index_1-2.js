const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    arr_numbers = data.split(" ").map((num) => parseInt(num, 10));

    // Tri à bulle / Bubble sort

  const bubbleSort = (arr_numbers) => {
      let numbers = [...arr_numbers];
      let comparisonsCounter = 0;
      for (let i = 0; i < numbers.length; i++) {
          for (let j = 1; j < numbers.length - i; j++) {
              comparisonsCounter++;
              if (numbers[j - 1] > numbers[j]) {
                  [numbers[j - 1], numbers[j]] = [numbers[j], numbers[j-1]];
              }
          }
      }
      return `Tri à bulle/BubbleSort: ${comparisonsCounter} comparaisons - [${numbers}]`;
  };

    // Tri par insertion / InsertionSort

  const insersionSort = (arr_numbers) => {
      let numbers = [...arr_numbers];
      let comparisonsCounter = 0;
  
      for (let i = 1; i < numbers.length; i++) {
        x = numbers[i];
        j = i;
        while (j > 0 && numbers[j - 1] > x) {
          comparisonsCounter++;
          numbers[j] = numbers[j - 1];
          j -= 1;
        }
        numbers[j] = x;
      }
      return `Tri par insertion/Insertion sort: ${comparisonsCounter} comparaisons - [${numbers}]`;
    };


    // Tri par selection / SelectionSort

  const selectionSort = (arr_numbers) => {
      let numbers = [...arr_numbers];
      let comparisonsCounter = 0;
  
      for (let i = 0; i < numbers.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < numbers.length; j++) {
          comparisonsCounter++;
          if (numbers[j] < numbers[min]) min = j;
        }
        if (min !== i) {
          let temp = numbers[i];
          numbers[i] = numbers[min];
          numbers[min] = temp;
        }
      }
      return `Tri par sélection/Selection sort: ${comparisonsCounter} comparaisons - [${numbers}]`;
    };

      
   // Tri rapide (tri pivot) / Quicksort

  const quickSort = (arr_numbers) => {
    let counter = 0;
    let numbers = [...arr_numbers];

  const sort = (numbers) => {
    if (numbers.length <= 1) return numbers;
    const pivot = numbers[0];
    let right = [];
    let left = [];

    for (let i = 1; i < numbers.length; i++) {
      counter++;
      numbers[i] < pivot ? left.push(numbers[i]) : right.push(numbers[i]);
    }
    return sort(left, counter).concat(pivot, sort(right, counter));
  };

    numbers = sort(numbers);
    return `Tri rapide/QuickSort: ${counter} comparaisons [${numbers}]`;
  };

  // Tri fusion (merge sort)

  const mergeSort = (arr_numbers) => {
    let counter = 0;
    let numbers = [...arr_numbers];
    let half;

  const merger = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
      if (left [0] < right [0]) {
          arr.push(left.shift()); // enlève la partie gauche de l'array et le met dans un array trié
      } else {
          arr.push(right.shift()); //  enlève la partie droite de l'array et le met dans un array trié
      }
    }
    return [...arr, ...left, ...right];
  };

  const mergeSortSplit = (numbers, half = numbers.length / 2) => {
    counter++;
    if (numbers.length < 2) return numbers;
    let left = numbers.splice(0, half); // Partie gauche de numbers
    return merger(mergeSortSplit(left), mergeSortSplit(numbers));
  };

  numbers = mergeSortSplit(arr_numbers, half);
  return `Tri fusion/Merge Sort: ${counter} comparaisons [${numbers}]`;
  };

  //------------------------------------------------------------------------//
  
  console.log(bubbleSort(arr_numbers));
  arr_numbers = data.split(" ").map((num) => parseInt(num, 10));
  console.log(insersionSort(arr_numbers));
  arr_numbers = data.split(" ").map((num) => parseInt(num, 10));
  console.log(selectionSort(arr_numbers));
  arr_numbers = data.split(" ").map((num) => parseInt(num, 10));
  console.log(quickSort(arr_numbers));
  arr_numbers = data.split(" ").map((num) => parseInt(num, 10));
  console.log(mergeSort(arr_numbers));
  arr_numbers = data.split(" ").map((num) => parseInt(num, 10));
});
