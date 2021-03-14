
function drag(event){
event.dataTransfer.setData("text", event.target.id);

}

function dragover(event){
    event.preventDefault();
    
}

function drop(event){
     event.preventDefault();
     var data = event.dataTransfer.getData("Text");
     var parent = event.target.parentElement;
     
    
     parent.appendChild(document.getElementById(data));
     
}
