// selection sort algorithm
export function selectionSort(array) {
    const moves = [];
  for(let i = 0; i< array.length-1;i++){
    let min_index = i;
    for(let j = i+1; j<array.length;j++){
        moves.push({ indices: [j, min_index], type: "comp" });
        if(array[j]<array[min_index]){
            min_index = j;
        }
    }
    if(array[i]!==array[min_index]){
        [array[i],array[min_index]] = [array[min_index],array[i]];
        moves.push({ indices: [i, min_index], type: "swap" });
    }
  }
    return moves;
  };