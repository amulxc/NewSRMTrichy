const activities = [
            {
                title: "International Research Symposium 2024",
                date: "Dec 5, 2024",
                description: "Annual symposium bringing together researchers from around the globe to share insights and innovations.",
                icon: "fa-university",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop" // Conference hall
            },
            {
                title: "Workshop on AI and Machine Learning",
                date: "Nov 28, 2024",
                description: "Hands-on workshop exploring cutting-edge applications of artificial intelligence in research.",
                icon: "fa-robot",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop" // Tech/AI
            },
            {
                title: "Research Funding Seminar",
                date: "Nov 15, 2024",
                description: "Guidance session on securing research grants and funding opportunities from national agencies.",
                icon: "fa-hand-holding-usd",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" // Business/funding
            },
            {
                title: "Interdisciplinary Research Forum",
                date: "Oct 22, 2024",
                description: "Platform for collaborative discussions across different research domains and disciplines.",
                icon: "fa-project-diagram",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop" // Collaboration
            }
        ];

        const projects = [
            {
                title: "Smart City Infrastructure Development",
                pi: "Dr. Sarah Johnson",
                status: "ongoing",
                description: "Developing intelligent urban infrastructure solutions using IoT and data analytics.",
                duration: "2023-2026",
                dept: "Computer Science"
            },
            {
                title: "Renewable Energy Integration Systems",
                pi: "Dr. Michael Chen",
                status: "completed",
                description: "Research on efficient integration of solar and wind energy into power grids.",
                duration: "2021-2024",
                dept: "Electrical Engineering"
            },
            {
                title: "Nanotechnology in Medical Diagnostics",
                pi: "Dr. Emily Rodriguez",
                status: "ongoing",
                description: "Innovative nanomaterial applications for early disease detection.",
                duration: "2022-2025",
                dept: "Biotechnology"
            },
            {
                title: "Climate Change Impact Assessment",
                pi: "Dr. David Kumar",
                status: "pending",
                description: "Comprehensive study on regional climate patterns and environmental effects.",
                duration: "2024-2027",
                dept: "Environmental Science"
            }
        ];

        const patents = [
            {
                title: "AI-Powered Medical Imaging System",
                number: "PAT-2024-001",
                status: "Granted",
                year: "2024",
                inventors: 3
            },
            {
                title: "Biodegradable Polymer Composite",
                number: "PAT-2023-089",
                status: "Granted",
                year: "2023",
                inventors: 2
            },
            {
                title: "IoT-Based Water Quality Monitor",
                number: "PAT-2024-023",
                status: "Granted",
                year: "2024",
                inventors: 4
            },
            {
                title: "Advanced Solar Cell Technology",
                number: "PAT-2023-156",
                status: "Granted",
                year: "2023",
                inventors: 3
            },
            {
                title: "Smart Grid Energy Management System",
                number: "PAT-2024-045",
                status: "Granted",
                year: "2024",
                inventors: 5
            },
            {
                title: "Nano-Biosensor for Disease Detection",
                number: "PAT-2024-067",
                status: "Granted",
                year: "2024",
                inventors: 2
            }
        ];

        const nationalCollaborations = [
            { 
                name: "IIT Bombay", 
                location: "Mumbai, India", 
                icon: "fa-flask",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png"
            },
            { 
                name: "AIIMS Delhi", 
                location: "New Delhi, India", 
                icon: "fa-hospital",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTn-S-Hn9j4_Ruk7dLd69WPwgfK_VI7-ZXA&s"
            },
            { 
                name: "ISRO", 
                location: "Bangalore, India", 
                icon: "fa-rocket",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/200px-Indian_Space_Research_Organisation_Logo.svg.png"
            },
            { 
                name: "CSIR Labs", 
                location: "Various Locations", 
                icon: "fa-microscope",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXPNH1DdhfOZXoXYI7KXv61QGrsix6nXHxw&s"
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
                name: "Dr. Rajesh Kumar",
                profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIC801LEXM0O7ZWYP4_W3Tj9YTwZ82rToeQ&s",
                position: "President",
                specialization: "Artificial Intelligence & Machine Learning",
                publications: 45,
                projects: 12,
                citations: 2500,
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
                            <div class="irpc-patent-number">
                                <i class="fas fa-certificate"></i>
                                ${patent.number}
                            </div>
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
                            <div class="irpc-patent-meta-item">
                                <span class="irpc-patent-meta-number">${patent.inventors}</span>
                                <span class="irpc-patent-meta-label">Inventors</span>
                            </div>
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