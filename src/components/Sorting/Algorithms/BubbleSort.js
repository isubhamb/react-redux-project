// bubble sort algorithm
export function bubbleSort(array) {
    const moves = [];
    do {
      var swapped = false;
      for (let k = 1; k < array.length; k++) {
        moves.push({ indices: [k - 1, k], type: "comp" });
        if (array[k - 1] > array[k]) {
          [array[k - 1], array[k]] = [array[k], array[k - 1]];
          swapped = true;
          moves.push({ indices: [k - 1, k], type: "swap" });
        }
      }
    } while (swapped);
    return moves;
  };
