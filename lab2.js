// Bài 1
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];

console.log(names)
console.log("Phần tử đầu tiên: ",names[0]);
console.log("Phần tử cuối cùng: ",names[4]);
console.log("Số lượng phần tử: ", names.length);

names.unshift("Uyên");
console.log(names);

names.pop();
console.log(names);

// Bài 2
const students = ["An", "Bình", "Nam", "Hòa", "Lan"];

for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}