// Shape Data
const shapes = {
    shape: "",
    shapeNo: 0,
    side: 0,
};

let circle = {
    shapeId: "shape-1",
    formulaName: "RADIUS",
    formula0: "r",
    formula1: "0.433 <sup>*</sup> s <sup>*</sup> s",
    formula2: "2&pi;r",
    result2: () => (Math.PI * (shapes.side ^ 2)).toFixed(2),
    result3: () => (2 * Math.PI * shapes.side).toFixed(2),
}
let triangle = {
    shapeId: "shape-2",
    formulaName: "SIDE",
    formula0: "s",
    formula1: "&pi;r<sup>2</sup>",
    formula2: "3 * s",
    result2: () => (0.433 * shapes.side * shapes.side).toFixed(2),
    result3: () => (3 * shapes.side).toFixed(2),
}
let square = {
    shapeId: "shape-3",
    formulaName: "SIDE",
    formula0: "s",
    formula1: "s <sup>*</sup> s",
    formula2: "4 <sup>*</sup> s",
    result2: () => (Math.PI * (shapes.side ^ 2)).toFixed(2),
    result3: () => (2 * Math.PI * shapes.side).toFixed(2),
}


/*
@description -  When some shape is clicked, it takes care of adding / removing tick icon on the shape
                It also store data about the shapes in object
@params - event
*/
function shapeClicked(event) {
    console.log(event.target);
    if (shapes.shape != "" && event.target.getAttribute("data-shape") != null && event.target.getAttribute("data-shape") != shapes.shape) {
        document.getElementsByClassName("shapes")[shapes.shapeNo].querySelector("i").classList.remove("fa-solid", "fa-check");
        event.target.querySelector("i").classList.add("fa-solid", "fa-check");
        shapes.shape = event.target.getAttribute("data-shape");
        shapes.shapeNo = event.target.getAttribute("data-no");
    }
    else {
        shapes.shape = event.target.getAttribute("data-shape");
        shapes.shapeNo = event.target.getAttribute("data-no");
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
    document.getElementsByClassName("main-content")[0].classList.add("main-content-1");
    document.getElementsByClassName("main-content")[1].classList.remove("main-content-2");
    renderSideInputPage();
});

/*
@description -  Render Page 2 with Data's in Object according to Shape Selected in Page 1
@params - null
*/
function renderSideInputPage() {
    let sideTitle = document.querySelector(".side-details-title");
    if (shapes.shapeNo == 0) {
        sideTitle.innerText = "2. Enter Radius";
    }
    else if (shapes.shapeNo == 1) {
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
    if (inputValue == "" || isNaN(inputValue)) {
        alert("Invalid Input");
    }
    else {
        shapes.side = inputValue;
        // Hiding Page 2 and Displaying Page 3
        document.getElementsByClassName("main-content")[1].classList.add("main-content-2");
        document.getElementsByClassName("main-content")[2].classList.remove("main-content-3");
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
    resultShape.classList.add(shape.shapeId);
    resultTitle.innerText = shapes.shape;
    formulaNameDiv.innerText = shape.formulaName;
    formula[0].innerText = shape.formula0;
    formula[1].innerHTML = shape.formula1;
    formula[2].innerHTML = shape.formula2;

    formulaResult[0].innerText = shapes.side + " cm";
    formulaResult[1].innerText = shape.result2() + " sq cm";
    formulaResult[2].innerText = shape.result3() + "cm";
}


/*
@description -  Choose Shape with Data's in Object
@params - null
*/
function renderResultPage() {

    // Dynamic Rendering For Shape Circle
    if (shapes.shapeNo == 0) {
        updateResultData(circle);
    }
    // Dynamic Rendering For Shape Triangle
    else if (shapes.shapeNo == 1) {
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
    location.reload();
})
