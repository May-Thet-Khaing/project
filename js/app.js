const sendbtn=document.getElementById('send');
const panel=document.getElementById('panel');
const ratingcontainer=document.querySelector('.ratings-container');
const ratings = document.querySelectorAll('.rating');

let selectrating='satisfied';
// console.log(selectrating);

ratingcontainer.addEventListener('click',(e)=>{

    if(e.target.classList.contains('rating')){
        removeactive();
        e.target.classList.add('active');
        selectrating=e.target.lastElementChild.textContent;
    }else if(e.target.parentNode.classList.contains("rating")){
        removeactive();
        e.target.parentNode.classList.add('active');
        selectrating = e.target.nextElementSibling.textContent;

    }
});

function removeactive(){
  ratings.forEach(rating=>{
        rating.classList.remove('active');
  })
}

sendbtn.addEventListener('click',()=>{
    panel.innerHTML=`
    <strong>Thank you for your feedbacks</strong>
    <p>${selectrating}</p>
    `;
})

