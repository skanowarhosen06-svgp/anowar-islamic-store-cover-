document.addEventListener("DOMContentLoaded",function(){

alert("Welcome to Sagar Online");

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{
card.addEventListener("click",()=>{
alert(card.innerText+" Service Available");
});
});

});
