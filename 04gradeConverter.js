//Write a program that transforms a numerical grade to a letter grade (0-44: F, 45-49: D, 50-59: C, 60-69: B, 70-100: A).
//Ussing switch statement.

function gradeConverter(grade) {
  let letterGrade;
  switch (true) {
    case grade >= 0 && grade <= 44:
      letterGrade = "F";
      break;
    case grade >= 45 && grade <= 49:
      letterGrade = "D";
      break;
    case grade >= 50 && grade <= 59:
      letterGrade = "C";
      break;
    case grade >= 60 && grade <= 69:
      letterGrade = "B";
      break;
    case grade >= 70 && grade <= 100:
      letterGrade = "A";
    default:
      letterGrade = "Invalid grade";
  }
  return letterGrade;
}

console.log(gradeConverter(11)); // "F"
