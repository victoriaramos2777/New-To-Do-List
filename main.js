//importar de nuestro modulos
import Items from "./modules/add-remove.js";
import ToDoItem from "./modules/item-constructor.js";

//constantes iniciales  
const main = document.getElementById('todo-item');
const form = document.getElementById('form');

const inputDescription = document.getElementById('todo-item');

const itemsContainer =document.getElementById('todo-cont');

//evento de escucha de la forma
form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
//Evenmto de escucha main para ingreasr a elementos

main.addEventListener('keypress', (e) => {
// Obtener los valores
const description = inputDescription.value;
//validacion 
if (description == ''){

}
// mandar los valores 
if(e.key === 'Enter' && description != '') {
    const item = new ToDoItem(false, description);

    // Agrear un nuevo todo
    Items.addItem(item);

    // Limpiar la input
    Items.clearInput();
  }
});

