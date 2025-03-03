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
      break;
    default:
      letterGrade = "Invalid";
  }
  return letterGrade;
}
