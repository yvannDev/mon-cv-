// idem comme pour les infos 
const form = document.getElementById('form')

// recuperer  les elements pour stocker les informations depuis le formulaire depuis le doc
let getBug1 = document.getElementById('inf1')
let getDetails = document.getElementById('inf2')
let getTel = document.getElementById('inf3')
let error = document.querySelector('.error')


// ajouter un listener sur le formulaire avec appele de la fonction
form.addEventListener('submit',(e)=>{
    checkForm(e)
})


const checkForm = (e)=>{
// les elements du formulaire
const bug = document.getElementById('bug').value
const details = document.getElementById('details').value
const tel = document.getElementById('tel').value
// pour bloquer l'envoi des infos au serveur
let Evalid = true
// const regexpBugAndDetails = /^[A-Za-z./]+/
// const regexpPhone = /^[+]{1}[0-11]+/


// traitement cas pas cas mais le code est flous 🤔 🤔 🤔 🤔 
   if(bug.length==""){
    error.innerHTML=" veuillez remplis le titre du bug"
    Evalid=false
   }else{
    getBug1.innerHTML=bug
   }
   if(details.length==""){
    error.innerHTML=" veuillez remplis le champ message"
    Evalid=false
   }else{
    getDetails.innerHTML=details
   }
   if( tel.length>9){
    error.innerHTML="le champ est compris entre 0 et 8 ou 9"
    Evalid=false
   }else{
    getTel.innerHTML=tel
   }


   if(!Evalid){
    e.preventDefault()
    return true
   }
}

//    js pour image

let img = document.getElementById("img")
let btn = document.getElementById("capture")

btn.addEventListener("change",()=>{
   img.src=URL.createObjectURL(btn.files[0]) 
})


// Petite interaction JS : changement de thème clair/sombre pour le CV
document.addEventListener('DOMContentLoaded', function() {
   const themeBtn = document.getElementById('toggle-theme');
   if (themeBtn) {
      themeBtn.addEventListener('click', function() {
         document.body.classList.toggle('dark');
      });
   }
});




