// // //

// // // switch statement

// // // switch (expression) {
// // // case x:
// // //print
// // //break;
// // // case y:
// // //print
// // //break;
// // //}

// // let x = 1;
// // let text;

// // switch (x) {
// //   case 0:
// //     text = "off";
// //     console.log(text);
// //     break;
// //   case 1:
// //     text = "on";
// //     console.log(text);
// //     break;
// //   default:
// //     text = "no value found";
// //     console.log(text);
// // }

// let number = 11;

// if (number < 10) {
//   console.log("nilai anda di bawah kkm");
// } else if (number === 10) {
//   console.log("selamat nilai anda memenuhi kkm");
// } else {
//   console.log("nilai anda tidak terdeteksi");
// }

// let hari = "kamis ";

// switch (hari) {
//   case "senin":
//     console.log("hari ini adalah hari senin");
//     break;
//   case "selasa":
//     console.log("hari ini adalah hari selasa");
//     break;
//   case "rabu":
//     console.log("hari ini adalah hari rabu");
//     break;
//   default:
//     console.log("hari ini libur");
// }

// let fruit = "durian";

// switch (fruit) {
//   case "banana":
//     console.log("banana is good");
//     break;
//   case "orange":
//     console.log("im not a fan of orange");
//     break;
//   case "apple":
//     console.log("how you like them apple ?");
//     break;
//   default:
//     console.log("i have never heard of that fruit");
// }

// for loop

// for (initial expressions; conditions; incrementexpressions) {}

// for (let i = 1; i <= 10; i++) {
//   console.log("asik nambah", i);
// }

// while loop
// while (condition) {
// code block to be executed
//}

// let i = 1;

// while (i <= 10) {
//   console.log("hello", i);
//   i++;
// }

// let i = 1;

// do {
//   console.log("agis mubarok", i);
//   i++;
// } while (i <= 10);

// logical and (&&)
// logic ini terjadi apabila operand atau boolean itu keduanya bernilai true maka true
// tapi apabila dari salah satu operan atau boolean ada yang false maka akan bernilai false

// const a = true;
// const b = true;
// const c = 4;

// console.log(c === 4 && c === 4);

// logical or (||)
// logic ini terjadi apabila ada salah satu operan atau boolean yang bernilai true, maka hasilnya true
// tapi apabila nilai kedua operan atau boolean itu false, maka nilainyapun false

// logical not (!)
// logic ini bisa kita bayangkan sebagai toogle on of, jadi apabila operan bernilai true, maka ketika ingin kita jadikan false, pake logic ini

let password = "agis-mubarok";

if (password.length >= 5 && password.includes("rok")) {
  console.log("password benar");
} else {
  console.log("password salah");
}
