/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
 */
/***
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */

//every odd numbers sum result
let sum = 0;
for (let i = 91; i < 129; i++){
    sum += i;
    if(i % 2 == 1){
        continue;
    }
}
console.log(sum);

//every even numbers sum result
let sum2 = 0;
for (let i = 51; i < 85; i++){
    sum2 += i;
    if(i % 2 == 0){
        continue;
    }
}
console.log(sum2);