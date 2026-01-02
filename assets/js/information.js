 // All pharmacy data in JSON format
        const pharmacyData = {
            "hero": {
                "title": "24 Hours Pharmacy",
                "subtitle": "Providing round-the-clock pharmaceutical care for your health needs"
            },
            "stats": [
                {
                    "label": "Ramapuram",
                    "mobile_number": "9854444432"
                },
                {
                    "label": "Trichy",
                    "mobile_number": "9854444432"
                },
                {
                    "label": "Samayapuram",
                    "mobile_number": "9854444432"
                }
            ],
            "additionalServices": {
                "title": "Informations",
                "columns": [
                    {
                        "title": "Patient <br>Registration​",
                    },
                    {
                        "title": "Health Check Appointments​",
                    },
                    {
                        "title": "Arogya Card Applications​",
                    },
                    {
                        "title": "Hospital<br> Information​​",
                    },
                    {
                        "title": "Doctors’ <br> Availability​​",
                    },
                    {
                        "title": "Information on Schemes and Insurance​​",
                    }
                ]
            }
        };

        // Render the pharmacy page
        function renderPharmacyPage(data) {
            const app = document.getElementById('pharm-app');
            
            let html = `
                <!-- Hero Section -->
               
                <!-- Stats Section -->
                <div class="pharm-stats">
                    ${data.stats.map(stat => `
                        <div class="pharm-stat-card">
                            <div class="pharm-stat-label">${stat.label}</div>
                            <a href='tel:${stat.mobile_number}'><i class='fa fa-phone'></i> ${stat.mobile_number}</a>
                        </div>
                    `).join('')}
                </div>

                <!-- Services Section -->
                <section class="section">
                    <div class="pharm-container section-header">
                         <h2 class="pharm-section-title">${data.additionalServices.title}</h2>
                        <div class="pharm-services-columns">
                            ${data.additionalServices.columns.map(column => `
                                <div class="pharm-service-column">
                                    <h3>${column.title}</h3>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>`;
            
            app.innerHTML = html;
        }

        // Initialize the page
        renderPharmacyPage(pharmacyData);