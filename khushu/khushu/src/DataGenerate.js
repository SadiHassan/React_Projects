/* 
Tutorial
---------
The getUTCDay() method returns the day of the week in the specified date according to universal time, where 0 represents Sunday.
The getUTCDate() method returns the day of the month(from 1 to 31) in the specified date according to universal time.
The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).
*/

/* 
The Algorithm of date table creation:

1. For new users: Generate increamental dates starting from January 01 of the current month
2. For existing users: 
    a. Get data of the current month from database
    b. From the last usage date to today + 30 days, generate increamental dates
*/

const monthByIndex = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dayByIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
/* 
    Params:
        beginDate (string) 
        endDate (string)
*/
module.exports.getDates = function (beginDateStr, endDateStr) {
  beginDateStr += "T00:00";
  endDateStr += "T00:00";

  const beginDate = new Date(beginDateStr);
  const endDate = new Date(endDateStr);
  let currentYear = beginDate.getFullYear();
  console.log(beginDate);
  console.log(endDate);
  console.log(currentYear);

  let days = 0;

  while (beginDate <= endDate) {
    currentMonth = monthByIndex[beginDate.getMonth()];
    currentDateSerial = beginDate.getUTCDate().toString();
    if (currentDateSerial.length < 2)
      currentDateSerial = "0" + currentDateSerial;

    currentDay = dayByIndex[beginDate.getUTCDay()];
    beginDate.setDate(beginDate.getDate() + 1);
    days = days + 1;

    console.log(
      currentYear.toString() +
        "-" +
        currentMonth +
        "-" +
        currentDateSerial +
        "-" +
        currentDay
    );

    if (currentMonth == "Dec" && currentDateSerial == "31")
      currentYear = currentYear + 1;
  }
};

this.getDates("2015-08-16", "2015-09-07");
