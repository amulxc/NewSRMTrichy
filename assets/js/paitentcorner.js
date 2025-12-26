 // JSON Data
        const patientData = {
            rules: {
                title: "Rules & Regulations",
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
                    { department: "General Medicine", time: "9 AM - 2 PM" },
                    { department: "Cardiology", time: "10 AM - 1 PM" },
                    { department: "Orthopedics", time: "9 AM - 3 PM" },
                    { department: "Pediatrics", time: "8 AM - 1 PM" },
                    { department: "Gynecology", time: "10 AM - 2 PM" },
                    { department: "Dermatology", time: "11 AM - 3 PM" },
                    { department: "ENT", time: "9 AM - 1 PM" }
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

        const insuranceSchemes = [
            {
                name: "HDFC Ergo",
                icon: "fas fa-hospital",
                color: "var(--color-accent-red)",
                features: [
                    "Cashless Treatment Available",
                    "No Room Rent Limit",
                    "Pre & Post Hospitalization",
                    "Day Care Procedures Covered",
                    "Ambulance Charges Included"
                ]
            },
            {
                name: "Star Health Insurance",
                icon: "fas fa-star",
                color: "var(--color-accent-yellow-top)",
                features: [
                    "Cashless Claims Facility",
                    "Quick Claim Settlement",
                    "24x7 Customer Support",
                    "Health Check-ups Included",
                    "Maternity Benefits Available"
                ]
            },
            {
                name: "ICICI Lombard",
                icon: "fas fa-medkit",
                color: "var(--color-primary)",
                features: [
                    "Instant E-Card Approval",
                    "No Pre-Policy Check-up",
                    "Worldwide Coverage",
                    "Unlimited E-Consultation",
                    "Restoration of Sum Insured"
                ]
            },
            {
                name: "Ayushman Bharat (PMJAY)",
                icon: "fas fa-hands-helping",
                color: "var(--color-secondary)",
                features: [
                    "Coverage up to ₹5 Lakhs",
                    "Cashless & Paperless Treatment",
                    "Secondary & Tertiary Care",
                    "Pre-existing Conditions Covered",
                    "Free for Eligible Families"
                ]
            },
            {
                name: "Mediassist",
                icon: "fas fa-user-md",
                color: "var(--color-purple)",
                features: [
                    "Corporate Health Insurance",
                    "Pre-Authorization in 4 Hours",
                    "Extensive Network Hospitals",
                    "Family Floater Benefits",
                    "Annual Health Check-ups"
                ]
            },
            {
                name: "New India Assurance",
                icon: "fas fa-heartbeat",
                color: "var(--color-teal)",
                features: [
                    "Mediclaim Policy Available",
                    "Critical Illness Coverage",
                    "Tax Benefits under 80D",
                    "Domiciliary Hospitalization",
                    "AYUSH Treatment Covered"
                ]
            },
            {
                name: "Reliance General",
                icon: "fas fa-shield-virus",
                color: "var(--color-navy)",
                features: [
                    "Health Gain Policy",
                    "No Sub-Limits on Expenses",
                    "Lifetime Renewability",
                    "Wellness Programs Included",
                    "Global Coverage Option"
                ]
            },
            {
                name: "Care Health Insurance",
                icon: "fas fa-briefcase-medical",
                color: "var(--color-cyan)",
                features: [
                    "Unlimited Automatic Reload",
                    "Zero Waiting Period Plans",
                    "Mental Illness Coverage",
                    "Modern Treatment Covered",
                    "24x7 Health Helpline"
                ]
            },
            {
                name: "CM Health Scheme (TN)",
                icon: "fas fa-hospital-user",
                color: "var(--color-brown)",
                features: [
                    "Free Treatment for Poor",
                    "Coverage up to ₹5 Lakhs",
                    "1,500+ Procedures Covered",
                    "No Premium Required",
                    "Emergency Services Included"
                ]
            },
            {
                name: "Bajaj Allianz",
                icon: "fas fa-ambulance",
                color: "var(--color-blue-light)",
                features: [
                    "Health Guard Policy",
                    "Daily Hospital Cash Benefit",
                    "Emergency Road Ambulance",
                    "Organ Donor Expenses",
                    "COVID-19 Treatment Covered"
                ]
            }
        ];

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

        // Render Insurance Schemes
        function renderInsuranceSchemes() {
            const container = document.getElementById('insuranceSwiper');
            
            container.innerHTML = insuranceSchemes.map(scheme => `
                <div class="insurance-card">
                    <div class="insurance-logo" style="color: ${scheme.color};">
                        <i class="${scheme.icon}"></i>
                    </div>
                    <h4>${scheme.name}</h4>
                    <ul class="insurance-features">
                        ${scheme.features.map(feature => `
                            <li><i class="fas fa-check-circle"></i> ${feature}</li>
                        `).join('')}
                    </ul>
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
            renderInsuranceSchemes();
            
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