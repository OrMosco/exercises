const box = document.getElementById("box");

const enterColor = function () {
  box.style.backgroundColor = "#9aeb3eff";
  box.innerHTML = "AHH GO AWAY";
};

const leaveColor = function () {
  box.style.backgroundColor = " #1abc9c";
  box.innerHTML = "Hover over me!";
};

const clickcolor = function(){
  box.style.background = "#bd3c2bcc"
}

 
box.addEventListener("mouseenter", enterColor);
box.addEventListener("mouseleave", leaveColor);
