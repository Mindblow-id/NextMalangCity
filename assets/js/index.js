
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  console.log(this.window.scrollY);
  if (window.scrollY > 10) {
    navbar.classList.remove('bg-black/0');
    navbar.classList.add('bg-black/100');
  } else {
    navbar.classList.remove('bg-black/100');
    navbar.classList.add('bg-black/0');
  }
});

const hamburgerLineOpen = {
  first: ['top-[16px]','rotate-45'],
  second: 'opacity-0',
  third: ['bottom-3','-rotate-45']
}

const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('mousedown', (e) => {
  const firstLine = document.getElementById('line-1')
  const secondLine = document.getElementById('line-2')
  const thirdLine = document.getElementById('line-3')
  
  if(!hamburger.classList.contains('navbar-open')) {
    firstLine.classList.add(...hamburgerLineOpen.first)
    secondLine.classList.add(hamburgerLineOpen.second)
    thirdLine.classList.add(...hamburgerLineOpen.third)
    hamburger.classList.add('navbar-open')
  } else {
    firstLine.classList.remove(...hamburgerLineOpen.first)
    secondLine.classList.remove(hamburgerLineOpen.second)
    thirdLine.classList.remove(...hamburgerLineOpen.third)
    hamburger.classList.remove('navbar-open')
  }


})

// $(document).ready(function(){
//   $("#slider").owlCarousel({
//     autoplay: true,
//     loop: true,
//     autoplayTimeout:2000,
//     autoplayHoverPause:true
//   });
// });