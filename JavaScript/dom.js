let para = document.getElementById("para");
console.log(para);
console.log(para.innerText);

// para.innerHTML = "Changed Through JS";
// console.log(para.innerText);

function changeClr() {
  let btn = document.getElementById("changeColor");
  if (btn.innerText == "Red") {
    para.style.color = "Red";
    btn.innerHTML = "Black";
  } else {
    para.style.color = "Black";
    btn.innerHTML = "Red";
  }
}

function addImage() {
  let imageTag = document.getElementById("image");
  imageTag.setAttribute(
    "src",
    "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg="
  );
}
