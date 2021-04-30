import "../scss/main.scss";













console.log("main.js running");

var btn = document.getElementById("test");
console.log(btn);
if (btn) {
    btn.addEventListener("click", visitingcard())
}
var open = 0;

function visitingcard() {
    console.log('working card')
    var visit = document.getElementById("visit");
    visit.innerHTML('<img src="./assests/home1.jpeg"/>');
}


const textarea = document.getElementById('comment')
const changeCursor = (e) => {
    let { value } = e.target
    let newClass = getRangeColor(e.target.maxLength, value.length)

    e.target.classList.remove('good', 'warning', 'danger')
    e.target.classList.add(newClass)
}

const getRangeColor = (maxLen, inputLen) => {
    let range = maxLen / 3

    if (between(inputLen, 0, range)) {
        return 'good'
    } else if (between(inputLen, range, range * 2)) {
        return 'warning'
    } else {
        return 'danger'
    }
}

const between = (x, min, max) => {
    return x >= min && x <= max;
}

textarea.addEventListener('input', changeCursor);


//send button