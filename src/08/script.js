const p1 = document.getElementById("dom"); //IDで指定

console.log(p1.textContent);

const p2 = document.querySelector("p"); //CSSセレクタで指定してるため、複数の場合最初の要素のみ出力する

console.log(p2.textContent);

const list_li = document.querySelectorAll("li"); // 複数のセレクタを一括呼び出し
console.log(list_li);

console.log(list_li[0].textContent);

const lis_list_li = Array.from(list_li);

console.log(lis_list_li);

const newLis = lis_list_li.map(list_li);

console.log(newLis);
