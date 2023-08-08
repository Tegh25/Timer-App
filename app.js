window.addEventListener("load", () => {
    clock();
    function clock() {
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        const today = Date.now();
        const relapsed = new Date();
        relapsed.setFullYear(2023);
        relapsed.setMonth(8); // Aug
        relapsed.setDate(7); // 7th
        relapsed.setHours(23); // 11 pm
        relapsed.setMinutes(50); // 50 min
        relapsed.setSeconds(0); // 0 sec

        const milliseconds = (today - relapsed.getTime());

        const days = Math.floor(milliseconds / 86400000);
        const hours = Math.floor((milliseconds - days*86400000) / 3600000);
        const minutes = Math.floor((milliseconds - hours*3600000 - days*86400000) / 60000);
        const seconds = Math.floor((milliseconds - minutes*60000 - hours*3600000 - days*86400000) / 1000);

        //get current date and time
        const timeElapsed = days+31 + " day(s), " + hours + " hour(s), " + minutes + " minute(s), and " + seconds + " seconds.";

        //print current date and time to the DOM
        document.getElementById("time-elapsed").innerHTML = timeElapsed;
        setTimeout(clock, 1000);
    }
});