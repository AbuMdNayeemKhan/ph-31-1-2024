/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let num = 0;
let sum = 0;
while(num < 200){
    sum += num;
    console.log(num);
    if(num == 100){
        break;
    }
    num++;
}
console.log(sum)