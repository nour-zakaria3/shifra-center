const menuBtn = document.getElementById('toggle-btn'); 
const navLinks = document.querySelector('.links');  

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        console.log("Menu toggled!"); 
    });
}