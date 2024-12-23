// script_page1.js
function saveBorrowData() {
  const dropdownequipment = document.getElementById('dropdown_equipment').value;
  const dropdownGradeLevel = document.getElementById('dropdown_GradeLevel').value;
  const dropdownPrefix = document.getElementById('dropdown_Prefix').value;
  const NameSurname = document.getElementById('Name_Surname').value;
  const StudentID = document.getElementById('Student_ID').value;
  const dateStart = document.getElementsByClassName('field')[0].value;
  const dateEnd = document.getElementsByClassName('field')[1].value;
  const timeStart = document.getElementsByClassName('field')[2].value;
  const timeEnd = document.getElementsByClassName('field')[3].value;

  if (!dropdownequipment || !dropdownGradeLevel || !dropdownPrefix || !NameSurname || !StudentID || !dateStart || !dateEnd || !timeStart || !timeEnd) {
    alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    return;
  }

  const borrowData = {
    dropdownequipment,
    dropdownGradeLevel,
    dropdownPrefix,
    NameSurname,
    StudentID,
    date: `${dateStart} - ${dateEnd}`,
    time: `${timeStart} - ${timeEnd}`
  };

  let borrowRecords = JSON.parse(localStorage.getItem('borrowRecords')) || [];
  borrowRecords.push(borrowData);
  localStorage.setItem('borrowRecords', JSON.stringify(borrowRecords));
  window.location.href = 'we1.html';
}