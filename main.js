// Udemy - The Web Developer Bootcamp - Section 13 - Lesson 162 Array Problem Set

// printReverse() 配列内のデータを逆から出力する

const printReverse = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

const testArrayForPrintREverse1 = [1, 2, 3, 4, 5];
const testArrayForPrintREverse2 = ['a', 'b', 'c', 'd', 'e'];

printReverse(testArrayForPrintREverse1);
printReverse(testArrayForPrintREverse2);

// isUniform() 配列内のデータが全て一致する場合、trueを返す

const isUniform = (array) => {
    const firstNum = array[0];
    let answer;
    array.forEach(function (num) {
        if ((answer === undefined || answer === true) && firstNum === num) {
            answer = true;
        } else {
            answer = false;
        }
    });
    return answer;
}

const testArrayForIsUniform1 = [1, 1, 1, 1];
const testArrayForIsUniform2 = [2, 1, 1, 1];
const testArrayForIsUniform3 = ['a', 'a', 'a'];
const testArrayForIsUniform4 = ['b', 'b', 'c'];

console.log(isUniform(testArrayForIsUniform1));
console.log(isUniform(testArrayForIsUniform2));
console.log(isUniform(testArrayForIsUniform3));
console.log(isUniform(testArrayForIsUniform4));

//sumArray() 配列内のデータの合計値を出力

const sumArray = (array) => {
    let answer = 0;
    array.forEach((num) => {
        answer += num;
    });
    console.log(answer);
}

const testArrayForSumArray1 = [1, 2, 3];
const testArrayForSumArray2 = [10, 3, 10, 4];
const testArrayForSumArray3 = [-5, 100];

sumArray(testArrayForSumArray1);
sumArray(testArrayForSumArray2);
sumArray(testArrayForSumArray3);

//max() 配列内の最大値を出力

const max = (array) => {
    let maxNum = array[0];
    array.forEach((num) => {
        if (num > maxNum) {
            maxNum = num;
        }
    });
    return maxNum;
}

const testArrayForMax1 = [1, 2, 3];
const testArrayForMax2 = [10, 3, 10, 4];
const testArrayForMax3 = [-5, 100];

console.log(max(testArrayForMax1));
console.log(max(testArrayForMax2));
console.log(max(testArrayForMax3));