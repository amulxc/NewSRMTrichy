    const topbar = `<div class="top-bar" id="desktop-topbar">
    <div class="top-bar-wrapper">
      <!-- Search Bar -->
       

      <!-- Quick Links -->
      <div class='myQuickLinks'>
        <div class="quick-links">
          <p>
           Register for Free Camps
            <a href="#"  class="quick-link featured"><i class="fa-solid fa-file"></i>Fill the form</a>
          </p>
        </div>
        <div class="quick-links">
          <p>
            Need Ambulance
            <a href="tel:98765433456" translate="no" class="quick-link featured"><i class='fa fa-phone'></i>9789482641</a>
          </p>
        </div>
        <div class="quick-links">
          <p>
            Book an Appointment
            <a href="tel:98765433456" translate="no" class="quick-link featured"><i class='fa fa-phone'></i>9789482641</a>
          </p>
        </div>
          <div class="search-container">
          <input 
            type="text" 
            class="search-input" 
            id="searchInput"
            placeholder="Search Pages...."
            autocomplete="off"
          >
          <button class="search-btn" id="searchBtn" aria-label="Search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <div class="search-results" id="searchResults"></div>
        </div>


      </div>
      <div class="language-switcher">
          <a onclick="changeLanguage('en')" translate="no">English | </a> <a onclick="changeLanguage('ta')"  translate="no">தமிழ்</a>
        </div>
      
    </div>
  </div>`

  const quickAccess = `<div class="quick-access" id="desktop-quickaccess">
   <div class="milestone-stats1">
        <div class="milestone-stat">
          <a href='./doctors.html'>Find a Doctor</a>
        </div>     
        <div class="milestone-stat">
          <a href='./course.html'>Course </a>
        </div>
        <div class="milestone-stat">
          <a href='./Specialities.html'>Specialities</a>
        </div>
        <div class="milestone-stat">
          <a href='#'>Lab Reports</a>
        </div>
    </div>
  </div>`

    

    const everyPage = `<div class="every-page">
   <div class="milestone-stats1">
        <div class="milestone-stat">
          <a href='#'>Book an Appointment</a>
        </div>
        <div class="milestone-stat">
          <a href='#'>Superspeciality </a>
        </div>
        <div class="milestone-stat">
          <a href='#'>Superspeciality </a>
        </div>

        <a href='#'>Superspeciality </a>
        </div>
    </div>
  </div>`
    
    const header=`<div class="nav-container">
    <div class="nav-wrapper">
      <a href='index.html'>
        <div class="logo">
          <img src="./assets/images/Logo.webp" alt="SRM">
        </div>
      </a>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav class="offcanvas-menu" id="offcanvasMenu">
      <div class="Offcanvas-logo logo">
        <img src="./assets/images/Logo.webp" alt="SRM">
      </div>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li class="has-dropdown" data-dropdown="about">
            <a href="./aboutus.html">About Us <span class="arrow dropdown-trigger">&#9654;</span></a>
            <ul class="dropdown">
              <li><a href="./aboutus.html#leadership">Leadership</a></li>
              <li><a href="./aboutus.html#history">History & Timeline</a></li>
              <li class="has-submenu" data-submenu="milestones">
                <a href="./aboutus.html#milestones">Accreditations <span class="arrow submenu-trigger">&#9654;</span></a>
                <ul class="sub-dropdown">
                  <li><a href="#">NAAC</a></li>
                  <li><a href="#">NABH</a></li>
                  <li><a href="#">NABL</a></li>
                  <li><a href="#">PM JAY</a></li>
                </ul>
              </li>
              <li><a href="./aboutus.html#alumini">Alumini Feedback</a></li>
              <li><a href="./career.html">Career</a></li>
              <li><a href="./Others.html">Others</a></li>
            </ul>
          </li>
          <li class="has-dropdown" data-dropdown="academics">
            <a href="./academics.html">Academics <span class="arrow dropdown-trigger">&#9654;</span></a>
            <ul class="dropdown">
              <li class="has-submenu" data-submenu="courses">
                <a href="./course.html">Courses<span class="arrow submenu-trigger">&#9654;</span></a>
                <ul class="sub-dropdown">
                  <li><a href="./ug_course_new.html">Under Graduate</a></li>
                  <li><a href="./pg_course_new.html">Post Graduate</a></li>
                </ul>
              </li>
              <li><a href="./programsandcourse.html">Programs & Course Outcomes</a></li>

              <li class="has-submenu" data-dropdown="media">
                <a href="infrastructure.html">Infrastructure <span class="arrow dropdown-trigger">&#9654;</span></a>
                <ul class="sub-dropdown">
                <li><a href="infrastructure.html#hostel">Hostel</a></li>
                <li><a href="library.html">Library</a></li>
                <li><a href="infrastructure.html#sports">Sports</a></li>
                  <li><a href="infrastructure.html#gym">Gym</a></li>
                </ul>
              </li>  
              <li><a href="./academic_department.html">Departments</a></li>
              <li class="has-submenu" data-submenu="media">
                <a href="./media.html">Media & OutReach <span class="arrow submenu-trigger">&#9654;</span></a>
                <ul class="sub-dropdown">
                  <li><a href="./media.html#news">News & Events</a></li>
                  <li><a href="./media.html#gallery">Gallery</a></li>
                  <li><a href="./videogallery.html">Video Gallery</a></li>
                </ul>
              </li>
              </ul>
              </li>
              <li class="has-dropdown" data-dropdown="hospital">
              <a href="./hospital.html">Hospital <span class="arrow dropdown-trigger">&#9654;</span></a>
              <ul class="dropdown">
                <li><a href="./hospitalNavigator.html">Hospital Mock</a></li>
               <li><a href="./centerofexcellence.html">Center Of Excellence</a></li>
               <li class="has-submenu" data-submenu="milestones">
                <a href="./patientcorner.html">Our Services<span class="arrow submenu-trigger">&#9654;</span></a>
                <ul class="sub-dropdown">

                  <li><a href="./hospital.html#services">Diagnostic Laboratory</a></li>
                  <li><a href="./hospital.html#specialties">Speciality Clinics</a></li>
                  <li><a href="./camps.html">Health Camps</a></li>
                  <li><a href="#">Consultant</a></li>
                  <li><a href="./pharmacy.html">Pharmacy</a></li>
                  <li><a href="./transport.html">Transport</a></li>
                  </ul>
                  </li>
                  <li class="has-submenu" data-submenu="milestones">
                  <a href="./patientcorner.html">Patient Corner <span class="arrow submenu-trigger">&#9654;</span></a>
                  <ul class="sub-dropdown">
                  <li><a href="#">Patient Portal</a></li>
                  <li><a href="./patientcorner.html#awareness">Hospital Awareness</a></li>
                  <li><a href="./patientcorner.html#testimonials">Patient AV</a></li>
                  <li><a href="./medicalpackage.html">Health Checkup Package</a></li>
              <li><a href="./patientcorner.html#insurance">Insurance Schemes</a></li>
              </ul>
              </li>

               <li class="has-submenu" data-submenu="milestones">
              <a href="#">Supporting Services<span class="arrow submenu-trigger">&#9654;</span></a>
              <ul class="sub-dropdown">
              <li><a href="./bioengineering.html">Bio Medical Engineering</a></li>
              <li><a href="./bioethics.html">Bio Ethics</a></li>
              </ul>
              </li>
              
              <li class="has-submenu" data-submenu="milestones">
              <a href="./donor.html">Donors <span class="arrow submenu-trigger">&#9654;</span></a>
              <ul class="sub-dropdown">
              <li><a href="./blood_donor.html">Blood Donor</a></li>
              <li><a href="./blood_donor.html#blood_bank2">Blood Bank</a></li>
              <li><a href="./organ_donor.html">Organ Donor</a></li>
              </ul>
              </li>
              <li><a href="./information.html">Information Center</a></li>
              <li><a href="./ambulance.html">24/7 Ambulance Services</a></li>
            </ul>
          </li>
           
          <li class="has-dropdown" data-dropdown="research">
            <a href="research.html">Research & Innovation <span class="arrow dropdown-trigger">&#9654;</span></a>
            <ul class="dropdown">
              <li><a href="IRPC.html">IRPC</a></li>
              <li><a href="IRPC.html#IRPC-Projects">Projects</a></li>
              <li><a href="IRPC.html#IRPC-Collabration">Collabrations</a></li>
              <li><a href="IRPC.html#IRPC-Board">Board</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="nmc.html" class="nmc-nav nmc-nav1">NMC</a></li>
          <li><a href="virtual_tour.html" target="_blank" class="nmc-nav nmc-nav2" title='Trichy SRM Medical College Campus Tour'><img src='./assets/images/360.png' style='width:21px'></a></li>
        </ul>
        <div id="mobile-topbar"></div>
        <div id="mobile-quickaccess"></div>
      </nav>
    </div>
    
    
  </div>

  <div class="overlay" id="overlay"></div>`;

  const floatBtn=`<button class="social-toggle-btn" id="socialToggle">
        <i class="fas fa-caret-down"></i>
        </button>
        <div class="social-links-container active" id="socialLinks">
            <a href="https://www.facebook.com/share/1BwbztPejm/" target="_blank" class="social-link facebook" title="Facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.threads.com/@srmmchrc" target="_blank" class="social-link threads" title="Threads" translate="no">
               கு
            </a>
            <a href="https://www.youtube.com/@tsrmmedicalcollegehospital" target="_blank" class="social-link youtube" title="YouTube">
                <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/company/srmmchrc/" target="_blank" class="social-link linkedin" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/srmmchrc?igsh=eXIwd3d2d3gzeXZ6" target="_blank" class="social-link instagram" title="Instagram">
                <i class="fab fa-instagram"></i>
            </a>
            
        </div>`;

        

        const emgBtn=`<button class="social-toggle-btn" id="socialToggle1" style='display:none'>
        </button>
        <div class="social-links-container active" id="socialLinks1">
          <div class='content-box' id='content1'>
            <div class='content' id='emgWord'  translate="no">
            </div>
            <div class='content2' translate="no">
              <p>Trichy <br><a href='tel:654387654' data-wg-notranslate><i class='fa fa-phone'></i> 9876543876</a></p>
              <p>Ramapuram <br><a href='tel:654387654' data-wg-notranslate><i class='fa fa-phone'></i> 9876543876</a></p>
            </div>
            
          <div>
        </div>`;
        

       

    const footer = `<div class="footer-container">
            <div class="footer-about">
                 <div class="logo footer-logo">
                    <img src="./assets/images/Logo.webp" alt="SRM Logo">
                </div>
                <p>Trichy SRM Medical College Hospital & Research Centre, <br>SRM Nagar, Trichy - Chennai Highway, Irungalur Village, Tiruchirapalli - 621105 Tamil Nadu, India</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h4 class="footer-title">Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./aboutus.html">About Us</a></li>
                    <li><a href="./pre-clinical.html">Departments</a></li>
                    <li><a href="./research.html">Research</a></li>
                    <li><a href="./media.html">News & Events</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4 class="footer-title">Contact Us</h4>
                <ul class="footer-links">
                    <li><i class="fas fa-map-marker-alt"></i> Trichy, Tamil Nadu</li>
                    <li><i class="fas fa-phone"></i> +91 431 2345678</li>
                    <li><i class="fas fa-envelope"></i> info@srmmedical.edu.in</li>
                    <li><i class="fas fa-clock"></i> Mon - Sat: 9AM - 6PM</li>
                </ul>
            </div>
            <div class="footer-section">
                <h4 class="footer-title">Newsletter</h4>
                <p style="color: rgba(255,255,255,0.7); margin-bottom: 1rem;">Subscribe to get latest updates and news</p>
                <div style="display: flex; gap: 0.5rem;">
                    <input type="email" placeholder="Your email" style="padding: 0.8rem; border-radius: 25px; border: none; flex: 1;">
                    <button class="btn-primary" style="padding: 0.8rem 1.5rem;">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Trichy SRM Medical College - Trichy. All Rights Reserved. | Privacy Policy | Terms of Service</p>
        </div>`;
    (function() {
        'use strict';
        
        // Check if device is touch-enabled - disable cursor on mobile
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            document.body.style.cursor = 'auto';
            return;
        }
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initCursor);
        } else {
            initCursor();
        }
        
        function initCursor() {
            // Create cursor elements
            const cursorDot = document.createElement('div');
            const cursorOutline = document.createElement('div');
            
            cursorDot.className = 'cursor-dot';
            cursorOutline.className = 'cursor-outline';
            
            document.body.appendChild(cursorDot);
            document.body.appendChild(cursorOutline);
            
            // Cursor position variables
            let mouseX = 0;
            let mouseY = 0;
            let outlineX = 0;
            let outlineY = 0;
            
            // Update cursor dot position instantly on mouse move
            document.addEventListener('mousemove', function(e) {
                mouseX = e.clientX;
                mouseY = e.clientY;
                
                // Dot follows cursor immediately
                cursorDot.style.left = mouseX + 'px';
                cursorDot.style.top = mouseY + 'px';
            });
            
            // Smooth outline animation with delay
            function animateOutline() {
                // Easing factor - lower = smoother/slower follow (0.1 - 0.3 recommended)
                const ease = 0.15;
                
                // Calculate distance to mouse
                const distX = mouseX - outlineX;
                const distY = mouseY - outlineY;
                
                // Move outline towards mouse position
                outlineX += distX * ease;
                outlineY += distY * ease;
                
                cursorOutline.style.left = outlineX + 'px';
                cursorOutline.style.top = outlineY + 'px';
                
                requestAnimationFrame(animateOutline);
            }
            
            // Start animation loop
            animateOutline();
            
            // Add hover effect on interactive elements
            const interactiveSelectors = 
                'a, button, input, textarea, select, ' +
                '[role="button"], .clickable';
            
            function updateInteractiveElements() {
                const interactiveElements = document.querySelectorAll(interactiveSelectors);
                
                interactiveElements.forEach(element => {
                    // Remove old listeners to avoid duplicates
                    element.removeEventListener('mouseenter', handleMouseEnter);
                    element.removeEventListener('mouseleave', handleMouseLeave);
                    
                    // Add new listeners
                    element.addEventListener('mouseenter', handleMouseEnter);
                    element.addEventListener('mouseleave', handleMouseLeave);
                });
            }
            
            function handleMouseEnter() {
                cursorDot.classList.add('hover');
                cursorOutline.classList.add('hover');
            }
            
            function handleMouseLeave() {
                cursorDot.classList.remove('hover');
                cursorOutline.classList.remove('hover');
            }
            
            // Initialize interactive elements
            updateInteractiveElements();
            
            // Re-scan for new interactive elements periodically (useful for dynamic content)
            setInterval(updateInteractiveElements, 2000);
            
            // Add click effect
            document.addEventListener('mousedown', function() {
                cursorDot.classList.add('click');
                cursorOutline.classList.add('click');
            });
            
            document.addEventListener('mouseup', function() {
                cursorDot.classList.remove('click');
                cursorOutline.classList.remove('click');
            });
            
            // Hide custom cursor when leaving the window
            document.addEventListener('mouseleave', function() {
                cursorDot.style.opacity = '0';
                cursorOutline.style.opacity = '0';
            });
            
            document.addEventListener('mouseenter', function() {
                cursorDot.style.opacity = '1';
                cursorOutline.style.opacity = '1';
            });
            
            // Initialize cursor as hidden
            cursorDot.style.opacity = '0';
            cursorOutline.style.opacity = '0';
            
            // Show cursor after first movement
            let hasMovedOnce = false;
            document.addEventListener('mousemove', function() {
                if (!hasMovedOnce) {
                    cursorDot.style.opacity = '1';
                    cursorOutline.style.opacity = '1';
                    hasMovedOnce = true;
                }
            }, { once: true });
        }
    })();
    document.getElementById('topbar').innerHTML=topbar
    document.getElementById("header").innerHTML=header;
    document.getElementById("quick-access").innerHTML=quickAccess;
    document.getElementById("floatBtn").innerHTML=floatBtn;
    document.getElementById("emergencyBox1").innerHTML=emgBtn;
    document.getElementById("footer").innerHTML=footer;
    document.getElementById('desktop-topbar').innerHTML = topbar;
    document.getElementById('desktop-quickaccess').innerHTML = quickAccess;


    const text11 = "Emergency";
        const container2= document.getElementById("emgWord");

        container2.innerHTML = text11
          .split("")
          .map(letter => `<div data-wg-notranslate>${letter}</div>`)
          .join("");
    
    document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    // Select all links inside offcanvas menu
    document.querySelectorAll("#offcanvasMenu a").forEach(link => {
        const linkHref = link.getAttribute("href");

        // Add active class if href matches current page
        if (linkHref === currentPage || (linkHref === "./" + currentPage)) {
            link.classList.add("active");

            // If the link is inside a dropdown, also open parent dropdowns
            let parent = link.closest(".dropdown, .sub-dropdown");
            while (parent) {
                const parentTrigger = parent.previousElementSibling;
                if (parentTrigger && parentTrigger.classList.contains("dropdown-trigger") || parentTrigger.classList.contains("submenu-trigger")) {
                    parent.style.display = "block";
                    parentTrigger.classList.add("open"); // optional class to style arrow
                }
                parent = parent.parentElement.closest(".dropdown, .sub-dropdown");
            }
        }
    });

    // Optional: toggle dropdown on click for mobile
    document.querySelectorAll(".dropdown-trigger, .submenu-trigger").forEach(trigger => {
        trigger.addEventListener("click", function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            if (submenu) {
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
                this.classList.toggle("open");
            }
        });
    });
});


