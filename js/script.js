let num = 266219;
let result;

num = num.toString();
result = num[0] * num[1] * num[2] * num[3] * num[4] * num[5];
console.log(result);
result = result ** 3;
result = result.toString();
result = result[0] + result[1];
result = result++;
console.log(result);
alert(result);
