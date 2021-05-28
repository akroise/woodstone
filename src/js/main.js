import '../scss/main.scss';
import './hover';
import './scroll';
import './mobile';

console.log('main.js running');

const btn = document.getElementById('test');
console.log(btn);
if (btn) {
  btn.addEventListener('click', visitingcard());
}
const open = 0;

function visitingcard() {
  console.log('working card');
  const visit = document.getElementById('visit');
  visit.innerHTML('<img src="./assests/home1.jpeg"/>');
}
// Send button
