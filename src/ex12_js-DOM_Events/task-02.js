let accordion = document.getElementById("accordion");
accordion.onclick = function(e){
    let opened = document.getElementsByClassName("showen")[0];
    let current = e.target.nextElementSibling;
    if(opened && opened !== current){
        opened.classList.toggle("showen");
    }
    
    current.classList.toggle("showen");
}