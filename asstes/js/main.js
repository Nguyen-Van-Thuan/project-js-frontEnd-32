// console.log("xin chao front-end 32!");

// let name = "Nguyen Van A";
// var age = "19";
// const email = "nguyenvana@gmail.com";

// console.log(name);
// console.log(age);
// console.log(email);

// let city;
// city = "Ha Noi";
// console.log(city);
// let City = "HCM";
// console.log(City);


// Kiem kieu du lieu cua bien
// let number = 10;
// console.log(typeof(number));

// let email = "nguyenvana@gmail.com";
// console.log(typeof(email));

// Pham vi bien trong 1 function


//Khai arrow function

// const hello = () => {

//     let name = "Hello Javascript Base";
//     console.log(name);

// }

// ES5
// let age = "100";

// function hello() {

//     name = "Hello Javascript Base";
//     console.log(name);
//     // console.log(age);

// }

// // hello();
// // hello();
// console.log(name);
// // console.log(age);

// Luu y trong string

// let name = "Xin chao cac ban!." + " " +
// " Minh la Thuan Nguyen. Huong dan lop minh front-end Basic!";
// console.log(name);

// const name = "Tuan Anh";
// const age = "tuoi 20";

// const description = name + " " + age;
// console.log(description);

// Teamplate String ES6
// const name = "Nguyen Van A";
// const age = 30;

// const fullName = `Toi ten la ${name}. Nam nay toi ${age}`;
// console.log(fullName);




// Buoi 2

// Function es5: Khai bao function hello()
// function hello(number) { //Tham so -- Khai bao
//     console.log(`Helo lop front-end ${number}`);
//     console.log(number);
// }
// hello(32); //Doi so -- Thuc thi ham


// function sum(a, b) {
//     // let a = 5;
//     // let b = 6;
//     let resultSum = a + b;
//     return resultSum;
//     console.log("123");
// }
// const result = sum(5, 7);
// console.log(result);
// console.log(sum());

// let a = 30;
// //if -- Nếu
// if(a < 20) { 
//     console.log("a nho hon 20");
// }else { //else -- Nguoc lai
//     console.log("a lon hon 20");
// }

// let a = 1000;

// if (a == 50) {
//     console.log("a bang 50");
// }else if (a == 100) {
//     console.log("a bang 100");
// }else if (a == 500) {
//     console.log("a bang 500");
// }else {
//     console.log("a bang 1000");
// }


// THANH, T.ANH, DUC, SANG
// const nameMember = "HUY";

// switch (nameMember) {
//     case "Duc":
//         console.log("Day la Huy 1");
//         break;
//     case "SANG":
//         console.log("Day la Huy 2");
//         break;
//     case "HUY": 
//         console.log("Day la Huy auth");
//         break
//     default:
//         console.log("Khong tim thay huy");
//         break;
// }

// Mua nuoc

// const price = 10000;

// switch (price) {
//     case 12000:
//         console.log("Mua ca phe sua");
//         break;
//     case 10000:
//         console.log("Mua ca phe da");
//         break;
//     case 8000:
//         console.log("Mua Sting dau");
//         break;
//     case 2000:
//         console.log("Mua tra da");
//         break;
//     default:
//         console.log("Ban ngheo ban oi!!!!")
//         break;
// }

// array
// let nameArr = ["Thanh", "Huy", "Khanh"];
// const age = [];

// const royal = ["nhieu tien", "gioi lap trinh", "dep trai", "duyen dang"];

// console.log(royal[1]);
// console.log(royal[2]);

// royal[0] = "Rat ngheo";

// console.log(royal[0]);

// console.log(royal.length);

// const a = 1;
// const b = a + 1;

// console.log(a);
// console.log(b);

// let x = [1]; //a
// let y = x; //a
// y.push(2)
// console.log(x);
// console.log(y);


let arrArr = ["image_1", "image_2", "image_3"];
console.log(arrArr);

// arrArr.length: Cong thuc lay do dai cua mang

for(let i = 0; i < arrArr.length; i++) {
    console.log(arrArr[i], "lay gia tri phan tu cua mang");
}