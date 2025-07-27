const container = document.getElementById("container");

for (let i = 0; i < 14; i++) {
    const box = document.createElement("div"); // יוצרים div חדש
    box.classList.add("box"); // שמים לו class בשם 'box'

    box.addEventListener("mouseenter", function () {
        box.style.backgroundColor = "blue"; // תיקון: backgroundColor, לא backround
    });

    container.appendChild(box); // מוסיפים את הקופסה ל-container
}
