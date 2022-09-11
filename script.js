// scroll btn 
const scrollBtn = document.querySelectorAll('.scroll-btn');

scrollBtn.forEach(function(btn){
    btn.addEventListener("click",function(e){
          const showText =   e.currentTarget.parentElement;
          showText.classList.toggle('show-task');
          
    })
  
})


// sidebar 
const toggleBtn = document.querySelector(".menu-btn");

const sideBar = document.querySelector(".side-bar");

toggleBtn.addEventListener('click', function(){
    // console.log(sideBar.classList);
   sideBar.classList.toggle("sidebar-ext");
})



