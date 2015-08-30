var sum = 0;
var y = 1;

for(var x = 1; x < 4000000; x += y) {
  y += x;
  if(x % 2 === 0) {
    sum += x;
  }
  else if(y % 2 === 0) {
    sum += y;
  }
}

console.log(sum)
