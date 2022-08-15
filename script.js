const h2Color = document.querySelectorAll(".color-change");
for (const item of h2Color) {
    item.style.color = "blue";
}


const backpack = document.querySelector("#backpack");
backpack.style.backgroundColor = "tomato";
backpack.style.padding = "20px";
backpack.style.borderRadius = "5px";


const cards = document.getElementsByClassName("card");

for (const card of cards) {
    card.style.fontWeight = "bold"
}


// Button

const buttons = document.getElementsByClassName("panda-btn-primary");
for (const Button of buttons) {
    Button.addEventListener("click", function (event) {
        event.target.parentNode.removeChild(event.target)
    })
}

// Email Input

const input = document.getElementById("exampleInputEmail1");
input.addEventListener("keyup", function (event) {

    const btn = document.getElementById("submitBtn");
    const text = event.target.value;
    if (text === "email") {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", true);
    }
})


// LET'S STAY IN TOUCH

const backChange = document.getElementById("subscribe");

backChange.addEventListener("dblclick", function (event) {
    event.target.style.backgroundColor = "grey";
    event.target.style.color = "white";
})

// Images change

const images = document.getElementsByClassName("img-changed");
for (const image of images) {
    image.addEventListener("mouseenter", function () {
        image.src = "images/shoes/shoe-2.png";
    });
    image.addEventListener("mouseout", function () {
        image.src = "images/shoes/shoe-3.png";
    })
}


// Bag change

const bags = document.getElementsByClassName("bag-changed");

for (const bag of bags) {
    bag.addEventListener("mouseenter", function () {
        bag.src = "images/bags/bag-1.png";
    })
    bag.addEventListener("mouseout", function () {
        bag.src = "images/bags/bag-3.png";
    })
}




















