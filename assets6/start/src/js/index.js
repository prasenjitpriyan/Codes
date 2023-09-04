const lightTheme = document.querySelector('#light');
const darkTheme = document.querySelector('#dark');
const inputContent = document.querySelector('.input-data .content');
const outputContent = document.querySelector('.output-data .content');
const startBtn = document.querySelector('#start');
// Theme management
lightTheme.addEventListener('click', () => {
  document.body.classList = 'light-body';
});

darkTheme.addEventListener('click', () => {
  document.body.classList = 'dark-body';
});

const inputData = [56e7, 76e8, 62e7, 12e8];

const computeTotal = (x) =>
  new Promise((resolve) => {
    let sum = 0;
    for (let n = 0; n <= x; n++) {
      sum += n;
    }

    resolve(sum);
  });

startBtn.addEventListener('click', () => {
  Promise.all(inputData.map((data) => computeTotal(data))).then((res) => {
    res.forEach(e => (outputContent.innerHTML += `<h4>${e}</h4>`));
  }); 
});
