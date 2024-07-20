
const studentName = document.getElementById("student-name");
const studentUserName = document.getElementById("student-userName");
const studentEmail = document.getElementById("student-email");
const addStudentBtn = document.getElementById("addBtn");
const tableDisplay = document.getElementById('table-display');
let studentList = JSON.parse(localStorage.getItem('studentdata')) ?? [];
let num = 0;

addStudentBtn.addEventListener("click", () => {
    let rollNumber = Math.round(Math.random() * 10000) + 1000;
    let name = studentName.value.trim();
    let userName = studentUserName.value.trim();
    let email = studentEmail.value.trim();

    if (name !== "" && userName !== "" && email !== "") {
        let obj = {
            "name": name,
            "userName": userName,
            "email": email,
            "roll": rollNumber
        };
        studentList.push(obj);
        localStorage.setItem('studentdata', JSON.stringify(studentList));
        ++num;
        tableMaker(obj, num);
        resetValueOfInp();
    } else {
        alert("Fill text fields");
    }
});

document.addEventListener("DOMContentLoaded", makeTable);

function makeTable() {
    num = 0;
    for (let item of studentList) {
        ++num;
        tableMaker(item, num);
    }
}

function tableMaker(student, num) {
    tableDisplay.innerHTML += `<tr>
        <th class="p-3">${num}</th>
        <td class="p-3">${student['name']}</td>
        <td class="p-3">${student['userName']}</td>
        <td class="p-3">${student['email']}</td>
        <td class="p-3">${student['roll']} <button class="bg-blue-700 rounded-md p-2 text-white" onclick="removeStudent(this,${num})">Remove</button></td>
    </tr>`;
}

function resetValueOfInp() {
    studentName.value = "";
    studentUserName.value = "";
    studentEmail.value = "";
}

function removeStudent(item, index) {
    let row = item.parentNode.parentNode;
    row.parentNode.removeChild(row);
    studentList.splice(index - 1, 1);
    localStorage.setItem('studentdata', JSON.stringify(studentList));
    location.reload();
}
