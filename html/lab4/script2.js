console.log("Script 2: Performing DOM manipulation");
document.addEventListener("DOMContentLoaded", () => {
    const element = document.createElement("div");
    element.textContent = "This is dynamically added by Script 2";
    element.style.color = "blue";
    document.body.appendChild(element);
});
