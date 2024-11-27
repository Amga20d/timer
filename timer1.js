
// First we need to capture the command line argument in a variable.
const alarmTimes = process.argv.slice(2)

// We will sort the array to get the right sequance of beebs
const sortedAlarm = alarmTimes.sort((a, b) => a - b);

console.log(sortedAlarm);
// process.stdout.write()