var card_cover = document.getElementsByClassName("card_cover");




function drag(event){
    event.dataTransfer.setData("text", event.target.id);



    for ( var i=0;i<card_cover.length;i++){
      card_cover[i].style.display="block";
      
      }




    }
    
    function dragover(event){
    event.preventDefault();
          
    }
      
    function drop(event){
         event.preventDefault();
         var data = event.dataTransfer.getData("Text");
      
      
      for ( var i=0;i<card_cover.length;i++){
        card_cover[i].style.display="none";
        
        }

var parent = event.target.parentElement.parentElement;

      if(event.target.className == "board_card_area" || event.target.className == "expedite_design_doing" ||
      event.target.className == "expedite_design_done" || event.target.className == "expedite_development_doing" ||
      event.target.className == "expedite_development_done" || event.target.className == "expedite_test" ){          
       
        event.target.appendChild(document.getElementById(data))         
      
      }

      if(event.target.className != "board_card_area" && event.target.className != "expedite_design_doing" &&
      event.target.className != "expedite_design_done" && event.target.className != "expedite_development_doing" &&
      event.target.className != "expedite_development_done" && event.target.className != "expedite_test" ){
        
        parent.appendChild(document.getElementById(data));
      
      }  
       
    }

