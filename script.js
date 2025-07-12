function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Enhanced fade in animation with intersection observer
function initFadeInAnimation() {
  const elements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Typing animation with dynamic text rotation
function initTypingAnimation() {
  const nameText = document.getElementById("name-text");
  const typedNameSpan = document.getElementById("typed-name");
  const dynamicTextSpan = document.getElementById("dynamic-text");
  
  // Check if all required elements exist
  if (!typedNameSpan || !dynamicTextSpan) {
    console.warn('Typing animation elements not found');
    return;
  }
  
  const name = "Aarya Patel";
  const dynamicPhrases = [
    "specializing in AI and data science",
    "building scalable cloud applications",
    "developing bioinformatics solutions",
    "passionate about machine learning",
    "creating innovative software solutions"
  ];
  
  let currentPhraseIndex = 0;
  
  function typeText(element, text, speed = 100) {
    return new Promise((resolve) => {
      let index = 0;
      element.textContent = '';
      const interval = setInterval(function() {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });
  }
  
  function deleteText(element, speed = 50) {
    return new Promise((resolve) => {
      const text = element.textContent;
      let index = text.length;
      const interval = setInterval(function() {
        if (index > 0) {
          element.textContent = text.substring(0, index - 1);
          index--;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });
  }
  
  async function cycleDynamicText() {
    while (true) {
      // Type the current phrase
      await typeText(dynamicTextSpan, dynamicPhrases[currentPhraseIndex], 80);
      
      // Wait for 3 seconds
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Delete the current phrase
      await deleteText(dynamicTextSpan, 40);
      
      // Wait for 0.5 seconds before typing next phrase
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Move to next phrase
      currentPhraseIndex = (currentPhraseIndex + 1) % dynamicPhrases.length;
    }
  }
  
  // Start animations after a short delay
  setTimeout(async () => {
    await typeText(typedNameSpan, name, 120);
    // Wait a bit before starting dynamic text
    await new Promise(resolve => setTimeout(resolve, 800));
    cycleDynamicText();
  }, 1000);
}

// Navbar scroll effect
function initNavbarScrollEffect() {
  const nav = document.querySelector('nav');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      nav.style.background = 'rgba(255, 255, 255, 0.98)';
      nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      nav.style.background = 'rgba(255, 255, 255, 0.95)';
      nav.style.boxShadow = 'none';
    }
    
    // Hide/show navbar based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
  });
}

// Stats counter animation
function initStatsCounter() {
  const stats = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = parseInt(target.textContent);
        let currentValue = 0;
        const increment = finalValue / 30;
        
        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            target.textContent = finalValue + '+';
            clearInterval(counter);
          } else {
            target.textContent = Math.floor(currentValue) + '+';
          }
        }, 50);
        
        observer.unobserve(target);
      }
    });
  });
  
  stats.forEach(stat => {
    observer.observe(stat);
  });
}

// Parallax effect for hero section (removed to fix scrolling issues)
function initParallaxEffect() {
  // Disabled parallax to prevent hero section squishing
  return;
}

// Initialize particles effect
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
}

// Contact form functionality
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Show loading state
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    
    // Get form data
    const formData = new FormData(form);
    
    // Validate form data
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (!name || !email || !subject || !message) {
      showNotification('Please fill in all fields.', 'error');
      resetSubmitButton();
      return;
    }
    
    // Send to Formspree
    fetch('https://formspree.io/f/myzjrrvz', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Reset form
        form.reset();
        resetSubmitButton();
        showNotification('Message sent successfully! I\'ll get back to you within 24 hours.', 'success');
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      resetSubmitButton();
      
      // Fallback to mailto
      const mailtoLink = `mailto:aaryapatel1@hotmail.com?subject=${encodeURIComponent(subject + ' - From ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`)}`;
      window.open(mailtoLink);
      
      showNotification('Email service temporarily unavailable. Opening your email client as fallback.', 'info');
    });
    
    function resetSubmitButton() {
      submitBtn.disabled = false;
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
    }
  });
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Style the notification
  let bgColor;
  switch(type) {
    case 'success': bgColor = '#10b981'; break;
    case 'error': bgColor = '#ef4444'; break;
    case 'info': bgColor = '#3b82f6'; break;
    default: bgColor = '#3b82f6';
  }
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${bgColor};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    font-weight: 500;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
    word-wrap: break-word;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initFadeInAnimation();
  initSmoothScrolling();
  initTypingAnimation();
  initNavbarScrollEffect();
  initStatsCounter();
  initParallaxEffect();
  initParticles();
  initContactForm();
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

