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
                    <a class="coe-learn-more-btn" href="depart_specialities.html?dept=${center.name}">Learn More</a>
                </div>
            `).join('');

            return `
                <section class="coe-section">
                    <div class="coe-container">
                        <div class="section-header">
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

       
       

        // Initialize App
        function initApp() {
            const app = document.getElementById('app');
            app.innerHTML = `
                ${renderCenters()}
            `;

            // Initialize animations and interactions
        }

     
           


        // Initialize on page load
        document.addEventListener('DOMContentLoaded', initApp);