let accordion = document.getElementsByTagName("button");

for (let i = 0; i < accordion.length; i++) {
    const button = accordion[i];
    button.onclick = function(){
        this.nextElementSibling.classList.toggle("showen");
    }
}