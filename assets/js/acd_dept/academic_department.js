        // Department data with comprehensive information
        let currentDept = null;

        document.addEventListener('DOMContentLoaded', function() {
            renderSidebar();
            showDept(depts[0].id);
        });

        function renderSidebar() {
            const menu = document.getElementById('sidebarMenu');
            const sortedDepts = [...depts].sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            menu.innerHTML = sortedDepts.map(d => `
                <li>
                    <a href="#${d.id}" onclick="showDept('${d.id}');">
                     ${d.icon.includes("<i class=")===false 
                        ? `<i class="fa ${d.icon}"></i>` 
                        : `${d.icon}`}
                    ${d.name}
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

        function renderDetail(d) {
            const container = document.getElementById('departmentDetail');
            container.style.setProperty('--dept-color', d.color);
            container.style.setProperty('--dept-color-dark', d.colorDark);
            
            let html = `
                <div class="detail-header" id="${d.id}">
                    <div class="detail-header-content">
                        <h2>
                         
                            <div class="icon-large">
                                ${d.icon.includes("<i class=")===false 
                                ? `<i class="fa ${d.icon}"></i>` 
                                : `${d.icon}`}
                            </div>
                            ${d.name}
                        </h2>
                        <p>${d.desc}</p>
                        <hr style="color:#fff;margin:10px 0;"/>
                        <h4 style="color:#fff;margin:10px 0;"></h4>
                        <div class="spec_servies" >
                        <a style="color:white;text-decoration:underline;" href="depart_specialities.html?dept=${d.id}#services" class="service_link"> Click Here</a> For Services
                        </div>
                    </div>
                </div>
            `;
            if (d.vision) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-bullseye"></i> Vision & Mission</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                               <h4>Vision</h4>
                                <br>
                                <ul>${d.vision}</ul>
                                <br><br>
                                <h4>Mission</h4>
                                <br>
                                <ul>${d.mission}</ul>
                                <br><br>
                                <h4>Objectives</h4>
                                <br>
                                ${d.objectives ? `${
                                    d.objectives.map(f => `<li>${f}</li>`).join('')
                                }`:''}
                            </div>
                        </div>
                    </div>
                `;
            }
            

            if (d.infra) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-hospital"></i> Infrastructure</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>${d.infra_desc ? d.infra_desc: "State-of-the-art facilities ensuring highest standards of patient care.</p>"}
                                <ul>${d.infra.map(f => `<li>${f}</li>`).join('')}</ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (d.faculty) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-user-md"></i>Doctors</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                ${d.faculty ? `
                                        <div class="publication-table-wrapper">
                                            <table class="publication-table">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 10%">S.No</th>
                                                        <th style="width: 40%">Name of the Doctor</th>
                                                        <th style="width: 50%">Designation</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    ${d.faculty.map((p,i) => `
                                                        <tr>
                                                            <td data-label="S.No">${i+1}</td>
                                                            <td data-label="Name of the Faculty"><strong>${p.name}</strong></td>
                                                            <td data-label="Designation">${p.designation}</td>
                                                        </tr>
                                                    `).join('')}
                                                </tbody>
                                            </table>
                                        </div>
                                    ` : '<p>Year-wise publication data will be updated soon.</p>'}
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (d.pubStats) {
                html += `
                    <div class="accordion-section">
                        <div class="tabs-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-book-medical"></i> Publications</div>
                            <i class="fas fa-chevron-down tabs-expand-icon"></i>
                        </div>
                        <div class="tabs-body">
                            <div class="tabs-content-wrapper">
                                <div class="tabs-nav">
                                    <button class="tab-button active" onclick="switchTab(event, 'overview-${d.id}')">Overview</button>
                                    <button class="tab-button" onclick="switchTab(event, 'yearwise-${d.id}')">Year-wise</button>
                                </div>
                                
                                <div id="overview-${d.id}" class="tab-content active">
                                    <p>Significant contributions to medical literature and research.</p>
                                    <div class="stats-grid">
                                        ${d.pubStats.map(s => `
                                            <div class="stat-card">
                                                <h4>${s.value}</h4>
                                                <p>${s.label}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                    ${d.pubHighlights ? `
                                        <h4 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--color-text-primary);">Key Research Highlights</h4>
                                        <ul class="accordion-body" style="padding: 0;list-style:none;">
                                            ${d.pubHighlights.map(p => `<li>${p}</li>`).join('')}
                                        </ul>
                                    ` : ''}
                                </div>
                                
                                <div id="yearwise-${d.id}" class="tab-content">
                                    ${d.pubYearwise ? `
                                        <div class="publication-table-wrapper">
                                            <table class="publication-table">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 10%">Year</th>
                                                        <th style="width: 45%">Title</th>
                                                        <th style="width: 30%">Journal</th>
                                                        <th style="width: 15%">Type</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    ${d.pubYearwise.map(p => `
                                                        <tr>
                                                            <td data-label="Year"><span class="year-badge">${p.year}</span></td>
                                                            <td data-label="Title"><strong>${p.title}</strong></td>
                                                            <td data-label="Journal">${p.journal}</td>
                                                            <td data-label="Type"><span class="year-badge">${p.type}</span></td>
                                                        </tr>
                                                    `).join('')}
                                                </tbody>
                                            </table>
                                        </div>
                                    ` : '<p>Year-wise publication data will be updated soon.</p>'}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (d.research) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-microscope"></i> Research</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>${d.research_desc?d.research_desc:"Cutting-edge research advancing medical science."}</p>
                                <ul>${d.research.map(r => `<li>${r}</xli>`).join('')}</ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (d.events) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-calendar-alt"></i> Events</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>Regular conferences, training programs, and awareness campaigns.</p>
                                <ul>${d.events.map(e => `<li>${e}</li>`).join('')}</ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (d.achievements) {
                console.log(d.achievements);
                
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-trophy"></i> Achievements</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>${d.achievements_desc?d.achievements_desc:"Recognition and awards for excellence in healthcare."}</p>
                                <ul>${d.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (d.gallery) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-images"></i> Gallery</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>Visual documentation of our facilities, events, and achievements.</p>
                                <div class="gallery-grid">
                                    ${d.gallery.map(img => `
                                        <div class="gallery-item">
                                            <div class="gallery-placeholder">
                                                <img src="https://d6ayomfexqlev.cloudfront.net/images/gallery/${img.path}" alt='Not Given'>
                                            </div>
                                            <div class="gallery-overlay">
                                                <div class="gallery-overlay-title">${img.name}</div>
                                                    ${
                                                        img.date !== '' || img.date === undefined
                                                        ? `<div class="gallery-overlay-date"><i class="fas fa-calendar"></i> ${img.date}</div>`
                                                        : ''
                                                    }
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            container.innerHTML = html;
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