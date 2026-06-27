// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  primaryNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll-reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// Typewriter role cycler
const roles   = ['Web Developer', 'Software Learner', 'MCA Student'];
const target  = document.getElementById('typed-role');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (!target) return;

  const current = roles[roleIndex];

  if (isDeleting) {
    target.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    target.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === current.length) {
    // Finished typing — pause then start deleting
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // Finished deleting — move to next role
    isDeleting = false;
    roleIndex  = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

// Start after a short delay so page feels settled
setTimeout(type, 1200);

function sendMail(){
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const msg = document.getElementById('cf-msg').value.trim();
  if(!name || !email || !msg){ alert('Please fill in all fields.'); return; }
  const mailto = 'https://mail.google.com/mail/?view=cm&fs=1&to=chavan.anuja08@gmail.com&su=Portfolio Contact from '+encodeURIComponent(name)+'&body='+encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+msg);
  window.open(mailto,'_blank');
}
