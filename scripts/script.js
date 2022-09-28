const hideSwitch = document.querySelector('#hide-switch');
const animateSwitch = document.querySelector("#animate-switch");
const wrapperBlock = document.querySelector(".wrapper");
const circleBlock = document.querySelector(".circle");
const progressBlock = document.querySelector(".progress");
const controlBlock = document.querySelector(".control");
const inputNum = document.getElementById("number");



//======HIDE-SWITCH======
hideSwitch.onclick = function (event) {
    const isCheck = hideSwitch.checked;
    if (isCheck) {
        circleBlock.classList.toggle('hidden');
    } else {
        circleBlock.classList.toggle('hidden');
    }
}

//======ANIMATE-SWITCH======

animateSwitch.onclick = function (event) {
    let timeout = 400;
    const isCheck = animateSwitch.checked;
    if (isCheck) {
        let spinning =setInterval(() => {
            wrapperBlock.classList.add('rotate');
            progressBlock.classList.add('rotate');
            controlBlock.classList.add('rotate');
        }, timeout);
    } else {
        
    }
}

//======PROGRESS-CONTROL======
inputNum.oninput = function() {
    let progressValue = 0;
    let speed = 10;
    let progressEndValue = inputNum.valueAsNumber;

    if (progressEndValue == NaN) {
        return;
    }

    let progress = setInterval(() => {
        progressValue++;
        circleBlock.style.background = `conic-gradient(
            #005BFF ${progressValue * 3.6}deg,
            #E0E6EF ${progressValue * 3.6}deg
        )`;
        if (progressEndValue == NaN) {
            clearInterval(progress);
        }
        if (progressValue == progressEndValue) {
            clearInterval(progress);
        };
    }, speed);
};



