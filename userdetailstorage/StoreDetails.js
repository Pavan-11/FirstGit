

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    const obj = {
        name,
        email
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showUserOnScreen(obj)
}

function showUserOnScreen(obj){
    const parentElem = document.getElementById('users')


    // parentElem.innerHTML = parentElem.innerHTML + `<li>${obj.name} - ${obj.email}<input type="button" value= "delete" onclick = "deleteValue"></li>`
    const childElem = document.createElement('li')
    childElem.textContent = obj.name + '-' + obj.email;


    const deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Delete'
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
    }
    childElem.appendChild(deleteButton)
    parentElem.appendChild(childElem)

    // let myObj = {
    //     name: e.target.name.value,
    //     email: e.target.email.value
    // }
    // let obj_serialized = JSON.stringify(myObj);

    // localStorage.setItem('myObj',obj_serialized);

    // let obj_deserialized = JSON.parse(localStorage.getItem("myObj"));

    // console.log("myObj",obj_deserialized);

    
     if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'please enter all fields';
        setTimeout(() => msg.remove(),3000)
     }else {
        
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);
        
        nameInput.value = '';
        emailInput.value ='';
    }

}