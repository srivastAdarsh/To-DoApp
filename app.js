const ul=document.querySelector('ul');
const input=document.querySelector('input');

const button=document.querySelector('button');

button.addEventListener('click',()=>{
    if(input.value===''){
        alert('No task entered');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        ul.appendChild(li);

        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    input.value='';
    saveData();
})


ul.addEventListener('click',(event)=>{
    if(event.target.tagName==='SPAN'){
        event.target.parentElement.remove();
    }
    else{
        event.target.classList.toggle("completed");
    }
    saveData();
})

getData();

function saveData(){
    localStorage.setItem('todos',ul.innerHTML);
}

function getData(){
    let todos=localStorage.getItem('todos');
    ul.innerHTML=todos;
}