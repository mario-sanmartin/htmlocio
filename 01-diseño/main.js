var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    loop:true
  });

 function menuToogle(){
    const menu = document.querySelector('.toogle');
    const navegacion = document.querySelector('.nav')
    menu.classList.toggle('active');
    navegacion.classList.toggle('active');
  }