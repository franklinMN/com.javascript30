
const hourArm = document.querySelector('.hour-arm ');
const minArm = document.querySelector('.min-arm ');
const secArm = document.querySelector('.sec-arm ');

function clockMovement(){

    const time = new Date();

    let hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    console.log(time);
    // console.log(hours);
    // console.log(mins);
    // console.log(secs);

    hours = ( hours / 12 ) * 360 + 90;
    mins = ( mins / 60 ) * 360 + 90;
    secs = ( secs / 60 ) * 360 + 90;

    // console.log(hourArm);
    // console.log(minArm);
    // console.log(secArm);

    hourArm.style.transform = 'rotate(' + hours + 'deg)';
    minArm.style.transform = 'rotate(' + mins + 'deg)';
    secArm.style.transform = 'rotate(' + secs + 'deg)';

    const currentTimeInMilliseconds = time.getTime();
    const nextSecondInMilliseconds = (Math.floor(currentTimeInMilliseconds / 1000) + 1) * 1000;
    const delay = nextSecondInMilliseconds - currentTimeInMilliseconds;
    console.log(currentTimeInMilliseconds, nextSecondInMilliseconds, delay);

    // Call clockMovement at the next second increment
    setTimeout(clockMovement, delay);

}

clockMovement();

// setInterval(clockMovement, 1000);




// loading Screen

// Show loading overlay when the page starts loading
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loading-overlay').style.display = 'flex';
});

// Hide loading overlay when the page has finished loading
window.addEventListener('load', function() {
    document.getElementById('loading-overlay').style.display = 'none';
});