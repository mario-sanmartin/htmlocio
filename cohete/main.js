document.addEventListener('mousemove',function(e){
    const cris = document.querySelector('.cris');

    cris.style.left = e.offsetX + 'px';
    cris.style.top = e.offsetY + 'px';
})



function estrellas(){
    let contador = 50;
    let escena = document.querySelector('.escena');
    let i = 0;

    while(i < contador){
        let estrella = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        
        let duracion = Math.random() * 1;
        let h = Math.random() * 100;
        
        estrella.style.left = x + 'px';
        estrella.style.width = 1 + 'px';
        estrella.style.height = 50 + h + 'px';
        estrella.style.animationDuration = duracion + 's';
        
        escena.appendChild(estrella);
        i++
    }
}
estrellas();