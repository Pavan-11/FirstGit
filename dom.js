var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);

//ADD Item

function addItem(e){
    e.preventDefault();
    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';

    //add textnode with input value
    li.appendChild(document.createTextNode(newItem));

    //create delbtn element
    var delbtn = document.createElement('button');
    delbtn.className = 'btn btn-danger btn-sm float-right delete';


    var edit = document.createElement('button');
    // edit.className = 'btn btn-danger btn-sm float-right delete';
    edit.appendChild(document.createTextNode('EDIT'));
    li.append(edit);

    //append text node
    delbtn.appendChild(document.createTextNode('X'));
    //append btn to list
    li.appendChild(delbtn);

    //append li to list
    itemList.appendChild(li);


    itemList.appendChild(li);


}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if (confirm('ARE YOU SURE?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}