import "./styne.css";
 import photo from '../../assets/city.png'
function component() {
  
const img = document.createElement("img");
img.src=photo;



    return img;
};

document.body.appendChild(component());