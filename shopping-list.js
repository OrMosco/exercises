// מחכים שעמוד יטען ואז מוסיפים מאזין לכפתור
document.addEventListener("DOMContentLoaded",
     function() {
  const button = document.getElementById("addButton");
  button.addEventListener("click", addItem);
});


function addItem() {
  const input = document.getElementById("itemInput");
  const li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("shoppingList").appendChild(li);
  input.value = ""; // מנקה את השדה
}

