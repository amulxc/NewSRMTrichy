// Bio Ethics JSON Data
        const bioEthicsData = {
            "page_title": "Bio Ethics - Trichy SRM Medical College",
            "breadcrumb": {
                "path": ["Home", "Academics", "Bio Ethics"]
            },
            "vision": "Biomedical Engineering department aim to provide high quality engineering services which will enhances and improve patient care by ensuring the reliable and safe operation of medical equipment through both design and maintenance.",
            "mission": [
                "Mission is to enhance healthcare delivery by applying engineering principles to medical technology.Ensuring safety,Equipment reliability and functionality,advancement of medical equipment through efficient management plan."
            ],
            "objectives": [
                "Installation and Commissioning of New Equipments",
                "Maintenance and management of medical equipment to ensure safety and reliability",
                "Support for diagnosis and treatment through proper functioning of medical devices",
                "Training healthcare staff in the correct use of medical equipment",
                "Ensuring patient safety and quality care by complying with standards and regulations",
                "Reducing equipment downtime and healthcare costs through preventive maintenance",
                "Following Medical Equipment Discard Policies For Ex: Radiology Equipments"
            ],
            "research_areas": [
                "Workbenches for testing, repair, and calibration of equipment",
                "Storage space for tools, spare parts, manuals, and accessories",
                "Power supply with proper earthing",
                "Environmental controls (adequate lighting, ventilation, temperature control)",
                "Computer systems for equipment records, maintenance logs",
                "Test  instruments (simulators)",
                "Internet and communication facilities for vendor and service coordination"
            ],
            "services": [
                "Installation, testing, and commissioning of medical equipment",
                "Routine maintenance, calibration, and repair of biomedical devices",
                "Ensuring patient safety and compliance with hospital and regulatory standards",
                "Training doctors and staff on proper equipment usage",
                "Troubleshooting equipment failures and minimizing downtime",
                "Assisting in purchase evaluation and technology upgrades",
                "Supporting clinical departments to enhance quality patient care "
            ],
            "committee_members": [
                { "sno": 1, "name": "Vairamanickam Maruthai", "designation": "Biomedical Incharge" },
                { "sno": 2, "name": "Parthasarathi E", "designation": "Jr.Biomedical Engineer" },
                { "sno": 3, "name": "Mohamed Asif M", "designation": "Jr.Biomedical Engineer" },
                { "sno": 4, "name": "Ganapathi P", "designation": "Jr.Biomedical Engineer" },
                { "sno": 5, "name": "Monica Deepthi S", "designation": "Jr.Biomedical Engineer" },
                { "sno": 6, "name": "Saravanan S", "designation": "Jr.Biomedical Engineer" },
                { "sno": 7, "name": "Harish Babu K", "designation": "Jr.Biomedical Engineer" },
                { "sno": 8, "name": "Sneka K", "designation": "Jr.Biomedical Engineer" }
            ]
        };

        // Load Vision & Mission Content
        function loadVisionMission() {
            const content = document.getElementById('visionMissionContent');
            let html = '<h4>Vision</h4><br>';
            html += `<ul>${bioEthicsData.vision}</ul><br><br>`;
            html += '<h4>Mission</h4><br><ul>';
            bioEthicsData.mission.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += '</ul><br><br>';
            html += '<h4>Objectives</h4><br><ul>';
            bioEthicsData.objectives.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += '</ul>';
            content.innerHTML = html;
        }

        // Load Research Areas Content
        function loadResearchAreas() {
            const content = document.getElementById('researchAreasContent');
            let html = '<ul>';
            bioEthicsData.research_areas.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += '</ul>';
            content.innerHTML = html;
        }
        function loadServices() {
            const content = document.getElementById('services');
            let html = '<ul>';
            bioEthicsData.research_areas.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += '</ul>';
            content.innerHTML = html;
        }

        // Load Committee Members Content
        function loadCommitteeMembers() {
            const content = document.getElementById('committeeMembersContent');
            let html = '<div class="publication-table-wrapper"><table class="publication-table"><thead><tr>';
            html += '<th style="width: 5%">S.No</th>';
            html += '<th style="width: 18%">Name</th>';
            html += '<th style="width: 18%">Designation</th>';
            html += '</tr></thead><tbody>';
            
            bioEthicsData.committee_members.forEach(member => {
                html += '<tr class="in-row">';
                html += `<td>${member.sno}</td>`;
                html += `<td>${member.name}</td>`;
                html += `<td><span class="designation">${member.designation}</span></td>`;
                html += '</tr>';
            });
            
            html += '</tbody></table></div>';
            content.innerHTML = html;
        }

        // Initialize all content
        function initializeBioEthicsPage() {
            loadVisionMission();
            loadResearchAreas();
            loadServices();
            loadCommitteeMembers();
        }

        // Load content when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeBioEthicsPage);
        } else {
            initializeBioEthicsPage();
        }