const ul = document.getElementById("list");

console.log(ul.textContent);

// 新しいエレメントの追加
const newLi = document.createElement("li");
newLi.textContent = "DOM!";

ul.appendChild(newLi);

ul.insertBefore(newLi, ul.firstChild);
