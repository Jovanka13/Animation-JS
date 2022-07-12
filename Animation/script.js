let textTag = document.querySelector('.section1 h1');
let text = textTag.textContent;

let splittedText = text.split('');

textTag.innerHTML = '';

for (let i = 0; i < splittedText.length; i++) {
    if(splittedText[i] == " ") {
        splittedText[i] = "&nbsp;";
    }

    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

const animateLetters = () => {
let spans = textTag.querySelectorAll('span');
let k = 0;
let interval = setInterval(() => {
    let singleSpan = spans[k];

    singleSpan.className = 'fadeMove';
    k++;

    if(k === spans.length) {
        clearInterval(interval);
    }

}, 200); 
}



let border = document.querySelector('.border-line');
let animationWidth = 0;



const imageAnimation = () => {
    let sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    console.log('sectionP: ' + sectionPosition);
    console.log('screenP: ' + screenPosition);

    let leftImage = document.querySelector('.slideFromLeft');
    let rightImage = document.querySelector('.slideFromRight');

    if(sectionPosition < screenPosition) {
        leftImage.classList.add('animated');
        rightImage.classList.add('animated');
    }
}

const changeLineWidth = (isPlus = true) => {
    const lineWidth = +document.querySelector('#line').style.width.split('%')[0];

    if (isPlus && (lineWidth + 5 <= 100)) {
        document.querySelector('#line').style.width = `${lineWidth + 5}%`
    } else if (!isPlus && (lineWidth - 5 >= 0)) {
        document.querySelector('#line').style.width = `${lineWidth - 5}%`
    }
}

const showImage = (imgId) => {
    document.querySelector(`#${imgId}`).style.opacity = '1';
    document.querySelector(`#${imgId}`).style.transform = 'translateX(0)';
}





