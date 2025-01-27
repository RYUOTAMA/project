document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('borrow-table').getElementsByTagName('tbody')[0];
  
    function renderTable() {
      const managedRecords = JSON.parse(localStorage.getItem('managedRecords')) || [];
  
      tableBody.innerHTML = '';
      if (managedRecords.length === 0) {
        const row = tableBody.insertRow();
        const cell = row.insertCell(0);
        cell.colSpan = 10; // ขยายช่องในกรณีที่ไม่มีข้อมูล
        cell.textContent = 'ไม่มีข้อมูลการคืน';
      } else {
        managedRecords.forEach((record, index) => {
          const row = tableBody.insertRow();
          row.insertCell(0).textContent = index + 1;
          row.insertCell(1).textContent = record.NameSurname;
          row.insertCell(2).textContent = record.dropdownequipment;
          row.insertCell(3).textContent = record.dropdownGradeLevel;
          row.insertCell(4).textContent = record.time;
          row.insertCell(5).textContent = record.date;
          row.insertCell(6).textContent = record.returnTime || '-';
          row.insertCell(7).textContent = record.returnDate || '-';
  
          // ปุ่ม "คืนแล้ว"
          const returnCell = row.insertCell(8);
          const returnBtn = document.createElement('button');
          returnBtn.textContent = 'คืนแล้ว';
          returnBtn.classList.add('return-btn'); // เพิ่มคลาสสำหรับ styling
          returnCell.appendChild(returnBtn);
  
          // ปุ่มลบข้อมูล
          const manageCell = row.insertCell(9);
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'ลบ';
          deleteBtn.classList.add('delete-btn');
          deleteBtn.onclick = () => deleteRecord(index);
          manageCell.appendChild(deleteBtn);
        });
      }
    }
  
    function deleteRecord(index) {
      const managedRecords = JSON.parse(localStorage.getItem('managedRecords')) || [];
      managedRecords.splice(index, 1);
      localStorage.setItem('managedRecords', JSON.stringify(managedRecords));
      renderTable();
    }
  
    // ปุ่มลบข้อมูลทั้งหมด
    const clearAllBtn = document.querySelector('.clear-all-btn');
    clearAllBtn.addEventListener('click', () => {
      localStorage.removeItem('managedRecords');
      renderTable();
    });
  
    renderTable();
  });
  