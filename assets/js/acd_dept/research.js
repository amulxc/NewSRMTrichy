const activities = [
    {
        title: "International seminar",
        date: "26 Nov 2025",
        description: "Dr. Des Richardson, M.Sc., Ph.D., D.Sc., F.FSc., FRCPath, FRACI CCHEM, Director, Centre for Cancel Cell Biology and Drug Discovery, Griffith University, Queensland, Australia. His research experiences are very vast and delivered his lecture on “Design and development of new anti-cancer drugs: the artificial intelligence revolution”.",
        icon: "fa-university",
        image: "assets/images/irpc/1.jpg"
    },
    {
        title: "International seminar",
        date: "11 Dec 2025",
        description: "Dr. Mats Brannstrom is Professor and Chairman, Department of Obstetrics and Gynecology, Institute of Clinical Sciences, University of Gothenburg, Sweden. He is also Senior Consultant of Gynecology and Reproductive Medicine at Sahlgrenska University Hospital. Dr. Mats shared his clinical experiences of uterus transplantation from deceased donor and transplant to recipient with uterine infertility",
        icon: "fa-robot",
        image: "assets/images/irpc/2.jpg"
    },
    {
        title: "BMJ manuscript submission drive",
        date: "18 Dec 2025",
        description: "A total of 37 faculty and postgraduates participated in the TSRMMCH&RC library; A broad visionary ideas obtained regarding how to submit the manuscript in BMJ",
        icon: "fa-hand-holding-usd",
        image: "assets/images/irpc/3.jpg"
    },
    {
        title: "Medaithon",
        date: "25 Oct 2025",
        description: "The campus institutions participated; Fifty teams competed; out of that two teams awarded",
        icon: "fa-project-diagram",
        image: "assets/images/irpc/4.jpg"
    },
    {
        title: "EQUIP workshop",
        date: "28 Feb 2025",
        description: "Elevating quality in research through impactful publications, patents and copyright excellence",
        icon: "fa-project-diagram",
        image: "assets/images/irpc/5.jpg"
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
        logo: "assets/images/irpc/logos/1.png"
    },
    {
        name: "PGIMER",
        location: "Chandigarh, India",
        icon: "fa-hospital",
        logo: "assets/images/irpc/logos/2.png"
    },
    {
        name: "JIPMER",
        location: "Pondicherry",
        icon: "fa-rocket",
        logo: "assets/images/irpc/logos/3.png"
    },
    {
        name: "AIIMS",
        location: "Bibinagar",
        icon: "fa-microscope",
        logo: "assets/images/irpc/logos/4.png"
    },
    {
        name: "SASTRA – Deemed to be University",
        location: "Thanjavur, Tamilnadu",
        icon: "fa-rocket",
        logo: "assets/images/irpc/logos/5.png"
    },
    {
        name: "Bharathidasan University",
        location: "Trichy, Tamilnadu",
        icon: "fa-microscope",
        logo: "assets/images/irpc/logos/6.png"
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
                            ${(patent.number != undefined) ? `<div class="irpc-patent-number">
                                <i class="fas fa-certificate"></i>
                                ${patent.number}
                            </div>`: ''}
                            
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
                             ${(patent.number != undefined) ? `
                            <div class="irpc-patent-meta-item">
                                <span class="irpc-patent-meta-number">${patent.inventors}</span>
                                <span class="irpc-patent-meta-label">Inventors</span>
                            </div>`: ''}
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


// Initialize
renderActivities();
renderProjects();
renderPatents();
renderCollaborations();