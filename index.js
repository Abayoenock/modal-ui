const clickHereBtn = document.getElementById('click-here');
const confirmResult = document.querySelector('#confirmBtn');
const confirmDelBtn = document.querySelector('#confirmDelBtn');
const selectedItem = document.querySelector('select');
const dialogMega=document.querySelector('#dialog');
const dialogMin=document.querySelector('#dialog2');


const avatarBtn = document.getElementById('add_new_avatar');


avatarBtn.addEventListener('click', ()=> {
    dialogMega.showModal();
});


const avatarFormElement = document.querySelector("#get_avatar_image_form");

function formSubmitted(event){
    const fileInput = avatarFormElement.querySelector("input[name=userimage]");
    const files = fileInput.files;
    if(files.length == 0 ) {
        console.log("No file submitted");
        return;
    }
    const image = files[0];
   const imageUrl = URL.createObjectURL(image);
   addImageToTheDOM(imageUrl);

}
function addImageToTheDOM(imageURL){
    const button = document.createElement("button");
    button.classList.add("avatar-img-btn");
    const closeIcon = document.createElement("ion-icon");
    closeIcon.classList.add("close-avatar-icon");
    closeIcon.name = "close";

    button.appendChild(closeIcon);
    
    const imageElt = document.createElement("img");
    imageElt.src = imageURL;
    imageElt.classList.add("avatar-img");

    button.appendChild(imageElt);
    const addAvatarButton = document.querySelector("#add_new_avatar");
    document.body.insertBefore(button, addAvatarButton);

    remove_contents();// the function to remove the btns

}
const remove_contents=()=>{
  const closeBtn=document.querySelectorAll(".close-avatar-icon");
  closeBtn.forEach(btn => {
    btn.addEventListener('click',()=>{
    dialogMin.showModal();
    confirmDelBtn.addEventListener('click',()=>{
     btn.closest('button').remove();
     dialogMin.close();
    })    
    })
    
  });

}

avatarFormElement.addEventListener("submit", formSubmitted);