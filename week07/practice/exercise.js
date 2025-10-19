// --- Task 1 ---
const studentList = document.getElementById('student-list');
const davidLi = document.createElement('li');
const davidText = document.createTextNode('David');
davidLi.appendChild(davidText);
studentList.appendChild(davidLi);

// --- Task 2 ---
const eveLi = document.createElement('li');
eveLi.textContent = 'Eve';
eveLi.setAttribute('id', 'transfer-student');
studentList.appendChild(eveLi);

// --- Task 3 ---
const allStudents = studentList.children;
const bobLi = allStudents[1]; 
console.log('--- Analyzing Bob ---');
console.log('Parent:', bobLi.parentElement);
console.log('Previous Sibling:', bobLi.previousElementSibling);
console.log('Next Sibling:', bobLi.nextElementSibling);

// --- Task 4 ---
const charlieLi = allStudents[2]; 
charlieLi.setAttribute('class', 'highlight');

// 1. Alice
// 2. Bob
// 3. Charlie (with highlight class)
// 4. David
// 5. Eve (with id 'transfer-student')