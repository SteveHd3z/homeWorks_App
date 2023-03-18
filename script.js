( () => {

const btn=document.querySelector('[data-form-btn]');

const createTask=(event) =>{

    event.preventDefault();//Evita que la pagina se recargue
    const input=document.querySelector('[data-form-input]');
    const value=input.value; 
    const list=document.querySelector("[data-list]");
    const task=document.createElement("li");
    task.classList.add("card");
    input.value="";

    //backticks y Crear Elementos

    const taskContent=document.createElement("div");
    
    const titleTask=document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText=value;

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    //const content=`<i class="fas fa-trash-alt trashIcon icon"></i>`
    //task.innerHTML=content;

    task.appendChild(taskContent);
    list.appendChild(task);    

}

const checkComplete= () =>{
    const i=document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click", completeTask);
    return i;
}

const completeTask= (event) =>{
    const element=event.target;
    element.classList.toggle('fas');//Clase importada de font Awsome 
    element.classList.toggle('completeIcon');//Clase importada de CSS
    element.classList.toggle('far');
}

//listener
btn.addEventListener('click', createTask);


})();
