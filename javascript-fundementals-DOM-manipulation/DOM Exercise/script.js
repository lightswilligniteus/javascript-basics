//base code
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//a <p> with red text that says “Hey I’m red!”
const para = document.createElement('p');
para.classList.add('para');
content.textContent = "Hey Im red!";
content.setAttribute('style', 'color: red');
container.appendChild(content);

//an <h3> with blue text that says “I’m a blue h3!”
const header = document.createElement('h3');
header.classList.add('header');
header.textContent = "I'm a blue h3!";
header.setAttribute('style', 'color: blue');
container.appendChild(header);

// <div> with a black border and pink background color with the following
//elements inside of it:
const div = document.createElement('div');
div.classList.add('newDiv');
div.setAttribute('style', 'background-color: pink; border-style: solid; border-color: black;')



//another <h1> that says “I’m in a div”
const headerOne = document.createElement("h1");
headerOne.classList.add("h1");
headerOne.textContent = "I'm in a div";
div.appendChild(headerOne);

//a <p> that says “ME TOO!”
const anotherPara = document.createElement('p');
anotherPara.classList.add('anotherPara');
anotherPara.textContent = "ME TOO!";
div.appendChild(anotherPara);

container.appendChild(div);
