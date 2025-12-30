 (function() {
      'use strict';

      const menuToggle = document.getElementById('menuToggle');
      const offcanvasMenu = document.getElementById('offcanvasMenu');
      const overlay = document.getElementById('overlay');

      function isMobile() {
        return window.innerWidth <= 992;
      }

      // Toggle mobile menu
      menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        menuToggle.classList.toggle('active');
        offcanvasMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        document.body.style.overflow = offcanvasMenu.classList.contains('active') ? 'hidden' : '';
      });

      // Close menu when clicking overlay
      overlay.addEventListener('click', function() {
        closeMenu();
      });

      function closeMenu() {
        menuToggle.classList.remove('active');
        offcanvasMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Close all dropdowns
        document.querySelectorAll('.has-dropdown, .has-submenu').forEach(function(item) {
          item.classList.remove('open');
        });
        document.querySelectorAll('.dropdown, .sub-dropdown').forEach(function(menu) {
          menu.classList.remove('show');
        });
      }

      // Handle all dropdown triggers - CLICK/TOUCH ONLY
      document.querySelectorAll('.dropdown-trigger').forEach(function(trigger) {
        // Prevent default link behavior on mobile
        trigger.addEventListener('click', function(e) {
          if (isMobile()) {
            e.preventDefault();
            e.stopPropagation();
            
            const parent = this.closest('.has-dropdown');
            const dropdown = parent.querySelector('.dropdown');
            const isOpen = parent.classList.contains('open');
            
            // Close all other dropdowns
            document.querySelectorAll('.has-dropdown').forEach(function(item) {
              if (item !== parent) {
                item.classList.remove('open');
                const otherDropdown = item.querySelector('.dropdown');
                if (otherDropdown) {
                  otherDropdown.classList.remove('show');
                }
                // Close all submenus inside
                item.querySelectorAll('.has-submenu').forEach(function(sub) {
                  sub.classList.remove('open');
                  const subDropdown = sub.querySelector('.sub-dropdown');
                  if (subDropdown) {
                    subDropdown.classList.remove('show');
                  }
                });
              }
            });
            
            // Toggle current dropdown
            if (isOpen) {
              parent.classList.remove('open');
              dropdown.classList.remove('show');
            } else {
              parent.classList.add('open');
              dropdown.classList.add('show');
            }
          }
        });

        // Also handle touch events
        trigger.addEventListener('touchend', function(e) {
          if (isMobile()) {
            e.preventDefault();
            e.stopPropagation();
            this.click();
          }
        });
      });

      // Handle all submenu triggers - CLICK/TOUCH ONLY
      document.querySelectorAll('.submenu-trigger').forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
          if (isMobile()) {
            e.preventDefault();
            e.stopPropagation();
            
            const parent = this.closest('.has-submenu');
            const submenu = parent.querySelector('.sub-dropdown');
            const isOpen = parent.classList.contains('open');
            
            // Close other submenus in same dropdown
            const parentDropdown = parent.closest('.dropdown');
            if (parentDropdown) {
              parentDropdown.querySelectorAll('.has-submenu').forEach(function(item) {
                if (item !== parent) {
                  item.classList.remove('open');
                  const otherSubmenu = item.querySelector('.sub-dropdown');
                  if (otherSubmenu) {
                    otherSubmenu.classList.remove('show');
                  }
                }
              });
            }
            
            // Toggle current submenu
            if (isOpen) {
              parent.classList.remove('open');
              submenu.classList.remove('show');
            } else {
              parent.classList.add('open');
              submenu.classList.add('show');
            }
          }
        });

        // Also handle touch events
        trigger.addEventListener('touchend', function(e) {
          if (isMobile()) {
            e.preventDefault();
            e.stopPropagation();
            this.click();
          }
        });
      });

      // Handle window resize
      window.addEventListener('resize', function() {
        if (!isMobile()) {
          closeMenu();
        }
      });
    })();
        // Hero Slider
        const heroSwiper = new Swiper('.hero-slider', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        });

        // Events Slider
        const eventsSwiper = new Swiper('.events-slider', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            spaceBetween: 30,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });


        const counters = document.querySelectorAll('.stat h3, .stat-number,.stat-box h3');
        const speed = 30;

        const animateCounter = (counter) => {
            const target = counter.innerText;
            const isPercentage = target.includes('%');
            const numericValue = parseInt(target.replace(/[^\d]/g, ''));
            let count = 0;
            
            const updateCount = () => {
                const increment = numericValue / speed;
                if (count < numericValue) {
                    count += increment;
                    if (isPercentage) {
                        counter.innerText = Math.ceil(count) + '%';
                    } else if (target.includes('+')) {
                        counter.innerText = Math.ceil(count).toLocaleString() + '+';
                    } else if (target.includes('B')) {
                        counter.innerText = Math.ceil(count) + 'B';
                    } else {
                        counter.innerText = Math.ceil(count).toLocaleString();
                    }
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });


        // Floating Social Media Toggle
        const socialToggle = document.getElementById('socialToggle');
        const socialToggle1 = document.getElementById('socialToggle1');
        const contentBox= document.getElementById('content1');
        const socialLinks = document.getElementById('socialLinks');
        const socialLinks1 = document.getElementById('socialLinks1');


        /* RIGHT SIDE SOCIAL */
        socialToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            socialToggle.classList.toggle('active');
            socialLinks.classList.toggle('active');
        });

        

        contentBox.addEventListener('click', (e) => {
            e.stopPropagation();
            socialToggle1.classList.toggle('active');
            socialLinks1.classList.toggle('active');
        });

       
       

     
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', function() {
                const item = this.parentElement;
                const isActive = item.classList.contains('active');
                
                // Close all accordion items in the same accordion
                const accordion = this.closest('.accordion');
                accordion.querySelectorAll('.accordion-item').forEach(accItem => {
                    accItem.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const item = this.parentElement;
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(faqItem => {
                    faqItem.classList.remove('active');
                });
                
                // Toggle current FAQ item (open if it wasn't active)
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
         // Initialize all swipers
        const swiperConfigs = [
            '.news-swiper',
            '.social-swiper',
            '.newsletter-swiper',
            '.gallery-swiper',
            '.press-swiper'
        ];

        swiperConfigs.forEach(selector => {
            new Swiper(selector, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: `${selector} .swiper-pagination`,
                    clickable: true,
                },
                navigation: {
                    nextEl: `${selector} .swiper-button-next`,
                    prevEl: `${selector} .swiper-button-prev`,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            });
        });
     
    