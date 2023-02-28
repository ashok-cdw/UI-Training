// When page loaded, it checks for any previous data
if (localStorage.getItem("shapeData")) {
    let shapeData = JSON.parse(localStorage.getItem("shapeData"));
    if (shapeData.pageNo == 0) {
        document.getElementsByClassName("main-content")[0].classList.remove("main-content-1");
        document.getElementsByClassName("main-content")[1].classList.add("main-content-2");
        document.getElementsByClassName("main-content")[2].classList.add("main-content-3");
        document.getElementsByClassName("shapes")[shapeData.shapeNo].getElementsByTagName("i")[0].classList.add("fa-solid", "fa-check");
        document.getElementsByClassName("content-button")[0].classList.remove("hide");
    }
    else if (shapeData.pageNo == 1) {
        document.getElementsByClassName("main-content")[0].classList.add("main-content-1");
        document.getElementsByClassName("main-content")[1].classList.remove("main-content-2");
        document.getElementsByClassName("main-content")[2].classList.add("main-content-3");
        renderSidePage();
    }
    else {
        document.getElementsByClassName("main-content")[0].classList.add("main-content-1");
        document.getElementsByClassName("main-content")[1].classList.add("main-content-2");
        document.getElementsByClassName("main-content")[2].classList.remove("main-content-3");
        renderResultPage();
    }
}

/*
@description -  When some shape is clicked, it takes care of adding / removing tick icon on the shape
                It also creates data in the local storage to store data about the shapes
@params - event
*/
function shapeClicked(event) {
    if (localStorage.getItem("shapeData")) {
        let shapeData = JSON.parse(localStorage.getItem("shapeData"));
        if (event.target.getAttribute("data-no") != null && event.target.getAttribute("data-no") != shapeData.shapeNo) {
            document.getElementsByClassName("shapes")[shapeData.shapeNo].getElementsByTagName("i")[0].classList.remove("fa-solid", "fa-check");
            event.target.getElementsByTagName("i")[0].classList.add("fa-solid", "fa-check");
            localStorage.setItem(
                "shapeData",
                JSON.stringify({
                    shape: event.target.getAttribute("data-shape"),
                    shapeNo: event.target.getAttribute("data-no"),
                    pageNo: 0,
                })
            );
        }
    } else {
        localStorage.setItem(
            "shapeData",
            JSON.stringify({
                shape: event.target.getAttribute("data-shape"),
                shapeNo: event.target.getAttribute("data-no"),
                pageNo: 0,
            })
        );
        event.target.getElementsByTagName("i")[0].classList.add("fa-solid", "fa-check");
    }
    document.getElementsByClassName("content-button")[0].classList.remove("hide");
}

// Adds click event listener to the shapes
let chooseShapes = document.querySelectorAll(".shapes");
for (const shape of chooseShapes) {
    shape.addEventListener("click", shapeClicked);
}

// Choose Shape Button Listener
let chooseBtn = document.getElementById("choose-shape");
chooseBtn.addEventListener("click", () => {
    if (!localStorage.getItem("shapeData")) {
        alert("No Shapes Selected");
    }
    else {
        // Changing Values Present in Local Storage
        let shapeData = JSON.parse(localStorage.getItem("shapeData"));
        localStorage.setItem(
            "shapeData",
            JSON.stringify({
                shape: shapeData.shape,
                shapeNo: shapeData.shapeNo,
                pageNo: 1,
            })
        );
        // Hiding Page 1 and Displaying Page 2
        document.getElementsByClassName("main-content")[0].classList.add("main-content-1");
        document.getElementsByClassName("main-content")[1].classList.remove("main-content-2");
        renderSidePage();
    }
});

/*
@description -  Render Page 2 with Data's in Local Storage according to Shape Selected in Page 1
@params - null
*/
function renderSidePage() {
    let shapeData = JSON.parse(localStorage.getItem("shapeData"));
    let sideTitle = document.querySelector(".side-details-title");
    if (shapeData.shapeNo == 0) {
        sideTitle.innerText = "2. Enter Radius";
    }
    else if (shapeData.shapeNo == 1) {
        sideTitle.innerText = "2. Enter Side (Base & Height)";
    }
    else {
        sideTitle.innerText = "2. Enter Side";
    }
}

// Calculate Button Listener
let calculateBtn = document.getElementById("choose-calculate");
calculateBtn.addEventListener("click", () => {
    let inputBox = document.getElementsByClassName("size-input-box")[0];
    let inputValue = inputBox.value;
    // Validating Input
    if (inputValue == "" || isNaN(inputValue)) {
        alert("Invalid Input");
    }
    else {
        // Changing Values Present in Local Storage
        let shapeData = JSON.parse(localStorage.getItem("shapeData"));
        localStorage.setItem(
            "shapeData",
            JSON.stringify({
                shape: shapeData.shape,
                shapeNo: shapeData.shapeNo,
                pageNo: 2,
                side: inputValue,
            })
        );
        // Hiding Page 2 and Displaying Page 3
        document.getElementsByClassName("main-content")[1].classList.add("main-content-2");
        document.getElementsByClassName("main-content")[2].classList.remove("main-content-3");
        renderResultPage();
    }
});

