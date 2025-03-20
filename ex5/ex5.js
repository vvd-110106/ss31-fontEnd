const employees = [
    { id: 1, name: "John", age: 18, address: "New York" },
    { id: 2, name: "Mike", age: 22, address: "Canada" },
    { id: 3, name: "Linda", age: 19, address: "California" },
    { id: 4, name: "Peter", age: 25, address: "London" },
    { id: 5, name: "Tony", age: 17, address: "New York" }
];

const tableBody = document.getElementById("employeeTable");

employees.forEach((acc, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <th>${index + 1}</th>
        <th>${acc.name}</th>
        <th>${acc.age}</th>
        <th>${acc.address}</th>
    `;
    tableBody.appendChild(row);
});