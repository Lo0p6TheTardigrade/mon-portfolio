// @flow

const dateNow = Date.now();
const date = new Date('01/01/2022');
const dateTime = date.getTime();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();

const copyrightDate = new Date(dateNow).getFullYear();

const Custom_Date_Obj = {
  date: {
    now: {
      time: dateTime,
      date: dateNow,
      day: new Date(dateNow).getDay(),
      month: new Date(dateNow).getMonth(),
      year: new Date(dateNow).getFullYear(),
    },
  },
  full: {
    day: day,
    month: month,
    year: year,
  },
  copyright: copyrightDate,
};

export { Custom_Date_Obj };
