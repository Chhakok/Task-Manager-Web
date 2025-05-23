// array object taskList
const taskList = [];

// variable store data get from txt box
const txtTtask = document.getElementById("txt-Ttask");
const txtDtask = document.getElementById("txt-Dtask");
const btnCancel = document.getElementById("btn-cancel");
var x;
var btnOpt = true;



document.getElementById("btn-cancel").addEventListener("click",function(){
clearData();
showListTask();
});


// btn add click event
document.getElementById("btn-add").addEventListener("click",function(){
  if(btnOpt == true){
    AddData();
    hideBtnCancel()
  }else{
    editData();
  }
    showListTask(); // call method show list Task

});


// method show list task
function showListTask(){
var txt = "";
// loop obj array 
  
for(let i = 0; i < taskList.length; i++){
    txt += `
              <div id="data">
                  <div class="box-task">
                    <h6 class="t-task">${taskList[i]["Title"]} :&nbsp; &nbsp;&nbsp;&nbsp; </h6>
                    <p class="d-task">${taskList[i]["Description"]} </p>
                  </div>
                  <div class="box-btn">
                    <button class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn-delete"><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </div> 
    `;

    }
    document.querySelector(".data-box").innerHTML = txt;
    clearData(); // call method clear txt box


    // buttton Edit
    const btnEditList = document.querySelectorAll(".btn-edit");

    btnEditList.forEach((element, i) => {
      element.addEventListener("click", function() {
        txtTtask.value = taskList[i].Title;
        txtDtask.value = taskList[i].Description;
        x = i;
        btnOpt = false;
        document.getElementById("btn-add").innerHTML = "Save";
        document.getElementById("btn-add").style.backgroundColor = "seagreen";

        // Cancel Button
        btnCancel.style.display = "block";
        // Register this only once
        btnCancel.addEventListener("click", function() {
          hideBtnCancel();
          clearData();
          btnOpt = true;
        });


      });
    });

    const btnDel= document.querySelectorAll(".btn-delete");
    btnDel.forEach((element,i)=>{
      element.addEventListener("click", function(){
        x=i;
        document.querySelector(".frm-popup").style.display = "flex";
      }); 
    })
}


document.getElementById("btn-yes-del").addEventListener("click",function(){
    taskList.splice(x,1);
    showListTask();
    document.querySelector(".frm-popup").style.display = "none";
});

document.getElementById("btn-no-del").addEventListener("click",function(){
    showListTask();
    document.querySelector(".frm-popup").style.display = "none";
});


function hideBtnCancel(){
    document.getElementById("btn-add").innerHTML = `<i class="fa-solid fa-plus"></i> <span>Add Task</span>`;
    document.getElementById("btn-add").style.backgroundColor = "#4f4ffc";
    btnCancel.style.display = "none";
}

function AddData(){
  if(!validator()) return;
    // varible store data obj get form txt
    var AddTask = {
        "Title" : txtTtask.value,
        "Description" : txtDtask.value
    };
    taskList.unshift(AddTask); //  Add new Task
}


function editData(){
  if(!validator()) {
    return;
  }
  taskList[x]['Title'] = txtTtask.value;
  taskList[x]['Description'] = txtDtask.value;
  btnOpt = true;
  hideBtnCancel();
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