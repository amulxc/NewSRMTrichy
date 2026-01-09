// Bio Ethics JSON Data
        const bioEthicsData = {
            "page_title": "Bio Ethics - Trichy SRM Medical College",
            "breadcrumb": {
                "path": ["Home", "Academics", "Bio Ethics"]
            },
            "vision": "To make the students acquire scientific knowledge about the structure of the human body to be used in the academic and research activities and its application in clinical practice.",
            "mission": [
                "To sensitize and train the faculty members, students and supporting staff on the bioethical principle and values and encouraging them to incorporate bioethics in their daily routine",
                "To make them aware and urge the researchers of the institution to adhere to the ethical norms currently in vogue as specified by the nodal scientific organizations",
                "To develop a stage for health professionals to discuss and deliberate bioethical dilemmas that crop up during their day to day practice and research"
            ],
            "objectives": [
                "To develop a training methodology for our faculty, paramedical staff and students",
                "To formulate a bioethical protocol to be followed in research",
                "To train master teachers in bioethical principles"
            ],
            "proposed_activity_framework": {
                "description": "The department is fully equipped to support excellence in academics and research.",
                "activities": [
                    {
                        "activity": "Conducting bioethical lectures and seminars",
                        "details": [
                            "Our institution will host a series of lectures by experts addressing medical, social, ethical and legal issues once in 3 months for academicians and health care professionals in trichy district.",
                            "The details will be submitted in due course of time if and when requested by the chair."
                        ]
                    },
                    "Holding CME's and workshops in bioethics",
                    "Editing a newsletter",
                    "Editing a book",
                    "Editing a journal",
                    "Translating UNESCO textbooks to vernacular language",
                    "Research in bioethics"
                ]
            },
            "conclusion_statement": "Rational Clinical decision making forms the basis for quality health care delivery. The bioethical principles serve as a signpost showing the direction in the process of decision making in current complex health care scenario. The Bioethical unit of our institution would work towards integrating health delivery, ethics and human rights.",
            "recommendations": [
                "Expert advice on priority ethical issues at local level when requested",
                "Recommendations in assistance towards development of health care policy and associated legislation",
                "Representation at international bioethical forums and actively take part in collaborative communication and exchange of information"
            ],
            "research_areas": [
                "Current legislations in medical field",
                "Doctor patient relationship",
                "Student faculty relationship",
                "Ethical violations in research"
            ],
            "committee_members": [
                { "sno": 1, "committee_designation": "Patron (1)", "name": "Dr.T.R.Paarivendhar", "designation": "Founder Chancellor", "department": "SRM University" },
                { "sno": 2, "committee_designation": "Patron (2)", "name": "Dr.R.Shivakumar", "designation": "Chairman", "department": "Trichy & Ramapuram Campus, SRM Group of Institutions" },
                { "sno": 3, "committee_designation": "Patron (3)", "name": "Dr.Sukumaran Annamalai", "designation": "Dean", "department": "Trichy SRM Medical College Hospital and Research Center, Irungalur, Trichy" },
                { "sno": 4, "committee_designation": "Head", "name": "Dr.T.S.Gugapriya", "designation": "Associate Professor", "department": "Anatomy" },
                { "sno": 5, "committee_designation": "Unit Chair / Lead", "name": "Dr.E.Kamala", "designation": "Associate Professor", "department": "Anatomy" },
                { "sno": 6, "committee_designation": "Secretary", "name": "Dr.K.Ilavenil", "designation": "Tutor", "department": "Anatomy" },
                { "sno": 7, "committee_designation": "Invitee", "name": "Dr. P.Karthick", "designation": "Professor & Head", "department": "General Surgery" },
                { "sno": 8, "committee_designation": "Member", "name": "Dr.R.Nirmala", "designation": "Assistant Professor", "department": "OBG" },
                { "sno": 9, "committee_designation": "Member", "name": "Dr.Guru.T.Arun", "designation": "Assistant Professor", "department": "Radiology" },
                { "sno": 10, "committee_designation": "Member", "name": "Dr.R.Kirubahar", "designation": "Assistant Professor", "department": "Anesthesiology" },
                { "sno": 11, "committee_designation": "Member", "name": "Dr.A.Sundararajan", "designation": "Assistant Professor", "department": "IRB" },
                { "sno": 12, "committee_designation": "Member", "name": "Dr.K.Ronald Roy", "designation": "Senior Resident", "department": "Psychiatry" },
                { "sno": 13, "committee_designation": "Member", "name": "Dr.A.Anupriya", "designation": "Assistant Professor", "department": "Microbiology" },
                { "sno": 14, "committee_designation": "Member", "name": "Dr.T.Nivedhitha", "designation": "Assistant Professor", "department": "Pharmacology" },
                { "sno": 15, "committee_designation": "Member", "name": "Dr.S.Padma Priyaj", "designation": "Assistant Professor", "department": "Pathology" },
                { "sno": 16, "committee_designation": "Member", "name": "Dr.D.Rock Britto", "designation": "Assistant Professor", "department": "Community Medicine" },
                { "sno": 17, "committee_designation": "Member (Legal)", "name": "Mr.M.Krishnasamy", "designation": "Legal Manager", "department": "Trichy Campus, SRM Group of Institutions" }
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
            let html = `<p>${bioEthicsData.proposed_activity_framework.description}</p><ul>`;
            
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
            html += '</ul>';
            content.innerHTML = html;
        }

        // Load Conclusion Content
        function loadConclusion() {
            const content = document.getElementById('conclusionContent');
            content.innerHTML = `<p>${bioEthicsData.conclusion_statement}</p>`;
        }

        // Load Recommendations Content
        function loadRecommendations() {
            const content = document.getElementById('recommendationsContent');
            let html = '<ul>';
            bioEthicsData.recommendations.forEach(item => {
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

        // Load Committee Members Content
        function loadCommitteeMembers() {
            const content = document.getElementById('committeeMembersContent');
            let html = '<div class="publication-table-wrapper"><table class="publication-table"><thead><tr>';
            html += '<th style="width: 5%">S.No</th>';
            html += '<th style="width: 14%">Committee Designation</th>';
            html += '<th style="width: 18%">Name</th>';
            html += '<th style="width: 18%">Designation</th>';
            html += '<th style="width: 55%">Department</th>';
            html += '</tr></thead><tbody>';
            
            bioEthicsData.committee_members.forEach(member => {
                html += '<tr class="in-row">';
                html += `<td>${member.sno}</td>`;
                html += `<td>${member.committee_designation}</td>`;
                html += `<td>${member.name}</td>`;
                html += `<td><span class="designation">${member.designation}</span></td>`;
                html += `<td>${member.department}</td>`;
                html += '</tr>';
            });
            
            html += '</tbody></table></div>';
            content.innerHTML = html;
        }

        // Initialize all content
        function initializeBioEthicsPage() {
            loadVisionMission();
            loadActivityFramework();
            loadConclusion();
            loadRecommendations();
            loadResearchAreas();
            loadCommitteeMembers();
        }

        // Load content when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeBioEthicsPage);
        } else {
            initializeBioEthicsPage();
        }