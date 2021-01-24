const removeItem = (array, index) => {
  let left = array.slice(0, index);
  let right = array.slice(index + 1);
  //   console.log(left, right);

  //   let shiftedRight = right.map((ele) => {
  //     return { id: ele.id - 1, text: ele.text };
  //   });
  //   console.log(left, shiftedRight);

  return [...left, ...right];
};

export { removeItem };

// let array = [
//   { id: 0, data: "bla1" },
//   { id: 1, data: "bla2" },
//   { id: 2, data: "bla3" },
//   { id: 3, data: "bla4" },
//   { id: 4, data: "bla5" },
//   { id: 5, data: "bla6" },
// ];

// [0, 1, 2, 3, 4, 5].forEach((element) => {
//   console.log(removeItem(array, element));
// });
