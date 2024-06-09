// choos image

const filterButtons = document.querySelectorAll(".filter_buttons button ");
const filterableCard = document.querySelectorAll(".filterable-Card .card");

filterButtons.forEach(button =>  button .addEventListener("click", (e)=>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
   filterableCard.forEach(card =>{
    card.classList.add("hide");
  if(card.dataset.name==e.target.dataset.name || e.target.dataset.name === "all")
    card.classList.remove("hide");
   })
}))