document.querySelectorAll('nav a').forEach(anchor =>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behaviour: 'smooth'
        });
    });
});

document.getElementById('dark-mode-toggle').addEventListener('click',function(){
    document.body.classList.toggle('dark-mode');
});