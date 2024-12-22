const form = document.getElementById('form');
const dropdown_equipment = document.getElementById('dropdown_equipment');
const dropdown_GradeLevel = document.getElementById('dropdown_GradeLevel');
const dropdown_Prefix = document.getElementById('dropdown_Prefix');
const Name_Surname = document.getElementById('Name_Surname');
const Student_ID = document.getElementById('Student_ID');
const submit_btn = document.getElementById('submit-btn');

function myFunction() {
    document.getElementById("submit-btn").submit();
  }


form.addEventListener('submit',addTransaction);


