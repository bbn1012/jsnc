// Bài 1
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];

console.log(names)
console.log("Phần tử đầu tiên: ", names[0]);
console.log("Phần tử cuối cùng: ", names[4]);
console.log("Số lượng phần tử: ", names.length);

names.unshift("Uyên");
console.log(names);

names.pop();
console.log(names);

// Bài 2
const students = ["An", "Bình", "Nam", "Hòa", "Lan"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Bài 3
const student = { id: 1, name: "Nguyễn Văn An", age: 20, email: "an@gmail.com", major: "CNTT", };

console.log(student);
console.log("Tên: ", student.name);
console.log("Tuổi: ", student.age);
console.log("Email: ", student.email);

student.age = 22;
console.log(student.age);

student.phone = 012345678;
console.log(student.phone);

// Bài 4
const stds = [{ id: 1, name: "Nguyễn Văn An", age: 20, }, { id: 2, name: "Trần Văn Bình", age: 21, }, { id: 3, name: "Lê Văn Nam", age: 20, },];

console.log(stds);

console.log("Tên sinh viên đầu tiên: ", stds[0].name);
console.log("Tên sinh viên thứ 2: ", stds[1].name);

for (let i = 0; i < stds.length; i++) {
  console.log(stds[i].name);
}