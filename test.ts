/*
let namevar = "Maxy";
console.log("test", namevar);
let x = 0;
for (x = 0; x <= 64; x++) {
    console.log(x)
}
*/

let number = 10007
let root = Math.sqrt(number)
let divider = 2

let prime = false

while (divider <= root) {
    console.log(divider + "/" + root)
    if (root % divider == 0) {
        prime = false
        break
    } else{
        divider++
    }
}

if (prime) {
    console.log(number + " is a prime!")
} else {
    console.log(number + " is NOT a prime")
}
