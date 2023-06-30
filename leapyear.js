function getLeapYearsInRange(rangeStart, rangeEnd) {
  let leapYears = [];
  for (i = rangeStart; i <= rangeEnd; i++) {
    // console.log(i);
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
      leapYears.push(i);
    }
  }
  console.log(leapYears);
}
getLeapYearsInRange(1699, 1710);
