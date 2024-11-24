function getStudentFromIds(studentId) {
  return studentRecords.find(function(student){
	return student.id === studentId
  });
}

function printRecords(recordIds) {
  var records = recordIds
  .map(getStudentFromIds)
  .sort((x, y) => x.name.localeCompare(y.name)); 

 records.forEach((record) => {
    console.log(`Name: ${record.name}, ID: ${record.id}, Status: ${record.paid ? "Paid" : "Not Paid"}`);
  });
}

function paidStudentsToEnroll() {
	return studentRecords.filter((student) => student.paid).map((student) => student.id);
}

function remindUnpaid(_recordIds) {
	var unpaidRecords = _recordIds
	  .map(getStudentFromIds)
	  .filter((student) => !student.paid);
  
	unpaidRecords.forEach((record) => {
	  console.log(`Reminder: ${record.name} (ID: ${record.id}) has not paid.`);
	});
  }
  

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
