document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;
document.getElementById('clearButton').onclick = clearLights;

function illuminateRed() {
    clearLights();
    document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
    clearLights();
    document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function illuminateGreen() {
    clearLights();
    document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {
    document.getElementById('stopLight').style.backgroundColor = "black";
    document.getElementById('slowLight').style.backgroundColor = "black";
    document.getElementById('goLight').style.backgroundColor = "black";
}

if ($(window).width() < 900) {
    alert('Please make the window BIGGER!! <br /> Thank you!');
}