function hideShow(show) {  
    document.getElementById("show_"+show).style.display = "block";
    document.getElementById("show_"+((show==1)?2:1)).style.display = "none";
    
  } 

