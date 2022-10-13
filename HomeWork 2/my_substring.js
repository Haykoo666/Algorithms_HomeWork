/* debugger; */

function mySubStr(str, key) {
   let is_Same = false;
   let startPosition;
   
   if(!key) return false;
   
   for (let i = 0; i < str.length; ++i) {
      if (is_Same) return startPosition;
      
      if (str[i] == key[0]) {
         startPosition = i;
   
         for (let j = 0; j < key.length; ++j) {
            if (key[j] === str[j + i]) {
               is_Same = true;
                  continue;
            }
            is_Same = false;
         }
      }
   }
   return is_Same ? startPosition : -1;
}

console.log(mySubStr("JavaScript", "Script"));
console.log(mySubStr("JavaScript", "Scriptaa"));
console.log(mySubStr("JavaScript", ""));

