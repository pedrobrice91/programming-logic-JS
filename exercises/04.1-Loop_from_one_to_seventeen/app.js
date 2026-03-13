let myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let recorriendo of myarray) {
  console.log(recorriendo);
}

for (let i = 0; i < myarray.length; i++) {
  console.log(myarray[i]);
}
let i = 0;
while (i < myarray.length) {
  console.log('Con el while '+myarray[i])
      i++;
} 

myarray.forEach(element => {
    console.log('Con el forEach '+element);
}); 