function insertionSort(arr) {

   for (let i = 1; i < arr.length; ++i) {
      let j = i - 1;
      let key = arr[i];
      
      while (arr[j] > key && j > -1) {
         arr[j + 1] = arr[j];
         --j;
      }
      arr[j + 1] = key;
   }

   return arr;
}
console.log(insertionSort([4, 9, 1, 12, 0, 2]))
