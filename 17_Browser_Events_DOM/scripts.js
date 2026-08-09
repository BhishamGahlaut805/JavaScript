document.querySelector("#myButton").addEventListener("click", function() {
    document.querySelector("#myParagraph").textContent = "Button was clicked!";
    document.querySelector("#myParagraph").style.color = "blue";
    document.querySelector("#myParagraph").style.fontSize = "20px";
});

let loginForm=document.querySelector("#loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let loginDiv= document.createElement("div");
    loginDiv.textContent = `Username: ${username}, Password: ${password}`;
    document.querySelector("#loginMessage").appendChild(loginDiv);
});

document.querySelector("#parentButton").addEventListener("click", function () {
  alert("Click event detected in parent div!");
});
document
  .querySelector("#childButton")
  .addEventListener("click", function () {
    alert("Click event detected in child div!");
  });

