import "./style.css";
const element = document.createElement("header");

element.innerHTML = "Paragraphs are the building blocks of papers";
element.classList.add('info')
document.body.appendChild(element);
import photo from '../../assets/image.png'
const img = document.createElement("img");
img.src=photo;
img.style.width="50px"
img.style.height="50px"
element.appendChild(img);

// nooo




