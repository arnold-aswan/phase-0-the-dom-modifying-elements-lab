// Write your code here!
document.getElementById("main").remove();

const newHeader = document.createElement("h1");
// const newHeader = H1;
newHeader.id = "victory";
newHeader.textContent = `Aswan is the champion`;

document.body.append(newHeader);