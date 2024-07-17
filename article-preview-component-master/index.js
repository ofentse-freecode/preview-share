const button = document.querySelector(".btn");

const show = document.querySelector(".active");

button.addEventListener('click', function(){
    show.classList.toggle("hide-share");
    console.log("clicked");
});