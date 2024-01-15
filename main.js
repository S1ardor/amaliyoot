/// String metodlari ///
// var myName = "Sardorbek Quvondiqov";
// console.log(myName.charAt(9)); => (position: number): string | number beriladi va sizga string qaytaradi.

// console.log(myName.charCodeAt(4)); => (index: number): unicode number | number beriladi va o'sha numberda turgan string ni unicode ni qaytaradi.

// var myAge = 17;
// console.log(myName.concat(" ", myAge)); => (strings: string[]): string | stringlar oladi va stringlarni bir-biriga yopishtirib beradi.

// console.log(myName.startsWith("S", 2)); => (searchString: string, position?: number or undefined): boolean | qidirayotgan string ni bosh harfi yoki qdirayodgann string va index ber bo'lsa true aks holda false.

// console.log(myName.endsWith("v", 5)); => (searchString: string, endPosition?: number or undefined): boolean | qidirayotgan string ni oxirgi harfi yoki qdirayodgann string va index ber bo'lsa true aks holda false.

// console.log(String.fromCharCode(111)); => codes: number[] | unicode beriladi va o'sha unicodeda turgan string ni qaytaradi. Abject ni o'zida ishlatiladi.

// console.log(myName.indexOf("d", 4)); => (searchString: string, position?: number or undefined): number -1

// console.log(myName.lastIndexOf("o", 9)); => (searchString: string, endPosition?: number or undefined): number -1

// console.log(myName.includes("a", 4)); => (searchString: string, position?: number or undefined): boolean | kotta va kichik harf farqiga boradi.

// console.log(myName.match("sardor", "or", "/sardor/gi")); => /sardor/gi tarzida yozilsa kotta va kichik farqiga bormaydi. | (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null

// console.log(myName.repeat(5)); => (count: number): string | sz hohlagan string ni siz hohlagancha chiqarin beradi.

// console.log(myName.replace("Sardor", "Ali")); => (searchValue: string): string | siz hohlagan string ya'ni sozni o'zgartiradi.

// var myName = "Sardorbek Quvondiqov Sardorbek Sardorbek sardor Sardorbek";
// console.log(myName.replaceAll("Sardorbek", "Alibek")); => siz hohlagan stringlarni ya'ni sozlarni o'zgartiradi.

// var myName = "Sardorbek Quvondiqov Sardorbek Abror Sardorbek";
// console.log(myName.search("Abror", 30)); => (searcher: { [Symbol.search](string: string): number; }): number | agar siz izlayotgan symbol bo'lmasa -1 qqaytaradi.

// console.log(myName.slice(2, 6)); => (start?: number | undefined, end?: number | undefined): string | fromIndex, toIndex slice ya'ni string ni hohlagan joyidan kesib oladi index orqali.

// var myName = "Sardorbek Quvondiqov Sardorbek Sardor";
// console.log(myName.split("dor", 2)); => (string: loimit?: number): string[] | olibtashla deilgan joyni olib tashlaydi, ager limmit li bo'ladigan bo'lsa olibtashla deilgan joygacha olibtashlaydi qolgani yoq boladi musur bo'ladi.













// Lesson-7 //


// * * * 1-task * * * //

// var elForm = document.querySelector(".js-form");
// var elInput = elForm.querySelector(".js-input");
// var elResult = document.querySelector(".js-result");

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   var inputValue = elInput.value.trim();

//   if (inputValue.charAt(0) == inputValue.charAt(0).toUpperCase()) {
//     elResult.textContent = "bosh harfi kotta";
//   }else {
//     elResult.textContent = "bosh harfi kichik";
//   }
// });

// 1-Task 2-usuli //
// var elForm = document.querySelector(".js-form");
// var elInput = elForm.querySelector(".js-input");
// var elResult = document.querySelector(".js-result");

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   var inputValue = elInput.value.charAt(0);

//   if (inputValue.charCodeAt(0) > 97) {
//     elResult.textContent = "bosh harfi kichik";
//   } else {
//     elResult.textContent = "bosh harfi kotta";
//   }
// });



// * * * 2-Task * * * //

// var elForm = document.querySelector(".js-form");
// var elInput = elForm.querySelector(".js-input");
// var elResult = document.querySelector(".js-result");

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   var inputValue = elInput.value.trim();
//   if(inputValue.charAt(0) == inputValue.charAt(inputValue.length -1)){
//     elResult.textContent = "BINGO";
//   }else{
//     elResult.textContent = "bosh harf va oxirgi harf bir xil emas"
//   }
// });



// * * * 3-Task * * * //

// var elForm = document.querySelector(".js-form");
// var elInput = elForm.querySelector(".js-input");
// var elResult = document.querySelector(".js-result");

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   var newBox = "";

//   var inputValue = elInput.value.trim();

//   if(inputValue[0] == inputValue[0].toUpperCase()){
//     newBox = inputValue[0].toLowerCase() + inputValue.slice(1, inputValue.length);
//     elResult.textContent = newBox;
//   }else if(inputValue[0] == inputValue[0].toLowerCase()){
//     newBox = inputValue[0].toUpperCase() + inputValue.slice(1, inputValue.length);
//     elResult.textContent = newBox;
//   }else{
//     elResult.textContent = "O'zgartirb bo'lmadi"
//   }
// });




// * *  * 4-Task * * * //var elForm = document.querySelector(".js-form");

var oneNumber =  Number(prompt("son kriting"));
var twoNumber = Number(prompt("son kriting"));
var threeNumber = Number(prompt("son kriting"));

if(oneNumber > twoNumber && oneNumber < threeNumber || oneNumber < twoNumber && oneNumber > threeNumber){
    console.log(oneNumber);
}else if(twoNumber > oneNumber && twoNumber < threeNumber || twoNumber < oneNumber && twoNumber > threeNumber){
    console.log(twoNumber);
}else if(threeNumber > oneNumber && threeNumber < twoNumber || threeNumber < oneNumber && threeNumber > twoNumber){
    console.log(threeNumber);
}else{
    console.log("hato");
}