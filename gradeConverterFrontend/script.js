function convertGrade() {
  const getInput = document.getElementById("gradeInput").value; //get string input value
  const resultElement = document.getElementById("numberChecker");
  const grade = parseFloat(getInput);
  const numberChecker = document.getElementById("result");

  if (Number.isNaN(grade)) {
    resultElement.textContent = "please enter a number";
    numberChecker.textContent = "";
    return;
  }

  let letterGrade = gradeConverter(grade);
  if (Number.isNaN(letterGrade)) {
    numberChecker.textContent = `Your grade is ${letterGrade}`;
    resultElement.textContent = "";
    return;
  }
}
