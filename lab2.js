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

// Bài 5
const studentss = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
  },
  {
    id: 2,
    name: "Trần Văn Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Lê Văn Nam",
    age: 20,
  },
];
let html = document.getElementById("students");
let content = "";
for (let i = 0; i < studentss.length; i++) {
  content += `
    <div>
      <h3>Ten sinh vien: ${studentss[i].name}</h3>
      <h4>Tuổi: ${studentss[i].age}</h4>
    </div>
  `;
}
html.innerHTML = content;

// Bài tổng hợp
const products = [
{
id: 1,
name: "iPhone 15",
price: 20000000,
},
{
id: 2,
name: "Samsung Galaxy S24",
price: 18000000,
},
{
id: 3,
name: "Xiaomi 14",
price: 12000000,
},
];

console.log(products);

let totalPrice = 0;

for (let i = 0; i < products.length; i++){
    console.log(products[i].name + " - " + products[i].price);
    totalPrice = totalPrice + products[i].price;
}

console.log("Tổng tiền: ", totalPrice);

let html1 = "";

for (let i = 0; i < products.length; i++) {
    html1 += `
        <p>${products[i].name} - ${products[i].price}</p>
    `;
}
    html1 += `
        Tổng tiền: ${totalPrice}
    `;

document.getElementById("products").innerHTML = html1;