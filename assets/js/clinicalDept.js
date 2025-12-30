const departments = [
  {
    "dept_id": "General Medicine",
    "name": "General Medicine",
    "icon": "fas fa-stethoscope",
    "color": "#34495e",
    "link": "boardspecialties.html"
  },
  {
    "dept_id": "Emergency Medicine",
    "name": "Emergency Medicine",
    "icon": "fas fa-truck-medical",
    "color": "#e74c3c",
    "link": "boardspecialties.html"
  },
  {
    "dept_id": "Paediatrics",
    "name": "Paediatrics",
    "icon": "fas fa-baby",
    "color": "#fd79a8",
    "link": "boardspecialties.html"
  },
  {
    "dept_id": "Respiratory Medicine",
    "name": "Respiratory Medicine",
    "icon": "fas fa-lungs",
    "color": "#00cec9",
    "link": "boardspecialties.html"
  },
  {
    "dept_id": "Dermatology, Venereology & Leprosy",
    "name": "Dermatology, Venereology & Leprosy",
    "icon": "fas fa-hand-dots",
    "color": "#ff7675",
    "link": "boardspecialties.html"
  },
  {
    "dept_id": "Psychiatry",
    "name": "Psychiatry",
    "icon": "fas fa-brain",
    "color": "#a29bfe",
    "link": "boardspecialties.html"
  },
  {
    "dept_id": "General Surgery",
    "name": "General Surgery",
    "icon": "fa fa-user-md",
    "color": "#d35400",
    "link": "surgeryspecialties.html"
  },
  {
    "dept_id": "Orthopedics",
    "name": "Orthopedics",
    "icon": "fas fa-bone",
    "color": "#6c5ce7",
    "link": "surgeryspecialties.html"
  },
  {
    "dept_id": "ENT",
    "name": "ENT",
    "icon": "fas fa-ear-listen",
    "color": "#fdcb6e",
    "link": "surgeryspecialties.html"
  },
  {
    "dept_id": "Ophthalmology",
    "name": "Ophthalmology",
    "icon": "fas fa-eye",
    "color": "#0984e3",
    "link": "surgeryspecialties.html"
  },
  {
    "dept_id": "Obstetrics & Gynaecology",
    "name": "Obstetrics & Gynaecology",
    "icon": "fas fa-baby",
    "color": "#e84393",
    "link": "surgeryspecialties.html"
  },
  {
    "dept_id": "Anesthesiology",
    "name": "Anesthesiology",
    "icon": "fas fa-procedures",
    "color": "#b2bec3",
    "link": "surgeryspecialties.html"
  },
  {
    "dept_id": "Radiology",
    "name": "Radiology",
    "icon": "fas fa-x-ray",
    "color": "#636e72",
    "link": "surgeryspecialties.html"
  },
  {
    "dept_id": "Cardiology",
    "name": "Cardiology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "ecg_heart",
    "color": "#e17055",
    "link": "MedicalSuperSpecialties.html"
  },
  {
    "dept_id": "Neurology",
    "name": "Neurology",
    "icon": "fas fa-brain",
    "color": "#00b894",
    "link": "MedicalSuperSpecialties.html"
  },
  {
    "dept_id": "Nephrology",
    "name": "Nephrology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "nephrology",
    "color": "#fd9644",
    "link": "MedicalSuperSpecialties.html"
  },
  {
    "dept_id": "Oncology",
    "name": "Oncology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "oncology",
    "color": "#eb3b5a",
    "link": "MedicalSuperSpecialties.html"
  },
  {
    "dept_id": "Gastroenterology",
    "name": "Gastroenterology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "gastroenterology",
    "color": "#8854d0",
    "link": "MedicalSuperSpecialties.html"
  },
  {
    "dept_id": "Cardio Vascular & Thoracic Surgery",
    "name": "Cardio Vascular & Thoracic Surgery",
    "icon": "material-symbols-outlined",
    "Icon-Name": "ecg_heart",
    "color": "#3867d6",
    "link": "SurgerySuperSpecialties.html"
  },
  {
    "dept_id": "Neurosurgery",
    "name": "Neurosurgery",
    "icon": "fas fa-brain",
    "color": "#20bf6b",
    "link": "SurgerySuperSpecialties.html"
  },
  {
    "dept_id": "Dentistry",
    "name": "Dentistry",
    "icon": "fas fa-tooth",
    "color": "#2886dfff",
    "link": "SurgerySuperSpecialties.html"
  },
  {
    "dept_id": "Urology",
    "name": "Urology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "urology",
    "color": "#fa8231",
    "link": "SurgerySuperSpecialties.html"
  },
  {
    "dept_id": "Surgical Oncology",
    "name": "Surgical Oncology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "oncology",
    "color": "#d63031",
    "link": "SurgerySuperSpecialties.html"
  },
  {
    "dept_id": "Surgical Gastroenterology",
    "name": "Surgical Gastroenterology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "gastroenterology",
    "color": "#6c5ce7",
    "link": "SurgerySuperSpecialties.html"
  },
  {
    "dept_id": "Plastic and Reconstructive Surgery",
    "name": "Plastic and Reconstructive Surgery",
    "icon": "fas fa-user",
    "color": "#e17055",
    "link": "SurgerySuperSpecialties.html"
  },
  {
    "dept_id": "Vascular Surgery",
    "name": "Vascular Surgery",
    "icon": "fas fa-water",
    "color": "#0abde3",
    "link": "SurgerySuperSpecialties.html"
  },
  {
    "dept_id": "Paediatric Surgery",
    "name": "Paediatric Surgery",
    "icon": "fas fa-baby",
    "color": "#48dbfb",
    "link": "SurgerySuperSpecialties.html"
  }
];


const sortedDeptForLink = departments
  .slice()
  .map(item => ({
    ...item,
    name: item.name.replace("Orthopaedics", "Orthopedics")
  }))
  .sort((a, b) => a.name.localeCompare(b.name));


let SpecialityCard = sortedDeptForLink.map(e => {
  const iconInner = e["Icon-Name"] ? e["Icon-Name"] : "";

  return `
    <div class="infra-spec-card">
      <a href="${e.link}?dept=${encodeURIComponent(e.dept_id)}">
        <div class="infra-icon-image" style="background-color:${e.color}">
          <i class="${e.icon}">${iconInner}</i>
        </div>
        <div class="infra-icon-title">${e.name}</div>
      </a>
    </div>
  `;
}).join("");

document.getElementById("Specialties").innerHTML = SpecialityCard;