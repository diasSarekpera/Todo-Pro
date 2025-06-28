const form = document.querySelector(".form");
const addBtn = document.getElementById("add-task-btn");
const inputValue = document.getElementById("task-input");
const taskList = document.querySelector(".task-list")


form.addEventListener("submit", (event) => {
     event.preventDefault();
});

addBtn.addEventListener("click", ()=>{
     ajouterTache();
});

function ajouterTache(){
     const task = inputValue.value.trim();

     if(task === ""){
          alert("Veuilez entrez une tache !");
          return;//stop la fonction
     }

     //console.log(task);

     const checkbox = document.createElement("input");

     checkbox.addEventListener("change",  () => {
          coherTache();
     })

     checkbox.setAttribute("type", "checkbox");
     checkbox.classList.add("check");


     const span = document.createElement("span");
     span.textContent = task;

     const delBtn = document.createElement("button");



     delBtn.classList.add("del-btn");
     delBtn.textContent = "❌";

     const li = document.createElement("li");
     li.classList.add("list-item");

     delBtn.addEventListener("click", ()=>{
          li.remove();
          console.log("test");
     })

     li.appendChild(checkbox);
     li.appendChild(span);
     li.appendChild(delBtn);

     taskList.appendChild(li);



     inputValue.value = "";

}

function coherTache(){

     const listItem = taskList.querySelectorAll(".list-item");

     listItem.forEach(element => {

          const checkbox = element.querySelector(".check");
          const span = element.querySelector("span")


          if(checkbox.checked){
               span.classList.add("overlined")
          }else{
               span.classList.remove("overlined");
          }
     });

}