function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight) {
        element.classList.add('active');
      }
    });
  }
  
  // Event listener for scrolling
  window.addEventListener('scroll', fadeInElements);
  
  // Initial call to fadeInElements() to check elements on page load
  fadeInElements();

  const nameText = document.getElementById("name-text");
  const typedNameSpan = document.getElementById("typed-name");
  //const occupationText = document.getElementById("occupation-text");
  
  const name = "Aarya Patel";
  const occupation = "Software Engineering Student";
  
  // Function to reveal text letter by letter
  function revealText(element, text) {
      let index = 0;
      const interval = setInterval(function() {
          if (index <= text.length) {
              element.textContent = text.slice(0, index);
              index++;
          } else {
              clearInterval(interval);
          }
      }, 100); // Adjust the interval as needed for the typing speed
  }
  
  // Call revealText function for name
  revealText(typedNameSpan, name);
  
  // Reveal occupation text after name text is fully revealed
  setTimeout(function() {
      revealText(occupationText, occupation);
  }, name.length * 100); // Adjust timing based on the length of the name text
  
