const display = document.getElementById("display");
const main = document.getElementById("main");
const inputbtn = document.querySelectorAll("input[type = 'button']");
const buttontheme = document.querySelectorAll("button");


function addNumber(i) {
    val = display.value + i;
    display.value = val;
}

function deleteAll() {
    display.value = "";
}

function egal() {
    const v1 = parseInt(display.value, 10)
    if (isNaN(v1) ){
        display.value = "Error";
    } 
    else {
        display.value = eval(display.value);
    }
}

function DEL(){
    // display.value = display.value.substr(0, display.value.length - 1)
    display.value = display.value.slice(0, -1);
}

// function themeSombre(){
//     main.style.backgroundColor = '#0F0F0F';
//     inputbtn.forEach(function(input) {
//         input.style.backgroundColor = '#F1F1F1'; // Changez la couleur de fond à votre convenance
//         input.style.color = '#0F0F0F';
//     });

//     buttontheme.forEach(function(btn) {
//         btn.style.backgroundColor = '#F1F1F1'; // Changez la couleur de fond à votre convenance
//         btn.style.color = '#0F0F0F';
//     });

// }

// function themeClair(){
//     main.style.backgroundColor = '#F1F1F1';

//     inputbtn.forEach(function(input) {
//         input.style.backgroundColor = '#C0C0C0'; // Changez la couleur de fond à votre convenance
//         input.style.color = '#F1F1F1';
//     });

//     buttontheme.forEach(function(btn) {
//         btn.style.backgroundColor = '#C0C0C0'; // Changez la couleur de fond à votre convenance
//         btn.style.color = '#F1F1F1';
//     });

//     calculatrice.style["boxshadow"] = "9px 9px 14px 2px #D8D8D8";
// }

