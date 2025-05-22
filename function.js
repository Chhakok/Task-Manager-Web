// array object taskList
var taskList = [];

// variable store data get from txt box
const txtTtask = document.getElementById("txt-Ttask");
const txtDtask = document.getElementById("txt-Dtask");



document.getElementById("btn-add").addEventListener("click",function(){
var txt = "";
// varible store data obj get form txt
var AddTask = {
"Title" : txtTtask.value,
"Description" : txtDtask.value
 };

taskList.push(AddTask);

// loop obj array 
for(i in taskList){
txt += `
        
           <div id="data">
              <div class="box-task">
                <h6 id="t-task">${taskList[i]["Title"]} :&nbsp; &nbsp;&nbsp;&nbsp; </h6>
                <p id="d-task">${taskList[i]["Description"]} </p>
              </div>
              <div class="box-btn">
                <button id="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button id="btn-delete"><i class="fa-solid fa-trash-can"></i></button>
              </div>
            </div> 
`;


 const Ttask = document.getElementById("t-task");
 const Dtask = document.getElementById("d-task");

 document.querySelector(".data-box").innerHTML = txt;
}




});