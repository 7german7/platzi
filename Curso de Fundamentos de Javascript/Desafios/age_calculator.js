function daysBetweenDates(date1, date2) {
  const oneDay = 1000*60*60*24;
  const difference = Math.abs(date1 - date2);
  return Math.floor(difference/oneDay);
}

const today = new Date;
const birthdayDay = new Date(1993, 03, 09);