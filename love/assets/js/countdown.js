 // Converting string to required date format
 let deadline = new Date("Oct 5, 2024 15:37:25").getTime();


let x = setInterval(function () {
    let now = new Date().getTime();
    let t = deadline - now;

                // Getting value of days, hours, minutes, seconds
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

                // Output the remaining time
    document.getElementById("countdown").innerHTML = "Countdown until Wedding: " + days + "d " + hours + "h " +minutes + "m " + seconds + "s ";

    if (t < 0) {
        clearInterval(x);
             document.getElementById("countdown").innerHTML = "WE ARE MARRIED";
             }}, 1000);