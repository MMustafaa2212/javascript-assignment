//  ANSWER 1
function addNumber(x) {
  return function (y) {
    return x + y;
  };
}

let addFive = addNumber(5);
let result = addFive(10);

//  ANSWER 2
function recursiveValueSearch(arr, val) {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === val) {
    return true;
  } else {
    let remainingArr = arr.slice(1);
    return recursiveValueSearch(remainingArr, val);
  }
}
let myArray = [1, 2, 3, 4, 5];
console.log(recursiveValueSearch(myArray, 3));
console.log(recursiveValueSearch(myArray, 6));

//  ANSWER 3
function addParagraph(text) {
  var p = document.createElement("p");
  var content = document.createTextNode(text);
  p.appendChild(content);
  document.body.appendChild(p);
}

//  ANSWER 4

function addListItem(listId, text) {
  var ul = document.getElementById(listId);
  var li = document.createElement("li");
  var textNode = document.createTextNode(text);
  li.appendChild(textNode);
  ul.appendChild(li);
}

//  ANSWER 5
function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

const element = document.getElementById("app");
changeBackgroundColor(element, "red");
//  ANSWER 6
function saveObjectToLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

//  ANSWER 7
function getObjectFromLocalStorage(key) {
  const objStr = localStorage.getItem(key);
  return JSON.parse(objStr);
}

//  ANSWER 8
function saveAndRetrieveObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      localStorage.setItem(key, JSON.stringify(obj[key]));
    }
  }

  const newObj = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    newObj[key] = JSON.parse(localStorage.getItem(key));
  }
  return newObj;
}
