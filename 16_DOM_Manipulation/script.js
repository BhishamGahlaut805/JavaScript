// alert("Welcome to DOM Manipulation!");

let button = document.getElementById("changeTextBtn");
let inputField = document.getElementById("inputField");
let applyAll = document.getElementsByClassName("allApply");

button.addEventListener("click", function () {
  let textElement = document.getElementById("text");
  textElement.textContent = "Original Paragraph using Id : " + inputField.value;
  for (let i = 0; i < applyAll.length; i++) {
    applyAll[i].textContent =
      "First Paragraph using Class : " + inputField.value;
  }
  button.innerHTML = "Text Changed";
  button.style.backgroundColor = "green";

  // alert("Text changed successfully!");
});

let counter = document.querySelector("#counter");
let count = 0;
let incrementBtn = document.querySelector("#incrementBtn");
incrementBtn.addEventListener("click", function () {
  count++;
  counter.textContent = count;
});
let decrementBtn = document.querySelector("#decrementBtn");
decrementBtn.addEventListener("click", function () {
  count--;
  counter.textContent = count;
});

let parentDiv = document.querySelector("#parentDiv");

document.querySelector("#addChildBtn").addEventListener("click", function () {
  let newChild = document.createElement("div");

  newChild.textContent = "New Child Div Added";
  newChild.style.backgroundColor = "lightblue";
  newChild.style.margin = "10px";
  newChild.style.padding = "10px";

  parentDiv.appendChild(newChild);
});

document.querySelector("#addChildBtn1").addEventListener("click", function () {
  let newChild = document.createElement("div");
    newChild.textContent = "New Child Div Added at First Position";
    newChild.style.backgroundColor = "lightgreen";
    newChild.style.margin = "10px";
    newChild.style.padding = "10px";
    document.querySelector("#parentDiv2").insertBefore(newChild, document.querySelector("#parentDiv2").firstChild);
});

document.querySelector("#hoverDiv").addEventListener("mouseover", function () {
  this.style.backgroundColor = "yellow";
  this.textContent = "Mouse is over me!";
});

document.querySelector("#hoverDiv").addEventListener("mouseout", function () {
  this.style.backgroundColor = "lightgray";
  this.textContent = "Hover over me!";
});
document.querySelector("#clickDiv").addEventListener("click", function () {
  this.style.backgroundColor = "orange";
  this.textContent = "Div Clicked!";
});
document.querySelector("#dblClickDiv").addEventListener("dblclick", function () {
  this.style.backgroundColor = "red";
  this.textContent = "Div Double Clicked!";
});

document.querySelector("#mouseDownDiv").addEventListener("mousedown", function () {
  this.style.backgroundColor = "blue";
  this.textContent = "Mouse Down on me!";
});

document.querySelector("#mouseUpDiv").addEventListener("mouseup", function () {
  this.style.backgroundColor = "lightgray";
  this.textContent = "Mouse Up on me!";
});


document.querySelector("#insertRowBtn").addEventListener("click", function () {
    let table = document.querySelector("#dataTable");
    let nameInput = document.querySelector("#nameInput").value;
    let ageInput = document.querySelector("#ageInput").value;
    let cityInput = document.querySelector("#cityInput").value;
    if(nameInput === "" || ageInput === "" || cityInput === "") {
        alert("Please fill in all fields before adding a row.");
        return;
    }
    else{
        for(let i=0;i<100;i++){
            if(i%2==0){
                table.innerHTML += `<tr style="background-color: lightgray;"><td>${nameInput}</td><td>${ageInput}</td><td>${cityInput}</td></tr>`;

            }
            else{
                table.innerHTML += `<tr><td>${nameInput}</td><td>${ageInput}</td><td>${cityInput}</td></tr>`;
            }
        }
    }
});
