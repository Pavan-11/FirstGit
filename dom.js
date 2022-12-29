// // console.dir(document);


// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// // document.all[10].textContent = 'Hello'

// console.log(document.forms);
// console.log(document.links);


// console.log(document.images);

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// header.style.borderBottom = "solid black 3px"

// var addItem = document.getElementById('main');
// addItem.style.color = 'green'
// addItem.style.textDecoration = 'font-weight-bold'

//GETELEMENTBYCLASSNAME


// var items = document.getElementsByClassName('list-group-item');

// items[2].style.backgroundColor = 'green';
// for(var i = 0;i< items.length;i++){
//     items[i].style.fontWeight = 'bold';

// }


//GETELEMENTBYTAGNAME

// var li = document.getElementsByTagName('li');
// li[2].style.backgroundColor = 'green';
// for(var i = 0;i <li.length;i++){
//     li[i].style.fontWeight = 'bold';

// }


//QuerrySELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px grey'

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND'

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';


// var SecondItem = document.querySelector('.list-group-item:nth-child(2)');
// SecondItem.style.backgroundColor = 'green';


// var ThirdItem = document.querySelector('.list-group-item:nth-child(3)');
// ThirdItem.style.display = 'None'


// var SecondItem = document.querySelectorAll('.list-group-item');
// SecondItem[1].style.color = 'green';

// var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green'

// }

//ParentNode
var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';


//ParentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'grey';


//childNode
// console.log(itemList.childNodes);
// itemList.childNodes[2].style.backgroundColor = 'blue';

//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';


//FirstChild
// console.log(itemList.firstChild());


//FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
// console.log(itemList.lastChild);


//LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'world 1'



//nextSibling
 // console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibiling
// console.log(itemList.previousSibling);

//previousElementSibiling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'blue'



//create Element


//create a div
var newDiv = document.createElement('div');

//addClass
newDiv.className = 'hello';

//addID
newDiv.id = 'hello1';

//add attribute
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);