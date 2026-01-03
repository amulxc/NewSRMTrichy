const departmentData = [
  {
    name: "Anatomy",
    description: "Study of human body structure"
  },
  {
    name: "Biochemistry",
    description: "Chemical processes related to human health"
  },
  {
    name: "Dermatology",
    description: "Diagnosis and treatment of skin disorders"
  },
  {
    name: "ENT",
    description: "Care of ear nose throat disorders"
  },
  {
    name: "General Medicine",
    description: "Comprehensive management of adult medical illnesses"
  },
  {
    name: "Genral Surgery",
    description: "Surgical treatment of common clinical conditions"
  },
  {
    name: "Microbiology",
    description: "Study of microbes causing human diseases"
  },
  {
    name: "OBG",
    description: "Healthcare for women pregnancy and childbirth"
  },
  {
    name: "Ophthamology",
    description: "Medical and surgical care of eyes"
  },
  {
    name: "Orthopedics",
    description: "Treatment of bones joints and muscles"
  },
  {
    name: "Pathology",
    description: "Laboratory diagnosis of disease processes"
  },
  {
    name: "Peadiatrics",
    description: "Medical care for infants and children"
  },
  {
    name: "Pharmacology",
    description: "Study of drugs and therapeutic effects"
  },
  {
    name: "Physiology",
    description: "Understanding normal functions of human body"
  },
  {
    name: "Psychiatry",
    description: "Diagnosis and management of mental disorders"
  },
  {
    name: "Radiodiagnosis",
    description: "Imaging techniques for accurate medical diagnosis"
  }
];
/* ===== FUNCTIONS ===== */

const content = document.getElementById("content11");
content.innerHTML = ""; 
let pdfPath="./assets/pdf/Course/PG_Course"
departmentData.map((d,i)=>{
  document.getElementById("content11").innerHTML += `
      <div class='myDiv'>
        <div class='myDivContent'>
          <h3>${d.name}</h3>
          <small>${d.description}</small>
        </div>
        <a href='${pdfPath}/${d.name}.pdf' target="_blank">
          <div class="item section1">
              <i class="fas fa-book"></i>
              <p>View NMC Guidelines</p>
          </div>
        </a>
        <a href='${pdfPath}/Curriculam.pdf' target="_blank">
            <div class="item section1">
              <i class="fas fa-file"></i>
              <p>View Curriculam</p>
          </div>
        </a>
      </div>
  `;
})
 