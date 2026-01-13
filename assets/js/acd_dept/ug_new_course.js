         const color1="#fc6d6d";
         const color2="#834eff";
         const depts = [      
            {
                id: "Phase 1", name: "Phase 1", color: "#ff9800", colorDark: "#f57c00",
                boxes: [
                    {
                        label: "Anatomy", 
                        bgColor:color1
                    },
                    {
                        label: "Physiology", 
                        bgColor:color2
                    },
                    {
                        label: "Biochemistry", 
                        bgColor:color2
                    },
                    {
                        label: "Anatomy", 
                        bgColor:color1
                    }
                ],
            },
            {
                id: "Phase 2", name: "Phase 2", color: "#673ab7", colorDark: "#512da8",
                boxes: [
                    {
                        label: "Pathology", 
                        bgColor:color2
                    },
                    {
                        label: "Pharmacology", 
                        bgColor:color1
                    },
                    {
                        label: "Microbiology", 
                        bgColor:color1
                    },
                    {
                        label: "Forensic Medicine", 
                        bgColor:color2
                    }
                ]
            },
            {
                id: "Phase 3 Part 1", name: "Phase 3 Part 1", color: "#26c6da", colorDark: "#00acc1",
                boxes: [
                    {
                        label: "General Medicine", 
                        bgColor:color1
                    },
                    {
                        label: "General Surgery", 
                        bgColor:color2
                    },
                    {
                        label: "Paediatrics", 
                        bgColor:color2
                    },
                    {
                        label: "Obstetrics & Gynaecology", 
                        bgColor:color1
                    }

                ]
            },
            {
                id: "Phase 3 Part 2", name: "Phase 3 Part 2", color: "#da264d", colorDark: "#c1003a",
                boxes: [
                    {
                        label: "Community Medicine", 
                        bgColor:color2
                    },
                     {
                        label: "Orthopaedics", 
                        bgColor:color1
                    },
                    {
                        label: "Ophthalmology", 
                        bgColor:color1
                    },
                    {
                        label: "Dermatology, Venereology & Leprosy", 
                        bgColor:color2
                    },
                    {
                        label: "Psychiatry", 
                        bgColor:color2
                    }
                ]
            }
        ];
        let currentDept = null;
        document.addEventListener('DOMContentLoaded', function() {
            renderSidebar();
            showDept(depts[0].id);
        });

        function renderSidebar() {
            const menu = document.getElementById('sidebarMenu');
            menu.innerHTML = depts.map(d => `
                <li>
                    <a href="#${d.id}" onclick="showDept('${d.id}');">
                     <i class="fa fa-list"></i> ${d.name}
                    </a>
                </li>
            `).join('');
        }
        function showDept(id = null) {
            const params = new URLSearchParams(window.location.search);

            // Prefer URL ?dept=... → otherwise use clicked value
            const deptId = params.get("dept") || id;

            // If still no department, STOP (first page load with no ID)
            if (!deptId) return;

            // Find department
            const d = depts.find(x => x.id.toLowerCase() === deptId.toLowerCase());
            if (!d) return;

            currentDept = deptId;

            const det = document.getElementById('departmentDetail');
            det.classList.remove('hidden');
            det.classList.add('active');

            updateSidebarActive(deptId);
            renderDetail(d);
            const url = new URL(window.location);
            url.searchParams.delete("dept");
            window.history.replaceState({}, "", url.pathname + url.search);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.addEventListener("DOMContentLoaded", () => {
            const params = new URLSearchParams(window.location.search);
            const deptId = params.get("dept");

            if (deptId) {
                showDept(deptId);
            }
        });


        function updateSidebarActive(id) {
            document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
            const d = depts.find(x => x.id.toLowerCase() === id.toLowerCase());
            if (d) {
                document.querySelectorAll('.sidebar-nav a').forEach(a => {
                    if (a.textContent.trim().includes(d.name)) a.classList.add('active');
                });
            }
        }
        function normalizePhase(phase) {
            return phase
                .replace("Phase ", "Phase-")
                .replace(" Part ", " Part-");
        }

        async function fileExists(url) {
            try {
                const res = await fetch(url, { method: "HEAD" });
                return res.ok;
            } catch {
                return false;
            }
        }
        async function buildStatCards(d) {
            const phaseFolder = normalizePhase(d.id);

            const cards = await Promise.all(
                d.boxes.map(async s => {

                    const curriculumPath = `./assets/pdf/Course/UG_Course/${phaseFolder}/Curriculam.pdf`;
                    const calendarPath   = `./assets/pdf/Course/UG_Course/${phaseFolder}/Academic_Calendar.pdf`;
                    const timetablePath  = `./assets/pdf/Course/UG_Course/${phaseFolder}/Time_Table.pdf`;

                    const [hasCurr, hasCal, hasTime] = await Promise.all([
                        fileExists(curriculumPath),
                        fileExists(calendarPath),
                        fileExists(timetablePath)
                    ]);

                    return `
                        <div class="stat-card"
                            style="background:${s.bgColor}!important;
                                border-radius:0;
                                color:white;
                                margin:0!important;max-width:100%;">

                            <h3>${s.label}</h3>
                <br>

                            ${hasCurr ? pdfItem("Curriculam", curriculumPath) : ""}
                            ${hasCal ? pdfItem("Calendar", calendarPath) : ""}
                            ${hasTime ? pdfItem("Time Table", timetablePath) : ""}
                        </div>
                    `;
                })
            );

            return cards.join("");
        }
        async function renderDetail(d) {
            const container = document.getElementById('departmentDetail');

            const phaseFolder = normalizePhase(d.id);

            let html = `
                <div class="detail-header" id="${d.id}" style="padding:20px 40px;margin-bottom:0">
                    <h2 style="color:black;margin-bottom:0"><i class='fa fa-list'></i> ${d.name}</h2>
                </div>

                <div class="accordian-body" style="gap:0!important;">
                
                    <div class="stats-grid" style="gap:0!important;">
            `;

             if (d.boxes) {
                const statCardsHTML = await buildStatCards(d);
                html += `
                <div class="accordion-section">
                    <div class="tabs-body active">
                        <div class="tabs-content-wrapper">
                            <div id="overview-${d.id}" class="tab-content active">
                                <h2 style="color:grey;font-weight:400">
                                    Department in ${d.name}
                                </h2>
                                <div class="stats-grid" style="gap:0!important;grid-template-columns:repeat(auto-fit, minmax(350px, 1fr))">
                                    ${statCardsHTML}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            }

            html += `</div></div>`;
            container.innerHTML = html;
        }

        function pdfItem(label, link) {
        return `
        <a href="${link}" target="_blank">
            <div style='background:white;font-weight:400;color:#000;margin-bottom:10px;padding:8px 0px'>
                <i class="fa fa-file-pdf"></i> ${label}
            </div>
        </a>
        `;
        }

        

        function toggleAccordion(header) {
            const isActive = header.classList.contains('active');
            
            // Close all accordions (including publications)
            document.querySelectorAll('.accordion-header, .tabs-header').forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.classList.remove('active');
            });
            
            // If the clicked accordion wasn't active, open it
            if (!isActive) {
                header.classList.add('active');
                header.nextElementSibling.classList.add('active');
            }
        }

        function toggleAccordion1(header) {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');

            // Toggle only this accordion
            if (isActive) {
                header.classList.remove('active');
                content.classList.remove('active');
            } else {
                header.classList.add('active');
                content.classList.add('active');
            }
        }


        function switchTab(event, tabId) {
            const container = event.target.closest('.tabs-content-wrapper');
            container.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            container.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            event.target.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        }