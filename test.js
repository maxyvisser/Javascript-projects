/*
let namevar = "Maxy";
console.log("test", namevar);
let x = 0;
for (x = 0; x <= 64; x++) {
    console.log(x)
}
*/
var number = 10007;
var root = Math.sqrt(number);
var divider = 2;
var prime = false;
while (divider <= root) {
    console.log(divider + "/" + root);
    if (root % divider == 0) {
        prime = false;
        break;
    }
    else {
        divider++;
    }
}
if (prime) {
    console.log(number + " is a prime!");
}
else {
    console.log(number + " is NOT a prime");
}
