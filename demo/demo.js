// // id
// console.log(document);
// let h1 = document.getElementById("demo-id"); // h1 (demo-i)
// console.log(h1);

// // class
// let tagList = document.getElementsByClassName("demo-class"); // h1, b, i
// console.log(tagList);

// // Truy cập và lấy ra thẻ i (phần tử vị trí thứ 2)
// console.log(tagList[2]);

// // Làm việc với toàn nộ phần tử HTML trong tagList
// for(let i = 0; i < tagList.length; i++) {
//     console.log (tagList[i]); // h1, b, i
// }

let iTag = document.getElementsByClassName("demo-class")[2];
console.log(iTag);
console.dir(iTag);

// Kiểm soát content - nội dung
console.log(iTag.innerHTML);
console.log(iTag.innerText);
console.log(iTag.textContent);

let p = document.getElementById("demo-inner")
console.log(p.innerHTML);
console.log(p.innerText);
console.log(p.textContent);

p.textContent = "Jello worrld";
p.textContent = "Jello worrld 123";

p.innerHTML = `
<span> 1 </span>
<u>123</u>
<i>321</i>
`;

// id
console.log(p.id);

// style
p.style.width = "200px"
p.style.height = "200px"
p.style.borderRadius = "50%"
p.style.backgroundColor = "pink"
p.style.color = "white"
p.style.border = "10px solid black"

console.log(p.style);

let abbr = document.getElementsByClassName("class-01")[0];
console.log(abbr)

// Kiểm soát danh sách class của thẻ abbr
console.log(abbr.classList); 