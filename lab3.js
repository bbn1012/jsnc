// Bài 1
const name = "Nguyễn Văn An";
const age = 20;
const major = "Lập trình Web";

const result = `
    Xin chào : ${name}
    Bạn ${age} tuổi
    Ngành học: ${major}
    `;

console.log(result);

// Bài 2
const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  major: "Lập trình Web",
};

const resultStudent = `
    Mã sinh viên: ${student.id}
    Họ tên: ${student.name}
    Tuổi: ${student.age}
    Ngành: ${student.major}
`;

console.log(resultStudent);

// Bài 3
const add = (a, b) => (a + b);

console.log(add(3,4));

// Bài 4
const square = (a) => (a*a);
console.log (square(5));

const sum = (a, b) => (a + b);
console.log(sum(4,5));

const sayHello = (name) => `Xin chào: ${name}`;
console.log(sayHello("Nam"))

// Bài 5
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers);

// Bài 6
const students = [
  { id: 1, name: "An", age: 20 },
  { id: 2, name: "Bình", age: 21 },
  { id: 3, name: "Cường", age: 22 },
];

const names = students.map((student) => student.name);
console.log(names);

// Bài 7
// const students = [
//   {
//     id: 1,
//     name: "An",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "Bình",
//     age: 21,
//   },
//   {
//     id: 3,
//     name: "Cường",
//     age: 22,
//   },
// ];

document.getElementById("students").innerHTML = students
  .map(
    (student) => {
    return `
      <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${student.id}</td>
              <td class="px-4 py-2 border border-gray-300">${student.name}</td>
              <td class="px-4 py-2 border border-gray-300">${student.age}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <a
                    href="#"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </a>

                  <button
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
    `;
  })
  .join("");

  // Bài 8
  const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 20000000,
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 25000000,
  },
  {
    id: 3,
    name: "AirPods",
    price: 5000000,
  },
];


document.getElementById("products").innerHTML = products
  .map(
    (product) => {
    return `
      <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${product.id}</td>
              <td class="px-4 py-2 border border-gray-300">${product.name}</td>
              <td class="px-4 py-2 border border-gray-300">${product.price}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <a
                    href="#"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </a>

                  <button
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
    `;
  })
  .join("");

  // Bài tổng hợp
  const productsList = [
  {
    id: 1,
    name: "Áo thun",
    price: 150000,
    category: "Thời trang",
  },
  {
    id: 2,
    name: "Quần jean",
    price: 350000,
    category: "Thời trang",
  },
  {
    id: 3,
    name: "Giày sneaker",
    price: 800000,
    category: "Giày",
  },
];

document.getElementById("products-List").innerHTML = productsList
  .map(
    (product) => {
    return `
      <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${product.id}</td>
              <td class="px-4 py-2 border border-gray-300">${product.name}</td>
              <td class="px-4 py-2 border border-gray-300">${product.price}</td>
              <td class="px-4 py-2 border border-gray-300">${product.category}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <a
                    href="#"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </a>

                  <button
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
    `;
  })
  .join("");