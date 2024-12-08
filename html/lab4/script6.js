console.log("Script 6: Setting up an interval");
let count = 0;
const interval = setInterval(() => {
    console.log(`Interval message ${++count}`);
    if (count >= 5) clearInterval(interval);
}, 1000);
