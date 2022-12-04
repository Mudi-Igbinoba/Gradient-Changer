// Dom Elements
let counter = 0;
let arrayOfGradients = [
    ['#780206', '#061161', 'Shady Day'],
    ['#FBD3E9', '#BB377D', 'Pink Perfection'],
    ['#00d2ff', '#3a7bd5', 'Sky Vibes'],
    ['#f2709c', '#ff9472', 'Summer Fun'],
    ['#a73737', '#7a2828', 'Red Wine'],
    ['#4b6cb7', '#182848', 'Dusk'],
    ['#C04848', '#480048', 'Bloody Mary'],
    ['#5f2c82', '#49a09d', 'Blue Lagoon'],
    ['#232526', '#414345', 'Dark Night'],
    ['#5C258D', '#4389A2', 'Royalty Kin'],
    ['#4776E6', '#8E54E9', 'Ocean Waves'],
];
const main = document.querySelector('main');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const gradientText = document.getElementById('gradientText');
const colorName = document.getElementById('colorName');
const addToGradientBg = document.getElementById('addToGradientBg');
const addToGradientBtn = document.getElementById('addToGradientBtn');
const addToGradient = document.getElementById('addToGradient');
const gradientColor1 = document.getElementById('gradientColor1');
const gradientColor2 = document.getElementById('gradientColor2');
const saveGradient = document.getElementById('saveGradient');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const previewColor1 = document.getElementById('previewColor1');
const previewColor2 = document.getElementById('previewColor2');
const viewCssBg = document.getElementById('viewCssBg');
const viewCss = document.getElementById('viewCss');
const viewCssBtn = document.getElementById('viewCssBtn');
const copyCssBtn = document.getElementById('copyCssBtn');
const cssCode = document.getElementById('cssCode');

// Loading Screen Functionality
// setTimeout(() => {
//     document.querySelector('body').innerHTML =
// }, 1000);

// Change Gradient Functionality
nextBtn.addEventListener('click', () => {
    if (counter === arrayOfGradients.length - 1) {
        counter = 0;
    } else {
        counter++;
    }

    colorName.textContent = `
        ${arrayOfGradients[counter][2]}
    `;

    main.style.background = `linear-gradient(to right, ${arrayOfGradients[counter][0]}, ${arrayOfGradients[counter][1]})`;
    previewColor1.style.background = `${arrayOfGradients[counter][0]}`;
    previewColor2.style.background = `${arrayOfGradients[counter][1]}`;
    gradientColor1.textContent = `${arrayOfGradients[counter][0]}`;
    gradientColor2.textContent = `${arrayOfGradients[counter][1]}`;

    cssCode.innerText = `
        background: ${arrayOfGradients[counter][0]}; /* fallback for old browsers*/
        background: -webkit-linear-gradient(to right, ${arrayOfGradients[counter][0]}, ${arrayOfGradients[counter][1]}); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, ${arrayOfGradients[counter][0]}, ${arrayOfGradients[counter][1]}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;`;

    document.querySelector('#cssCode br').style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    if (counter === 0) {
        counter = arrayOfGradients.length - 1;
    } else {
        counter--;
    }

    colorName.textContent = `
    ${arrayOfGradients[counter][2]}
`;

    main.style.background = `linear-gradient(to right, ${arrayOfGradients[counter][0]}, ${arrayOfGradients[counter][1]})`;
    previewColor1.style.background = `${arrayOfGradients[counter][0]}`;
    previewColor2.style.background = `${arrayOfGradients[counter][1]}`;
    gradientColor1.textContent = `${arrayOfGradients[counter][0]}`;
    gradientColor2.textContent = `${arrayOfGradients[counter][1]}`;

    cssCode.innerText = `
        background: ${arrayOfGradients[counter][0]}; /* fallback for old browsers*/
        background: -webkit-linear-gradient(to right, ${arrayOfGradients[counter][0]}, ${arrayOfGradients[counter][1]}); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, ${arrayOfGradients[counter][0]}, ${arrayOfGradients[counter][1]}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;`;

    document.querySelector('#cssCode br').style.display = 'none';
});

