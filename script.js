let screen  = document.getElementById("output");

function display(num) {
    screen.value += num; 
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        alert("Invalid Calculation");
    }
}

function clearAll() {
    screen.value = '';
}

function clearOne() {
    screen.value = screen.value.slice(0,-1);
}

function percentage() {
    screen.value = screen.value * 100;
}