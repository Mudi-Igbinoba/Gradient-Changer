const arrayOfGradients = [
    ['#FBD3E9', '#BB377D'],
    ['#00d2ff', '#3a7bd5'],
    ['#f2709c', '#ff9472'],
    ['#a73737', '#7a2828'],
    ['#4b6cb7', '#182848'],
    ['#C04848', '#480048'],
    ['#5f2c82', '#49a09d'],
    ['#232526', '#414345'],
    ['#5C258D', '#4389A2'],
    ['#4776E6', '#8E54E9'],
];
const arrLength = arrayOfGradients.length;
const main = document.querySelector('main');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const gradientText = document.getElementById('gradient');
let counter = 0;

nextBtn.addEventListener('click', () => {
    if (counter === arrLength) {
        counter = 0;
    }

    gradientText.innerHTML = `
        ${arrayOfGradients[counter][0]}
        <i class="fa-solid fa-arrow-right"></i>
        ${arrayOfGradients[counter][1]}
    `;

    main.style.background = `linear-gradient(to left, ${arrayOfGradients[counter][0]}, ${arrayOfGradients[counter][1]})`;

    counter++;
});

prevBtn.addEventListener('click', () => {
    if (counter === 0) {
        counter = arrLength - 1;
    }

    gradientText.innerHTML = `
        ${arrayOfGradients[counter][0]}
        <i class="fa-solid fa-arrow-right"></i>
        ${arrayOfGradients[counter][1]}
    `;

    main.style.background = `linear-gradient(to left, ${arrayOfGradients[counter][0]}, ${arrayOfGradients[counter][1]})`;
    counter--;
});
