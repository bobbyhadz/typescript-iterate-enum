export {};

// EXAMPLE 1 - Iterating over STRING enums in TS

// ✅ For STRING Enums
enum Sizes {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}

const keys = Object.keys(Sizes);
console.log(keys); // 👉️ ['Small', 'Medium', 'Large']

keys.forEach((key, index) => {
  // 👇️ Small, Medium, Large
  console.log(key);
});

const values = Object.values(Sizes);

values.forEach((value, index) => {
  // 👇️ S, M, L
  console.log(value);
});

// ---------------------------------------------------

// // EXAMPLE 2 - Iterating over NUMERIC enums in TS

// // ✅ For Numeric Enums
// enum Sizes {
//   Small,
//   Medium,
//   Large,
// }

// const keys = Object.keys(Sizes).filter((v) => isNaN(Number(v)));
// console.log(keys); // 👉️ ['Small', 'Medium', 'Large']

// keys.forEach((key, index) => {
//   // 👇️ Small, Medium, Large
//   console.log(key);
// });

// const values = Object.values(Sizes).filter((v) => !isNaN(Number(v)));
// console.log(values); // 👉️ [0, 1, 2]

// values.forEach((value) => {
//   // 👇️ 0, 1, 2
//   console.log(value);
// });

// ---------------------------------------------------

// // EXAMPLE 3 - Iterating over Enums with for...of loop

// // ✅ For STRING Enums
// enum Sizes {
//   Small = 'S',
//   Medium = 'M',
//   Large = 'L',
// }

// const keys = Object.keys(Sizes);
// console.log(keys); // 👉️ ['Small', 'Medium', 'Large']

// for (const key of keys) {
//   console.log(key);
// }

// const values = Object.values(Sizes);
// console.log(values); // 👉️ [ 'S', 'M', 'L' ]

// for (const value of values) {
//   console.log(value);
// }

// ---------------------------------------------------

// // Example 4 - For numeric enums

// enum Sizes {
//   Small,
//   Medium,
//   Large,
// }

// const keys = Object.keys(Sizes).filter((v) => isNaN(Number(v)));
// console.log(keys); // 👉️ ['Small', 'Medium', 'Large']

// for (const key of keys) {
//   console.log(key);
// }

// const values = Object.values(Sizes).filter((v) => !isNaN(Number(v)));
// console.log(values); // 👉️ [0, 1, 2]

// for (const value of values) {
//   console.log(value);
// }
