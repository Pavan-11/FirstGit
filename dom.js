var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter =  document.getElementById('filter');


//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup',filterItems);


//ADD Item
function addItem(e){
    e.preventDefault();
    //get input value
    var newItem = document.getElementById('item').value;
    var newItems = document.getElementById('item-1').value;

    //create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';

    //add textnode with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItems));
    

    //create delbtn element
    var delbtn = document.createElement('button');
    delbtn.className = 'btn btn-danger btn-sm float-right delete';


    var edit = document.createElement('button');
    // edit.className = 'btn btn-danger btn-sm float-right delete';
    // edit.appendChild(document.createTextNode('EDIT'));
    // li.append(edit);

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

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var description = item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text)!=-1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }