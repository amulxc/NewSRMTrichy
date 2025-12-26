    const topbar = `<div class="top-bar">
    <div class="top-bar-wrapper">
      <!-- Search Bar -->
      <div class="search-container">
        <input 
          type="text" 
          class="search-input" 
          id="searchInput"
          placeholder="Search pages, courses, departments..."
          autocomplete="off"
        >
        <button class="search-btn" id="searchBtn" aria-label="Search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <div class="search-results" id="searchResults"></div>
      </div>

      <!-- Quick Links -->
      <div class="quick-links">
        <a href="./course.html" class="quick-link featured">
          <svg class="quick-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
          </svg>
          Courses offered
        </a>
        <a href="tel:+919876543210" class="quick-link">
          <svg class="quick-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Emergency
        </a>
        <a href="./aboutus.html#milestones" class="quick-link">
          <svg class="quick-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Accreditation
        </a>
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
              <li><a href="./aboutus.html#vision">Vision & Mission</a></li>
              <li><a href="./aboutus.html#leadership">Leadership</a></li>
              <li class="has-submenu" data-submenu="milestones">
                <a href="./aboutus.html#milestones">Accreditations <span class="arrow submenu-trigger">&#9654;</span></a>
                <ul class="sub-dropdown">
                  <li><a href="#">NAAC</a></li>
                  <li><a href="#">NABH</a></li>
                  <li><a href="#">NABL</a></li>
                  <li><a href="#">PM JAY</a></li>
                </ul>
              </li>
              <li><a href="./aboutus.html#compliance">Awards & Recognition</a></li>
              <li><a href="./others.html">Others</a></li>
            </ul>
          </li>
          <li class="has-dropdown" data-dropdown="academics">
            <a href="./academics.html">Academics <span class="arrow dropdown-trigger">&#9654;</span></a>
            <ul class="dropdown">
              <li class="has-submenu" data-submenu="courses">
                <a href="./course.html">Courses<span class="arrow submenu-trigger">&#9654;</span></a>
                <ul class="sub-dropdown">
                  <li><a href="./course.html#ug-courses">Under Graduate</a></li>
                  <li><a href="./course.html#pg-courses">Post Graduate</a></li>
                </ul>
              </li>
              <li><a href="./programsandcourse.html">Programs & Course Outcomes</a></li>
              <li class='pdf'><a href="./assets/pdf/Medical+Graduate+Attributes.pdf" target='_blank'>Medical Graduate Attributes</a><img src="./assets/images/pdficon.png" alt="" width="20px" ></li>
              <li class='pdf'><a href="./assets/pdf/UPDATE-Committee-11.10.25.pdf" target='_blank'>Committee</a><img src="./assets/images/pdficon.png" alt="" width="20px" ></li>
              <li class='pdf'><a href="./biethics.html">Bio Ethics</a></li>
              <li class="has-submenu" data-dropdown="departments">
                <a href="#">Departments <span class="arrow dropdown-trigger">&#9654;</span></a>
                <ul class="sub-dropdown">
                <li class="has-submenu" data-submenu="courses">
                <a href="#">Clinical<span class="arrow submenu-trigger">&#9654;</span></a>
                <ul class="sub-dropdown">
                  <li><a href="./boardspecialties.html">Medicine & Broad Specialties</a></li>
                  <li><a href="./surgeryspecialties.html">Surgery & Broad Specialties</a></li>
                  <li><a href="./MedicalSuperSpecialties.html">Medicine & Super Specialties</a></li>
                  <li><a href="./SurgerySuperSpecialties.html">Surgery & Super Specialties</a></li>
                </ul>
              </li>
              <li><a href="./pre-clinical.html">Pre Clinical</a></li>
              <li><a href="./para-clinical.html">Para Clinical</a></li>
              </ul>
              </li>
              <li><a href="./academics.html#specialties">Medical Education Unit</a></li>
              <li><a href="./academics.html#student">Student Corner</a></li>
              </ul>
              </li>
              <li class="has-dropdown" data-dropdown="hospital">
              <a href="./hospital.html">Hospital Services <span class="arrow dropdown-trigger">&#9654;</span></a>
              <ul class="dropdown">
              <li><a href="./patientcorner.html">Patient Corner</a></li>
              <li><a href="./Specialities.html">Specialities</a></li>
              <li><a href="./doctors.html">Doctors</a></li>
              <li><a href="./bloodcamp.html">Blood Bank</a></li>
              <li><a href="./pharmacy.html">Pharmacy</a></li>
              <li><a href="./hospital.html#services">Supporting Services</a></li>
              <li><a href="./hospital.html#camps">Camps</a></li>
              <li><a href="./transport.html">Transport</a></li>
            </ul>
          </li>
           <li class="has-dropdown" data-dropdown="media">
            <a href="infrastructure.html">Infrastructure <span class="arrow dropdown-trigger">&#9654;</span></a>
            <ul class="dropdown">
              <li><a href="library.html">Library</a></li>
              <li><a href="infrastructure.html#hostel">Hostel</a></li>
              <li><a href="infrastructure.html#sports">Sports</a></li>
              <li><a href="infrastructure.html#transport">Transport</a></li>
              <li><a href="infrastructure.html#gym">Gym</a></li>
            </ul>
          </li>
          <li class="has-dropdown" data-dropdown="research">
            <a href="research.html">Research & Innovation <span class="arrow dropdown-trigger">&#9654;</span></a>
            <ul class="dropdown">
              <li><a href="IRPC.html">IRPC</a></li>
              <li><a href="IRPC.html#IRPC-Activities">Activities</a></li>
              <li><a href="IRPC.html#IRPC-Projects">Projects</a></li>
              <li><a href="IRPC.html#IRPC-Patents">Patents</a></li>
              <li><a href="IRPC.html#IRPC-Collabration">Collabrations</a></li>
              <li><a href="IRPC.html#IRPC-Board">Board Members</a></li>
            </ul>
          </li>
          <li class="has-dropdown" data-dropdown="media">
            <a href="./media.html">Media & OutReach <span class="arrow dropdown-trigger">&#9654;</span></a>
            <ul class="dropdown">
              <li><a href="./media.html#news">News & Events</a></li>
              <li><a href="./media.html#social">Social Media Feed</a></li>
              <li><a href="./media.html#newsletter">Newsletter</a></li>
              <li><a href="./media.html#gallery">Gallery</a></li>
              <li><a href="./media.html#press">Press Releases</a></li>
              <li><a href="./videogallery.html">Video Gallery</a></li>
            </ul>
          </li>
          <li><a href="nmc.html" class="nmc-nav">NMC</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="overlay" id="overlay"></div>`;



    
  
    document.getElementById('topbar').innerHTML=topbar
    document.getElementById("header").innerHTML=header;

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
      { title: 'Medicine & Super Specialties', path: 'Hospital > Departments > Medicine & Super Specialties', url: './MedicalSuperSpecialties.html' },
      { title: 'Doctors', path: 'Hospital > Doctors', url: './doctors.html' },
      { title: 'Blood Bank', path: 'Hospital > Blood Bank', url: './bloodcamp.html' },
      { title: 'Research & Innovation', path: 'Research', url: 'research.html' },
      { title: 'Media & OutReach', path: 'Media', url: './media.html' },
      { title: 'News & Events', path: 'Media > News & Events', url: './media.html#news' },
      { title: 'Gallery', path: 'Media > Gallery', url: './media.html#gallery' },
      { title: 'Video Gallery', path: 'Media > Video Gallery', url: './videogallery.html' },
      { title: 'NMC Guidelines', path: 'NMC', url: '#' }
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