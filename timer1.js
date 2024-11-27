// scheduleAlams function
const scheduleAlarms = function() {
// First we need to capture the command line argument in a variable. Then converting each string value into numbers.
const alarmTimes = process.argv.slice(2).map(Number);

// We will sort the array to get the right sequance of beebs.
const sortedAlarm = alarmTimes.sort((a, b) => a - b);

//We will loop over the array with the times from the sorted array.
for (let time of sortedAlarm) {
// Conditional statment to ignore negative values and NaN
  if (time > 0 && !isNaN(time)) {
    setTimeout(() => {
        process.stdout.write("\x07");
      }, time * 1000)
  }
};
} 

// Call the function to execute the alarm scheduling. 
scheduleAlarms();