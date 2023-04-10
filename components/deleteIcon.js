const deleteIcon= () => {
    //const content=`<i class="fas fa-trash-alt trashIcon icon"></i>`
    //task.innerHTML=content;
    const i=document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
}

const deleteTask=(event)=>{
    const parent=event.target.parentElement;
        /* Accedemos  al evento a fin de obtener el
        elemento que vamos a modificar, en este caso
        elemento padre es un li.*/
    parent.remove();        //Elimina el elemento guardado en la constante
}

export default deleteIcon;          //Exportamos el archivo para que pueda ser leido desde el archivo js principal.
