 // All pharmacy data in JSON format
        const pharmacyData = {
            "hero": {
                "title": "24 Hours Pharmacy",
                "subtitle": "Providing round-the-clock pharmaceutical care for your health needs"
            },
            "stats": [
                {
                    "number": "15",
                    "label": "Pharmacists",
                    "description": "with Qualified chief pharmacists manages the pharmacy division"
                },
                {
                    "number": "15",
                    "label": "Drug Information Center",
                    "description": "we are running a 24 hours drug information center efficiently"
                }   
            ],
            "services": {
                "title": "Services",
                "description": "We have one main pharmacy on campus and two more at the Rural Health Centre (Vazhadi) and Urban Health Centre (Samayapuram), and the main pharmacy includes",
                "items": [
                    {
                        "title": "Main Store",
                        "description": "Main store where purchase orders are made and receive the stocks of all medicines and surgical items. From there, we distribute medicines throughout the college hospital after properly updating medicines indent using software to maintain the indent of medicines from different departments of our college hospital to the main central store and various wards of our college hospital through proper indent and received by concerned department persons."
                    },
                    {
                        "title": "Free Pharmacy",
                        "description": "Free Pharmacy Where we receive medicines from main store are dispensed around po medicines free of cost through our pharmacy covering a unit cost of around Rs.80,00,000/- per month. Function time of free Pharmacy is from 8am to 4Pm."
                    }
                ]
            },
            "licenses": {
                "title": "Licenses",
                "items": [
                    {
                        "title": "Pharmacy License",
                        "description": "Our Pharmacy is approved by the Drug Control of Tamilnadu and got the pharmacy license to sell the drugs."
                    },
                    {
                        "title": "Narcotic License",
                        "description": "Our Pharmacy has been approved for selling and supply of the Narcotic drugs."
                    }
                ]
            },
            "administration": {
                "title": "Administration",
                "items": [
                    {
                        "title": "Drug Committee Meeting",
                        "description": "Headed by Dean and members are the professors of all departments. Every month on third Thursday we conduct Drug committee meeting where decisions made regarding pharmacy. Prof D.Gnanasekaran ( head of Medicine) is the coordinator for Drug committee and Head of pharmacy. He takes care of purchase of drugs and he will send the purchase order of medicines & surgical items are decided by Heads of various departments at the meeting. Any various problems and Pharmacy is decided by Dean and members of the drug committee."
                    }
                ]
            },
            "pricing": {
                "title": "Pricing of drugs",
                "items": [
                    {
                        "title": "Discounts",
                        "description": "At present discounts are allowed for our staffs, students, some poor patients and poor patients of Life with approval by Dean or MS or CMD."
                    },
                    {
                        "title": "Prescription Policy",
                        "description": "Full fledged poly pharmacy commenced from November 2005. Our Doctors prescribe free medicines in white prescription and others in green prescription."
                    }
                ]
            },
            "staffPattern": {
                "title": "Staff pattern",
                "items": [
                    {
                        "title": "Pharmacy Team",
                        "description": "At present our pharmacy has 20 staff. i.e. one chief pharmacist with MPharm degree, six pharmacists- with B Pharm, remaining with B pharm. A clerical staff and one attender. They work in three shifts a day. Additionally we have 2 pharmacists at rural health centre (vazhadi) & one pharmacist at urban health centre (samayapuram)."
                    },
                    {
                        "title": "Operating Hours",
                        "description": "Our pharmacy functions 24 hours, all week days in 24x7."
                    }
                ]
            },
            "additionalServices": {
                "title": "Additional Services",
                "columns": [
                    {
                        "title": "Drug Information Center",
                        "description": "Our Chief Pharmacist is the head of Drug Information Center. Any patient can get information regarding all drugs including newer drugs.",
                        "items": []
                    },
                    {
                        "title": "Research Work",
                        "description": "Chief pharmacist involved in the pharmaceutical research movements in the pharmacy and presented five research papers in the pharmaceutical department of our college and department of pharmacology.",
                        "items": []
                    },
                    {
                        "title": "Pharmacovigilance Center",
                        "description": "Our Pharmacy division also involves in the pharmacovigilance activities of the college and hospital.",
                        "items": []
                    }
                ]
            },
            "futurePlans": {
                "title": "Future Plans",
                "columns": [
                    {
                        "title": "Expansion",
                        "description": "The chancellor advised to having the counselling center for the people who visit pharmacy as well also to highlight the services as well as to dissipate the good word.",
                        "items": []
                    },
                    {
                        "title": "Unit Pharmacies",
                        "description": "To develop sub pharmacies in each floor of our college hospital.",
                        "items": []
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
                            <div class="pharm-stat-number">${stat.number}</div>
                            <div class="pharm-stat-label">${stat.label}</div>
                            <span class="pharm-stat-description">${stat.description}</span>
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
                                    <span>${column.description}</span>
                                    ${column.items.length > 0 ? `
                                        <ul>
                                            ${column.items.map(item => `<li>${item}</li>`).join('')}
                                        </ul>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>`;
            
            app.innerHTML = html;
        }

        // Initialize the page
        renderPharmacyPage(pharmacyData);