document.addEventListener('DOMContentLoaded', function() {
  const logo = document.getElementById('logo');

  logo.addEventListener('click', function() {
      window.location.reload();
  });

  // Scroll to the "logo-container" section when the button is clicked
  const languageButton = document.getElementById('language');
  languageButton.addEventListener('click', function() {
      const logoContainer = document.querySelector('.logo-container');
      const offset = document.querySelector('.container').offsetHeight; // Height of the navbar

      window.scrollTo({
          top: logoContainer.offsetTop - offset, // Subtract the navbar height from the offset
          behavior: 'smooth'
      });
  });

  window.onscroll = function() {
      const goTopButton = document.getElementById("goTop");
      if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
          goTopButton.style.display = "flex";
      } else {
          goTopButton.style.display = "none";
      }
  };

  // Function to scroll to the top
  window.scrollToTop = function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };
});
