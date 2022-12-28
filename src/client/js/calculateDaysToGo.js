// Pass in a date in the future
// this function will return the difference in number of days from the current date to the future date
const calculateDaysToGo = (futureDate) => {
    const differenceInDays = new Date(futureDate) - new Date();
    let daysToGo = new Date(differenceInDays) / (24 * 3600 * 1000);
    daysToGo = Number(Math.round(daysToGo));
    return daysToGo;
};

export { calculateDaysToGo };
