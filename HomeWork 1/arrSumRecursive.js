function arrSum(arr) {
   if (!arr.length) return 0;

   return arr[0] + arrSum(arr.slice(1, arr.length));
}

console.log(arrSum([1, 2, 3, 4, 6, 4, ]))
