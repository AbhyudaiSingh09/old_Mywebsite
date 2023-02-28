window.addEventListener('scroll', function() {
    var section2 = document.querySelector('#section2');
    var navbar = document.querySelector('.navbarbox');
    var section2Top = section2.getBoundingClientRect().top;
  
    if (section2Top <= 0) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  });
  