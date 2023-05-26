let txt1 = document.getElementById('txt1')
let submitbtn = document.getElementById('submit1')

let txt3 = document.getElementById('txt3')
let submitbtn3 = document.getElementById('submit3')

let txt5 = document.getElementById('txt5')
let submitbtn5 = document.getElementById('submit5')


submitbtn.addEventListener('click', () => {


    txt1.value == "hyper text markup language" ? txt1.style.borderColor = "green" : txt1.style.borderColor = "red"

    txt2.value == "cascading styling sheet" ? txt2.style.borderColor = "green" : txt2.style.borderColor = "red"
})


submitbtn3.addEventListener('click', () => {
    if (txt3.value === "a container") {
        txt3.style.borderColor = "green"
    } else {
        txt3.style.borderColor = "red"

    }
    if (txt4.value === "markup language for creating website") {
        txt4.style.borderColor = "green"
    } else {
        txt4.style.borderColor = "red"

    }
});

submitbtn5.addEventListener('click', () => {
    if (txt5.value === "ocean") {
        txt5.style.borderColor = "green"
    } else {
        txt5.style.borderColor = "red"
    }
    if (txt6.value === "the circle divider") {
        txt6.style.borderColor = "green"
    } else {
        txt6.style.borderColor = "red"

    }
});
