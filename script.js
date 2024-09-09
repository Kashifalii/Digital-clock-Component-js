let hours = document.getElementById("hrs");
let minutes = document.getElementById("mins");
let seconds = document.getElementById("secs");
let clock = document.getElementById("clock");

setInterval(() => {
    let currentTime = new Date();

    hours.innerText = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours() + " h";
    minutes.innerText = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes() + " m";
    seconds.innerText = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds() + " s";

}, 1000);

