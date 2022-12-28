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


var SecondItem = document.querySelectorAll('.list-group-item');
SecondItem[1].style.color = 'green';

var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green'

}