const pages = [
      { title: 'Home', path: 'Home', url: 'index.html' },
      { title: 'About Us', path: 'About Us', url: './aboutus.html' },
      { title: 'Vision & Mission', path: 'About Us > Vision & Mission', url: './aboutus.html#vision' },
      { title: 'Leadership', path: 'About Us > Leadership', url: './aboutus.html#leadership' },
      { title: 'NAAC Accreditation', path: 'About Us > Milestones > NAAC', url: './aboutus.html#milestones' },
      { title: 'Academics', path: 'Academics', url: './academics.html' },
      { title: 'Under Graduate Courses', path: 'Academics > Courses > UG', url: './course.html#ug-courses' },
      { title: 'Post Graduate Courses', path: 'Academics > Courses > PG', url: './course.html#pg-courses' },
      { title: 'MBBS Program', path: 'Academics > Courses', url: './course.html' },
      { title: 'Pre Clinical', path: 'Academics > Pre Clinical', url: './pre-clinical.html' },
      { title: 'Para Clinical', path: 'Academics > Para Clinical', url: './para-clinical.html' },
      { title: 'Library', path: 'Academics > Library', url: './library.html' },
      { title: 'Medical Education Unit', path: 'Academics > MEU', url: './academics.html#specialties' },
      { title: 'Hospital Services', path: 'Hospital Services', url: './hospital.html' },
      { title: 'Medicine & Board Specialties', path: 'Hospital > Departments > Medicine & Board Specialties', url: './boardspecialties.html' },
      { title: 'Surgery & Board Specialties', path: 'Hospital > Departments > Surgery & Board Specialties', url: './surgeryspecialties.html' },
      { title: 'Surgery & Super Specialties', path: 'Hospital > Departments > Surgery & Super Specialties', url: './SurgerySuperSpecialties.html' },
      { title: 'Medicine & Super Specialties', path: 'Hospital > Departments > Medicine & Super Specialties', url: './acd_dept/MedicalSuperSpecialties.html' },
      { title: 'Doctors', path: 'Hospital > Doctors', url: './doctors.html' },
      { title: 'Blood Bank', path: 'Hospital > Blood Bank', url: './bloodbank.html' },
      { title: 'Research & Innovation', path: 'Research', url: 'research.html' },
      { title: 'Media & OutReach', path: 'Media', url: './media.html' },
      { title: 'News & Events', path: 'Media > News & Events', url: './media.html#news' },
      { title: 'Gallery', path: 'Media > Gallery', url: './media.html#gallery' },
      { title: 'Video Gallery', path: 'Media > Video Gallery', url: './videogallery.html' },
      { title: 'NMC Guidelines', path: 'NMC', url: './nmc.html' },
      { title: 'Bio Ethics', path: 'Bio Ethics', url: './bioethics.html' },
      { title: 'Others', path: 'Other Pages', url: './Others.html' },
      { title: 'BMWM', path: 'BMWM', url: './BMWM.html' },
      { title: 'Transport', path: 'NMC', url: './nmc.html' },
      { title: 'NMC Guidelines', path: 'NMC', url: './nmc.html' },
    ];

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');
    const overlay = document.getElementById('overlay');

    function performSearch(query) {
      if (!query.trim()) {
        searchResults.classList.remove('active');
        return;
      }

      const results = pages.filter(page => 
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.path.toLowerCase().includes(query.toLowerCase())
      );

      if (results.length > 0) {
        searchResults.innerHTML = results.map(result => `
          <div class="search-result-item" onclick="window.location.href='${result.url}'">
            <div class="result-title">${result.title}</div>
            <div class="result-path">${result.path}</div>
          </div>
        `).join('');
      } else {
        searchResults.innerHTML = '<div class="no-results">No results found</div>';
      }

      searchResults.classList.add('active');
    }

    searchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });

    searchBtn.addEventListener('click', () => {
      performSearch(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch(searchInput.value);
      }
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('active');
      }
    });


 
 
