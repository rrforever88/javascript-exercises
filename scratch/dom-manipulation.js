const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

// an <h3> with blue text that says “I’m a blue h3!”
const header = document.createElement("h3");
header.classList.add("header");
header.textContent = "I'm a blue h3!";
header.style.color = "blue";

container.appendChild(header);

// a <div> with a black border and pink background color with the 
// following elements inside of it:
const subDiv = document.createElement("div");
subDiv.classList.add("subDiv");
subDiv.style = "background-color: pink; border: 1px solid black;"

container.appendChild(subDiv);

//another <h1> that says “I’m in a div”
const subHeading = document.createElement("h1");
subHeading.textContent = "I'm in a div";
subDiv.appendChild(subHeading);

// a <p> that says “ME TOO!”
const subPara = document.createElement("p");
subPara.textContent = "ME TOO!";
subDiv.appendChild(subPara);

// 