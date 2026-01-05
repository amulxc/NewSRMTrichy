 // JSON Data
        const patientData = {
            rules: {
                title: "Rights & Responsibilities",
                icon: "fas fa-clipboard-list",
                items: [
                    "All patients must register at the reception before consultation",
                    "Carry a valid ID proof and previous medical records",
                    "Maintain silence in hospital premises and waiting areas",
                    "Follow visiting hours strictly (10 AM - 12 PM, 4 PM - 6 PM)",
                    "Maximum 2 attendants allowed per patient in wards",
                    "Mobile phones must be on silent mode inside hospital",
                    "Smoking and alcohol consumption strictly prohibited"
                ]
            },
            schedules: {
                title: "OPD Schedules",
                icon: "fas fa-calendar-alt",
                items: [
                    { department: "General Medicine",time: "8 AM - 4 PM" },
                    { department: "Cardiology",time: "8 AM - 4 PM" },
                    { department: "Orthopedics",time: "8 AM - 4 PM" },
                    { department: "Pediatrics",time: "8 AM - 4 PM" },
                    { department: "Gynecology",time: "8 AM - 4 PM" },
                    { department: "Dermatology",time: "8 AM - 4 PM" },
                    { department: "ENT",time: "8 AM - 4 PM" }
                ]
            }
        };

        const healthPackages = [
            {
                id: "basic",
                name: "Basic Screening",
                title: "Basic Health Package",
                price: "₹1,999",
                tests: [
                    "Complete Blood Count",
                    "Blood Sugar (Fasting)",
                    "Lipid Profile",
                    "Kidney Function Test",
                    "Liver Function Test",
                    "Urine Analysis",
                    "ECG",
                    "Chest X-Ray"
                ]
            },
            {
                id: "executive",
                name: "Executive Health",
                title: "Executive Health Package",
                price: "₹4,999",
                tests: [
                    "All Basic Package Tests",
                    "Thyroid Profile",
                    "Vitamin D & B12",
                    "2D Echo",
                    "TMT (Treadmill Test)",
                    "USG Abdomen",
                    "Physician Consultation",
                    "Dietician Consultation"
                ]
            },
            {
                id: "cardiac",
                name: "Cardiac Care",
                title: "Cardiac Care Package",
                price: "₹3,499",
                tests: [
                    "Lipid Profile (Advanced)",
                    "ECG",
                    "2D Echo",
                    "TMT (Treadmill Test)",
                    "Chest X-Ray",
                    "Blood Sugar Tests",
                    "Cardiac Markers",
                    "Cardiologist Consultation"
                ]
            },
            {
                id: "diabetes",
                name: "Diabetes Management",
                title: "Diabetes Management",
                price: "₹2,799",
                tests: [
                    "HbA1c (Glycated Hemoglobin)",
                    "Fasting Blood Sugar",
                    "Post Prandial Sugar",
                    "Kidney Function Test",
                    "Lipid Profile",
                    "Urine Microalbumin",
                    "Eye Examination",
                    "Diabetologist Consultation"
                ]
            },
            {
                id: "women",
                name: "Women's Health",
                title: "Women's Health Package",
                price: "₹3,999",
                tests: [
                    "Complete Blood Count",
                    "Thyroid Profile",
                    "Vitamin D & B12",
                    "Bone Density Test",
                    "Mammography",
                    "Pap Smear",
                    "USG Pelvis",
                    "Gynecologist Consultation"
                ]
            }
        ];

        const insuranceAgencies = [
            {
                "agency_id": "SBI_General",
                "name": "SBI General Insurance",
                "icon": "fas fa-university",
                "color": "#1e90ff",
                "link": "https://www.sbigeneral.in"
            },
            {
                "agency_id": "HDFC_ERGO",
                "name": "HDFC ERGO Health Insurance",
                "icon": "fas fa-building-columns",
                "color": "#0047ab",
                "link": "https://www.hdfcergo.com"
            },
            {
                "agency_id": "ICICI_Lombard",
                "name": "ICICI Lombard",
                "icon": "fas fa-landmark",
                "color": "#ff6f00",
                "link": "https://www.icicilombard.com"
            },
            {
                "agency_id": "Star_Health",
                "name": "Star Health Insurance",
                "icon": "fas fa-star-of-life",
                "color": "#e74c3c",
                "link": "https://www.starhealth.in"
            },
            {
                "agency_id": "United_India",
                "name": "United India Insurance",
                "icon": "fas fa-shield-halved",
                "color": "#2ecc71",
                "link": "https://www.uiic.co.in"
            },
            {
                "agency_id": "New_India",
                "name": "New India Assurance",
                "icon": "fas fa-shield",
                "color": "#27ae60",
                "link": "https://www.newindia.co.in"
            },
            {
                "agency_id": "Oriental",
                "name": "Oriental Insurance",
                "icon": "fas fa-umbrella",
                "color": "#8e44ad",
                "link": "https://orientalinsurance.org.in"
            },
            {
                "agency_id": "Tata_AIG",
                "name": "Tata AIG Insurance",
                "icon": "fas fa-briefcase-medical",
                "color": "#34495e",
                "link": "https://www.tataaig.com"
            },
            {
                "agency_id": "Reliance",
                "name": "Reliance General Insurance",
                "icon": "fas fa-hand-holding-medical",
                "color": "#d35400",
                "link": "https://www.reliancegeneral.co.in"
            },
            {
                "agency_id": "Bajaj_Allianz",
                "name": "Bajaj Allianz",
                "icon": "fas fa-heart-pulse",
                "color": "#f39c12",
                "link": "https://www.bajajallianz.com"
            }
        ];


        const sortedinsuranceAgencies = insuranceAgencies
          .slice().sort((a, b) => a.name.localeCompare(b.name));


        let SpecialityCard = sortedinsuranceAgencies.map(e => {
          const iconInner = e["Icon-Name"] ? e["Icon-Name"] : "";

          return `
          <a href="${e.link}" target="_blank">
            <div class="infra-spec-card">
                <div class="infra-icon-image" style="background-color:${e.color}">
                  <i class="${e.icon}">${iconInner}</i>
                </div>
                <div class="infra-icon-title">${e.name}</div>
              </div>
            </a>
          `;
        }).join("");

        document.getElementById("Specialties").innerHTML = SpecialityCard;

        // Render Patient Information
        function renderPatientInfo() {
            const container = document.getElementById('patientInfo');
            
            // Rules Card
            const rulesCard = `
                <div class="info-card">
                    <h3><i class="${patientData.rules.icon}"></i> ${patientData.rules.title}</h3>
                    <ul class="rules-list">
                        ${patientData.rules.items.map(item => `
                            <li>
                                <i class="fas fa-check-circle"></i>
                                <span>${item}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            
            // Schedules Card
            const schedulesCard = `
                <div class="info-card">
                    <h3><i class="${patientData.schedules.icon}"></i> ${patientData.schedules.title}</h3>
                    <ul class="schedule-list">
                        ${patientData.schedules.items.map(item => `
                            <li>
                                <div class="schedule-item">
                                    <span class="schedule-dept">${item.department}</span>
                                    <span class="schedule-time">${item.time}</span>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            
            container.innerHTML = rulesCard + schedulesCard;
        }

        // Render Health Packages
        function renderHealthPackages() {
            const tabsContainer = document.getElementById('packageTabs');
            const contentContainer = document.getElementById('packageContent');
            
            // Render Tabs
            tabsContainer.innerHTML = healthPackages.map((pkg, index) => `
                <button class="tab-btn ${index === 0 ? 'active' : ''}" onclick="showTab('${pkg.id}')">
                    ${pkg.name}
                </button>
            `).join('');
            
            // Render Content
            contentContainer.innerHTML = healthPackages.map((pkg, index) => `
                <div id="${pkg.id}" class="tab-content ${index === 0 ? 'active' : ''}">
                    <div class="package-details">
                        <div class="package-card">
                            <h4>${pkg.title}</h4>
                            <div class="price">${pkg.price}</div>
                            <ul>
                                ${pkg.tests.map(test => `
                                    <li><i class="fas fa-check"></i> ${test}</li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        

        // Tab switching functionality
        function showTab(tabId) {
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.remove('active'));

            const tabButtons = document.querySelectorAll('.tab-btn');
            tabButtons.forEach(button => button.classList.remove('active'));

            document.getElementById(tabId).classList.add('active');
            event.target.classList.add('active');
        }

        // Swiper navigation
        function scrollSwiper(direction) {
            const swiper = document.getElementById('insuranceSwiper');
            const scrollAmount = 360;

            if (direction === 'left') {
                swiper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                swiper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }

        // Auto-scroll functionality
        let autoScrollInterval;
        const swiper = document.getElementById('insuranceSwiper');
        
        function startAutoScroll() {
            autoScrollInterval = setInterval(() => {
                const maxScroll = swiper.scrollWidth - swiper.clientWidth;
                
                if (swiper.scrollLeft >= maxScroll) {
                    swiper.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    swiper.scrollBy({ left: 360, behavior: 'smooth' });
                }
            }, 3000);
        }

        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderPatientInfo();
            renderHealthPackages();
            
            // Start auto-scroll
            startAutoScroll();
            
            // Pause auto-scroll on hover
            swiper.addEventListener('mouseenter', stopAutoScroll);
            swiper.addEventListener('mouseleave', startAutoScroll);
            
            // Pause auto-scroll when manually scrolling
            swiper.addEventListener('scroll', () => {
                stopAutoScroll();
                clearTimeout(swiper.scrollTimeout);
                swiper.scrollTimeout = setTimeout(startAutoScroll, 5000);
            });
        });