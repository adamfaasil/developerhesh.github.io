
// Splash Screen
document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById("splash-screen");
    const hero = document.getElementById("hero");

    // Hide navbar and dark mode toggle
    hero.classList.add('hidden');

    // Wait for 3 seconds or until the content is loaded
    setTimeout(() => {
        splashScreen.style.opacity = "0"; // Start fading out
        setTimeout(() => {
            splashScreen.style.display = "none"; // Remove it from the view after fade out
            hero.classList.remove('hidden'); // Show Header again
        }, 500); // Match with the CSS transition duration
    }, 2000); // Change this time as needed
});

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dark Mode toggle

document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('dark-mode-switch');
  const toggleIcon = document.getElementById('toggle-icon');
  const body = document.body;

  // Check if user has a previously selected theme
  const currentTheme = localStorage.getItem('theme') || 'light-mode';
  body.classList.add(currentTheme);

  // Update the toggle switch based on current theme
  toggleSwitch.checked = currentTheme === 'dark-mode';

  // Update the icon based on current theme
  toggleIcon.textContent = currentTheme === 'dark-mode' ? 'light_mode' : 'dark_mode';

  // Toggle theme on switch change
  toggleSwitch.addEventListener('change', function () {
      if (toggleSwitch.checked) {
          body.classList.replace('light-mode', 'dark-mode');
          toggleIcon.textContent = 'light_mode'; // Change icon to bright
          localStorage.setItem('theme', 'dark-mode');
      } else {
          body.classList.replace('dark-mode', 'light-mode');
          toggleIcon.textContent = 'dark_mode'; // Change icon to dark
          localStorage.setItem('theme', 'light-mode');
      }
  });
});

// Hide/Show Navbar on Scroll

document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0; // Variable to store the last scroll position
const navbar = document.querySelector('.navbar'); // Select the navbar

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-80px'; // Adjust this value to hide the navbar completely (you might need to change -80px based on your navbar's height)
    } else {
        // Scrolling up
        navbar.style.top = '0.8rem'; // Bring back the navbar to its original position (adjust this based on your desired position)
    }
    
    lastScrollTop = scrollTop; // Update the last scroll position
});
});

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add 'active' class to the clicked tab
        tab.classList.add('active');
    });
});
