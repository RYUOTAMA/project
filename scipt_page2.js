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
      row.insertCell(2).textContent = record.dropdownequipment;
      row.insertCell(3).textContent = record.dropdownGradeLevel;
      row.insertCell(4).textContent = record.time;
      row.insertCell(5).textContent = record.date;

      // ปุ่มจัดการ (คืน)
      const manageCell = row.insertCell(6);
      const manageBtn = document.createElement('button');
      manageBtn.textContent = 'คืนอุปกรณ์';
      manageBtn.classList.add('manage-btn');

      // ตรวจสอบสถานะคืน
      if (record.returnTime && record.returnDate) {
        manageBtn.disabled = true;
        manageBtn.textContent = 'คืนแล้ว';
        manageBtn.classList.remove('yellow-btn');
        manageBtn.classList.add('green-btn');
      }

      manageBtn.onclick = () => manageRecord(index, manageBtn);
      manageCell.appendChild(manageBtn);

      // ปุ่มลบ
      /* const deleteCell = row.insertCell(7);
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'ลบ';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.onclick = () => deleteRecord(index);
      deleteCell.appendChild(deleteBtn); */
    });
  }
}

function manageRecord(index, button) {
  const record = borrowRecords[index];

  // เพิ่มเวลาที่คืนและวันที่คืน
  const currentDate = new Date();
  record.returnTime = `${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;
  record.returnDate = currentDate.toISOString().split('T')[0];

  // อัปเดตใน Local Storage
  localStorage.setItem('borrowRecords', JSON.stringify(borrowRecords));

  // เปลี่ยนสีปุ่มและข้อความ
  button.textContent = 'คืนแล้ว';
  /* button.classList.remove('yellow-btn'); */
  button.classList.add('green-btn');
  button.disabled = true;

  // เก็บข้อมูลรายการที่เลือกใน Local Storage
  let managedRecords = JSON.parse(localStorage.getItem('managedRecords')) || [];
  managedRecords.push(record);
  localStorage.setItem('managedRecords', JSON.stringify(managedRecords));

  // ลบแถวออกจาก borrowRecords และ Local Storage
  borrowRecords.splice(index, 1);
  localStorage.setItem('borrowRecords', JSON.stringify(borrowRecords));
  renderTable();
}

/* function deleteRecord(index) {
  borrowRecords.splice(index, 1);
  localStorage.setItem('borrowRecords', JSON.stringify(borrowRecords));
  renderTable();
} */

const clearAllBtn = document.querySelector('.clear-all-btn');
clearAllBtn.addEventListener('click', () => {
  localStorage.removeItem('borrowRecords');
  borrowRecords = [];
  renderTable();
});

renderTable();
