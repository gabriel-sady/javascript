let num = [5,7,14,25,21,3,1]

console.log(num)

num[7] = 6

console.log(num)

num.push(8)

console.log(num)

console.log(num.length)

console.log(num.sort())

let c= 0

for(c; c < num.length;c++) {
    console.log(num[c])
}

for(let pos in num){
    console.log(num[pos])
}


console.log(num.indexOf(21))