
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
  first: ['top-[16px]', 'rotate-45'],
  second: 'opacity-0',
  third: ['bottom-3', '-rotate-45']
}

const navModalShow = "top-24"
const navModalHidden = "-top-80"

const hamburger = document.getElementById('hamburger');
const navModal = document.getElementById('nav-modal');

hamburger.addEventListener('mousedown', (e) => {
  const firstLine = document.getElementById('line-1')
  const secondLine = document.getElementById('line-2')
  const thirdLine = document.getElementById('line-3')

  if (!hamburger.classList.contains('navbar-open')) {
    firstLine.classList.add(...hamburgerLineOpen.first)
    secondLine.classList.add(hamburgerLineOpen.second)
    thirdLine.classList.add(...hamburgerLineOpen.third)
    hamburger.classList.add('navbar-open')

    navModal.classList.add(navModalShow)
  } else {
    firstLine.classList.remove(...hamburgerLineOpen.first)
    secondLine.classList.remove(hamburgerLineOpen.second)
    thirdLine.classList.remove(...hamburgerLineOpen.third)
    hamburger.classList.remove('navbar-open')
    
    navModal.classList.remove(navModalShow)
  }


})

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(el => {
  el.addEventListener('click', (e) => {
    const firstLine = document.getElementById('line-1')
    const secondLine = document.getElementById('line-2')
    const thirdLine = document.getElementById('line-3')

    if (!hamburger.classList.contains('navbar-open')) {
      firstLine.classList.add(...hamburgerLineOpen.first)
      secondLine.classList.add(hamburgerLineOpen.second)
      thirdLine.classList.add(...hamburgerLineOpen.third)
      hamburger.classList.add('navbar-open')
      navModal.classList.add(navModalShow)
    } else {
      firstLine.classList.remove(...hamburgerLineOpen.first)
      secondLine.classList.remove(hamburgerLineOpen.second)
      thirdLine.classList.remove(...hamburgerLineOpen.third)
      hamburger.classList.remove('navbar-open')
      navModal.classList.remove(navModalShow)
    }
  })
})


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 1500
  },
  grabCursor: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40

    }
  }
});