/*
@description -  Stores Final Results in Local Storage
@params - shapeData, formulaResult1, formulaResult2, formulaResult3
*/
function setFinalResult(shapeData, formulaResult1, formulaResult2, formulaResult3) {
    localStorage.setItem(
        "shapeData",
        JSON.stringify({
            shape: shapeData.shape,
            shapeNo: shapeData.shapeNo,
            pageNo: shapeData.pageNo,
            side: shapeData.side,
            formulaResult1,
            formulaResult2,
            formulaResult3,
        })
    );

}

/*
@description -  Render Page 3 with Data's in Local Storage
@params - null
*/
function renderResultPage() {
    let shapeData = JSON.parse(localStorage.getItem("shapeData"));
    let resultShape = document.querySelector(".result-shape .shapes");
    let resultTitle = document.querySelector(".result-title h1");
    let formulaName = document.querySelectorAll(".formula-name")[0];
    let formula = document.querySelectorAll(".formula");
    let formulaResult = document.querySelectorAll(".formula-result");

    // Dynamic Rendering For Shape Circle
    if (shapeData.shapeNo == 0) {
        resultShape.classList.add("shape-1");
        resultShape.classList.remove("shape-2");
        resultShape.classList.remove("shape-3");
        resultTitle.innerText = shapeData.shape;
        formulaName.innerText = "RADIUS";
        formula[0].innerText = "r";
        formula[1].innerHTML = "&pi;r<sup>2</sup>";
        formula[2].innerHTML = "2&pi;r";

        formulaResult[0].innerText = shapeData.side + " cm";
        formulaResult[1].innerText = (Math.PI * (shapeData.side ^ 2)).toFixed(2) + " sq cm";
        formulaResult[2].innerText = (2 * Math.PI * shapeData.side).toFixed(2) + "cm";

        setFinalResult(shapeData, shapeData.side, (Math.PI * (shapeData.side ^ 2)).toFixed(2), (2 * Math.PI * shapeData.side).toFixed(2));

    }
    // Dynamic Rendering For Shape Triangle
    else if (shapeData.shapeNo == 1) {
        resultShape.classList.remove("shape-1");
        resultShape.classList.remove("shape-3");
        resultShape.classList.add("shape-2");
        resultTitle.innerText = shapeData.shape;
        formulaName.innerText = "SIDE";
        formula[0].innerText = "s";
        formula[1].innerHTML = 0.433 + " <sup>*</sup> s <sup>*</sup> s";
        formula[2].innerHTML = "3 * s";

        formulaResult[0].innerText = shapeData.side + " cm";
        formulaResult[1].innerText = (0.433 * shapeData.side * shapeData.side).toFixed(2) + " sq cm";
        formulaResult[2].innerText = (3 * shapeData.side).toFixed(2) + "cm";

        setFinalResult(shapeData, shapeData.side, (0.433 * shapeData.side * shapeData.side).toFixed(2), (3 * shapeData.side).toFixed(2));

    }
    // Dynamic Rendering For Shape Square
    else {
        resultShape.classList.remove("shape-1");
        resultShape.classList.remove("shape-2");
        resultShape.classList.add("shape-3");
        resultTitle.innerText = shapeData.shape;
        formulaName.innerText = "SIDE";
        formula[0].innerText = "s";
        formula[1].innerHTML = "s <sup>*</sup> s";
        formula[2].innerHTML = "4 <sup>*</sup> s";

        formulaResult[0].innerText = shapeData.side + " cm";
        formulaResult[1].innerText = (shapeData.side * shapeData.side).toFixed(2) + " sq cm";
        formulaResult[2].innerText = (4 * shapeData.side).toFixed(2) + "cm";

        setFinalResult(shapeData, shapeData.side, (shapeData.side * shapeData.side).toFixed(2), (4 * shapeData.side).toFixed(2));
    }
}

// Try Again Button Listener
let chooseTry = document.getElementById("choose-try");
chooseTry.addEventListener("click", () => {
    // Resetting Everything
    localStorage.removeItem("shapeData");
    let tickIcon = document.querySelectorAll(".shapes i");
    for (const tick of tickIcon) {
        tick.classList.remove("fa-solid", "fa-check");
    }
    // Hiding Page 3 and Displaying Page 1
    document.getElementsByClassName("main-content")[2].classList.add("main-content-3");
    document.getElementsByClassName("main-content")[0].classList.remove("main-content-1");
    document.getElementsByClassName("content-button")[0].classList.add("hide");
    document.getElementsByClassName("size-input-box")[0].value = "";
})