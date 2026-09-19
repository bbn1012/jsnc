let name = "Bảo Nam";
const age = 18;
let address = "Hà Nội";
let isStudent = "True";

console.log("Họ tên: " , name);
console.log("Tuổi: ", age);
console.log("Địa chỉ: ", address);
console.log("Sinh viên: ", isStudent);

// Bài 3
const a = 10;
const b = 5;

console.log("Tổng: ", a+b);
console.log("Hiệu: ", a-b);
console.log("Tich: ", a*b);
console.log("Thương: ",a/b);

// Bài 4
function sayHello(name){
    console.log("Xin chào", name);
}

sayHello("Nam");

// Bài 5
function Sum(a,b){
    return a+b;
}

console.log(Sum(10,20));

// Bài 6
function calculateTotal(price, quantity){
    return price*quantity;
}

const total = calculateTotal(50000, 3);
console.log(total);

// Bài 7
function calculateAverage(math, english, javascript){
    return (math+english+javascript)/3;
}

const average = calculateAverage(8, 7, 9);
console.log(average);

// Bài tổng hợp
// let name = "Bảo Nam";
// const age = 18;
let className = "WD21301";

function showStudent(name, age, className) {
    console.log("Họ tên:", name);
    console.log("Tuổi:", age);
    console.log("Lớp:", className);
}

showStudent(name, age, className);

function calculateAverage(math, javascript) {
    return (math + javascript) / 2;
}

const avg = calculateAverage(8, 9);
console.log("Điểm trung bình:", avg);