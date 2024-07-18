const studentName = document.getElementById("student-name")
const studentUserName = document.getElementById("student-userName")
const studentEmail = document.getElementById("student-email")
const addStudentBtn = document.getElementById("addBtn")
const tableDisplay = document.getElementById('table-display')
let studentList = [];
let count = 0;
let rollNuber = 1800;
addStudentBtn.addEventListener("click", () =>{
   let name = studentName.value.trim();
   let userName = studentUserName.value.trim();
   let email = studentEmail.value.trim();
   if(name !== "" && userName !=""&& email !== "" ){
               let obj = {
                "name": name,
                "userName": userName,
                "email":email,
                "roll": ++rollNuber
            }
            studentList.push(obj)
            localStorage.setItem(`student${++count}`, JSON.stringify(obj))
            tableMaker(obj)
            resetValueOfInp()
        }else{
            alert("Fill text fields")
        }
        
})
function tableMaker(student){
    tableDisplay.innerHTML +=`<tr>
         <th class=" p-3">${++count}</th>
        <td class=" p-3">${student['name']}</td>
        <td class=" p-3">${student['userName']}</td>
        <td class=" p-3">${student['email']}</td>
        <td class=" p-3">${student['roll']} <button class="bg-blue-700 rounded-md p-2 text-white" onclick="removeStudent(this)">Remove</button></td>
    </tr>`
}
function resetValueOfInp(){
    studentName.value = ""
    studentUserName.value = ""
    studentEmail.value = ""
}


function removeStudent(item){
    let row = (item.parentNode.parentNode)
    row.parentNode.removeChild(row)
}