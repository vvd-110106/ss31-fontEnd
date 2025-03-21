document.getElementById("btn-login").onclick = function() {
    const fixedUsername = "huanrose@gmail.com";
    const fixedPassword = "123456";

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === fixedUsername && password === fixedPassword) {
        console.log("Đăng nhập thành công");
    } else {
        console.log("Đăng nhập thất bại");
    }
};



// // B1: Mô phỏng 1 kho lưu trữ dữ liệu
// // Chứa các đối tượng dữ liệu (có tính chất tương đồng)
// // để vận hành ứng dụng

// let todoList = [
//     { id: 1, task: "Hit the gym", completed: false, },

//     { id: 2, task: "Pay bills", completed: true, },

//     { id: 3, task: "Meet george", completed: false, },

//     { id: 4, task: "Buy eggs", completed: false, },

//     { id: 5, task: "Read a book", completed: false, },

//     { id: 6, task: "Organize affic", completed: false, },
// ];

// let ul = document.getElementById("myUL");
// let addBtn = document.getElementsByClassName("addBtn")[0]; // [addBtn]
// let input = document.getElementById("myInput");


// //- Render
// // - B2.1: Duyệt qua mảng todoList
// for (let i in todoList) {

//     let li;

//     if (todoList[i].completed === true) {
//         li = `<li class = "checked" >${todoList[i].task}</li>`
//     } else {
//         li = `<li>${todoList[i].task}</li>`
//     }
//     ul.innerHTML = ul.innerHTML + li;
// }
// // HOẶC 
// // displayTodo(); LÀ XONG KHÔNG CẦN for TRÊN 

// // C - Create
// // Tính năng thêm mới

// // B1: Xác định vị trí gắn sự kiện dành cho tính
// // năng create --> nút add
// // B2: Gắn sự kiện onclick cho nút add
// addBtn.onclick = function () {
//     // B3:
//     // Mỗi khi người dùng bấm vào nút add thì
//     // Gọi thẻ input và lấy nội dung bên trong đó ra
//     input.value;
//     // ---> { id, task, completed} -----> todoList []
//     let newTodo = {
//         id: Math.random(),
//         task: input.value,
//         completed: false,
//     };
//     todoList.push(newTodo);
//     displayTodo();
//     // displayTodo();
//     // B4:
//     // Biến nội dung đó thành các phần tử li

//     // B5:
//     // Đưa thẻ li đó xuất hiện ở trên trình duyệt (trang web)
// }



// function displayTodo () {
//     for (let i in todoList) {
//         // Làm sạch thẻ ul trước khi  render
//         ul.innerHTML = "";
//         let li;
    
//         if (todoList[i].completed === true) {
//             li = `<li class = "checked" >${todoList[i].task}</li>`
//         } else {
//             li = `<li>${todoList[i].task}</li>`
//         }
//         // - B2.2: Lấy ra toàn bộ đối tượng todo-item{} nằm trong todoList
//         // todoList[i];
//         // // - B3.3: Chuyển đổi (Ánh xạ) từng đối tượng dữ liệu -->
//         // // CÁC PHẦN TỬ HTML
//         // // .innerHTML
//         // // a.innerHTML = `<h1></h1>`;
//         // li = `<li>${todoList[i].task}</li>`
//         // // - B3.4: Mỗi khi 1 đối tượng dữ liệu được --> HTML
//         // // Đưa phần tử HTML xuất hiện ở trong trang web (trên trình duyệt)
//         ul.innerHTML = ul.innerHTML + li;
//         // // ul.innerHTML += li;
//         // console.log(li);
//     }
// }