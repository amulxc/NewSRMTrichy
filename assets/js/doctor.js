let doctorsData = [];
let filteredDoctors = [];
let currentPage = 1;
const doctorsPerPage =9;

// ✅ Excel file path
const filePath = "./assets/excel/Staff_Doctor_Details(Responses).xlsx";
const deptForLink=[
  { "dept": "pre-clinical.html", "name": "Anatomy" },
  { "dept": "pre-clinical.html", "name": "Physiology" },
  { "dept": "pre-clinical.html", "name": "Biochemistry" },

  { "dept": "para-clinical.html", "name": "Pathology" },
  { "dept": "para-clinical.html", "name": "Microbiology" },
  { "dept": "para-clinical.html", "name": "Pharmacology" },
  { "dept": "para-clinical.html", "name": "Forensic Medicine" },
  { "dept": "para-clinical.html", "name": "Community Medicine" },

  { "dept": "boardspecialties.html", "name": "General Medicine" },
  { "dept": "boardspecialties.html", "name": "Paediatrics" },
  { "dept": "boardspecialties.html", "name": "Respiratory Medicine" },
  { "dept": "boardspecialties.html", "name": "Dermatology, Venereology & Leprosy" },
  { "dept": "boardspecialties.html", "name": "Psychiatry" },
  { "dept": "boardspecialties.html", "name": "Emergency Medicine" },

  { "dept": "surgeryspecialties.html", "name": "General Surgery" },
  { "dept": "surgeryspecialties.html", "name": "Orthopaedics" },
  { "dept": "surgeryspecialties.html", "name": "ENT" },
  { "dept": "surgeryspecialties.html", "name": "Ophthalmology" },
  { "dept": "surgeryspecialties.html", "name": "Obstetrics and Gynaecology" },
  { "dept": "surgeryspecialties.html", "name": "Anaesthesiology" },
  { "dept": "surgeryspecialties.html", "name": "Radiodiagnosis" },
  { "dept": "surgeryspecialties.html", "name": "Dentistry" },

  { "dept": "acd_dept/MedicalSuperSpecialties.html", "name": "Cardiology" },
  { "dept": "acd_dept/MedicalSuperSpecialties.html", "name": "Neurology" },
  { "dept": "acd_dept/MedicalSuperSpecialties.html", "name": "Nephrology" },
  { "dept": "acd_dept/MedicalSuperSpecialties.html", "name": "Oncology" },
  { "dept": "acd_dept/MedicalSuperSpecialties.html", "name": "Gastroenterology" },

  { "dept": "SurgerySuperSpecialties.html", "name": "Cardio Vascular & Thoracic Surgery" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Neurosurgery" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Urology" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Surgical Oncology" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Surgical Gastroenterology" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Plastic and Reconstructive Surgery" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Vascular Surgery" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Paediatric Surgery" }
]
// ✅ Load everything when DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
  await loadDoctorsFromExcel();
  clearAllFilters();
});

        // ✅ Load & Convert Excel Data
        async function loadDoctorsFromExcel() {
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error("Cannot fetch " + filePath);

            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet);

        

            // Map Excel rows → JS objects
            doctorsData = json.map((row, i) => {
                // Normalize all keys in the row to lowercase for consistent access
                const normalized = {};
                for (const key in row) {
                    normalized[key.toLowerCase().trim()] = row[key];
                }

                return {
                    id: i + 1,
                    name: normalized["name"] || "Unknown",
                    specialty: normalized["specialization/department"] || "General",
                    gender: (normalized["gender"] || "other").toLowerCase(),
                    experience: parseInt(row["Years of Experience"] || 0),
                    degree: normalized["degree"] || "",
                    languages: (normalized["languages known"] || "")
                    .split(",")
                    .map((l) => l.trim())
                    .filter((l) => l),
                    location: normalized["location"] || "",
                    videos: parseInt(normalized["videos"] || 0),
                    designation: normalized["designation"] || "",
                    consultationFees: parseInt(normalized["consultationfees"] || 0),
                    nextAvailable: normalized["nextavailable"] || "",
                    rating: parseFloat(normalized["rating"] || 0),
                    shift:row['Shift Type'],
                    ...row, // keep original fields too, in case needed
                };
                });

            filteredDoctors = [...doctorsData];
            init();
            // console.log("✅ Doctors loaded from Excel:", doctorsData);
        } catch (err) {
            console.error("❌ Failed to load data:", err);
        }
        }
        function init() {
            populateFilters();
            displayDoctors(filteredDoctors);
            setupEventListeners();
        }

        // Populate filter options
        function populateFilters() {
            // Specialities
            const specialties = [...new Set(doctorsData.map(d => d.specialty))].sort((a, b) => a.localeCompare(b));
            const specialitiesFilter = document.getElementById('specialitiesFilter');
            specialties.forEach((specialty, index) => {
                specialitiesFilter.innerHTML += `
                    <div class="filter-option">
                        <input type="checkbox" id="spec${index}" value="${specialty}" onchange="applyFilters()">
                        <label for="spec${index}">
                            <span>${specialty}</span>
                        </label>
                    </div>
                `;
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            document.getElementById('searchInput-doc').addEventListener('input', applyFilters);
            document.querySelectorAll('input[name="gender"]').forEach(radio => {
                radio.addEventListener('change', applyFilters);
            });
            document.querySelectorAll('#expFilter input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', applyFilters);
            });

        }

        // Apply all filters
        function applyFilters() {
            const searchTerm = document.getElementById('searchInput-doc').value.toLowerCase();
            const selectedGender = document.querySelector('input[name="gender"]:checked').value;
            
            // Get selected specialties
            const selectedSpecialties = Array.from(document.querySelectorAll('#specialitiesFilter input:checked'))
                .map(cb => cb.value);
            
            
           const selectedExperience = Array.from(
                document.querySelectorAll('#expFilter input:checked')
            ).map(cb => parseInt(cb.value));

            // console.log(selectedSpecialties)
            filteredDoctors = doctorsData.filter(doctor => {
                // Search filter
                const matchesSearch = doctor.name.toLowerCase().includes(searchTerm) ||
                                    doctor.specialty.toLowerCase().includes(searchTerm) ||
                                    doctor.location.toLowerCase().includes(searchTerm);
                
                // Gender filter
                const matchesGender = selectedGender === 'all' || doctor.gender === selectedGender;
                
                // Specialty filter
                const matchesSpecialty = selectedSpecialties.length === 0 || 
                                       selectedSpecialties.includes(doctor.specialty);
                
                
                // Experience filter
                const matchesExperience =  selectedExperience.length === 0 ||  selectedExperience.some(exp => parseInt(doctor.experience) >= exp);

                

                return matchesSearch && matchesGender && matchesSpecialty && matchesExperience;
                       
            });
             filteredDoctors.sort((a, b) => b.experience - a.experience);
            currentPage = 1; // Reset to first page
            displayDoctors(filteredDoctors);
        }

        // Search doctors
        function searchDoctors() {
            applyFilters();
        }

        // Sort doctors
        function sortDoctors() {
            const sortBy = document.getElementById('sortSelect').value;

             filteredDoctors.sort((a, b) => b.experience - a.experience);
            displayDoctors(filteredDoctors);
        }

        // Toggle mobile filter
        function toggleMobileFilter() {
            // Not needed anymore - filters always visible on mobile
            return;
        }

        // Toggle filter sections (collapse/expand)
        function toggleFilterSection(header) {
            const filterOptions = header.nextElementSibling;
            const icon = header.querySelector('i');
            
            if (filterOptions.classList.contains('collapsed')) {
                filterOptions.classList.remove('collapsed');
                header.classList.remove('collapsed');
            } else {
                filterOptions.classList.add('collapsed');
                header.classList.add('collapsed');
            }
        }

        // Change view (grid/list/map)
        function changeView(viewType) {
            const viewBtns = document.querySelectorAll('.view-btn');
            const doctorsGrid = document.getElementById('doctorsGrid');
            
            // Update button states
            viewBtns.forEach((btn, index) => {
                btn.classList.remove('active');
                if ((viewType === 'grid' && index === 0) ||
                    (viewType === 'list' && index === 1) ||
                    (viewType === 'map' && index === 2)) {
                    btn.classList.add('active');
                }
            });

            // Update grid layout (only on desktop)
            if (window.innerWidth > 768) {
                if (viewType === 'list') {
                    doctorsGrid.classList.add('list-view');
                } else if (viewType === 'grid') {
                    doctorsGrid.classList.remove('list-view');
                } 
            } else {
                // Always use grid view on mobile
                doctorsGrid.classList.remove('list-view');
            }
        }

        // Clear all filters
        function clearAllFilters() {
            document.getElementById('searchInput-doc').value = '';
            document.getElementById('genderAll').checked = true;
            document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => {
                cb.checked = false;
            });
            filteredDoctors = [...doctorsData];
            currentPage = 1;
            filteredDoctors.sort((a, b) => b.experience - a.experience);
            displayDoctors(filteredDoctors);
        }

        document.addEventListener("DOMContentLoaded",clearAllFilters)

        // Display doctors with pagination
        function displayDoctors(doctors) {
            const grid = document.getElementById('doctorsGrid');
            const noResults = document.getElementById('noResults');
            const resultsCount = document.getElementById('resultsCount');
            const paginationWrapper = document.getElementById('paginationWrapper');
            
            grid.innerHTML = '';

            if (doctors.length === 0) {
                grid.style.display = 'none';
                noResults.style.display = 'block';
                paginationWrapper.style.display = 'none';
                resultsCount.textContent = '0';
                return;
            }

            grid.style.display = 'grid';
            noResults.style.display = 'none';
            resultsCount.textContent = doctors.length;

            // Calculate pagination
            const totalPages = Math.ceil(doctors.length / doctorsPerPage);
            const startIndex = (currentPage - 1) * doctorsPerPage;
            const endIndex = startIndex + doctorsPerPage;
            const paginatedDoctors = doctors.slice(startIndex, endIndex);


            const mainDiv = document.querySelector('.doctors-content'); 
            const childDivs = mainDiv.querySelectorAll('.doctor-card');
            // Display doctors for current page
            paginatedDoctors.forEach(doctor => {
                const card = createDoctorCard(doctor);                
                grid.appendChild(card);
            });

            
            if (totalPages > 1) {
                paginationWrapper.style.display = 'flex';
                renderPagination(totalPages);
            } else {
                paginationWrapper.style.display = 'none';
            }
        }

        // Render pagination
        function renderPagination(totalPages) {
            const paginationNumbers = document.getElementById('paginationNumbers');
            const prevBtn = document.getElementById('prevPage');
            const nextBtn = document.getElementById('nextPage');

            paginationNumbers.innerHTML = '';

            // Previous button state
            prevBtn.disabled = currentPage === 1;

            // Next button state
            nextBtn.disabled = currentPage === totalPages;

            // Page numbers logic
            let pages = [];
            
            if (totalPages <= 10) {
                // Show all pages if 7 or less
                for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                // Show with dots
                if (currentPage <= 3) {
                    pages = [1, 2, 3, 4, '...', totalPages];
                } else if (currentPage >= totalPages - 2) {
                    pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
                } else {
                    pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
                }
            }

            // Render page buttons
            pages.forEach(page => {
                if (page === '...') {
                    const dots = document.createElement('span');
                    dots.className = 'pagination-dots';
                    dots.textContent = '...';
                    paginationNumbers.appendChild(dots);
                } else {
                    const btn = document.createElement('button');
                    btn.className = 'pagination-btn';
                    btn.textContent = page;
                    if (page === currentPage) {
                        btn.classList.add('active');
                    }
                    btn.onclick = () => goToPage(page);
                    paginationNumbers.appendChild(btn);
                }
            });
        }

        // Change page
        function changePage(direction) {
            const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
            
            if (direction === 'prev' && currentPage > 1) {
                currentPage--;
            } else if (direction === 'next' && currentPage < totalPages) {
                currentPage++;
            }

            displayDoctors(filteredDoctors);
            scrollToTop();
        }

        // Go to specific page
        function goToPage(page) {
            currentPage = page;
            displayDoctors(filteredDoctors);
            scrollToTop();
        }

        // Scroll to top smoothly
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Create doctor card
        function createDoctorCard(doctor) {
            const card = document.createElement('div');
            card.className = 'doctor-card';
            const mobileNumbers=["6380082293","8144380594","8870006474","9159737792","9497272218","9655033677","9842445404","9944369232","7010067233","8148976948","8870180733","9159874787","9500390155","9655345050","9842657937","9944919976","7010244896","8189827034","8870182955","9245407634","9500799099","9655499228","9843049946","9952346339","7010260430","8220337943","8870449010","9344675106","9500820460","9677433895","9843771963","9952541163","7013857235","8220485344","8870764245","9344807507","9543146090","9677596700","9843778866","9962768583","7092060396","8870946952","7306889687","7598346561","7598539347","7639040777","7639801164","8270850797","7708299832","8289877020","7708422167","8989879619","7812817014","8344463828","7904679468","8344567538","9003186360","8056496100","8438103656","9003711922","9444163130","8056498997","8508553311","8056616164","8056630407","9447593754","8220691685","8220935491","8220999766","8248667938","8248937326","8300639698","8508866500","8608924684","8903475255","8903689224","8939260447","8939566146","8940025731","8973764197","9003056068","9025078494","9025918896","9047042084","9441100201","9442092653","9443026348","9443133500","9443158699","9443164535","9443241424","9443357653","9443401736","9443608911","9445972712","9447345528","9566518548","9566902040","9566945363","9597484444","9600201097","9741095649","9786497001","9787319750","9789369474","9846033791","9865637190","9894147545","9894210857","9566371859","9688141772","9843942711","9963556484","9739277039","9976115391","9976551564","9744793136","9865841473","9980839365","9566967956","9745122201","9884025784","9994013589","9573557793","9746040253","9884383428","9994020894","9578484266","9750634515","9884983543","9994098951","9578959904","9786146613","9885626669","9994264019","9585536854","9888471619","9994281928","9994667489","9994841287","9600433507","9789443655","9894440435","9994968775","9600443041","9789772227","9894489142","9995876592","9600643840","9789882729","9894593245","8056856800","8667096668","9047401406","9486643131","9600733744","9790448296","9894710019","8072572223","8072806898","8727849777","8668091952","9047441963","9047424834","9486885993","9605074185","9790486568","9894835015","9487487880","9626085208","9790585720","9894914243","8089448449","8744900567","9047488954","9487553062","9626666581","9790628434","9899936858","8095758457","8754642292","9080800019","9487590559","9626819558","9790667390","9940542276","8098810385","8754854545","9488200609","8098893437","8807502994","8098998203","8807820458","9150100693","9489477398","9095091334","9123578591","9489254765","9629186681","9629231823","9626913491","9791788778","9940774257","9840050180","9940987742","9840714789","9941734421","8110028695","8838499632","9159012345","9489567930","9629798737","9842091151","9943155175","8113090090","8838514054","9159512213","9489644074","9629881102","9842103319","9944311724","8122557996","8870001894","9159520787","9492092407","9630766309","9842434563","9944350363","7708490384"];

            const doctorImageMap={};
            mobileNumbers.map((e,i)=>{
                doctorImageMap[e]="dr"+(i+1);
            })
            console.log(doctorImageMap);
            

            let publicKey = doctorImageMap[doctor["Contact Number"]];

            

           let imgPath = publicKey ? `https://d6ayomfexqlev.cloudfront.net/doctors/${publicKey}`: 
           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGG7erz9q0Rya1nPGFfbz6LVLjyU-7md7hOQ&s";

            function checkImage(url, callback) {
                const img = new Image();
                img.onload = () => callback(true);  // Image exists
                img.onerror = () => callback(false); // Image does not exist
                img.src = url;
            }
            let res='';
            deptForLink.find((e)=>{
                if(e.name===doctor.specialty){
                    res=e.dept;
                }
            })
            

            // Usage
            checkImage(imgPath, exists => {
                card.innerHTML = `
                    <div class="doctor-image-wrapper">
                        <img src="${exists?imgPath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGG7erz9q0Rya1nPGFfbz6LVLjyU-7md7hOQ&s"}" alt="${doctor.name}">
                    </div>
                    <div class="doctor-info">

                        <a href='academic_department.html?dept=${doctor.specialty}' class="specialty-badge">${doctor.specialty}</a>
                        <h3 class="doctor-name">
                            ${doctor.name}
                            <i class="fas fa-check-circle verified-icon"></i>
                        </h3>
                        <p class="doctor-degree">${doctor.degree}</p>    
                        <div class="doctor-details">
                            <div class="detail-item">
                                <i class="fas fa-globe"></i>
                                <span>${doctor.languages.join(', ')}</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-briefcase"></i>
                                <span>${doctor.designation}</span>
                            </div>    
                            ${(doctor.experience>9)?`<div class="detail-item">
                                <i class="fas fa-calendar"></i>
                                <span>${doctor.experience}+ Years of Experience</span>
                            </div>`:''}
                            
                            
                        </div>
                    </div>`;
            });
            return card;
        }

        // View doctor profile
        function viewDoctorProfile(id) {

            let doctor = doctorsData.find(x => x.id == id);

            // Save doctor object to localStorage
            localStorage.setItem("doctorData", JSON.stringify(doctor));

            // Correct way to create anchor & trigger click
            let anchor = document.createElement('a');
            anchor.href = "./doctorsview.html#doc-details";
            anchor.style.display = "none"; // hide anchor
            document.body.appendChild(anchor);
            anchor.click();
            document.removeChild(anchor)

            // console.log(doctor);
        }


        // Initialize on load
        init();