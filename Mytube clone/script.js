var menuIcon =document.querySelector(".menu-icon");
var sidebar=document.querySelector(".side-bar");
var container = document.querySelector(".container")

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
document.querySelector('.subs').addEventListener('click', function(e) {
    e.target.classList.toggle('new-class');
        
     });

     var btn = document.getElementsByClassName("collapse");
          
     btn[0].addEventListener("click", function () {
         this.classList.toggle("active");
         var content = this.nextElementSibling;
         if (content.style.display === "block") {
             content.style.display = "none";
         } else {
             content.style.display = "block";
         }
     });