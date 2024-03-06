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



const form = document.querySelector("form");
        const submitButton = document.querySelector("#submit");
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwupmMH2bLPKfgVzYKlQa1FiWZ5k3eONCW1tquAfnoF6rp7IZQSibuZUR_H-uAaOEcaow/exec';
        form.addEventListener('submit', e => {
            submitButton.disabled = true;
            e.preventDefault();
            let requestBody = new FormData(form);
            fetch(scriptURL, { method: 'POST', body: requestBody })
                .then(response => response.text())  
                .then(data => {
                    alert('Success!', data);
                    submitButton.disabled = false;
                })
                .catch(error => {
                    alert('Error!', error.message);
                    submitButton.disabled = false;
                });
        });