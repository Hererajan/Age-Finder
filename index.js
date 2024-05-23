function calculate() {
  //   console.log(cd.value.slice(0, 4));
  let currentDay = parseInt(cd.value.slice(8, 10), 10);
  let currentMonth = parseInt(cd.value.slice(5, 7), 10);
  let currentYear = parseInt(cd.value.slice(0, 4), 10);
  console.log("current date:- ", currentYear, currentMonth, currentDay);

  let birthDay = parseInt(dob.value.slice(8, 10), 10);
  let birthMonth = parseInt(dob.value.slice(5, 7), 10);
  let birthYear = parseInt(dob.value.slice(0, 4), 10);
  console.log("dob:- ", birthYear, birthMonth, birthDay);

  if (currentDay >= birthDay) {
    day = currentDay - birthDay;
  } else {
    day = currentDay + new Date(currentYear, currentMonth).getDate() - birthDay;
    currentMonth--;
  }

  if (currentMonth >= birthMonth) {
    month = currentMonth - birthMonth;
  } else {
    month = currentMonth + 12 - birthMonth;
    currentYear--;
  }

  year = currentYear - birthYear;

  if (year < 0) {
    ageText.innerHTML = "Aakhe khol le likh Bkl(Bhut khas log)";
  } else {
    ageText.innerHTML = year + "Years," + month + "Months," + day + "Days";
  }
}
