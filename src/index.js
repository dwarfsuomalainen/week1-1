import "./styles.css";

document.getElementById("app").innerHTML = `
`;
//let a = document.getElementById("textarea");
//console.log(a);
//let b = a.innerText;

//let button = document.getElementById("button");
//console.log(button);
//button.addEventListener("click", postToList);
let list1 = document.createElement("ul");
list1.id = "list";
document.body.appendChild(list1);
//let inputField = document.createElement("input");
//inputField.id = "textarea";
//inputField.placeholder = "enter comment here";
//document.body.appendChild(inputField);
let button = document.createElement("button");
button.id = "add-comment";
button.innerHTML = "add your comment";
document.body.appendChild(button);
let text = document.getElementById("textarea");
button.addEventListener("click", addComment);
function addComment() {
  const li = document.createElement("li");
  list1.appendChild(li);
  //list1.innerHTML = .innerHTML;
}

//.appendChild (textField);

function postToList() {
  let list = document.getElementById("list");
  list.innerHTML = b;
}
