let txt= document.querySelector('.textarea')
let add=document.querySelector('.btn')
let main=document.querySelector('.main')
let insert= document.createElement('div')


add.onclick = (e) => {
  main.innerHTML += `<div class="todo-item">
      <span class="todo-text">${txt.value}</span>
      <button onclick="del(event);"> <img src="https://png.icons8.com/small/1600/filled-trash.png" class="supp" ></button>
    </div>`;
  txt.value='';
}


function del(event) {
  event.target.parentElement.parentElement.remove()
}
