const activities = [
            {
                title: "International seminar",
                date: "26 Nov 2025",
                description: "Dr. Des Richardson, M.Sc., Ph.D., D.Sc., F.FSc., FRCPath, FRACI CCHEM, Director, Centre for Cancel Cell Biology and Drug Discovery, Griffith University, Queensland, Australia. His research experiences are very vast and delivered his lecture on “Design and development of new anti-cancer drugs: the artificial intelligence revolution”.",
                icon: "fa-university",
                image: "./assets/images/irpc/1.jpg"
            },
            {
                title: "International seminar",
                date: "11 Dec 2025",
                description: "Dr. Mats Brannstrom is Professor and Chairman, Department of Obstetrics and Gynecology, Institute of Clinical Sciences, University of Gothenburg, Sweden. He is also Senior Consultant of Gynecology and Reproductive Medicine at Sahlgrenska University Hospital. Dr. Mats shared his clinical experiences of uterus transplantation from deceased donor and transplant to recipient with uterine infertility",
                icon: "fa-robot",
                image: "./assets/images/irpc/2.jpg"
            },
            {
                title: "BMJ manuscript submission drive",
                date: "18 Dec 2025",
                description: "A total of 37 faculty and postgraduates participated in the TSRMMCH&RC library; A broad visionary ideas obtained regarding how to submit the manuscript in BMJ",
                icon: "fa-hand-holding-usd",
                image: "./assets/images/irpc/3.jpg"
            },
            {
                title: "Medaithon",
                date: "25 Oct 2025",
                description: "The campus institutions participated; Fifty teams competed; out of that two teams awarded",
                icon: "fa-project-diagram",
                image: "./assets/images/irpc/4.jpg"
            },
            {
                title: "EQUIP workshop",
                date: "28 Feb 2025",
                description: "Elevating quality in research through impactful publications, patents and copyright excellence",
                icon: "fa-project-diagram",
                image: "./assets/images/irpc/5.jpg"
            }
        ];

        const projects = [
           {
                title: "ICMR project",
                pi: "ICMR",
                status: "ongoing",
                description: "Development and feasibility testing of a bereavement care package for the Indian healthcare system to support parents of stillborn babies",
                duration: "30 Jul 2024",
                dept: "Community Medicine"
            },
            {
                title: "DST-FIST",
                pi: "DST",
                status: "ongoing",
                description: "Strengthening research facilities (Motorized upright microscope)",
                duration: "19 Dec 2022",
                dept: "Institutional (TSRMMCH&RC)"
            },
            {
                title: "ICMR project",
                pi: "ICMR",
                status: "completed",
                description: "Development of ICT based early warning COVID-19 surveillance model for the city of Trichy Tamilnadu",
                duration: "15 Apr 2022",
                dept: "Community Medicine"
            },
            {
                title: "ICMR-Ad-hoc project",
                pi: "ICMR",
                status: "completed",
                description: "Community based study to estimate palliative care needs in urban and rural population of Tiruchirappalli District, Tamilnadu",
                duration: "07 Feb 2022",
                dept: "Community Medicine"
            },
            {
                title: "DHR-ICMR Grant in aid project",
                pi: "DHR-ICMR",
                status: "ongoing",
                description: "Effects of Air pollutants on respiratory health of traffic police personnel of major cities of Tamilnadu – an observational study",
                duration: "24 Apr 2020",
                dept: "Community Medicine"
            },
            {
                title: "TB Association of India",
                pi: "TB Association of India",
                status: "completed",
                description: "Spirometry as a tool to motivate smoking cessation – an intervention study",
                duration: "28 Oct 2020",
                dept: "Community Medicine"
            }
        ];

        const patents = [
            {
                title: "Drug dispensing vending machine",
                status: "Published",
                year: "2024",
            },
            {
                title: "Biodegradable Polymer Composite",
                number: "202541104870",
                status: "Published",
                year: "2025",
                inventors: 3
            }
        ];

        const nationalCollaborations = [
            { 
                name: "Public Health Foundation of India", 
                location: "New Delhi, India", 
                icon: "fa-flask",
                logo: "./assets/images/irpc/logos/1.png"
            },
            { 
                name: "PGIMER", 
                location: "Chandigarh, India", 
                icon: "fa-hospital",
                logo: "./assets/images/irpc/logos/2.png"
            },
            { 
                name: "JIPMER", 
                location: "Pondicherry", 
                icon: "fa-rocket",
                logo: "./assets/images/irpc/logos/3.png"
            },
            { 
                name: "AIIMS", 
                location: "Bibinagar", 
                icon: "fa-microscope",
                logo: "./assets/images/irpc/logos/4.png"
            },
            { 
                name: "SASTRA – Deemed to be University", 
                location: "Thanjavur, Tamilnadu", 
                icon: "fa-rocket",
                logo: "./assets/images/irpc/logos/5.png"
            },
            { 
                name: "Bharathidasan University", 
                location: "Trichy, Tamilnadu", 
                icon: "fa-microscope",
                logo: "./assets/images/irpc/logos/6.png"
            }
        ];

        const internationalCollaborations = [
            { 
                name: "MIT", 
                location: "Cambridge, USA", 
                icon: "fa-graduation-cap",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/200px-MIT_logo.svg.png"
            },
            { 
                name: "Oxford University", 
                location: "Oxford, UK", 
                icon: "fa-university",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/200px-Oxford-University-Circlet.svg.png"
            },
            { 
                name: "ETH Zurich", 
                location: "Zurich, Switzerland", 
                icon: "fa-atom",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vs1_adve26tcH8cm-brzOsmOsPcdNSDimg&s"
            },
            { 
                name: "University of Tokyo", 
                location: "Tokyo, Japan", 
                icon: "fa-globe-asia",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQ9SII1A6b1BLVujY3B6nQDkmSvG1EzCHsQ&s"
            }
        ];

        const researchersData = {
            president: [{
                name: "Arun Dharmarajan",
                profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIC801LEXM0O7ZWYP4_W3Tj9YTwZ82rToeQ&s",
                position: "Director Biomedical Research",
                specialization: "Lead Researcher and Head of Research",
                publications: 45,
                projects: 12,
                citations: "2.2 CR",
                interests: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
                projectsList: [
                    "AI-Driven Healthcare Diagnostics System",
                    "Smart City Surveillance Network",
                    "Autonomous Vehicle Navigation Framework"
                ],
                publications: [
                    "Deep Learning Approaches in Medical Imaging - Nature AI, 2024",
                    "Neural Networks for Predictive Analytics - IEEE Trans, 2023",
                    "Computer Vision in Autonomous Systems - ACM Journal, 2023"
                ],
                conferences: [
                    "Keynote Speaker - International AI Conference, Singapore 2024",
                    "Panel Discussion - NeurIPS 2023, New Orleans",
                    "Workshop Organizer - CVPR 2023, Vancouver"
                ],
                patents: [
                    "AI-Powered Medical Imaging System - Patent No: PAT-2024-001",
                    "Intelligent Traffic Management System - Patent No: PAT-2023-045"
                ],
                awards: [
                    "Best Researcher Award - National Science Foundation, 2024",
                    "Excellence in AI Research - IEEE, 2023",
                    "Innovation in Healthcare Technology - Ministry of Health, 2022"
                ],
                editorial: [
                    "Associate Editor - IEEE Transactions on AI",
                    "Editorial Board Member - Journal of Machine Learning Research",
                    "Review Committee - International Conference on AI"
                ]
            },{
                name: "Dr. Priya Sharma",
                profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIC801LEXM0O7ZWYP4_W3Tj9YTwZ82rToeQ&s",
                position: "Vice President",
                specialization: "Biotechnology & Genetic Engineering",
                publications: 38,
                projects: 10,
                citations: 1850,
                interests: ["Genetic Engineering", "Molecular Biology", "Bioinformatics", "CRISPR Technology"],
                projectsList: [
                    "Gene Therapy for Rare Diseases",
                    "CRISPR-Based Cancer Treatment",
                    "Microbial Biofuel Production"
                ],
                publications: [
                    "CRISPR Applications in Gene Therapy - Cell Journal, 2024",
                    "Advances in Molecular Diagnostics - Nature Biotech, 2023",
                    "Bioinformatics Tools for Genomic Analysis - BMC Genomics, 2023"
                ],
                conferences: [
                    "Invited Speaker - International Biotechnology Summit, Berlin 2024",
                    "Research Presentation - ASHG Annual Meeting 2023",
                    "Workshop Leader - Genome Editing Conference, Boston 2023"
                ],
                patents: [
                    "Novel CRISPR Delivery System - Patent No: PAT-2024-012",
                    "Biosensor for Disease Detection - Patent No: PAT-2023-078"
                ],
                awards: [
                    "Outstanding Contribution to Biotechnology - DBT India, 2024",
                    "Women in Science Award - UNESCO, 2023",
                    "Research Excellence Award - Biotechnology Society, 2022"
                ],
                editorial: [
                    "Editorial Board - Journal of Genetic Engineering",
                    "Associate Editor - Biotechnology Advances",
                    "Reviewer - Nature Biotechnology"
                ]
            }],
            secretary: [
                {
                    name: "Dr. Amit Patel",
                    profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIC801LEXM0O7ZWYP4_W3Tj9YTwZ82rToeQ&s",
                    position: "Secretary",
                    specialization: "Renewable Energy Systems",
                    publications: 32,
                    projects: 8,
                    citations: 1450,
                    interests: ["Solar Energy", "Wind Power", "Energy Storage", "Smart Grids"],
                    projectsList: [
                        "Grid-Scale Energy Storage Solutions",
                        "Hybrid Renewable Energy Systems",
                        "Smart Grid Optimization"
                    ],
                    publications: [
                        "Advanced Solar Cell Technologies - Solar Energy, 2024",
                        "Energy Storage for Renewable Integration - Energy Journal, 2023",
                        "Smart Grid Management Systems - IEEE Power, 2023"
                    ],
                    conferences: [
                        "Technical Session Chair - Renewable Energy Conference, Dubai 2024",
                        "Paper Presentation - IEEE Power & Energy Society Meeting 2023",
                        "Panel Member - Clean Energy Summit, London 2023"
                    ],
                    patents: [
                        "High-Efficiency Solar Panel Design - Patent No: PAT-2024-034",
                        "Smart Energy Management System - Patent No: PAT-2023-156"
                    ],
                    awards: [
                        "Excellence in Renewable Energy Research - Energy Ministry, 2024",
                        "Innovation Award - IEEE Power & Energy Society, 2023"
                    ],
                    editorial: [
                        "Editor - Renewable Energy Journal",
                        "Editorial Board - Solar Energy Materials"
                    ]
                }
            ],
            members: [
                {
                    name: "Dr. Sunita Verma",
                    profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIC801LEXM0O7ZWYP4_W3Tj9YTwZ82rToeQ&s",
                    position: "Member",
                    specialization: "Environmental Science & Climate Change",
                    publications: 28,
                    projects: 7,
                    citations: 1200,
                    interests: ["Climate Modeling", "Environmental Policy", "Ecosystem Conservation", "Carbon Sequestration"],
                    projectsList: [
                        "Regional Climate Impact Assessment",
                        "Urban Air Quality Monitoring Network",
                        "Wetland Conservation Program"
                    ],
                    publications: [
                        "Climate Change Impacts on Biodiversity - Environmental Research, 2024",
                        "Urban Heat Island Mitigation Strategies - Sustainability Journal, 2023"
                    ],
                    conferences: [
                        "Speaker - UN Climate Change Conference, Egypt 2024",
                        "Research Presentation - Environmental Science Summit, Paris 2023"
                    ],
                    patents: [
                        "Air Quality Monitoring System - Patent No: PAT-2023-189"
                    ],
                    awards: [
                        "Environmental Research Excellence Award - 2024",
                        "Green Innovation Award - 2023"
                    ],
                    editorial: [
                        "Associate Editor - Environmental Science & Policy",
                        "Reviewer - Climate Change Journal"
                    ]
                },
                {
                    name: "Dr. Vikram Singh",
                profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIC801LEXM0O7ZWYP4_W3Tj9YTwZ82rToeQ&s",
                    position: "Member",
                    specialization: "Nanotechnology & Materials Science",
                    publications: 35,
                    projects: 9,
                    citations: 1680,
                    interests: ["Nanomaterials", "Quantum Dots", "Nanoelectronics", "Biomaterials"],
                    projectsList: [
                        "Nanoparticles for Drug Delivery",
                        "Quantum Dot Solar Cells",
                        "Graphene-Based Sensors"
                    ],
                    publications: [
                        "Nanostructured Materials for Energy Applications - Advanced Materials, 2024",
                        "Quantum Dot Technologies - Nano Letters, 2023"
                    ],
                    conferences: [
                        "Invited Talk - International Nanotechnology Conference, Tokyo 2024",
                        "Session Chair - Materials Research Society Meeting 2023"
                    ],
                    patents: [
                        "Nano-Biosensor Technology - Patent No: PAT-2024-067",
                        "Advanced Nanomaterial Synthesis - Patent No: PAT-2023-112"
                    ],
                    awards: [
                        "Nanotechnology Innovation Award - 2024",
                        "Materials Science Excellence - 2023"
                    ],
                    editorial: [
                        "Editorial Board - Nanoscale Research Letters",
                        "Associate Editor - Journal of Nanomaterials"
                    ]
                },
                {
                    name: "Dr. Meera Reddy",
                profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIC801LEXM0O7ZWYP4_W3Tj9YTwZ82rToeQ&s",
                    position: "Member",
                    specialization: "Data Science & Analytics",
                    publications: 30,
                    projects: 8,
                    citations: 1350,
                    interests: ["Big Data Analytics", "Machine Learning", "Predictive Modeling", "Data Visualization"],
                    projectsList: [
                        "Healthcare Analytics Platform",
                        "Predictive Maintenance System",
                        "Social Media Sentiment Analysis"
                    ],
                    publications: [
                        "Big Data in Healthcare - Journal of Health Informatics, 2024",
                        "Predictive Analytics Framework - Data Science Journal, 2023"
                    ],
                    conferences: [
                        "Tutorial Session - KDD Conference, California 2024",
                        "Research Track - International Data Science Conference 2023"
                    ],
                    patents: [
                        "Intelligent Data Analytics Platform - Patent No: PAT-2024-098"
                    ],
                    awards: [
                        "Data Science Innovation Award - 2024",
                        "Best Analytics Research - 2023"
                    ],
                    editorial: [
                        "Review Board - IEEE Transactions on Big Data",
                        "Associate Editor - Journal of Data Science"
                    ]
                }
            ]
        };

        // Render Functions
        function renderActivities() {
            const grid = document.getElementById('irpc-activitiesGrid');
            grid.innerHTML = activities.map(activity => `
                <div class="irpc-activity-card">
                    <div class="irpc-activity-image">
                        ${activity.image ? 
                            `<img src="${activity.image}" alt="${activity.title}" onerror="this.parentElement.innerHTML='<div class=irpc-activity-image-placeholder><i class=fas ${activity.icon}></i></div>'" />` :
                            `<div class="irpc-activity-image-placeholder"><i class="fas ${activity.icon}"></i></div>`
                        }
                    </div>
                    <div class="irpc-activity-content">
                        <div class="irpc-activity-date"><i class="fas fa-calendar-alt"></i> ${activity.date}</div>
                        <h3>${activity.title}</h3>
                        <p>${activity.description}</p>
                    </div>
                </div>
            `).join('');
        }

        function renderProjects() {
            const grid = document.getElementById('irpc-projectsGrid');
            grid.innerHTML = projects.map(project => `
                <div class="irpc-project-card">
                    <div class="irpc-project-header">
                        <div class="irpc-project-title">
                            <h3>${project.title}</h3>
                            <div class="irpc-project-pi">Principal Investigator: ${project.pi}</div>
                        </div>
                        <div class="irpc-project-status status-${project.status}">${project.status}</div>
                    </div>
                    <p class="irpc-project-description">${project.description}</p>
                    <div class="irpc-project-meta">
                        <div class="irpc-project-meta-item">
                            <i class="fas fa-calendar"></i>
                            <span>${project.duration}</span>
                        </div>
                        <div class="irpc-project-meta-item">
                            <i class="fas fa-building"></i>
                            <span>${project.dept}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderPatents() {
            const grid = document.getElementById('irpc-patentsGrid');
            grid.innerHTML = patents.map(patent => `
                <div class="irpc-patent-card">
                    <div class="irpc-patent-header">
                        <div class="irpc-patent-icon">
                            <i class="fas fa-award"></i>
                        </div>
                        <div class="irpc-patent-title-section">
                            <h3>${patent.title}</h3>
                            ${(patent.number!=undefined)?`<div class="irpc-patent-number">
                                <i class="fas fa-certificate"></i>
                                ${patent.number}
                            </div>`:''}
                            
                        </div>
                    </div>
                    <div class="irpc-patent-footer">
                        <div class="irpc-patent-status">
                            <i class="fas fa-check-circle"></i>
                            ${patent.status}
                        </div>
                        <div class="irpc-patent-meta">
                            <div class="irpc-patent-meta-item">
                                <span class="irpc-patent-meta-number">${patent.year}</span>
                                <span class="irpc-patent-meta-label">Year</span>
                            </div>
                             ${(patent.number!=undefined)?`
                            <div class="irpc-patent-meta-item">
                                <span class="irpc-patent-meta-number">${patent.inventors}</span>
                                <span class="irpc-patent-meta-label">Inventors</span>
                            </div>`:''}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderCollaborations() {
            const nationalGrid = document.getElementById('nationalGrid');
            const internationalGrid = document.getElementById('internationalGrid');
            
            nationalGrid.innerHTML = nationalCollaborations.map(collab => `
                <div class="irpc-collaboration-card">
                    <div class="irpc-collaboration-logo">
                        ${collab.logo ? 
                            `<img src="${collab.logo}" alt="${collab.name}" onerror="this.parentElement.innerHTML='<div class=irpc-collaboration-logo-placeholder><i class=fas ${collab.icon}></i></div>'" />` :
                            `<div class="irpc-collaboration-logo-placeholder"><i class="fas ${collab.icon}"></i></div>`
                        }
                    </div>
                    <h3>${collab.name}</h3>
                    <p><i class="fas fa-map-marker-alt"></i>${collab.location}</p>
                </div>
            `).join('');

            internationalGrid.innerHTML = internationalCollaborations.map(collab => `
                <div class="irpc-collaboration-card">
                    <div class="irpc-collaboration-logo">
                        ${collab.logo ? 
                            `<img src="${collab.logo}" alt="${collab.name}" onerror="this.parentElement.innerHTML='<div class=irpc-collaboration-logo-placeholder><i class=fas ${collab.icon}></i></div>'" />` :
                            `<div class="irpc-collaboration-logo-placeholder"><i class="fas ${collab.icon}"></i></div>`
                        }
                    </div>
                    <h3>${collab.name}</h3>
                    <p><i class="fas fa-map-marker-alt"></i>${collab.location}</p>
                </div>
            `).join('');
        }

        function renderResearchers() {
            const section = document.getElementById('irpc-researchersSection');
            const hierarchy = [
                { title: 'Leadership', key: 'president' },
                { title: 'Secretary', key: 'secretary' },
                { title: 'Members', key: 'members' }
            ];

            section.innerHTML = hierarchy.map(level => `
                <div class="irpc-hierarchy-level">
                    <h3 class="irpc-hierarchy-title">${level.title}</h3>
                    <div class="irpc-researchers-grid">
                        ${researchersData[level.key].map(researcher => `
                            <div class="irpc-researcher-card" onclick='openModal(${JSON.stringify(researcher)})'>
                                <div class="irpc-researcher-image-wrapper">
                                    <div class="irpc-researcher-image">
                                        <div class="irpc-researcher-profile-pic">
                                            <img src="${researcher.profileImage}"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="-irpc-researcher-info">
                                    <div class="irpc-researcher-name">${researcher.name}</div>
                                    <div class="irpc-researcher-position">${researcher.position}</div>
                                    <div class="irpc-researcher-specialization">${researcher.specialization}</div>
                                    <div class="irpc-researcher-stats">
                                        <div class="irpc-stat-item">
                                            <span class="irpc-stat-number">${researcher.projects}</span>
                                            <span class="irpc-stat-label">Projects</span>
                                        </div>
                                        <div class="irpc-stat-item">
                                            <span class="irpc-stat-number">₹${researcher.citations}</span>
                                            <span class="irpc-stat-label">Fund</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        function openModal(researcher) {
            const modal = document.getElementById('irpc-researcherModal');
            document.getElementById('irpc-modalName').textContent = researcher.name;
            document.getElementById('irpc-modalPosition').textContent = researcher.position + ' | ' + researcher.specialization;
            
            document.getElementById('irpc-modalInterests').innerHTML = researcher.interests.map(interest => 
                `<span class="interest-tag">${interest}</span>`
            ).join('');
            document.getElementById('irpc-modal-profile-image').src=researcher.profileImage
            document.getElementById('irpc-modalProjects').innerHTML = researcher.projectsList.map(project => 
                `<li>${project}</li>`
            ).join('');

            document.getElementById('irpc-modalPublications').innerHTML = researcher.publications.map(pub => 
                `<li>${pub}</li>`
            ).join('');

            document.getElementById('irpc-modalConferences').innerHTML = researcher.conferences.map(conf => 
                `<li>${conf}</li>`
            ).join('');

            document.getElementById('irpc-modalPatents').innerHTML = researcher.patents.map(patent => 
                `<li>${patent}</li>`
            ).join('');

            document.getElementById('irpc-modalAwards').innerHTML = researcher.awards.map(award => 
                `<li>${award}</li>`
            ).join('');

            document.getElementById('irpc-modalEditorial').innerHTML = researcher.editorial.map(role => 
                `<li>${role}</li>`
            ).join('');

            modal.classList.add('irpc-active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('irpc-researcherModal');
            modal.classList.remove('irpc-active');
            document.body.style.overflow = 'auto';
        }

        // Tab Switching
        document.querySelectorAll('.irpc-tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.irpc-tab-btn').forEach(b => b.classList.remove('irpc-active'));
                document.querySelectorAll('.irpc-collaboration-content').forEach(c => c.classList.remove('irpc-active'));
                
                this.classList.add('irpc-active');
                document.getElementById(this.dataset.tab).classList.add('irpc-active');
            });
        });

        // Close modal on outside click
        document.getElementById('irpc-researcherModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Initialize
        renderActivities();
        renderProjects();
        renderPatents();
        renderCollaborations();
        renderResearchers();