// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Create and append the scroll-to-top button
  const btn = document.createElement('button');
  btn.id = 'toTop';
  btn.innerText = '↑';
  document.body.appendChild(btn);

  // Show or hide button on scroll
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 200 ? 'flex' : 'none';
  });

  // Scroll smoothly to top when button clicked
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Handle postcode form submission
  const form = document.querySelector('.hero__form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.hero__input');
    const postcode = input.value.trim();
    if (!postcode) {
      alert('Please enter a postcode!');
      return;
    }
    console.log('Searching for food near:', postcode);
    alert(`Searching for food near: ${postcode}`);
    form.reset();
  });
});