const mq = window.matchMedia("(max-width: 992px)");

function handleResponsiveMove(e) {
  const topbarEl = document.querySelector('.top-bar');
  const quickAccessEl = document.querySelector('.quick-access');

  const mobileTopbar = document.getElementById('mobile-topbar');
  const mobileQuick = document.getElementById('mobile-quickaccess');

  const desktopTopbar = document.getElementById('desktop-topbar');
  const desktopQuick = document.getElementById('desktop-quickaccess');

  if (!topbarEl || !quickAccessEl) return;

  if (e.matches) {
    // 👉 MOBILE VIEW
    if (!mobileTopbar.contains(topbarEl)) {
      mobileTopbar.appendChild(topbarEl);
    }
    if (!mobileQuick.contains(quickAccessEl)) {
      mobileQuick.appendChild(quickAccessEl);
    }
  } else {
    // 👉 DESKTOP VIEW
    if (!desktopTopbar.contains(topbarEl)) {
      desktopTopbar.appendChild(topbarEl);
    }
    if (!desktopQuick.contains(quickAccessEl)) {
      desktopQuick.appendChild(quickAccessEl);
    }
  }
}

/* 🔹 Run on page load */
handleResponsiveMove(mq);

/* 🔹 Listen for screen resize */
mq.addEventListener("change", handleResponsiveMove);



  document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.querySelector(".language-switcher");
    const btn = document.querySelector(".lang-btn");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      switcher.classList.toggle("active");
      btn.setAttribute(
        "aria-expanded",
        switcher.classList.contains("active")
      );
    });

    document.addEventListener("click", () => {
      switcher.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
    });
  });

let floatIcon = document.createElement("div");
floatIcon.className="goToTop";
floatIcon.setAttribute("onclick","location.href='#'");
floatIcon.innerHTML="<i class='fas fa-arrow-up'></i>";
document.body.appendChild(floatIcon);



        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,ta',
                autoDisplay: false
            }, 'google_translate_element');
        }

        function changeLanguage(lang) {
            const select = document.querySelector('.goog-te-combo');
            if (!select) return;

            select.value = lang;
            select.dispatchEvent(new Event('change'));

            if(document.body.className=="VIpgJd-ZVi9od-ORHb"){
                let k=document.body.querySelectorAll("table");
                console.log(k[0])
            }
        }