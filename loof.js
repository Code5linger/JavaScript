/*
var grades = [1,2,5,8,1,2,5,8,1,2,5,8,1,2,5,8,1,2,5,8,1,2,5,8];

var sum = 00;
for (index = 0; index < grades.length; index++){
    sum += grades[index];
}

document.write(sum);
console.log(sum/grades.length);
*/

var avg = [1,2,5,8,1,2,5,8,1,2,5,8,1,2,5,8,1,2,5,8,1,2,5,8];

document.write(avg + "<br>");

var sum = 0;
for (index = 0; index < avg.length; index++){
    sum += avg[index];
}

document.write(sum + "<br>");

document.write(sum/avg.length);