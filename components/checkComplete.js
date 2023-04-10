const checkComplete= () =>{
    const i=document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click", completeTask);
    return i;
}

const completeTask= (event) =>{
    const element=event.target;//Obtenemos el elemento que deseamos modificar
    element.classList.toggle('fas');//Clase importada de font Awsome 
    element.classList.toggle('completeIcon');//Clase importada de CSS
    element.classList.toggle('far');
}

export default checkComplete;       //Exportamos el archivo para que pueda ser leido desde el archivo js principal.