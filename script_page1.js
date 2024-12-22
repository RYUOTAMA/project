const form = document.getElementById('form');
const dropdown_equipment = document.getElementById('dropdown_equipment');
const dropdown_GradeLevel = document.getElementById('dropdown_GradeLevel');
const dropdown_Prefix = document.getElementById('dropdown_Prefix');
const Name_Surname = document.getElementById('Name_Surname');
const Student_ID = document.getElementById('Student_ID');
const submit_btn = document.getElementById('submit-btn');
const row = document.createElement("tr");

function sendData() {
  window.location.href = 'page2.html'; // เปลี่ยนไปยังหน้าอื่น
}

row.innerHTML = `
<td>${table.rows.length + 1}</td>
<td>${dropdown_equipment}</td>
<td>${dropdown_GradeLevel}</td>
<td>${dropdown_Prefix}</td>
<td>${Name_Surname}</td>
<td>${Student_ID}</td>
<td><button class="delete-btn">ลบ</button></td>
`;