// Add To Gradient Modal Functionality
addToGradientBtn.addEventListener('click', () => {
    if (
        addToGradient.style.display === 'block' &&
        addToGradientBg.style.display === 'block'
    ) {
        addToGradient.style.display = 'none';
        addToGradientBg.style.display = 'none';

        addToGradientBtn.innerHTML = `
        <i class="fa-solid fa-circle-plus"></i>
    `;
    } else {
        addToGradient.style.display = 'block';
        addToGradientBg.style.display = 'block';

        addToGradientBtn.innerHTML = `
        <i class="fa-solid fa-xmark"></i>
    `;
    }
});

// addToGradientBg.addEventListener('click', () => {
//     addToGradient.style.display = 'none';
//     addToGradientBg.style.display = 'none';

//     addToGradientBtn.innerHTML = `
//     <i class="fa-solid fa-circle-plus"></i>`;
// });

// Save Gradient Functionality
saveGradient.addEventListener('submit', (e) => {
    e.preventDefault();
    arrayOfGradients.push([`${color1.value}`, `${color2.value}`, '']);
    counter = arrayOfGradients.length - 1;

    colorName.textContent = `
    ${arrayOfGradients[counter][2]}
`;

    main.style.background = `linear-gradient(to right, ${arrayOfGradients[counter][0]}, ${arrayOfGradients[counter][1]})`;
    previewColor1.style.background = `${arrayOfGradients[counter][0]}`;
    previewColor2.style.background = `${arrayOfGradients[counter][1]}`;
    gradientColor1.textContent = `${arrayOfGradients[counter][0]}`;
    gradientColor2.textContent = `${arrayOfGradients[counter][1]}`;

    cssCode.innerText = `
    background: ${arrayOfGradients[counter][0]}; /* fallback for old browsers*/
    background: -webkit-linear-gradient(to right, ${arrayOfGradients[counter][0]}, ${arrayOfGradients[counter][1]}); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, ${arrayOfGradients[counter][0]}, ${arrayOfGradients[counter][1]}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;`;

    document.querySelector('#cssCode br').style.display = 'none';

    addToGradient.style.display = 'none';
    addToGradientBg.style.display = 'none';

    addToGradientBtn.innerHTML = `
        <i class="fa-solid fa-circle-plus"></i>
    `;
});

//view Css Modal Functionality
viewCssBtn.addEventListener('click', () => {
    if (
        viewCss.style.display === 'block' &&
        viewCssBg.style.display === 'block'
    ) {
        viewCss.style.display = 'none';
        viewCssBg.style.display = 'none';

        viewCssBtn.innerHTML = `
        <i class="fa-solid fa-code"></i>
    `;
    } else {
        viewCss.style.display = 'block';
        viewCssBg.style.display = 'block';

        viewCssBtn.innerHTML = `
        <i class="fa-solid fa-xmark"></i>
    `;
    }
});

// viewCssBg.addEventListener('click', () => {
//     viewCss.style.display = 'none';
//     viewCssBg.style.display = 'none';

//     viewCssBtn.innerHTML = `
//     <i class="fa-solid fa-code"></i>`;
// });

// copy Css Functionality
copyCssBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(cssCode.innerText);
    cssCode.innerHTML = '<p>Succesfully Copied!</p>';
    setTimeout(
        () => {
            cssCode.innerText = `
        background: ${gradientColor1.textContent}; /* fallback for old browsers*/
        background: -webkit-linear-gradient(to right, ${gradientColor1.textContent}, ${gradientColor2.textContent}); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, ${gradientColor1.textContent}, ${gradientColor2.textContent}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;`;

            document.querySelector('#cssCode br').style.display = 'none';
        },

        1000
    );
});
