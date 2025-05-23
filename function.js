// array object taskList
const taskList = [];

// variable store data get from txt box
const txtTtask = document.getElementById("txt-Ttask");
const txtDtask = document.getElementById("txt-Dtask");



document.getElementById("btn-add").addEventListener("click",function(){

if(!validator()) return;

// varible store data obj get form txt
var AddTask = {
"Title" : txtTtask.value,
"Description" : txtDtask.value
 };

taskList.unshift(AddTask); //  Add new Task

showListTask(); // call method show list Task
clearData(); // call method clear txt box

});


// method show list task
function showListTask(){
var txt = "";
// loop obj array 
// for(i in taskList)
  
for(let i = 0; i < taskList.length; i++){
txt += `
           <div id="data">
              <div class="box-task">
                <h6 class="t-task">${taskList[i]["Title"]} :&nbsp; &nbsp;&nbsp;&nbsp; </h6>
                <p class="d-task">${taskList[i]["Description"]} </p>
              </div>
              <div class="box-btn">
                <button id="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button id="btn-delete"><i class="fa-solid fa-trash-can"></i></button>
              </div>
            </div> 
`;
}
document.querySelector(".data-box").innerHTML = txt;
}

// method clear txt box
function clearData(){
  txtTtask.value = "";
  txtDtask.value = "";
  txtTtask.focus();
}


// method validator fill txt box
function validator(){
  if( txtTtask.value == ""){
    alert("Please Enter fill Title Task");
    txtTtask.focus();
    return false;
  }else if(txtDtask.value == ""){
 alert("Please Enter fill Description Task");
    txtDtask.focus();
    return false;
  }
  return true;
}