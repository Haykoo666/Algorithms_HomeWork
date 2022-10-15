function foo(str) {
   let setStr = new Set([...str]);
   let obj = {...str};
   let objSize = Object.values(obj);

   return (objSize.length == setStr.size) ? true : false;

}
console.log(foo("helo"));
console.log(foo("hello"));