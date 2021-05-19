console.log("hover");
const hover = document.querySelector("#catalog");
console.log(hover);

function loop_catalog() {
    setTimeout(() => {
        const pic = document.querySelector("#pic");
        var pic1 = null;
        let i = 1;
        for (let i = 1; i <= 4; i++) {

            setTimeout(() => {

                console.log("#pic" + i)
                pic1 = document.querySelector("#pic" + i);
                pic1.style.display = 'block';
                if (i === 1) {
                    pic.style.display = 'none';
                }
                if (i >= 2) {
                    let j = i - 1
                    var pic2 = document.querySelector("#pic" + j);
                    console.log("#pic" + j)
                    pic2.style.display = 'none';
                    if (i === 3) {
                        i = 1;
                    }
                }

            }, i * 2000);


        }
    }, 1000);
}

function reset_catalog() {
    const pic = document.querySelector("#pic");
    pic.style.display = 'block';
    const pic1 = document.querySelector("#pic1");
    pic1.style.display = 'none';
    const pic2 = document.querySelector("#pic2");
    pic2.style.display = 'none';
    const pic3 = document.querySelector("#pic3");
    pic3.style.display = 'none';

}
hover.addEventListener("mouseover", event => {
    console.log("Mouse in");
    loop_catalog();
});

hover.addEventListener("mouseout", event => {
    console.log("Mouse out");
    reset_catalog();
});