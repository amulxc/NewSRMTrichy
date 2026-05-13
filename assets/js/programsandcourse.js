    const departmentsData = {
                departments: [
                    {
                        id: "anatomy",
                        name: "Anatomy",
                        icon: "fa-person",
                        color: "#e74c3c",
                        colorDark: "#c0392b",
                        description: "Understanding the Structure of Human Body",
                        programmeOverview: "The Anatomy department provides comprehensive education in human body structure, covering gross anatomy, microscopic anatomy, embryology, and neuroanatomy. Our programme integrates traditional dissection methods with modern imaging techniques and digital resources.",
                        programmeDuration: "Teaching across all 5 years of MBBS curriculum with major focus in Phase I",
                        courseOutcomes: [
                            "Identify and describe the normal structure and relations of different organs of the human body",
                            "Demonstrate basic understanding of embryological development and its clinical correlations",
                            "Perform dissection and identify anatomical structures on cadavers",
                            "Interpret radiological images and identify anatomical landmarks",
                            "Correlate anatomical knowledge with clinical presentations",
                            "Apply anatomical knowledge in surgical procedures and clinical practice"
                        ],
                        teachingMethods: [
                            "Cadaveric dissection",
                            "Histology practical sessions",
                            "Museum specimens demonstration",
                            "Radiology integration",
                            "3D anatomical models",
                            "Digital anatomy software",
                            "Clinical correlation seminars"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "40%" },
                            { method: "Practical Examinations", weightage: "40%" },
                            { method: "Viva Voce", weightage: "10%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Gross anatomical dissection techniques",
                            "Microscopic examination of tissues",
                            "Identification of anatomical specimens",
                            "Radiological anatomy interpretation",
                            "Surface anatomy marking",
                            "Clinical anatomy application"
                        ]
                    },
                    {
                        id: "physiology",
                        name: "Physiology",
                        icon: "fa-heart-pulse",
                        color: "#673ab7",
                        colorDark: "#512da8",
                        description: "Understanding Functions of Human Body Systems",
                        programmeOverview: "The Physiology department focuses on the study of normal functions of human body systems. Our curriculum integrates basic physiological principles with clinical applications, emphasizing experimental learning and problem-based approaches.",
                        programmeDuration: "18 months programme in Phase I of MBBS curriculum",
                        courseOutcomes: [
                            "Explain the normal functioning of all organ systems of the human body",
                            "Demonstrate the ability to perform basic physiological experiments",
                            "Interpret physiological data and laboratory results",
                            "Apply physiological knowledge to understand disease mechanisms",
                            "Correlate structure-function relationships in human body",
                            "Analyze homeostatic mechanisms and their clinical implications"
                        ],
                        teachingMethods: [
                            "Interactive lectures with multimedia",
                            "Hands-on experimental physiology",
                            "Computer-assisted learning",
                            "Clinical case discussions",
                            "Problem-based learning sessions",
                            "Demonstration of physiological instruments",
                            "Self-directed learning modules"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "40%" },
                            { method: "Practical Examinations", weightage: "40%" },
                            { method: "Viva Voce", weightage: "10%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Recording of vital parameters",
                            "ECG interpretation",
                            "Spirometry and lung function tests",
                            "Blood pressure measurement techniques",
                            "Hematological investigations",
                            "Clinical correlation of physiological findings"
                        ]
                    },
                    {
                        id: "biochemistry",
                        name: "Biochemistry",
                        icon: "fa-vials",
                        color: "#00a151",
                        colorDark: "#0a754c",
                        description: "Chemical Processes Within Living Organisms",
                        programmeOverview: "The Biochemistry department provides fundamental knowledge of chemical processes in living organisms, focusing on biomolecules, metabolism, molecular biology, and clinical biochemistry. The programme emphasizes laboratory skills and diagnostic interpretation.",
                        programmeDuration: "Integrated teaching throughout MBBS with major component in Phase I",
                        courseOutcomes: [
                            "Describe the structure and function of biomolecules in human body",
                            "Explain metabolic pathways and their regulations",
                            "Perform basic biochemical investigations and interpret results",
                            "Apply biochemical knowledge to understand disease processes",
                            "Understand molecular basis of diseases",
                            "Correlate biochemical parameters with clinical conditions"
                        ],
                        teachingMethods: [
                            "Theory lectures with clinical correlation",
                            "Laboratory practical sessions",
                            "Case-based learning",
                            "Demonstration of biochemical techniques",
                            "Small group discussions",
                            "Computer-aided learning",
                            "Journal club presentations"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "40%" },
                            { method: "Practical Examinations", weightage: "40%" },
                            { method: "Viva Voce", weightage: "10%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Blood sample collection and handling",
                            "Biochemical test procedures",
                            "Use of spectrophotometer and other instruments",
                            "Quality control in laboratory",
                            "Interpretation of biochemical reports",
                            "Nutritional assessment"
                        ]
                    },
                    {
                        id: "pathology",
                        name: "Pathology",
                        icon: "fa-microscope",
                        color: "#2196f3",
                        colorDark: "#1976d2",
                        description: "Study of Disease Mechanisms and Diagnosis",
                        programmeOverview: "The Pathology department provides comprehensive training in general pathology, systemic pathology, clinical pathology, and hematology. Students learn disease mechanisms, diagnostic techniques, and interpretation of laboratory investigations.",
                        programmeDuration: "Taught in Phase II of MBBS curriculum for 12 months",
                        courseOutcomes: [
                            "Describe basic pathological processes and disease mechanisms",
                            "Identify microscopic features of diseased tissues",
                            "Perform and interpret basic pathological investigations",
                            "Correlate pathological findings with clinical presentations",
                            "Understand principles of tumor pathology and staging",
                            "Apply pathological knowledge in clinical decision making"
                        ],
                        teachingMethods: [
                            "Didactic lectures",
                            "Microscopy sessions",
                            "Museum specimen study",
                            "Autopsy demonstrations",
                            "Hematology practicals",
                            "Clinical pathology labs",
                            "Case presentations and discussions"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "40%" },
                            { method: "Practical Examinations", weightage: "40%" },
                            { method: "Viva Voce", weightage: "10%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Microscopic examination techniques",
                            "Specimen collection and handling",
                            "Peripheral blood smear preparation and examination",
                            "Tissue section interpretation",
                            "Report writing and documentation",
                            "Communication of pathological findings"
                        ]
                    },
                    {
                        id: "pharmacology",
                        name: "Pharmacology",
                        icon: "fa-pills",
                        color: "#ff9800",
                        colorDark: "#f57c00",
                        description: "Science of Drugs and Their Effects",
                        programmeOverview: "The Pharmacology department teaches the science of drugs, their mechanisms of action, therapeutic uses, adverse effects, and rational drug prescribing. The curriculum integrates basic pharmacology with clinical therapeutics and pharmacovigilance.",
                        programmeDuration: "Taught in Phase II for 13.5 months with clinical integration",
                        courseOutcomes: [
                            "Explain pharmacokinetics and pharmacodynamics of major drug groups",
                            "Prescribe drugs rationally for common clinical conditions",
                            "Identify and manage adverse drug reactions",
                            "Understand principles of drug interactions",
                            "Apply principles of pharmacovigilance",
                            "Counsel patients regarding proper medication use"
                        ],
                        teachingMethods: [
                            "Systematic lectures on drug classes",
                            "Experimental pharmacology sessions",
                            "Prescription writing workshops",
                            "Clinical case discussions",
                            "Problem-based learning",
                            "Pharmacovigilance training",
                            "Essential drug list familiarization"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "40%" },
                            { method: "Practical Examinations", weightage: "40%" },
                            { method: "Viva Voce", weightage: "10%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Rational drug prescription",
                            "ADR identification and reporting",
                            "Drug dose calculation",
                            "Drug information retrieval",
                            "Patient counseling on medication",
                            "Therapeutic drug monitoring"
                        ]
                    },
                    {
                        id: "microbiology",
                        name: "Microbiology",
                        icon: "fa-bacteria",
                        color: "#009688",
                        colorDark: "#00796b",
                        description: "Study of Microorganisms and Infectious Diseases",
                        programmeOverview: "The Microbiology department provides comprehensive knowledge of bacteria, viruses, fungi, and parasites, their role in causing diseases, laboratory diagnosis, and principles of antimicrobial therapy and infection control.",
                        programmeDuration: "Taught in Phase II for 12 months",
                        courseOutcomes: [
                            "Identify and classify medically important microorganisms",
                            "Perform microbiological investigations and interpret results",
                            "Understand pathogenesis of infectious diseases",
                            "Apply principles of antimicrobial therapy",
                            "Implement infection control and prevention measures",
                            "Understand principles of immunology and serology"
                        ],
                        teachingMethods: [
                            "Theory lectures on microorganisms",
                            "Laboratory culture techniques",
                            "Staining and microscopy sessions",
                            "Antimicrobial sensitivity testing",
                            "Serology and immunology practicals",
                            "Infection control workshops",
                            "Clinical case studies"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "40%" },
                            { method: "Practical Examinations", weightage: "40%" },
                            { method: "Viva Voce", weightage: "10%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Specimen collection and transport",
                            "Bacterial culture techniques",
                            "Gram staining and other staining methods",
                            "Microscopic examination",
                            "Antimicrobial susceptibility testing",
                            "Infection control practices"
                        ]
                    },
                    {
                        id: "ForensicMedicine",
                        name: "Forensic Medicine & Toxicology",
                        icon: "fa-gavel",
                        color: "#607d8b",
                        colorDark: "#455a64",

                        desc: "The Department of Forensic Medicine & Toxicology trains undergraduate MBBS students and CRMI interns to understand medico-legal responsibilities, ethical medical practice, and forensic procedures essential for justice administration.",

                        vision: "To produce skilled and informed doctors capable of making accurate observations, deductions, and medico-legal conclusions, ensuring ethical and legally sound medical practice.",

                        mission: [
                            "To train UG students as per National Medical Commission and University guidelines.",
                            "To encourage research activities in forensic medicine and toxicology.",
                            "To familiarize students with recent amendments in medical law.",
                            "To inculcate ethical and responsible medical practice.",
                            "To equip students with the knowledge and skills required for medico-legal work."
                        ],

                        objectives: [
                            "Perform medico-legal autopsy.",
                            "Issue medico-legal certificates.",
                            "Serve as an expert witness in the court of law.",
                            "Aid police investigations for administration of justice.",
                            "Collect, preserve and dispatch medico-legal specimens to FSL and pathology.",
                            "Maintain proper medico-legal records.",
                            "Prepare and issue medical certificates."
                        ],

                        infra_desc: "The Department is equipped with modern facilities including research laboratories, museum sections, smart demo rooms, mortuary block, and a departmental library to support teaching and research.",
                        infra: [
                            "Research laboratory and museum with preserved specimens",
                            "Two demo rooms with smart classroom facilities",
                            "Mortuary block",
                            "Department library cum seminar room"
                        ],

                        faculty: [
                            { name: "Dr. RAJENDRA KUMAR R", designation: "Professor & Head", exp: 22 },
                            { name: "Dr. A. DOMINIC INFANT RAJ", designation: "Professor", exp: 10 },
                            { name: "Dr. A. ASWATH", designation: "Assistant Professor", exp: 6 },
                            { name: "Dr. S. VIGNESHWARAN", designation: "Assistant Professor", exp: "2 Years 8 Months" },
                            { name: "Dr. PRABHA K", designation: "Assistant Professor", exp: "4 Years 3 Months" },
                            { name: "Dr. VIJAYARAGAVAN M", designation: "Assistant Professor", exp: "2 Years 2 Months" },
                            { name: "Dr. PITCHAI MUTHU N", designation: "Assistant Professor", exp: "1 Year 5 Months" },
                            { name: "Dr. SAKTHIMANI", designation: "Senior Resident", exp: "3 Months" }
                        ],

                        services: [
                            "Medico-legal autopsy services",
                            "Medico-legal certification",
                            "Expert witness services for court",
                            "Support for police investigations",
                            "Specimen collection and preservation for FSL",
                            "Medico-legal training for CRMI"
                        ],

                        pubStats: [
                            { label: "Overall", value: 6 },
                            { label: "International", value: 6 },
                            { label: "National", value: 0 }
                        ],

                        pubHighlights: [
                            "Analysis of Fatal Blunt Force Head Injuries in Road Traffic Accidents",
                            "Epidemiological Study of Pediatric & Adolescent Poisoning Cases",
                            "Case series on sanitizer misuse during lockdown"
                        ],

                        pubYearwise: [
                            {
                                year: 2024,
                                title: "Analysis of Fatal Blunt Force Head Injuries in cases of Road Traffic Accidents",
                                journal: "Indian Journal of Forensic Medicine & Toxicology, 19(1), 122-127",
                                type: "International"
                            },
                            {
                                year: 2024,
                                title: "Epidemiological Study of Pediatric and Adolescent Poisoning Cases in a Rural Tertiary Care Centre in South India",
                                journal: "Indian Journal of Forensic Medicine & Toxicology, 18(4), 55-58",
                                type: "International"
                            },
                            {
                                year: 2024,
                                title: "Correlation of Stature and Hand Dimension Among Medical Students of South Tamil Nadu",
                                journal: "Indian Journal of Forensic Medicine & Toxicology, Vol. 18 No. 4",
                                type: "International"
                            },
                            {
                                year: 2025,
                                title: "Sanitizer a lockdown hooch! – A Case Series",
                                journal: "Indian Journal of Forensic Medicine & Toxicology, 19(2), 1–6",
                                type: "International"
                            }
                        ],

                        research: [
                            "KAP study on medical negligence awareness among students and interns (ICMR Project)",
                            "Study on mental health & hematological manifestations among gas station workers (ICMR Project)"
                        ],

                        events: [
                            "Student seminars and role play sessions",
                            "Anti-ragging awareness week",
                            "World Bioethics Day celebrations"
                        ],

                        achievements: [
                            "Undergraduate student research selected for ICMR",
                            "First place (Reels) – INDICIA’25, Thanjavur Medical College"
                        ],

                        gallery: [
                            {
                                name: "Anti-ragging awareness week programme",
                                date: "14/08/2024",
                                path: "Forensic/1.jpg"
                            },
                            {
                                name: "World Bioethics Day",
                                date: "18/10/2024",
                                path: "Forensic/2.jpg"
                            }
                        ]
                    },
                    {
                        id: "community-medicine",
                        name: "Community Medicine",
                        icon: "fa-pills",
                        color: "#4caf50",
                        colorDark: "#388e3c",
                        description: "Preventive and Social Medicine",
                        programmeOverview: "The Community Medicine department focuses on preventive healthcare, epidemiology, health management, biostatistics, and community health programmes. Students learn to address health issues at population level.",
                        programmeDuration: "Taught throughout Phase II and Phase III (total 18 months)",
                        courseOutcomes: [
                            "Apply principles of preventive and social medicine",
                            "Conduct epidemiological studies and interpret data",
                            "Plan and implement community health programmes",
                            "Use biostatistics in medical research",
                            "Understand health management and administration",
                            "Promote health education and awareness"
                        ],
                        teachingMethods: [
                            "Classroom lectures",
                            "Field visits to rural and urban health centers",
                            "Survey and data collection exercises",
                            "Biostatistics workshops",
                            "Group projects on health issues",
                            "Health education demonstrations",
                            "Community diagnosis exercises"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "50%" },
                            { method: "Practical/Field Work", weightage: "40%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Epidemiological survey methods",
                            "Data collection and analysis",
                            "Health programme planning",
                            "Immunization techniques",
                            "Health education delivery",
                            "Community mobilization"
                        ]
                    },
                    {
                        id: "general-medicine",
                        name: "General Medicine",
                        icon: "fa-user-doctor",
                        color: "#2196f3",
                        colorDark: "#1565c0",
                        description: "Diagnosis and Management of Medical Disorders",
                        programmeOverview: "The General Medicine department provides clinical training in diagnosis and management of medical conditions. Students develop skills in history taking, physical examination, clinical reasoning, and patient management.",
                        programmeDuration: "Major clinical posting in Phase III (12 months)",
                        courseOutcomes: [
                            "Obtain comprehensive medical history from patients",
                            "Perform systematic physical examination",
                            "Formulate differential diagnoses",
                            "Order and interpret appropriate investigations",
                            "Develop management plans for common medical conditions",
                            "Recognize medical emergencies and provide initial care"
                        ],
                        teachingMethods: [
                            "Ward-based teaching rounds",
                            "Outpatient clinic sessions",
                            "Case presentations",
                            "Clinical skill workshops",
                            "Emergency medicine training",
                            "Journal club discussions",
                            "Grand rounds participation"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "40%" },
                            { method: "Clinical Examinations", weightage: "40%" },
                            { method: "Log Book Assessment", weightage: "10%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "History taking skills",
                            "Physical examination techniques",
                            "Clinical reasoning",
                            "Procedures: IV cannulation, catheterization",
                            "ECG interpretation",
                            "Emergency management protocols"
                        ]
                    },
                    {
                        id: "general-surgery",
                        name: "General Surgery",
                        icon: "fa-scissors",
                        color: "#f44336",
                        colorDark: "#c62828",
                        description: "Surgical Principles and Practice",
                        programmeOverview: "The General Surgery department provides comprehensive training in surgical principles, operative techniques, pre-operative and post-operative care, and management of surgical emergencies.",
                        programmeDuration: "Major clinical posting in Phase III (12 months)",
                        courseOutcomes: [
                            "Assess surgical patients and plan appropriate management",
                            "Assist in surgical procedures",
                            "Provide pre-operative and post-operative care",
                            "Manage surgical emergencies",
                            "Perform basic surgical procedures",
                            "Understand principles of asepsis and infection control"
                        ],
                        teachingMethods: [
                            "Operation theatre training",
                            "Ward rounds and bedside teaching",
                            "Surgical skill lab sessions",
                            "Emergency department rotations",
                            "Minor surgery practice",
                            "Video-assisted learning",
                            "Surgical case discussions"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "40%" },
                            { method: "Clinical/Practical Examinations", weightage: "40%" },
                            { method: "Log Book Assessment", weightage: "10%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Surgical scrubbing and gowning",
                            "Suturing and knot tying",
                            "Minor surgical procedures",
                            "Wound management",
                            "Catheterization and drainage",
                            "Basic life support"
                        ]
                    },
                    {
                        id: "obgyn",
                        name: "Obstetrics & Gynecology",
                        icon: "fa-baby",
                        color: "#e91e63",
                        colorDark: "#c2185b",
                        description: "Women's Health and Reproductive Medicine",
                        programmeOverview: "The Obstetrics and Gynecology department provides training in antenatal care, management of labor and delivery, gynecological conditions, and reproductive health. Students develop skills in maternal and child health.",
                        programmeDuration: "Clinical posting in Phase III (10 months)",
                        courseOutcomes: [
                            "Provide comprehensive antenatal care",
                            "Manage normal labor and delivery",
                            "Identify high-risk pregnancies",
                            "Diagnose and manage common gynecological conditions",
                            "Perform basic obstetric procedures",
                            "Counsel patients on reproductive health"
                        ],
                        teachingMethods: [
                            "Labor room training",
                            "Antenatal and gynecology OPD",
                            "Ward-based teaching",
                            "Operation theatre exposure",
                            "Skill lab for procedures",
                            "Family planning counseling sessions",
                            "Case-based discussions"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "40%" },
                            { method: "Clinical/Practical Examinations", weightage: "40%" },
                            { method: "Log Book Assessment", weightage: "10%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Antenatal examination",
                            "Normal delivery conduct",
                            "Gynecological examination",
                            "Episiotomy and repair",
                            "IUD insertion",
                            "Family planning counseling"
                        ]
                    },
                    {
                        id: "pediatrics",
                        name: "Pediatrics",
                        icon: "fa-child",
                        color: "#ff9800",
                        colorDark: "#ef6c00",
                        description: "Child Health and Development",
                        programmeOverview: "The Pediatrics department focuses on growth, development, and diseases of children from birth to adolescence. Students learn comprehensive child healthcare including preventive, curative, and developmental aspects.",
                        programmeDuration: "Clinical posting in Phase III (10 months)",
                        courseOutcomes: [
                            "Assess growth and development of children",
                            "Diagnose and manage common pediatric illnesses",
                            "Provide immunization and preventive care",
                            "Recognize and manage pediatric emergencies",
                            "Counsel parents on child care",
                            "Understand principles of pediatric nutrition"
                        ],
                        teachingMethods: [
                            "Pediatric ward rounds",
                            "Neonatal unit training",
                            "Well-baby clinic sessions",
                            "Immunization workshops",
                            "NICU/PICU rotations",
                            "Growth monitoring exercises",
                            "Developmental assessment training"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "40%" },
                            { method: "Clinical/Practical Examinations", weightage: "40%" },
                            { method: "Log Book Assessment", weightage: "10%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Pediatric examination techniques",
                            "Growth assessment and plotting",
                            "Immunization schedule",
                            "Neonatal resuscitation",
                            "IV cannulation in children",
                            "Developmental assessment"
                        ]
                    },
                    {
                        id: "ophthalmology",
                        name: "Ophthalmology",
                        icon: "fa-eye",
                        color: "#00bcd4",
                        colorDark: "#0097a7",
                        description: "Eye Care and Visual Health",
                        programmeOverview: "The Ophthalmology department teaches diagnosis and management of eye diseases, visual system examination, and basic ophthalmic procedures. Students learn to recognize and manage common eye conditions.",
                        programmeDuration: "Clinical posting in Phase III (3 weeks)",
                        courseOutcomes: [
                            "Perform comprehensive eye examination",
                            "Diagnose common eye diseases",
                            "Provide emergency eye care",
                            "Prescribe spectacles for refractive errors",
                            "Recognize conditions requiring specialist referral",
                            "Promote eye health and prevention of blindness"
                        ],
                        teachingMethods: [
                            "OPD-based clinical teaching",
                            "Demonstration of ophthalmic equipment",
                            "Refraction workshops",
                            "Operation theatre observations",
                            "Case discussions",
                            "Community eye camps",
                            "Visual acuity assessment training"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "50%" },
                            { method: "Clinical/Practical Examinations", weightage: "40%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Visual acuity testing",
                            "Direct ophthalmoscopy",
                            "Slit lamp examination",
                            "Tonometry",
                            "Eye irrigation",
                            "Foreign body removal"
                        ]
                    },
                    {
                        id: "ent",
                        name: "Otorhinolaryngology (ENT)",
                        icon: "fa-ear-listen",
                        color: "#9c27b0",
                        colorDark: "#7b1fa2",
                        description: "Ear, Nose, and Throat Care",
                        programmeOverview: "The ENT department provides training in diagnosis and management of diseases of ear, nose, throat, head, and neck. Students learn examination techniques and management of common ENT conditions.",
                        programmeDuration: "Clinical posting in Phase III (3 weeks)",
                        courseOutcomes: [
                            "Perform ENT examination using appropriate instruments",
                            "Diagnose common ENT conditions",
                            "Manage ENT emergencies",
                            "Perform basic ENT procedures",
                            "Understand principles of hearing assessment",
                            "Recognize conditions requiring specialist referral"
                        ],
                        teachingMethods: [
                            "OPD clinical sessions",
                            "Demonstration of ENT instruments",
                            "Endoscopy observations",
                            "Operation theatre exposure",
                            "Audiometry training",
                            "Emergency procedures demonstration",
                            "Case-based learning"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "50%" },
                            { method: "Clinical/Practical Examinations", weightage: "40%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Otoscopy",
                            "Anterior and posterior rhinoscopy",
                            "Indirect laryngoscopy",
                            "Tuning fork tests",
                            "Foreign body removal",
                            "Nasal packing"
                        ]
                    },
                    {
                        id: "orthopedics",
                        name: "Orthopedics",
                        icon: "fa-bone",
                        color: "#607d8b",
                        colorDark: "#455a64",
                        description: "Musculoskeletal System Care",
                        programmeOverview: "The Orthopedics department teaches diagnosis and management of musculoskeletal conditions including fractures, joint diseases, spine disorders, and sports injuries. Students learn principles of trauma care and rehabilitation.",
                        programmeDuration: "Clinical posting in Phase III (4 weeks)",
                        courseOutcomes: [
                            "Assess musculoskeletal injuries and conditions",
                            "Interpret orthopedic radiographs",
                            "Apply casts and splints",
                            "Manage common fractures and dislocations",
                            "Understand principles of traction and fixation",
                            "Provide rehabilitation guidance"
                        ],
                        teachingMethods: [
                            "Trauma ward rounds",
                            "Orthopedic OPD sessions",
                            "Plaster room training",
                            "X-ray interpretation sessions",
                            "Operation theatre exposure",
                            "Rehabilitation demonstrations",
                            "Case presentations"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "50%" },
                            { method: "Clinical/Practical Examinations", weightage: "40%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Musculoskeletal examination",
                            "X-ray interpretation",
                            "Plaster application",
                            "Splint application",
                            "Reduction of simple fractures",
                            "Joint aspiration"
                        ]
                    },
                    {
                        id: "psychiatry",
                        name: "Psychiatry",
                        icon: "fa-brain",
                        color: "#3f51b5",
                        colorDark: "#283593",
                        description: "Mental Health and Behavioral Sciences",
                        programmeOverview: "The Psychiatry department focuses on diagnosis and management of mental health disorders, substance abuse, and behavioral problems. Students learn to provide holistic care including psychotherapy and counseling.",
                        programmeDuration: "Clinical posting in Phase III (3 weeks)",
                        courseOutcomes: [
                            "Conduct psychiatric assessment and mental status examination",
                            "Diagnose common mental health disorders",
                            "Understand principles of psychotherapy",
                            "Manage psychiatric emergencies",
                            "Provide basic counseling services",
                            "Reduce stigma associated with mental illness"
                        ],
                        teachingMethods: [
                            "Psychiatric OPD sessions",
                            "Ward-based teaching",
                            "Case discussions",
                            "Role-play and simulation",
                            "Counseling skill workshops",
                            "Community mental health visits",
                            "Substance abuse clinic exposure"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "50%" },
                            { method: "Clinical/Viva Examinations", weightage: "40%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Psychiatric interview techniques",
                            "Mental status examination",
                            "Suicide risk assessment",
                            "Basic counseling skills",
                            "De-escalation techniques",
                            "Patient and family psychoeducation"
                        ]
                    },
                    {
                        id: "dermatology",
                        name: "Dermatology",
                        icon: "fa-hand-dots",
                        color: "#ff5722",
                        colorDark: "#d84315",
                        description: "Skin, Hair, and Nail Disorders",
                        programmeOverview: "The Dermatology department provides training in diagnosis and management of skin diseases, sexually transmitted infections, and cosmetic dermatology. Students learn clinical examination and basic dermatological procedures.",
                        programmeDuration: "Clinical posting in Phase III (2 weeks)",
                        courseOutcomes: [
                            "Diagnose common dermatological conditions",
                            "Understand principles of dermatological therapy",
                            "Manage sexually transmitted infections",
                            "Perform basic dermatological procedures",
                            "Counsel patients on skin care",
                            "Recognize dermatological emergencies"
                        ],
                        teachingMethods: [
                            "Dermatology OPD sessions",
                            "Clinical demonstration",
                            "Photographic case discussions",
                            "Procedure demonstrations",
                            "STI clinic exposure",
                            "Leprosy clinic visits",
                            "Teledermatology sessions"
                        ],
                        assessmentMethods: [
                            { method: "Theory Examinations", weightage: "50%" },
                            { method: "Clinical/Practical Examinations", weightage: "40%" },
                            { method: "Internal Assessment", weightage: "10%" }
                        ],
                        skills: [
                            "Dermatological examination",
                            "KOH mount preparation",
                            "Skin biopsy assistance",
                            "Intralesional injection",
                            "Wound dressing",
                            "Patient education on skin care"
                        ]
                    }
                ]
            };

        const sortedDepartments = [...departmentsData.departments].sort((a, b) =>
            a.name.localeCompare(b.name)
        );

        // Render Functions
        function renderSidebar() {
            const menu = document.getElementById('sidebarMenu');
            menu.innerHTML = sortedDepartments.map((dept, index) => `
                <li>
                    <a href="#${dept.id}" 
                       onclick="showDepartment('${dept.id}')" 
                       class="${index === 0 ? 'active' : ''}">
                        <i class="fas ${dept.icon}"></i> ${dept.name}
                    </a>
                </li>
            `).join('');
        }

        function renderDepartment(dept) {
            return `
                <div class="course-department-section active">
                    <div class="course-section-header" style="--dept-color: ${dept.color}; --dept-color-dark: ${dept.colorDark};">
                        <div class="course-section-header-content">
                            <h2>
                                <div class="course-icon-large"><i class="fas ${dept.icon}"></i></div>
                                ${dept.name}
                            </h2>
                            <p>${dept.description}</p>
                        </div>
                    </div>

                    <!-- Programme Overview -->
                    <div class="course-accordion-section" style="--dept-color: ${dept.color};">
                        <div class="course-accordion-header active" onclick="toggleCourseAccordion(this)">
                            <div class="course-accordion-title">
                                <i class="fas fa-info-circle"></i> Programme Overview
                            </div>
                            <i class="fas fa-chevron-down course-accordion-icon"></i>
                        </div>
                        <div class="course-accordion-content active">
                            <div class="course-accordion-body">
                                <p>${dept.programmeOverview}</p>
                                <div class="course-info-card" style="--dept-color: ${dept.color};">
                                    <h4><i class="fas fa-clock"></i> Duration</h4>
                                    <p>${dept.programmeDuration}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Course Outcomes -->
                    <div class="course-accordion-section" style="--dept-color: ${dept.color};">
                        <div class="course-accordion-header" onclick="toggleCourseAccordion(this)">
                            <div class="course-accordion-title">
                                <i class="fas fa-graduation-cap"></i> Course Outcomes
                            </div>
                            <i class="fas fa-chevron-down course-accordion-icon"></i>
                        </div>
                        <div class="course-accordion-content">
                            <div class="course-accordion-body">
                                <p>Upon completion of this course, students will be able to:</p>
                                <ul class="course-outcome-list">
                                    ${dept.courseOutcomes.map((outcome, index) => `
                                        <li>
                                            <span class="course-outcome-number">${index + 1}</span>
                                            <span class="course-outcome-text">${outcome}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Teaching Methods -->
                    <div class="course-accordion-section" style="--dept-color: ${dept.color};">
                        <div class="course-accordion-header" onclick="toggleCourseAccordion(this)">
                            <div class="course-accordion-title">
                                <i class="fas fa-chalkboard-teacher"></i> Teaching Methods
                            </div>
                            <i class="fas fa-chevron-down course-accordion-icon"></i>
                        </div>
                        <div class="course-accordion-content">
                            <div class="course-accordion-body">
                                <p>We employ diverse teaching methodologies to ensure comprehensive learning:</p>
                                <ul class="course-outcome-list">
                                    ${dept.teachingMethods.map((method, index) => `
                                        <li>
                                            <span class="course-outcome-number">${index + 1}</span>
                                            <span class="course-outcome-text">${method}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Assessment Methods -->
                    <div class="course-accordion-section" style="--dept-color: ${dept.color};">
                        <div class="course-accordion-header" onclick="toggleCourseAccordion(this)">
                            <div class="course-accordion-title">
                                <i class="fas fa-clipboard-check"></i> Assessment Methods
                            </div>
                            <i class="fas fa-chevron-down course-accordion-icon"></i>
                        </div>
                        <div class="course-accordion-content">
                            <div class="course-accordion-body">
                                <p>Students are evaluated through multiple assessment methods:</p>
                                <div class="course-table-wrapper">
                                    <table class="course-table">
                                        <thead>
                                            <tr>
                                                <th>Assessment Method</th>
                                                <th>Weightage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${dept.assessmentMethods.map(assessment => `
                                                <tr>
                                                    <td>${assessment.method}</td>
                                                    <td><strong>${assessment.weightage}</strong></td>
                                                </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Skills Acquired -->
                    <div class="course-accordion-section" style="--dept-color: ${dept.color};">
                        <div class="course-accordion-header" onclick="toggleCourseAccordion(this)">
                            <div class="course-accordion-title">
                                <i class="fas fa-tools"></i> Skills Acquired
                            </div>
                            <i class="fas fa-chevron-down course-accordion-icon"></i>
                        </div>
                        <div class="course-accordion-content">
                            <div class="course-accordion-body">
                                <p>Students will develop the following practical skills:</p>
                                <ul class="course-outcome-list">
                                    ${dept.skills.map((skill, index) => `
                                        <li>
                                            <span class="course-outcome-number">${index + 1}</span>
                                            <span class="course-outcome-text">${skill}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function showDepartment(deptId) {
            const dept = departmentsData.departments.find(d => d.id === deptId);
            if (!dept) return;

            const mainContent = document.getElementById('mainContent');
            mainContent.innerHTML = renderDepartment(dept);

            // Update sidebar active state
            document.querySelectorAll('.sidebar-nav a').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`a[href="#${deptId}"]`)?.classList.add('active');

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleCourseAccordion(header) {
            const isActive = header.classList.contains('active');
            
            // Close all accordions
            // document.querySelectorAll('.course-accordion-header').forEach(h => {
            //     h.classList.remove('active');
            //     h.nextElementSibling.classList.remove('active');
            // });
            
            // If the clicked accordion wasn't active, open it
            if (!isActive) {
                header.classList.add('active');
                header.nextElementSibling.classList.add('active');
            }
            else{
                header.classList.remove('active');
                header.nextElementSibling.classList.remove('active');
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderSidebar();
            
            // Check for hash in URL
            const hash = window.location.hash.slice(1);
            if (hash && departmentsData.departments.find(d => d.id === hash)) {
                showDepartment(hash);
            } else {
                showDepartment(departmentsData.departments[0].id);
            }
        });

        // Handle browser back/forward
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            if (hash && departmentsData.departments.find(d => d.id === hash)) {
                showDepartment(hash);
            }
        });

        // Export data for external use
        window.departmentsData = departmentsData;