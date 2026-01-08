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
                position: "Head of Research",
                specialization: "Director Biomedical Research",
                publications: 45,
                projects: 6,
                citations: "2.2 CR",
                interests: ["Cancer","Cancer stem cells","Wnt Signalling","Secreted Frizzled Related Protein-4 (SFRP4)"],
                projectsList: [
                    "SFRP4 as a therapeutic in cancers of the ovary, breast, prostate, glioma, head and neck, and mesothelioma",
                    "Role of SFRP4 in cancer cell metabolism",
                    "Wnt signalling in cancer stem cells"
                ],
                publications: [                   
                    "Development of In Vitro Parkinson Disease Model Mediated by MPP+ and alpha-Synuclein Using Wharton Jelly Mesenchymal Stem Cells. Gamit N et al. CNS Neurosci Ther. 2025.",
                    "Modeling amyotrophic lateral sclerosis with amniotic membrane-derived mesenchymal stem cells. Soumya BS et al. Exp Cell Res. 2025.",
                    "A novel function of the Wnt antagonist secreted frizzled-related protein 4 as a transcriptional regulator of Dickkopf-1 in glioblastoma cell line U87MG. Biochim Biophys Acta Mol Cell Res. 2025.",
                    "Prevalence and genomic insights of carbapenem resistant and ESBL producing multidrug resistant Escherichia coli in urinary tract infections. Sci Rep. 2025.",
                    "The Wnt/SFRP4 signaling axis in neuronal cell fate after spinal cord injury. Journal of Minimally Invasive Spine Surgery and Technique. 2025.",
                    "Activation of miR-203a by SFRP4 micropeptides targets epithelial-mesenchymal transition and autophagy in ovarian cancer stem cells. BBA Molecular Cell Research.",
                    "Flow cytometry: a versatile tool for stem cell research. Biochemical and Biophysical Research Communications. 2025.",
                    "Novel mesothelioma circulating tumour spheres for SFRP4 therapeutics. Frontiers in Oncology. 2025.",
                    "Integrin, VE-cadherin, and beta-catenin signaling triad in angiogenesis regulated by SFRP4. Journal of Cellular Physiology. 2025."
                ],
                conferences: [
                   "American Association for Cancer Research",
                    "Australian Society for Medical Research",
                    "International Breast Cancer Society",
                    "World Congress in Oncology"
                ],
                patents: [
                    "Novel anti-cancer peptide (E-2/3767/2021/CHE)"
                ],
                awards: [
                    "Curtin Innovation Award (2016)",
                    "Doctor of Medicine (Physiology; Honorary)",
                    "Achievement Award (AACR-Nominated)",
                    "GPS Scholar - Top 0.05% in the world",
                    "Stanford Ranking - Top 2%"
                ],
                journal_reviewer:["Cancers",
                    "International Journal of Biochemistry and Cell Biology",
                    "Scientific Reports",
                    "Cells",
                    "Metabolities",
                    "British Journal Cancer - Reports",
                    "Journal of Molecular Digital Medicine",
                    "Endocrinology",
                    "Molecular and Cellular Physiology"],
                grant_reviewer:["NHMRC (Australia)","ARC (Australia)","DBT","DHR","ICMR","DST","NIH (USA)"],
                editorial: [
                    "Cancers",
                    "Frontiers in Oncology",
                    "International Journal of Biochemistry and Cell Biology",
                    "Reproductive Biomedicine Online",
                    "Scientific Reports",
                    "British Journal of Cancer (Reports)",
                    "Frontiers in Endocrinology",
                    "Frontiers in Reproductive Health",
                    "Current Stem Cell Research and Therapy"
                ]
            }],
            coordinator: [
                {
                    name: "Dr A Suguna",
                    profileImage:"./assets/images/researchers/coordinator.jfif",
                    position: "Coordinator",
                    specialization: "Professor of Community medicine",
                    publications: 32,
                    projects: 12,
                    citations: "1.09 Cr",
                    interests: ["Geriatrics","Occupational health","Medical education","MCH"],
                    projectsList: [
                        "Many intramural and extramural projects including ICMR projects"
                    ],
                    publications: [
                        "More than 75"
                    ],
                    conferences: [
                        "13 national and 8 international conferences"
                    ],
                    patents: [
                        "4"
                    ],
                    awards: [
                        "Scholarship for global course in Ben Gurian University, Israel 14 copyrights and 4 patents"
                    ],
                    editorial: [
                        "IAPSM"
                    ],
                    journal_reviewer:["Indian journal of public health, IJMPH, Annuals of SBV, IJOEM "],
                }
            ],
            members: [
                {
                    name: "Dr.S.Ayyappan",
                    profileImage:"./assets/images/researchers/member_1.jfif",
                    position: "Member",
                    specialization: "Senior Resident",
                    interests: ["Clinical biochemistry", "Endocrinology", "Molecular biology"],
                    projects: 1,
                    citations: "25000",
                    publications:["Serum fructosamine is a better indicator than hbalc in Gestational diabetes mellitus", "Antioxidant status in neonatal jaundice before and after phototherapy", "Selenium and selenium dependent enzymes in Hypothyroidism", "Clinical perspective on thyroid hormone and autoantibodies in Sub clinical Hypothyroidism", "Selenium status and its relationship in thyroid disorders in urban population"],
                    conferences: ["Role on selenium in thyroid disorder at ACBiocon", "Role on thyroid antibodies in Sub clinical Hypothyroidism at Assopicon"],
                    awards: ["Young scientist award at 2014", "Best Research award at 2015"],
                },
                {
                    name: "Dr.P.Jenifer",
                    profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIC801LEXM0O7ZWYP4_W3Tj9YTwZ82rToeQ&s",
                    position: "Member",
                    specialization: "Assistant Professor",
                    publications: 14,
                    interests: ["Molecular Biology", "Genetics", "Cancer Biology"],
                    publications:[
                        "Comprehensive review of cardiovascular diseases and their risk factors, Zhuzao/Foundry [ISSN:1001-4977], Volume 28 Issue 10",
                        "Prevalence of occupational burnout among nurses in tertiary care hospital, Trichy, National Journal of Physiology, Pharmacology and Pharmacology (2025), Vol. 15(1): 102-106",
                        "Developing the Battery for Identifying Pyrexia of Unknown Origin (PUO) and Potential Virus Generic Screening, Journal of Xidian University, DOI: 10.5281/Zenodo.14779136, ISSN: 1001-2400",
                        "A study on isolation of bioactive compounds from Buxus sempervirens leaf extract by GCMS, IJRAR, Volume 5 Issue 3, August 2018",
                        "An investigation on antioxidant and antimicrobial activity of steroidal alkaloid isolated from Buxus sempervirens leaf, International Journal of Pharmaceutical Sciences Review and Research, 52(1), September-October 2018, Pages 97-100",
                        "A clinical and epidemiological study of upper limb injuries resulting from agricultural accidents, International Surgery Journal, 2017 Nov;4(11):3622-3626, DOI: 10.18203/2349-2902.isj20174680",
                        "Impact of interleukin 6 in the management of lymphedema, Paripex - Indian Journal of Research, November 2019, Volume 8 Issue 11, ISSN: 2250-1991, DOI: 10.36106/paripex",
                        "More than 6 manuscripts are under communication with reputed clinical and surgical journals for publication",
                        "Saccharomonospora azurea strain SACAZ 16S ribosomal RNA gene, partial sequence, GenBank: PX452914.1",
                        "Paenarthrobacter nicotinovorans strain SSPN 16S ribosomal RNA gene, partial sequence, GenBank: PX452998.1"
                    ],
                    conferences: [
                        "Resource Person for Medical Innovations - Impact and Commercialization Potential from 20th November 2025 to 22nd November 2025 for the students of Biomedical and Biotechnology at Technology Enabling Centre, Entrepreneurship Development and Innovation Council, AC Tech Campus, Anna University, Chennai",
                        "Resource Person for Entrepreneurship workshop for 3 days organised at Amrita VishwaVishwapeetham, Coimbatore on 9th, 10th and 11th October 2025",
                        "Resource Person in 3 days National level seminar Research 360 conducted by Multi Disciplinary Research Unit, Government Thanjavur Medical College along with Department of Health Sciences and Indian Council of Medical Research from 08.10.2024 to 10.10.2024",
                        "Resource person in National level webinar on Mutated Corona- from researcher perspective conducted by BI- Plan care and conservation club, Ayya Nadar Janaki Ammal College, Sivakasi on 6th May 2021",
                        "Speaker in a one day webinar on Coexistence with COVID-19 conducted by K.S.Rangasamy College of Technology (Aut), Tiruchengode on 26th May 2021",
                        "Organized and participated a webinar on Recent advances in Nanomedicine in Multi Disciplinary Research Unit, Thanjavur Medical College, Thanjavur on 5th April 2021",
                        "Organized and participated a webinar on Applied epidemiology of COVID-19 or data driven policy planning in Multi Disciplinary Research Unit, Thanjavur Medical College, Thanjavur on 26th April 2021",
                        "Resource Person in National Webinar on Mutated CORONA- From Researcher Perspective organized by BI-PLAN, Ayya Nadar Janakiammal College, Sivakasi",
                        "Resource Person in National Webinar on Coexistence with COVID-19 organized by Department of Bio Technology, KSR College of Technology, Tiruchangode",
                        "Keynote Speaker in Prism of Possibilities organized by Multi Disciplinary Research Unit, Thanjavur Medical College, Thanjavur",
                        "Resource Person in Workshop on Biomedical Research: from Theory To Practice conducted by Department of Pharmacology & MRU under the auspices of The Tamil Nadu Dr.MGR Medical University, Chennai and valued with 20 credit points"
                    ],
                    awards: [
                        "Received a Young Researcher award 2022, Institute of Scholars, Under Ministry of MSME & Corporate Affairs, Govt. of India",
                        "Recognized as Reviewer of InSc International Publishing Platforms and also for Technical Events under Basic and Medical Sciences",
                        "Recognized as Professional Member of InSc International Publisher in recognition of Professional standing (LMINSC)",
                        "Received a Certificate of Appreciation for Outstanding Dedication and Service to the Nation and Fight against COVID-19 by Multi Disciplinary Research Unit, Under DHR, Govt. of India & ICMR, New Delhi",
                        "Received an award of COVID WARRIOR by Multi Disciplinary Research Unit, Under DHR, Govt. of India & ICMR, New Delhi",
                        "Received an award and certificate in recognition of invaluable service in COVID-19 by Govt. of Tamil Nadu",
                        "Received SHAKTI AWARD-2023 in recognition of extraordinary contributions to Society by Team nRoot",
                        "Received a certification of Appreciation for contributing in Shramdaan for Swachh Bharat"
                    ],
                    editorial: [
                       "Recognized as Reviewer of InSc International Publishing Platforms and also for Technical Events under Basic and Medical Sciences",
                       "Recognized as Professional Member of InSc International Publisher in recognition of Professional standing (LMINSC)"
                    ]
                },
                
                {
                    name: "Dr. N. Prabhusaran",
                    profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIC801LEXM0O7ZWYP4_W3Tj9YTwZ82rToeQ&s",
                    position: "Member",
                    specialization: "Microbiology and Research",
                    publications: 45,
                    projects: 10,
                    citations: "1.9 L",
                    interests: ["Infectious Diseases", "Leptospirosis and other undifferentiated febrile illness", "Microbial and Herbal nanotechnology", "Development of Antimicrobial compounds"],
                    projectsList: [
                        "PG project (ICMR funded) – Co-Guide - In vitro antimicrobial activity of condiments mediated silver nanoparticles – Dr. Amrutharajasaranya (PG in Pharmacology) - 2018",
                        "UG Project (ICMR-STS) – Guide - Ms. S. Nagma (2013) - Prevalence and pattern of bacteremia among intensive care unit patients",
                        "UG Project (ICMR-STS) – Guide - Mr. M. Raagavendhar (2018) - Prevalence of leptospirosis among rice mill workers in Tiruchirapalli, South India",
                        "UG Project (ICMR-STS) – Guide – Mr. N. Manikandan (2019) - Seroprevalence of leptospiral antibodies among municipal service workers in Tiruchirapalli, South India",
                        "UG Project (ICMR-STS) – Guide – Ms. P. Swarna Lakshmi (2020) - Isolation and identification of Escherichia coli and Salmonella from poultry feed and litter and their antimicrobial resistance profile in the district of Cuddalore, Tamilnadu",
                        "UG Project (ICMR-STS) – Guide - Mr. M. Bharath Ragul (2022) - Detection of bacterial pathogens in hands of food handlers, suppliers & cooks & emphasize the knowledge of personal hygiene & hand wash",
                        "UG Project (ICMR-STS) – Co-Guide – Ms. R. Lakshika (2013) - Bacteriological status of socks and usefulness of silver nitrate impregnation",
                        "UG Project (ICMR-STS) – Co-Guide - Ms. Aninditha Guraza (2015) - Bacteriological profile of street vended food",
                        "UG Project (ICMR-STS) – Co-Guide – Mr. H.A Prasanth (2016) - Prevalence of HBV and HCV in patients of chronic liver disease with special reference to hepatocellular carcinoma",
                        "UG Project (ICMR-STS) – Co-Guide - Mr. H.A Prasanth (2017) - Bacteriological profile of diabetic ulcer foot and their antimicrobial susceptibility pattern in a tertiary care hospital, Trichy"
                    ],
                    publications: [
                        "Veena GN, Vineetha KU, Niraimathi M, Badri NSV, Rene CL, Rajesh YBRD, Dhiviya N, Anupriya A, Prabhusaran N, Saisubramaian N. Human vaginal Lactobacillus jensenii- derived (-)-terpinen-4-ol restores antibiotic sensitivity by inhibiting efflux pumps in drug resistant E. coli and K. pneumoniae. Scientific Reports 2025; 15: 31823 (WoS, PubMed, Scopus, Nature)",
                        "Nair VG, Srinandan CS, Rajesh YBRD, Narbhavi D, Anupriya A, Prabhusaran N, Nagarajan S. Biogenic amine tryptamine in human vaginal probiotic isolates mediates matrix inhibition and thwarts uropathogenic E. coli biofilm. Scientific Reports 2024 Jul 4; 14(1): 15387. (WoS, PubMed, Scopus, Nature)",
                        "Lalith Varsid CM, Chitra Rajalakshmi P, Prabhusaran N. Knowledge, attitude and practice towards hepatitis B vaccination among medical and nursing students in South India. Journal of Xidian University 2024; 18(4): 965-976. (Scopus)",
                        "Prabhusaran N, Revwathy S, Vinitha P, Clitus A, Bharath Ragul M. Post COVID-19: analysis of reasons for mask wearing intention. International Journal of Pharmaceutical Sciences 2024; 2(4): 598-610. (DOAJ)",
                        "Lalithambigai J, Saraswathi R, Anupriya A, Prabhusaran N. Antimicrobial susceptibility pattern of E. coli causing urinary tract infection with special reference to fluoroquinolone resistance in a tertiary care teaching hospital in South India. International Journal of Pharmaceutical and Clinical Research 2024; 16(3): 238-244. (Scopus)",
                        "Kanagasanthosh K, Prabhusaran N, Saravanan KS, Poorani S. Audit of antibiotic prescription with emphasizing adherence to antibiotic policy: a prospective observational study from South India. International Journal of Toxicological and Pharmacological Research 2023; 13(9): 92-100. (Embase)",
                        "Anupriya A, Prabhusaran N, Suganya R, Chitra Rajalakshmi P. COVID 19 vaccine booster acceptance and hesitancy among health care professionals. Innovations 2023; 75: 1031-1035. (Scopus)",
                        "Sampath G, Muthusamy G, Sridharan K, Prabhusaran N, Neelamegam R, Muthukalingan K, Kayalvizhi N. Isolation and identification of metronidazole resistant Helicobacter pylori from gastric patients in the southeastern region of India and its advanced antibacterial treatment using biological silver oxide nanoparticles. Biochemical Engineering Journal 2022; 187: 108445 (8 pages). (Scopus, Embase, Elsevier)",
                        "Ganeshkumar A, Prabhusaran N, Pramila M, Saranya B, Priya AA, Archunan G, Rajaram R. Antifungal susceptibility and virulence profile of Candida isolates from abnormal vaginal discharge of women from Southern India. European Journal of Obstetrics & Gynecology and Reproductive Biology 2020; 254: 153-158. ISSN: 0301-2115; Impact factor: 1.868. (WoS, Embase, PubMed, Scopus, Elsevier)",
                        "Ganeshkumar A, Suvaithenamudhan S, Elanthamilan E, Arun G, Dileepan GAB, Prabhusaran N, Rajaram R. New Insight of red seaweed derived Callophycin A as an alternative strategy to treat drug resistant vaginal candidiasis. Bioorganic Chemistry 2020; 104: 104256. ISSN: 0045-2068; Impact factor: 4.831. (WoS, Embase, PubMed, Scopus, Elsevier)",
                        "Prabhakar YK, Janardhan YE, Sreenivasulu D, Raju K, Krishna KJ, Prabhusaran N. Ameliorative effects of Mentha aquatic on diabetic and nephroprotective potential activities in STZ induced renal injury. Comparative Clinical Pathology 2019; 22: doi.org/10.1007/s00580-019-03042-6. ISSN: 1618-565X; Impact factor: 0.32. (Medline, PubMed and Springer)",
                        "Sreenivasulu D, Sailaja G, Prabhakar Y, Prabhusaran N, Balaji M. Sensitivity of glutathione S-transferases to high doses of acrylamide in albino wistar rats: affinity purification, biochemical characterization and expression analysis. Ecotoxicology and Environmental Safety 2019; 182: 109416. ISSN: 0147-6513; Impact factor: 4.640. (Elsevier, PubMed and Medline)",
                        "Prabhakar YK, Sreenivasulu D, Sreenath K, Prabhusaran N. In vivo antihyperglycemic, antihyperlipidemic, antioxidative stress and antioxidant potential activities of Syzygium paniculatum Gaertn. in streptozotocin induced diabetic rats. Heliyon 2019; 5(3): e01373. ISSN: 2405-8440; Impact factor: 0.572. (WoS, Scopus, PubMed, Elsevier)",
                        "Raagavendhar VB, Prabhusaran N, Uma A, Hemalatha K, Natarajaseenivasan K, Joseph Pushpa Innocent D. Prevalence of leptospirosis among rice mill workers in Tiruchirapalli, South India. Annals of International Medical and Dental Research 2019; 5(1): MB06-MB13. ISSN: 2395-2614; Impact factor: 6.04. (PubMed, Index Medicus and Index Copernicus)"
                    ],
                    conferences: [
                        "Editorial Workshop on Editorial Integrity and Innovation: Navigating medical publishing in the Indian context – organized by Scientific Scholar (20th September 2025)",
                        "National Webinar on Intellectual property Rights (IPR) – 2nd February 2021",
                        "International Conference on Frontiers in Nano Science, Technology and Applications",
                        "National Conference on Public Health challenges of Tropical Diseases moving towards universal access – Organized by Central University of Tamilnadu, Thiruvarur – 2020",
                        "Workshop on Research Methodology & Biostatistics: How to do a good dissertation – The Tamilnadu Dr. MGR Medical University, 2020",
                        "National Seminar on Artificial perception, machine learning for Human Robot interface – PSNA College Dindigul - 2019",
                        "Seventh National Workshop on Research Methodology – TSRMMCH&RC - 2019"
                    ],
                    awards: ["Rabindra Ratna Puraskar 2025 – Veyil Foundation", "Incredible Academician of India 2021 – Record Owners", "SAS Best Academician Award", "I2OR – Distinguished Researcher Award"],
                    journal_reviewer:["Saudi Journal of Pathology and Microbiology", "Indian Journal of Microbiology Research", "EC Emergency Medicine and Critical Care", "International Journal of Health and Pharmaceutical Research"],
                    editorial: ["SCIREA Journal of Clinical Medicine", "Saudi Journal of Pathology and Microbiology", "International Journal of Infectious Diseases and Therapy", "Malaysian Journal of Medical and Biological Research (MJMBR)", "Journal of Microbiology and Biotechnology Research (JMBR)", "Journal of Drug Discovery and Development (JDDD)", "Global Journal of Nanomedicine (GJN)"]
                },
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
                { title: 'Coordinator', key: 'coordinator' },
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
                                    ${researcher.projects || researcher.citations ?`<div class="irpc-researcher-stats">
                                        ${researcher.projects ?`<div class="irpc-stat-item">
                                            <span class="irpc-stat-number">${researcher.projects}</span>
                                            <span class="irpc-stat-label">Projects</span>
                                        </div>
                                        `:''}
                                        ${researcher.citations ?`<div class="irpc-stat-item">
                                            <span class="irpc-stat-number">₹${researcher.citations}</span>
                                            <span class="irpc-stat-label">Fund</span>
                                        </div>
                                        `:''}
                                    </div>`:''}
                                    
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
            if(Array.isArray(researcher.projectsList)){
                document.getElementById('irpc-modalProjects').innerHTML = researcher.projectsList.map(project => 
                    `<li>${project}</li>`
                ).join('');
            }
            else{
                document.getElementById("projectSection").style.display="none";
            }
            

            document.getElementById('irpc-modalPublications').innerHTML = researcher.publications.map(pub => 
                `<li>${pub}</li>`
            ).join('');

            document.getElementById('irpc-modalConferences').innerHTML = researcher.conferences.map(conf => 
                `<li>${conf}</li>`
            ).join('');
            
            if(Array.isArray(researcher.patents)){
                document.getElementById('irpc-modalPatents').innerHTML = researcher.patents.map(patent => 
                `<li>${patent}</li>`
                ).join('');
            }
            else{
                document.getElementById("patentSection").style.display="none";
            }
            
            document.getElementById('irpc-modalAwards').innerHTML = researcher.awards.map(award => 
                `<li>${award}</li>`
            ).join('');

          

            if(Array.isArray(researcher.editorial)){
                document.getElementById('irpc-modalEditorial').innerHTML = researcher.editorial.map(role => 
                 `<li>${role}</li>`
                ).join('');
            }
            else{
                document.getElementById("editorialSection").style.display="none";
            }

            if(Array.isArray(researcher.journal_reviewer)){
                document.getElementById('irpc-modaljournal_reviewer').innerHTML = researcher.journal_reviewer.map(role => 
                    `<li>${role}</li>`
                ).join('');
            }
            else{
                document.getElementById("journalSection").style.display="none";
            }

            if(Array.isArray(researcher.grant_reviewer)){
                document.getElementById('irpc-modalgrant_reviewer').innerHTML = researcher.grant_reviewer.map(role => 
                `<li>${role}</li>`
                ).join('');
            }
            else{
                document.getElementById("grantSection").style.display="none";
            }
            

            

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