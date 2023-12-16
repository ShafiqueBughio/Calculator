input = document.getElementById('inputBox');
Buttons = document.querySelectorAll('button');
let string = "";

let arr = Array.from(Buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == '%') {
            // assuming you want to find the percentage of the last entered number
            string = (eval(string) / 100).toString();
            input.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})


// Load sound files
const soundButton = new Audio('click3.WAV'); // Replace with your sound file's path

// Function to play sound
function playButtonClickSound() {
    soundButton.currentTime = 0; // Reset sound to the beginning
    soundButton.play();
}

// Add click event listeners to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', playButtonClickSound);
});



let li1 = document.getElementById("li1")
let li2 = document.getElementById("li2")
let li3 = document.getElementById("li3")
let rightbtn = document.getElementsByClassName("equal-btn");

li1.addEventListener('click', function () {
    for (let i = 0; i < rightbtn.length; i++) {
        rightbtn[i].style.backgroundColor = 'rgb(251, 124, 20)';
        rightbtn[i].style.color = 'white';
    }
})
li2.addEventListener('click', function () {
    for (let i = 0; i < rightbtn.length; i++) {
        rightbtn[i].style.backgroundColor = 'yellow';
        rightbtn[i].style.color = 'black';
    }
})
li3.addEventListener('click', function () {
    for (let i = 0; i < rightbtn.length; i++) {
        rightbtn[i].style.backgroundColor = 'green';
        rightbtn[i].style.color = 'white';
    }

})



let numbtn = document.getElementsByClassName("numberbtn");
let backbtn = document.getElementById("changebtn");
let isWhiteBackground = false;


backbtn.addEventListener("click", function () {


    if (isWhiteBackground) {
        document.body.style.background = 'linear-gradient(45deg,#0a0a0a,#3a4452)';
        for (let i = 0; i < numbtn.length; i++) {
            numbtn[i].style.background = 'white';
            numbtn[i].style.color = 'black';

        }
    }
    else {
        document.body.style.background = 'white';
        for (let i = 0; i < numbtn.length; i++) {
            numbtn[i].style.background = 'linear-gradient(45deg,#0a0a0a,#3a4452)';
            numbtn[i].style.color = 'white';
        }
    }

    isWhiteBackground = !isWhiteBackground;
});

//i want to add hover on numbtn
// if( document.body.style.background = 'linear-gradient(45deg,#0a0a0a,#3a4452)'){
//     for(let i=0;i<numbtn.length;i++){
//         numbtn[i].addEventListener('mouseover',function(){
//             this.style.backgroundColor = '#d8e0e7';
//             this.color='black';
//         })
//         numbtn[i].addEventListener('mouseout',function(){
//             this.style.backgroundColor = 'white';
//             this.style.color = 'black';
//         })}
// }
// else if(document.body.style.background = 'white'){
//     for(let i=0;i<numbtn.length;i++)
//     numbtn[i].addEventListener('mouseover',function(){
//         this.style.backgroundColor = 'linear-gradient(45deg,#0a0a0a,#3a4452)';
//         this.style.color = 'white';
//     })
//     numbtn[i].addEventListener('mouseout',function(){
//         this.style.background = 'white';
//         this.style.color = 'black';
//     })
// }





// let backbtn = document.getElementById("changebtn");

// backbtn.addEventListener("click", function () {
//     const computedBackground = getComputedStyle(document.body).background;
//   if (computedBackground  = "linear-gradient(45deg,#0a0a0a,#3a4452)") {
//     computedBackground = 'white';
//   } else {
//     computedBackground = 'linear-gradient(45deg,#0a0a0a,#3a4452)';
//   }
// });