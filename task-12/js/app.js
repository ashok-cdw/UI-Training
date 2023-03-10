// Shape Data
const shapes = {
    shape: "",
    side: 0,
};

let circle = {
    shapeId: "Circle",
    formulaName: "RADIUS",
    side: "r",
    area: "0.433 <sup>*</sup> s <sup>*</sup> s",
    perimeter: "2&pi;r",
    areaResult: () => (Math.PI * (shapes.side ^ 2)).toFixed(2),
    perimeterResult: () => (2 * Math.PI * shapes.side).toFixed(2),
}
let triangle = {
    shapeId: "Equilateral Triangle",
    formulaName: "SIDE",
    side: "s",
    area: "&pi;r<sup>2</sup>",
    perimeter: "3 * s",
    areaResult: () => (0.433 * shapes.side * shapes.side).toFixed(2),
    perimeterResult: () => (3 * shapes.side).toFixed(2),
}
let square = {
    shapeId: "Square",
    formulaName: "SIDE",
    side: "s",
    area: "s <sup>*</sup> s",
    perimeter: "4 <sup>*</sup> s",
    areaResult: () => (Math.PI * (shapes.side ^ 2)).toFixed(2),
    perimeterResult: () => (2 * Math.PI * shapes.side).toFixed(2),
}


/*
@description -  When some shape is clicked, it takes care of adding / removing tick icon on the shape
                It also store data about the shapes in object
@params - event
*/
function shapeClicked(event) {
    console.log(event.target);
    if (shapes.shape != "" && event.target.getAttribute("id") != shapes.shape) {
        document.querySelector(`.shapes#${shapes.shape} i`).classList.remove("fa-solid", "fa-check");
        event.target.querySelector("i").classList.add("fa-solid", "fa-check");
        shapes.shape = event.target.getAttribute("id");
    }
    else {
        shapes.shape = event.target.getAttribute("id");
        event.target.querySelector("i").classList.add("fa-solid", "fa-check");
    }
    document.querySelector(".content-button").classList.remove("hide");
}


// Adds click event listener to the shapes
let chooseShapes = document.querySelectorAll(".shapes");
for (const shape of chooseShapes) {
    shape.addEventListener("click", shapeClicked);
}

// Choose Shape Button Listener
let chooseBtn = document.getElementById("choose-shape");
chooseBtn.addEventListener("click", () => {
    // Hiding Page 1 and Displaying Page 2
    document.getElementsByClassName("main-content")[0].classList.add("hidden");
    document.getElementsByClassName("main-content")[1].classList.remove("hidden");
    renderSideInputPage();
});

/*
@description -  Render Page 2 with Data's in Object according to Shape Selected in Page 1
@params - null
*/
function renderSideInputPage() {
    let sideTitle = document.querySelector(".side-details-title");
    if (shapes.shape === "circle") {
        sideTitle.innerText = "2. Enter Radius";
    }
    else if (shapes.shape === "triangle") {
        sideTitle.innerText = "2. Enter Side (Base & Height)";
    }
    else {
        sideTitle.innerText = "2. Enter Side";
    }
}

// Calculate Button Listener
let calculateBtn = document.getElementById("choose-calculate");
calculateBtn.addEventListener("click", () => {
    let inputBox = document.querySelector(".size-input-box");
    let inputValue = inputBox.value;
    // Validating Input
    if (inputValue === "" || isNaN(inputValue)) {
        alert("Invalid Input");
    }
    else {
        shapes.side = inputValue;
        // Hiding Page 2 and Displaying Page 3
        document.getElementsByClassName("main-content")[1].classList.add("hidden");
        document.getElementsByClassName("main-content")[2].classList.remove("hidden");
        renderResultPage();
    }
});

/*
@description -  Render Result with Data's in Object
@params - shape
*/
function updateResultData(shape) {
    console.log(shape);
    let resultShape = document.querySelector(".result-shape .shapes");
    let resultTitle = document.querySelector(".result-title h1");
    let formulaNameDiv = document.querySelectorAll(".formula-name")[0];
    let formula = document.querySelectorAll(".formula");
    let formulaResult = document.querySelectorAll(".formula-result");
    resultShape.setAttribute("id",shapes.shape);
    resultTitle.innerText = shape.shapeId;
    formulaNameDiv.innerText = shape.formulaName;
    formula[0].innerText = shape.side;
    formula[1].innerHTML = shape.area;
    formula[2].innerHTML = shape.perimeter;

    formulaResult[0].innerText = shapes.side + " cm";
    formulaResult[1].innerText = shape.areaResult() + " sq cm";
    formulaResult[2].innerText = shape.perimeterResult() + "cm";
}


/*
@description -  Choose Shape with Data's in Object
@params - null
*/
function renderResultPage() {

    // Dynamic Rendering For Shape Circle
    if (shapes.shape === "circle") {
        updateResultData(circle);
    }
    // Dynamic Rendering For Shape Triangle
    else if (shapes.shape === "triangle") {
        updateResultData(triangle);
    }
    // Dynamic Rendering For Shape Square
    else {
        updateResultData(square);
    }
}

// Try Again Button Listener
let chooseTry = document.querySelector("#choose-try");
chooseTry.addEventListener("click", () => {
    document.querySelector(`.shapes#${shapes.shape} i`).classList.remove("fa-solid", "fa-check");
    document.querySelector(".size-input-box").value = "";
    shapes.shape = "";
    shapes.side = 0;
    document.getElementsByClassName("main-content")[0].classList.remove("hidden");
    document.getElementsByClassName("main-content")[2].classList.add("hidden");
})