/***
Subtask-1:
Display sum of all the odd numbers from 81 to 131.
 */
/***
Subtask-2:
Display sum of all the even numbers from 206 to 311.
 */
/*programming hero*/

let fromStart = 81;
let fromEnd = 131;
let result = 0;
while(fromStart < fromEnd){
    fromStart++;
    if(fromStart % 2 === 1){
        continue;
    }
    result += fromStart;
}
console.log(result);

let fromStart2 = 206;
let fromEnd2 = 311;
let result2 = 0;
while(fromStart2 < fromEnd2){
    fromStart2++;
    if(fromStart2 % 2 === 0){
        continue;
    }
    result2 += fromStart2;
}
console.log(result2);