// let examScoreACRank = [65, 95, 76, 52, 12, 99, 100, 85, 95, 82, 77, 71];

// for(i=0; i<examScoreACRank.length; i++){
//     console.log(
//         `Exam score of the student with rank ${i + 1} = ${examScoreACRank[i]}`
//     );
// }

// let studentScore = [
//     {
//         "name" : "Vivek",
//         "marks" : "76"
//     },
//     {
//         "name" : "Anand",
//         "marks" : "95"
//     },
//     {
//         "name" : "Sal",
//         "marks" : "99"
//     },
//     {
//         "name" : "Priya",
//         "marks" : "100"
//     },
//     {
//         "name" : "Winter",
//         "marks" : "98"
//     },
// ]

// for(let i = 0; i < studentScore.length; i++){
//     let student = studentScore[i];
//     console.log(`Score of ${student.name} is ${student.marks}`);
// }

// let str = "Vivek";
// let reversedStr = "";
// for(let i = str.length - 1; i>=0; i--){
//     reversedStr = reversedStr + str[i]
// }
// console.log(reversedStr);

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
let total = 0;

for(let i = 0; i<matrix.length; i++){
    let row = matrix[i];
    for(let j=0; j<row.length; j++){
        total = total + row[j];
    }
}
console.log(total);