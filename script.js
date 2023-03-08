const btn=document.querySelector('[data-form-btn]');

const createTask=(event) =>{
    event.preventDefault();//Evita que la pagina se recargue
    const input=document.querySelector('[data-form-input]');
    console.log(input.value);
}

//listener
btn.addEventListener('click', createTask);

