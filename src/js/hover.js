const hover = document.querySelector('#catalog');

function loop_catalog() {
  setTimeout(() => {
    const pic = document.querySelector('#pic');
    let pic1 = null;
    const i = 1;
    for (let i = 1; i <= 3; i++) {
      animate = setTimeout(() => {
        console.log(`#pic${i}`);
        pic1 = document.querySelector(`#pic${i}`);
        pic1.style.display = 'block';
        if (i == 1) {
          pic.style.display = 'none';
        }
        if (i >= 2) {
          const j = i - 1,
            pic2 = document.querySelector(`#pic${j}`);
          pic2.style.display = 'none';
        }
      }, i * 2000);
      reset_catalog();
    }
  }, 1000);
  reset_catalog();
}

function reset_catalog() {
  const pic = document.querySelector('#pic');
  pic.style.display = 'block';
  const pic1 = document.querySelector('#pic1');
  pic1.style.display = 'none';
  const pic2 = document.querySelector('#pic2');
  pic2.style.display = 'none';
  const pic3 = document.querySelector('#pic3');
  pic3.style.display = 'none';
}

hover.addEventListener('mouseover', (event) => {
  console.log('Mouse in');
  loop_catalog();
});

hover.addEventListener('mouseout', (event) => {
  console.log('Mouse out');
  clearTimeout(animate);
  reset_catalog();
});
