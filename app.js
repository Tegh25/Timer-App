window.addEventListener("load", () => {
    clock();
    function clock() {
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        const today = changeTimezone(new Date(Date.now()), 'America/Toronto');
        const relapsed = new Date();
        relapsed.setFullYear(2025);
        relapsed.setMonth(3); // Mar
        relapsed.setDate(15); // 15th
        relapsed.setHours(19); // 7 pm
        relapsed.setMinutes(30); // 30 min
        relapsed.setSeconds(1); // 1 sec

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

    // https://stackoverflow.com/questions/15141762/how-to-initialize-a-javascript-date-to-a-particular-time-zone
    function changeTimezone(date, ianatz) {
      // suppose the date is 12:00 UTC
      var invdate = new Date(
        date.toLocaleString('en-US', {
          timeZone: ianatz,
        })
      );

      // then invdate will be 07:00 in Toronto
      // and the diff is 5 hours
      var diff = date.getTime() - invdate.getTime();

      // so 12:00 in Toronto is 17:00 UTC
      return new Date(date.getTime() - diff); // needs to substract
    }
});