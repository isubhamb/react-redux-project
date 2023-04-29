// insertion sort algorithm
export function insertionSort(array) {
    const moves = [];
  for(let i = 1; i< array.length;i++){
    let current_element = array[i];
    let position = i;
    moves.push({ indices: [i, position-1], type: "comp" });
    while(current_element<array[position-1] && position>0){
        moves.push({ indices: [position, position-1], type: "swap" });
        array[position] = array[position-1];
        position--;
    }
    array[position] = current_element;
    moves.push({ indices: [position, array.indexOf(current_element)], type: "swap" });
  }
    return moves;
  };