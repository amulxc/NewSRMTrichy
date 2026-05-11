const departments = [
  {
    "icon": "fa fa-list",
    "id":"general_medicine",
    "name": "General Medicine",
    "color":"var(--color-purple)"
  },
  {
    "icon": "fa fa-list",
    "id":"Peadiatrics",
    "name": "Peadiatrics",
    "color":"var(--color-accent)"
  },
  {
    "icon": "fa fa-list",
    "id":"Obstetrics & Gynecology",
    "name": "Obstetrics & Gynecology",
    "color":"var(--color-accent-yellow)"
  },
  {
    "icon": "fa fa-list",
    "id":"orthopedics",
    "name": "Orthopedics",
    "color":"var(--color-primary)"
  },
  {
    "icon": "fa fa-list",
    "name": "Cardiology",
    "id":"Cardiology",
    "color":"var(--color-navy)"
  },
  {
    "icon": "fa fa-list",
    "name": "Neurology",
    "id":"Neurology",
    "color":"var(--accent-color)"
  },
];


// General Medicine
// Emergency Medicine
// Paediatrics
// Dermatology, Venereology & Leprosy
// Psychiatry
// Respiratory Medicine
// General Surgery
// Orthopaedics
// ENT
// Ophthalmology
// Obstetrics and Gynaecology
// Anaesthesiology
// Radio Diagnosis
// Dentistry
// Cardiology
// Neurology
// Nephrology
// Oncology
// Gastroenterology
// Cardio Vascular & Thoracic Surgery
// Neurosurgery
// Urology
// oncology
// Surgical Oncology
// gastroenterology
// Surgical Gastroenterology
// Plastic and Reconstructive Surgery
// Vascular Surgery
// Paediatric Surgery


// take department icon details  from hospital department pagage

let SpecialityCard = departments.map(e => {

  return `
      <a href='depart_specialities.html?dept=${encodeURIComponent(e.id)}'>
    <div class="document-card">
        <div class="infra-icon-image" style="background-color:${e.color}">
          <i class="${e.icon}"></i>
        </div>
        <div class="document-title">
          <center>${e.name}</center>
        </div>
    </div></a>
  `;
}).join("");

document.getElementById("ug-curriculum-grid").innerHTML = SpecialityCard;