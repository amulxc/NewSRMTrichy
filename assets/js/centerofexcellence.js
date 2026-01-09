  // Complete JSON Data
        const data = {
            "website": {
                "title": "Centers of Excellence | Healthcare Innovation",
                "meta": {
                    "description": "World-class specialized care delivering exceptional outcomes through innovation, expertise, and compassion"
                }
            },
            "hero": {
                "heading": "Centers of Excellence",
                "subheading": "World-class specialized care delivering exceptional outcomes through innovation, expertise, and compassion"
            },
            "sections": {
                "centers": {
                    "title": "Our Specialized Centers",
                    "description": "Comprehensive care delivered by leading specialists using cutting-edge technology and evidence-based practices",
                    "centers": [
                        {
                            "id": "cardio-vascular",
                            "name": "Cardio Vascular & Thoracic Surgery",
                            "icon": "ecg_heart",
                            "iconType": "material",
                            "iconColor": "#f44336",
                            "description": "Provides advanced cardiac and thoracic surgical care emphasizing safety, pain-free recovery, rehabilitation, and quality outcomes.",
                            "features": [
                               "24×7 intensive care unit and trauma care services",
                                "State-of-the-art operation theatres with advanced cardiothoracic facilities",
                                "Heart–lung machine for open heart surgeries",
                                "Advanced patient monitoring systems",
                                "Infusion and syringe pump devices , Mechanical circulatory support devices"
                            ],
                            "animationDelay": "0.1s"
                        },
                        {
                            "id": "neurosurgery",
                            "name": "Neurosurgery",
                            "icon": "fa-brain",
                            "iconType": "fontawesome",
                            "iconColor": "#9c27b0",
                            "description": "Comprehensive neurological care combining expertise in neurology and neurosurgery.",
                            "features": [
                                "OPD rooms", "Inpatient wards", "ICU", "Procedure room"
                            ],
                            "animationDelay": "0.2s"
                        },
                        {
                            "id": "urology",
                            "name": "Urology",
                            "icon": "urology",
                            "iconType": "material",
                            "iconColor": "#009688",
                            "description": "Comprehensive urological care with advanced diagnostic and treatment facilities.",
                            "features": [
                                "OPD rooms", "Inpatient wards", "ICU", "Procedure room"
                            ],
                            "animationDelay": "0.3s"
                        },
                        {
                            "id": "surgical-oncology",
                            "name": "Surgical Oncology",
                            "icon": "oncology",
                            "iconType": "material",
                            "iconColor": "#53a766",
                            "description": "Provides comprehensive, evidence-based surgical care for tumors, emphasizing safety, multidisciplinary approach, optimal outcomes, and recovery.",
                            "features": [
                                "Head and Neck Cancer","Breast Cancer","Thyroid Cancer","Soft Tissue and Bone Sarcoma","Esophageal Cancer","Gastrointestinal Cancer"
                            ],
                            "animationDelay": "0.4s"
                        },
                        {
                            "id": "surgical-gastroenterology",
                            "name": "Surgical Gastroenterology",
                            "icon": "gastroenterology",
                            "iconType": "material",
                            "iconColor": "#ff69b4",
                            "description": "Advanced surgical care for gastrointestinal disorders with minimally invasive techniques.",
                            "features": [
                                "OPD rooms", "Inpatient wards", "ICU", "Procedure room"
                            ],
                            "animationDelay": "0.5s"
                        },
                        {
                            "id": "plastic-reconstructive",
                            "name": "Plastic and Reconstructive Surgery",
                            "icon": "fa-user-alt",
                            "iconType": "fontawesome",
                            "iconColor": "#ffc107",
                            "description": "Provides comprehensive curative, reconstructive, aesthetic, and trauma care with evidence-based practice and advanced surgical expertise.",
                            "features": [
                                "Dedicated clinical unit",
                                "Teaching and academic facilities",
                                "Reconstructive surgical care unit",
                                "Aesthetic surgery facilities",
                                "Trauma and burn care support"
                            ],
                            "animationDelay": "0.6s"
                        }
                    ]
                },
                "statistics": {
                    "title": "Our Impact",
                    "stats": [
                        {
                            "value": 98,
                            "suffix": "%",
                            "label": "Patient Satisfaction"
                        },
                        {
                            "value": 50000,
                            "suffix": "+",
                            "label": "Procedures Annually"
                        },
                        {
                            "value": 250,
                            "suffix": "+",
                            "label": "Specialist Physicians"
                        },
                        {
                            "value": 15,
                            "suffix": "+",
                            "label": "Years of Excellence"
                        }
                    ]
                },
                "achievements": {
                    "title": "Our Achievements",
                    "description": "Recognition for excellence in patient care, research, and innovation",
                }
            }
        };

        // Helper function to render icon based on type
        function renderIcon(icon, iconType) {
            if (iconType === 'material') {
                return `<i class="material-symbols-outlined">${icon}</i>`;
            } else {
                return `<i class="fas ${icon}"></i>`;
            }
        }



        function renderCenters() {
            const centersHTML = data.sections.centers.centers.map(center => `
                <div class="coe-center-card" style="animation-delay: ${center.animationDelay};">
                    <div class="coe-center-icon" style="background: ${center.iconColor}1a; color: ${center.iconColor};">
                        ${renderIcon(center.icon, center.iconType)}
                    </div>
                    <h3>${center.name}</h3>
                    <p>${center.description}</p>
                    <ul class="coe-center-features">
                        ${center.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <a class="coe-learn-more-btn" href="SurgerySuperSpecialties.html?dept=${center.id}">Learn More</a>
                </div>
            `).join('');

            return `
                <section class="coe-section">
                    <div class="coe-container">
                        <div class="coe-section-title">
                            <h2>${data.sections.centers.title}</h2>
                            <p>${data.sections.centers.description}</p>
                        </div>
                        <div class="coe-centers-grid">
                            ${centersHTML}
                        </div>
                    </div>
                </section>
            `;
        }

        function renderStats() {
            const statsHTML = data.sections.statistics.stats.map(stat => `
                <div class="coe-stat-item">
                    <span class="coe-stat-number" data-target="${stat.value}">0</span>
                    <span class="coe-stat-label">${stat.suffix ? stat.suffix + ' ' : ''}${stat.label}</span>
                </div>
            `).join('');

            return `
                <section class="coe-stats-section">
                    <div class="coe-container">
                        <div class="coe-stats-grid">
                            ${statsHTML}
                        </div>
                    </div>
                </section>
            `;
        }

        function renderAchievements() {
            

            return `
                <section class="coe-section coe-achievements-section">
                    <div class="coe-container">
                        <div class="coe-section-title">
                            <h2>${data.sections.achievements.title}</h2>
                            <p>${data.sections.achievements.description}</p>
                        </div>
                        <div class="milestone-grid">
                            <div class="milestone-card">
                            <img src="https://upload.wikimedia.org/wikipedia/en/1/1d/NAAC_LOGO.png" width="80px" alt="">
                            <h4>NAAC Accredited</h4>
                            <p>A+ Grade accreditation from National Assessment and Accreditation Council</p>
                        </div>
                        <div class="milestone-card">
                            <img src="https://inodayahospitals.com/wp-content/uploads/2024/07/nabh-accreditated-inodaya-hospital.png" width="120px" alt="">
                            <h4>NABH Certified</h4>
                            <p>National Accreditation Board for Hospitals & Healthcare Providers certification</p>
                        </div>
                        <div class="milestone-card">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/NABL_Official_LOGO_Registered.png/250px-NABL_Official_LOGO_Registered.png" width="60px" alt="">
                            <h4>NABL Certified</h4>
                            <p>National Accreditation Board for Testing and Calibration Laboratories</p>
                        </div>
                        <div class="milestone-card">
                            <img src="./assets/images/silver-medal.png" width="130px" alt="">
                            <h4>PM JAY</h4>
                            <p>Diamond Rating from QS I-GAUGE for excellence in education</p>
                        </div>
                        </div>
                    </div>
                </section>
            `;
        }

        // Initialize App
        function initApp() {
            const app = document.getElementById('app');
            app.innerHTML = `
                ${renderCenters()}
                ${renderStats()}
                ${renderAchievements()}
            `;

            // Initialize animations and interactions
            initObservers();
            initStatsAnimation();
        }

        // Intersection Observer for fade-in animations
        function initObservers() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('coe-fade-in-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.coe-center-card, .coe-achievement-card').forEach(el => {
                observer.observe(el);
            });
        }

        // Counter animation for stats
        function animateCounter(element, target) {
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    element.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target.toLocaleString();
                }
            };

            updateCounter();
        }

        function initStatsAnimation() {
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        document.querySelectorAll('.coe-stat-number').forEach((stat, index) => {
                            const target = data.sections.statistics.stats[index].value;
                            animateCounter(stat, target);
                        });
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            const statsSection = document.querySelector('.coe-stats-section');
            if (statsSection) {
                statsObserver.observe(statsSection);
            }
        }


        function handleAppointment() {
            alert('Redirecting to appointment booking system...');
        }

        function handleContact() {
            alert('Opening contact form...');
        }

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', initApp);