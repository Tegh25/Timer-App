window.addEventListener("load", () => {
    clock();
    function clock() {
        // const today = new Date();

        // // Rehan's last iced capp
        // const rMonth = 8; // Aug
        // const rDay = 5; // 5th
        // const rHour = 16; // 4 pm
        // const rMinutes = 30; // 30 min
        // const rSeconds = 0; // 0 sec

        // // get time components
        // const month = today.getMonth();
        // const day = today.getDate();
        // const hours = today.getHours();
        // const minutes = today.getMinutes();
        // const seconds = today.getSeconds();

        //add '0' to hour, minute & second when they are less 10
        // const hour = hours < 10 ? "0" + hours : hours;
        // const minute = minutes < 10 ? "0" + minutes : minutes;
        // const second = seconds < 10 ? "0" + seconds : seconds;

        //make clock a 12-hour time clock
        // const hourTime = hour > 12 ? hour - 12 : hour;

        // if (hour === 0) {
        //   hour = 12;
        // }
        //assigning 'am' or 'pm' to indicate time of the day
        // const ampm = hour < 12 ? "AM" : "PM";

        // get date components
        // const year = today.getFullYear();
        // const day = today.getDate();

        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // const monthsPassed = month - rMonth;
        // const daysPassed = day - rDay;

        const today = Date.now();
        const relapsed = new Date();
        relapsed.setFullYear(2023);
        relapsed.setMonth(8);
        relapsed.setDate(5);
        relapsed.setHours(16);
        relapsed.setMinutes(30);
        relapsed.setSeconds(0);

        const milliseconds = (today - relapsed.getTime());

        const days = Math.floor(milliseconds / 86400000);
        const hours = Math.floor((milliseconds - days*86400000) / 3600000);
        const minutes = Math.floor((milliseconds - hours*3600000 - days*86400000) / 60000);
        const seconds = Math.floor((milliseconds - minutes*60000 - hours*3600000 - days*86400000) / 1000);

        //get current date and time
        const timeElapsed = days + " day(s), " + hours + " hour(s), " + minutes + " minute(s), and " + seconds + " seconds.";
        // const time = hourTime + ":" + minute + ":" + second + ampm;

        // //combine current date and time
        // const dateTime = date + " - " + time;

        //print current date and time to the DOM
        document.getElementById("time-elapsed").innerHTML = timeElapsed;
        setTimeout(clock, 1000);
    }
});