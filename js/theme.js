// Petite interaction JS : changement de thème clair/sombre pour le CV
document.addEventListener('DOMContentLoaded',()=> {
   const themeBtn = document.getElementById('toggle-theme');
   if (themeBtn) {
      this.addEventListener('click',() =>{
         document.body.classList.toggle('dark');
      });
   }
});  