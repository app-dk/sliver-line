'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});

document.getElementById("desktop-contact-us-link").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor tag behavior

  // Get the target section element
  var targetSection = document.getElementById("footer");

  // Scroll to the target section smoothly
  targetSection.scrollIntoView({
      behavior: "smooth"
  });
});

document.getElementById("desktop-about-us-link").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor tag behavior

  // Get the target section element
  var targetSection = document.getElementById("about-us");

  // Scroll to the target section smoothly
  targetSection.scrollIntoView({
      behavior: "smooth"
  });
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}


function closeCustomPopUp() {
  var temp = document.querySelector('.modalSaurav');
  temp.remove();
}
// Get all footer-nav-items
const footerNavItems = document.querySelectorAll('#liPopup');

// Function to create modal with bullet points dynamically
function createModal(content) {
  const modal1 = document.createElement('div');
  modal1.classList.add('modalSaurav');
  modal1.innerHTML = `
  <div class="modal"  data-modal>

  <div class="modal-close-overlay" data-modal-overlay></div>

  <div class="modal-content">

    <button class="modal-close-btn" onclick="closeCustomPopUp();" data-modal-close>
      <ion-icon name="close-outline"></ion-icon>
    </button>
    <div class="newsletter">

      
        <div class="newsletter-header">

        <ul>
        ${content.map(item =>`<li>${item}</li>`).join('')}
      </ul>
        </div>

    </div>

  </div>

</div>
  `;
  document.body.appendChild(modal1);
}

// Function to handle click event on footer-nav-item
function handleItemClick(event) {
  event.preventDefault();
  const itemName = event.target.textContent;
  let content = [];

  // Depending on the item clicked, populate content with appropriate bullet points
  switch (itemName) {
    case 'Delivery':
      content = ['Fast delivery options available.', 'Track your order in real-time.'];
      break;
    case 'Legal Notice':
      content = ['Important legal information about our services.', 'Your rights and responsibilities.'];
      break;
    case 'Terms and conditions':
      content = ['Detailed terms and conditions for using our services.', 'Policies regarding privacy and data usage.'];
      break;
    case 'About us':
      content = ['Learn more about our company and its mission.', 'Meet our team and founders.'];
      break;
    case 'Secure payment':
      content = ['Your payment information is encrypted and secure.', 'Multiple payment options available.'];
      break;
    default:
      break;
  }

  // Create modal with bullet points content
  createModal(content);
}

// Attach click event listener to each footer-nav-item
footerNavItems.forEach(item => {
  item.addEventListener('click', handleItemClick);
});
