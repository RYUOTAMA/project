// script_page2.js
let borrowRecords = JSON.parse(localStorage.getItem('borrowRecords')) || [];
const tableBody = document.getElementById('borrow-table').getElementsByTagName('tbody')[0];

function renderTable() {
  tableBody.innerHTML = '';
  if (borrowRecords.length === 0) {
    const row = tableBody.insertRow();
    const cell = row.insertCell(0);
    cell.colSpan = 8;
    cell.textContent = 'ไม่มีข้อมูลการยืม';
  } else {
    borrowRecords.forEach((record, index) => {
      const row = tableBody.insertRow();
      row.insertCell(0).textContent = index + 1;
      row.insertCell(1).textContent = record.NameSurname;
      row.insertCell(2).textContent = record.StudentID;
      row.insertCell(3).textContent = record.dropdownequipment;
      row.insertCell(4).textContent = record.dropdownGradeLevel;
      row.insertCell(5).textContent = record.time;
      row.insertCell(6).textContent = record.date;
      const deleteCell = row.insertCell(7);
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'ลบ';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.onclick = () => deleteRecord(index);
      deleteCell.appendChild(deleteBtn);
    });
  }
}

function deleteRecord(index) {
  borrowRecords.splice(index, 1);
  localStorage.setItem('borrowRecords', JSON.stringify(borrowRecords));
  renderTable();
}

const clearAllBtn = document.querySelector('.clear-all-btn');
clearAllBtn.addEventListener('click', () => {
  localStorage.removeItem('borrowRecords');
  borrowRecords = [];
  renderTable();
});

renderTable();
