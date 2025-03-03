function convertGrade() {
  const getInput = document.getElementById("gradeInput").value; //get string value
  const grade = parseFloat(getInput); //parseFloat will covert to a number

  if (isNaN(grade)) {
    document.getElementById("result").textContent = "Please enter a number";
  }

  let letterGrade = gradeConverter(grade);
  document.getElementById("result").textContent = `Your letter grade is: ${letterGrade}`;
}
