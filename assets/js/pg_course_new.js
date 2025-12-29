const departmentData = [
  {
    name: "Anatomy",
    description: "Study of human body structure",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "Biochemistry",
    description: "Chemical processes related to human health",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "Dermatology",
    description: "Diagnosis and treatment of skin disorders",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "ENT",
    description: "Care of ear nose throat disorders",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "General Medicine",
    description: "Comprehensive management of adult medical illnesses",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "Genral Surgery",
    description: "Surgical treatment of common clinical conditions",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "Microbiology",
    description: "Study of microbes causing human diseases",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "OBG",
    description: "Healthcare for women pregnancy and childbirth",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "Ophthamology",
    description: "Medical and surgical care of eyes",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "Orthopedics",
    description: "Treatment of bones joints and muscles",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "Pathology",
    description: "Laboratory diagnosis of disease processes",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "Peadiatrics",
    description: "Medical care for infants and children",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "Pharmacology",
    description: "Study of drugs and therapeutic effects",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "Physiology",
    description: "Understanding normal functions of human body",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "Psychiatry",
    description: "Diagnosis and management of mental disorders",
    view_pdf: "./assets/pdf/course/PG_Course"
  },
  {
    name: "Radiodiagnosis",
    description: "Imaging techniques for accurate medical diagnosis",
    view_pdf: "./assets/pdf/course/PG_Course"
  }
];
/* ===== FUNCTIONS ===== */

const content = document.getElementById("content11");
content.innerHTML = ""; 
departmentData.map((d,i)=>{
  document.getElementById("content11").innerHTML += `
      <div class='myDiv'>
        <div class='myDivContent'>
          <h3>${d.name}</h3>
          <small>${d.description}</small>
        </div>
        <a href='${d.view_pdf}/${d.name}.pdf' target="_blank">
          <div class="item section1">
              <i class="fas fa-book"></i>
              <p>View NMC Guidelines</p>
          </div>
        </a>
        <a href='${d.view_pdf}/Curriculam.pdf' target="_blank">
            <div class="item section1">
              <i class="fas fa-file"></i>
              <p>View Curriculam</p>
          </div>
        </a>
      </div>
  `;
})
 