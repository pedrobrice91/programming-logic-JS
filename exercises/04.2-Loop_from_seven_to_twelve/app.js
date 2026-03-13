let numbers = [7, 8, 9, 10, 11, 12];

for (let i = 0; i<numbers.length; i++){
  console.log(numbers[i])
}
console.log('-------')

for (let recorrer of numbers){
  console.log(recorrer)
}
console.log('-------')

numbers.forEach(elem => console.log(elem))

console.log('----h---')
let p = 0;
while(p < numbers.length){
  console.log(numbers[p])
  p++
}
