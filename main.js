const hamMenu = document.querySelector('.hamburger');
const offScreenMenu = document.querySelector('.menu');

document.onclick = function(e){
    if(e.target.id !== 'hamburger' && e.target.id !== 'menu'){
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
    }
}

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


