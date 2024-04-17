const likeButton = document.querySelector(".like-button .thumbs-up .fa-solid");
const NumberofLikes = document.querySelector('.like-count');

let likeAmount = 3;

likeButton.addEventListener("click", ()=> {
likeButton.classList.toggle("liked");
if(likeButton.classList.contains("liked")){
    likeAmount++;
    likeButton.classList.add('active');
} else {
    likeAmount--;
    likeButton.classList.remove('active');
}
 NumberofLikes.innerHTML = likeAmount;
})