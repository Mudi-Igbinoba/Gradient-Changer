//Loading Screen
document.querySelector('body').innerHTML = `
       <section id="loader">
          <div class="container">
              <h1>GradientGrids</h1>
              <img src="images/loader.gif" alt="Logo" />
          </div>
      </section>
  `;

//Functions
//Basic Functionality
const startFunctionality = () => {
    document.querySelector('body').innerHTML = `
      <header>
            <div class="top">
                <h1>GradientGrids</h1>
            </div>
            <div class="bottom">
                <button id="menuBtn">
                    <i class="fa-solid fa-bars"></i>
                    View all gradients
                </button>

                <p id="gradientText">
                    <span id="previewColor1"></span>
                    <span id="gradientColor1">#780206</span>
                    <i class="fa-solid fa-arrow-right"></i>
                    <span id="gradientColor2">#061161</span>
                    <span id="previewColor2"></span>
                </p>

                <div class="btns">
                    <button id="addToGradientBtn">
                        <i class="fa-solid fa-circle-plus"></i>
                    </button>
                    <button id="viewCssBtn">
                        <i class="fa-solid fa-code"></i>
                    </button>
                </div>
            </div>
        </header>
        <main>
            <div id="addToGradientBg" class="modal-bg">
                <div id="addToGradient" class="modal">
                    <form id="saveGradient">
                        <p>Pick 2 colors to add new gradient</p>

                        <div id="colorInput">
                            <input id="color1" type="color" value="#780206" />
                            <input id="color2" type="color" value="#061161" />
                        </div>

                        <button>Save Gradient</button>
                    </form>
                </div>
            </div>

            <div id="viewCssBg" class="modal-bg">
                <div id="viewCss" class="modal">
                    <p>Copy Css Code</p>

                    <code id="cssCode">
                        background: #780206; /* fallback for old browsers */
                        <br />
                        background: -webkit-linear-gradient(to right, #780206,
                        #061161); /* Chrome 10-25, Safari 5.1-6 */ <br />
                        background: linear-gradient(to right, #780206, #061161);
                        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera
                        12+, Safari 7+ */ <br />
                    </code>

                    <button id="copyCssBtn">Click To Copy</button>
                </div>
            </div>

            <div id="overlay">
                
            </div>
            <p id="colorName">Shady Day</p>
            <div class="container">
                <button id="prevBtn">
                    <i class="fa-solid fa-chevron-left"></i> Prev
                </button>

                <button id="nextBtn">
                    Next <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </main>

  `;
    // General Variables
    let counter = 0;
    const arrayOfGradients = [
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

    // General Dom Elements
    const main = document.querySelector('main');
    const addToGradientBg = document.getElementById('addToGradientBg');
    const addToGradient = document.getElementById('addToGradient');
    const viewCssBg = document.getElementById('viewCssBg');
    const viewCss = document.getElementById('viewCss');
    const cssCode = document.getElementById('cssCode');
    const overlay = document.getElementById('overlay');
    const saveGradient = document.getElementById('saveGradient');

    //Dom Buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const addToGradientBtn = document.getElementById('addToGradientBtn');
    const viewCssBtn = document.getElementById('viewCssBtn');
    const copyCssBtn = document.getElementById('copyCssBtn');
    const menuBtn = document.getElementById('menuBtn');

    //Color Based Elements
    const colorName = document.getElementById('colorName');
    const gradientColor1 = document.getElementById('gradientColor1');
    const gradientColor2 = document.getElementById('gradientColor2');
    const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    const previewColor1 = document.getElementById('previewColor1');
    const previewColor2 = document.getElementById('previewColor2');

    //Functions
    // View All Gradients Functionality
    const viewAllGradients = () => {
        arrayOfGradients.map((card) => {
            overlay.innerHTML += `
    <div style='background:linear-gradient(to right, ${card[0]}, ${card[1]})'>
      <p>${card[2]}</p>
    </div>
  `;
        });
    };

    viewAllGradients();

    // copy Css Functionality
    const copyCssCode = (col1, col2) => {
        cssCode.innerText = `
          background: ${col1}; /* fallback for old browsers*/
          background: -webkit-linear-gradient(to right, ${col1}, ${col2}); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, ${col1}, ${col2}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;`;

        document.querySelector('#cssCode br').style.display = 'none';
    };
    // Change Gradient Functionality
    const changeGradient = () => {
        colorName.textContent = `
          ${arrayOfGradients[counter][2]}
      `;

        main.style.background = `linear-gradient(to right, ${arrayOfGradients[counter][0]}, ${arrayOfGradients[counter][1]})`;
        previewColor1.style.background = `${arrayOfGradients[counter][0]}`;
        previewColor2.style.background = `${arrayOfGradients[counter][1]}`;
        gradientColor1.textContent = `${arrayOfGradients[counter][0]}`;
        gradientColor2.textContent = `${arrayOfGradients[counter][1]}`;

        copyCssCode(arrayOfGradients[counter][0], arrayOfGradients[counter][1]);
    };

    //Event Listeners
    // Next Button
    nextBtn.addEventListener('click', () => {
        if (counter === arrayOfGradients.length - 1) {
            counter = 0;
        } else {
            counter++;
        }

        changeGradient();
    });

    //Prev Button
    prevBtn.addEventListener('click', () => {
        if (counter === 0) {
            counter = arrayOfGradients.length - 1;
        } else {
            counter--;
        }

        changeGradient();
    });

    // Add To Gradient Modal
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

    // Save Gradient Form
    saveGradient.addEventListener('submit', (e) => {
        e.preventDefault();
        arrayOfGradients.push([`${color1.value}`, `${color2.value}`, '']);
        counter = arrayOfGradients.length - 1;

        changeGradient();

        addToGradient.style.display = 'none';
        addToGradientBg.style.display = 'none';

        addToGradientBtn.innerHTML = `
        <i class="fa-solid fa-circle-plus"></i>
    `;
        overlay.innerHTML = '';
        viewAllGradients();
    });

    //view Css Modal
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

    //Copy Css Btn
    copyCssBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(cssCode.innerText);

        cssCode.innerHTML = '<p>Succesfully Copied!</p>';

        setTimeout(() => {
            copyCssCode(gradientColor1.textContent, gradientColor2.textContent);
        }, 1000);
    });

    // View All Gradients Overlay
    menuBtn.addEventListener('click', () => {
        if (overlay.style.display === 'flex') {
            overlay.style.display = 'none';

            menuBtn.innerHTML = `
         <i class="fa-solid fa-bars"></i>
         View all gradients
    `;
        } else {
            overlay.style.display = 'flex';

            menuBtn.innerHTML = `
        <i class="fa-solid fa-xmark"></i>
        View all gradients
    `;
        }
    });
};

//Main Screen
setTimeout(startFunctionality, 1500);
