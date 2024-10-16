/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle,.education__text .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


window.addEventListener('load', function() {
    // Extend the splash screen for 3 seconds (3000ms)
    setTimeout(function() {
      document.getElementById('splash-screen').style.display = 'none';
    }, 1000); // 
});
  

// When the user scrolls down 20px from the top, show the button
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block"; // Show the button after scrolling 100px
    } else {
      scrollTopBtn.style.display = "none"; // Hide the button if the user scrolls back to the top
    }
  }
  
  // Scroll to top when the button is clicked
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;

            const increment = Math.trunc(target / 100); // Increment value
            const updateCounter = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = count;
                    setTimeout(updateCounter, 20); // Adjust speed here
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        });
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            observer.unobserve(entries[0].target); // Stop observing once it has animated
        }
    });

    counters.forEach(counter => {
        observer.observe(counter); // Observe each counter
    });
});


const filterButtons = document.querySelectorAll('.filter-button');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');

    projectItems.forEach(item => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});


let slideIndex = 1;
showSlides(slideIndex);

// Change slide on button click
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Show the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-item");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Automatic slide change (optional)
setInterval(() => {
    changeSlide(1);
}, 5000); // Change slide every 5 seconds
