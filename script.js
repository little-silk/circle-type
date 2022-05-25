// My Scripts

const circle = new CircleType(document.getElementById('circle'))
  .radius(180);
document.getElementById('destroyButton')
  .addEventListener('click', circle.destroy.bind(circle));

const btn = document.getElementById('destroyButton');

btn.addEventListener('click', () => {
  btn.style.display = 'none';
});