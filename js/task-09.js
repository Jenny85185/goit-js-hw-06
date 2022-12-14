function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', () => {
  spanEl.textContent = getRandomHexColor();
  document.body.setAttribute(
    'style',
    'background-color: ' + spanEl.textContent
  );
});