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

module.exports.DectoBinary = function (val) {
  let valBinaryStr = (+val).toString(2);
  console.log(valBinaryStr);
  console.log(valBinaryStr.length);
};
this.DectoBinary("9223372036854775807");
this.DectoBinary("1152921504606846975");

module.exports.binaryToDec = function (str) {
  let valDecStr = parseInt(str, 2);
  console.log(valDecStr);
  //console.log(valBinaryStr.length)
};

this.binaryToDec(
  "111011101111101110111110111011111011101111101110111110111011"
);

module.exports.isLeapYear = function () {
  const date = new Date();
  let currentYear = date.getFullYear();
  if (
    (currentYear % 4 == 0 && currentYear % 100 != 0) ||
    currentYear % 400 == 0
  )
    return true;
  return false;
};

module.exports.viewToData = function (viewArr) {};

module.exports.createNewUserData = function () {
  let dataArrDB = Array();
  let dataArrView = Array();
  let dataLength = 62;
  let dataStreamLength = 60;
  for (let i = 0; i < dataLength; i++) {
    let temp = Math.random() * Math.pow(2, 60);
    console.log(temp);
    dataArrDB.push(temp); // each number is 8 byte integer
  }

  // At this point create a user collection with 'username+currentYear'
  // Save this array to the collection. The collection might have other information, like, username, password etc...

  for (let i = 0; i < dataLength; i++) {
    let val = dataArrDB[i];
    let valBinaryStr = (+val).toString(2);
    while (valBinaryStr.length < dataStreamLength)
      valBinaryStr = "0" + valBinaryStr;
    dataArrView.push(valBinaryStr);
  }
  console.log(dataArrView);
  console.log(dataArrView.length);
  console.log(dataArrView[0].length);

  let dataArrViewFinal = Array();
  let dataChunk = 5;
  let daysOfYear = 365;

  if (this.isLeapYear()) daysOfYear++;

  for (let i = 0; i < dataArrView.length / 2; i++) {
    let j = 0;
    while (j < dataArrView[0].length) {
      let ontime = dataArrView[i].substring(j, j + dataChunk);
      let late = dataArrView[i + 31].substring(j, j + dataChunk);
      let finalString = "";
      for (k = 0; k < ontime.length; k++) {
        if (ontime[k] == "1") finalString += "2";
        else if (late[k] == "1") finalString += "1";
        else finalString += "0";
      }
      dataArrViewFinal.push(finalString);
      daysOfYear--;
      if (daysOfYear < 1) break;
      j += dataChunk;
    }
    if (daysOfYear < 1) break;
  }
  console.log(dataArrViewFinal);
  console.log(dataArrViewFinal.length);
  console.log(dataArrViewFinal[0].length);
};

this.createNewUserData();
