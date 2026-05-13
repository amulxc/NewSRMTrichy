// Bio Ethics JSON Data
        const bioEthicsData = {
          
            "vision": "To be a center of excellence in physiotherapy education, clinical care, and research, dedicated to restoring movement, enhancing quality of life, and serving the community through ethical, innovative, and evidence-based physiotherapy practices.",
            "mission": [
                "To provide high-quality physiotherapy education through experienced faculty, interactive learning, and strong clinical exposure.",
                "To develop competent, compassionate, and skilled physiotherapy professionals who excel in patient care and rehabilitation.",
                "To promote interdisciplinary teamwork, continuous skill development, and lifelong learning.",
                "To actively engage in community-based rehabilitation and preventive healthcare services.",
                "To encourage research and innovation in movement science and physiotherapy practice."
            ],
            "objectives": [
                "To impart in-depth theoretical knowledge and hands-on clinical training in core and specialised areas of physiotherapy.",
                "To enhance students’ clinical reasoning, assessment, and rehabilitation skills through real-world patient exposure.",
                "To develop expertise in orthopedics, sports physiotherapy, neurology, pediatrics, cardiopulmonary sciences, biomechanics, hand rehabilitation, obstetrics & gynaecology, and community rehabilitation.",
                "To foster teamwork, professional ethics, and effective communication among students and faculty.",
                "To promote community outreach programmes aimed at improving mobility, functional independence, and overall health.",
                "To encourage research-oriented learning and evidence-based practice in physiotherapy.",
                "To prepare graduates to meet national and global healthcare standards with confidence and competence."
            ],
            "proposed_activity_framework": {
                "description": "Bachelor of Physiotherapy (BPT)",
                "activities": [
                    "Eligibility: +2 Physics, Chemistry, Biology as Principal subject.",
                    "Duration: 4 Years and 6 Months",
                ],
                "description1": "Master of Physiotherapy (MPT)",
                "activities1": [
                    "Bio Mechanics",
                    "Cardio Pulmonary Science",
                    "Community Rehabilitation",
                    "Hand Rehabilitation",
                    "Neurology",
                    "Obstetrics and Gynaecology",
                    "Paediatrics Physiotherapy",
                    "Sports Physiotherapy",
                    "Orthopaedics"
                ]

            },
            "Infra":[1,2,3,4,5],
            "committee_members": [
                { "name": "Mr. Vincent Jeyaraj D", "designation": "Associate Professor" },
                { "name": "Ms. M. Vidyagajalakshmi", "designation": "Assistant Professor" },
                { "name": "Mr. C. Manikandarajan", "designation": "Assistant Professor" },
                { "name": "Ms. P. Vinitha", "designation": "Assistant Professor" },
                { "name": "Ms. M. Yogeswari", "designation": "Assistant Professor" },
                { "name": "Ms. J. Swathi", "designation": "Assistant Professor" },
                { "name": "Ms. Sarojini J", "designation": "Assistant Professor" },
                { "name": "Ms. Tharaka Varshini V", "designation": "Assistant Professor" },
                { "name": "Mr. R. Rajarethinam", "designation": "Assistant Professor" },
                { "name": "Ms. Aishwarya Shamini M", "designation": "Assistant Professor" },
                { "name": "Ms. Kumuthavalli D", "designation": "Assistant Professor" },
                { "name": "Ms. Malavika D", "designation": "Assistant Professor" },
                { "name": "Ms. Suvathi R", "designation": "Assistant Professor" },
                { "name": "Ms. Umayal SP", "designation": "Assistant Professor" },
                { "name": "Ms. G. Premkumari", "designation": "Assistant Professor" },
                { "name": "Ms. Nithya Vijayakumar", "designation": "Assistant Professor" },
                { "name": "Ms. M. Bavadharani", "designation": "Assistant Professor" },
                { "name": "Ms. Saranya T", "designation": "Assistant Professor" }
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

        // Load Activity Framework Content
        function loadActivityFramework() {
            const content = document.getElementById('activityFrameworkContent');
            let html = `<b>${bioEthicsData.proposed_activity_framework.description}</b><br><ul>`;
            
            bioEthicsData.proposed_activity_framework.activities.forEach(activity => {
                if (typeof activity === 'string') {
                    html += `<li>${activity}</li>`;
                } else {
                    html += `<li>${activity.activity}<ul>`;
                    activity.details.forEach(detail => {
                        html += `<li>${detail}</li>`;
                    });
                    html += '</ul></li>';
                }
            });
            html+=`<br><b>${bioEthicsData.proposed_activity_framework.description1}</b><br>`
            bioEthicsData.proposed_activity_framework.activities1.forEach(activity => {
                if (typeof activity === 'string') {
                    html += `<li>${activity}</li>`;
                } else {
                    html += `<li>${activity.activity}<ul>`;
                    activity.details.forEach(detail => {
                        html += `<li>${detail}</li>`;
                    });
                    html += '</ul></li>';
                }
            });
            html += '</ul>';
            content.innerHTML = html;
        }

      


        // Load Staffs
        function loadCommitteeMembers() {
            const content = document.getElementById('committeeMembersContent');
            let html = '<div class="publication-table-wrapper"><table class="publication-table"><thead><tr>';
            html += '<th style="width: 5%">S.No</th>';
            html += '<th style="width: 18%">Name</th>';
            html += '<th style="width: 18%">Designation</th>';
            html += '</tr></thead><tbody>';
            let num=0;
            bioEthicsData.committee_members.forEach(member => {
                html += '<tr class="in-row">';
                html += `<td>${num+=1}</td>`;
                html += `<td>${member.name}</td>`;
                html += `<td><span class="designation">${member.designation}</span></td>`;
                html += '</tr>';
            });
            
            html += '</tbody></table></div>';
            content.innerHTML = html;
        }
        
        function loadInfra() {
            const Infra = document.getElementById("Infra");

            const InfraContent = bioEthicsData.Infra
                .map(item => {
                    return `<div><img src="assets/images/dept_images/Pysiotherapy/${item}.JPG" alt="Infra ${item}"></div>`;
                })
                .join("");

            Infra.innerHTML = InfraContent;
        }


        // Initialize all content
        function initializeBioEthicsPage() {
            loadVisionMission();
            loadActivityFramework();
            loadCommitteeMembers();
            loadInfra();
        }

        // Load content when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeBioEthicsPage);
        } else {
            initializeBioEthicsPage();
        }