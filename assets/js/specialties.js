const departments = [
  {
    "dept_id": "anatomy",
    "name": "Anatomy",
    "icon": "fas fa-bone",
    "color": "#1abc9c",
  },
  {
    "dept_id": "Physiology",
    "name": "Physiology",
    "icon": "fas fa-heartbeat",
    "color": "#16a085",
  },
  {
    "dept_id": "biochemistry",
    "name": "Biochemistry",
    "icon": "fas fa-flask",
    "color": "#2ecc71",
  },
  {
    "dept_id": "Pathology",
    "name": "Pathology",
    "icon": "fas fa-vials",
    "color": "#27ae60",
  },
  {
    "dept_id": "Microbiology",
    "name": "Microbiology",
    "icon": "fas fa-bacteria",
    "color": "#3498db",
  },
  {
    "dept_id": "Pharmacology",
    "name": "Pharmacology",
    "icon": "fas fa-pills",
    "color": "#2980b9",
  },
  {
    "dept_id": "ForensicMedicine",
    "name": "Forensic Medicine",
    "icon": "fas fa-user-secret",
    "color": "#9b59b6",
  },
  {
    "dept_id": "Community Medicine",
    "name": "Community Medicine",
    "icon": "fas fa-users",
    "color": "#8e44ad",
  },
  {
    "dept_id": "general_medicine",
    "name": "General Medicine",
    "icon": "fas fa-stethoscope",
    "color": "#34495e",
  },
  {
    "dept_id": "Emergency Medicine",
    "name": "Emergency Medicine",
    "icon": "fas fa-truck-medical",
    "color": "#e74c3c",
  },
  {
    "dept_id": "Paediatrics",
    "name": "Paediatrics",
    "icon": "fas fa-baby",
    "color": "#fd79a8",
  },
  {
    "dept_id": "Respiratory Medicine",
    "name": "Respiratory Medicine",
    "icon": "fas fa-lungs",
    "color": "#00cec9",
  },
  {
    "dept_id": "Dermatology, Venereology & Leprosy",
    "name": "Dermatology, Venereology & Leprosy",
    "icon": "fas fa-hand-dots",
    "color": "#ff7675",
  },
  {
    "dept_id": "Psychiatry",
    "name": "Psychiatry",
    "icon": "fas fa-brain",
    "color": "#a29bfe",
  },
  {
    "dept_id": "general_surgery",
    "name": "General Surgery",
    "icon": "fa fa-user-md",
    "color": "#d35400",
  },
  {
    "dept_id": "orthopedics",
    "name": "orthopedics",
    "icon": "fas fa-bone",
    "color": "#6c5ce7",
  },
  {
    "dept_id": "ent",
    "name": "ENT",
    "icon": "fas fa-ear-listen",
    "color": "#fdcb6e",
  },
  {
    "dept_id": "ophthalmology",
    "name": "Ophthalmology",
    "icon": "fas fa-eye",
    "color": "#0984e3",
  },
  {
    "dept_id": "Obstetrics & Gynaecology",
    "name": "Obstetrics & Gynaecology",
    "icon": "fas fa-baby",
    "color": "#e84393",
  },
  {
    "dept_id": "Anaesthesia",
    "name": "Anaesthesia",
    "icon": "fas fa-procedures",
    "color": "#b2bec3",
  },
  {
    "dept_id": "Radio Diagnosis",
    "name": "Radio Diagnosis",
    "icon": "fas fa-x-ray",
    "color": "#636e72",
  },
  {
    "dept_id": "Cardiology",
    "name": "Cardiology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "ecg_heart",
    "color": "#e17055",
  },
  {
    "dept_id": "Neurology",
    "name": "Neurology",
    "icon": "fas fa-brain",
    "color": "#00b894",
  },
  {
    "dept_id": "Nephrology",
    "name": "Nephrology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "nephrology",
    "color": "#fd9644",
  },
  {
    "dept_id": "Medical Oncology",
    "name": "Medical oncology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "oncology",
    "color": "#eb3b5a",
  },
  {
    "dept_id": "Gastroenterology",
    "name": "Gastroenterology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "gastroenterology",
    "color": "#8854d0",
  },
  {
    "dept_id": "Cardio Vascular & Thoracic Surgery",
    "name": "Cardio Vascular & Thoracic Surgery",
    "icon": "material-symbols-outlined",
    "Icon-Name": "ecg_heart",
    "color": "#3867d6",
  },
  {
    "dept_id": "Neurosurgery",
    "name": "Neurosurgery",
    "icon": "fas fa-brain",
    "color": "#20bf6b",
  },
  {
    "dept_id": "dentistry",
    "name": "Dentistry",
    "icon": "fas fa-tooth",
    "color": "#207fbfff",
  },
  {
    "dept_id": "Urology",
    "name": "Urology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "urology",
    "color": "#fa8231",
  },
  {
    "dept_id": "Surgical Oncology",
    "name": "Surgical Oncology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "oncology",
    "color": "#d63031",
  },
  {
    "dept_id": "Surgical Gastroenterology",
    "name": "Surgical Gastroenterology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "gastroenterology",
    "color": "#6c5ce7",
  },
  {
    "dept_id": "Plastic and Reconstructive Surgery",
    "name": "Plastic and Reconstructive Surgery",
    "icon": "fas fa-user",
    "color": "#e17055",
  },
  {
    "dept_id": "Vascular Surgery",
    "name": "Vascular Surgery",
    "icon": "fas fa-water",
    "color": "#0abde3",
  },
  {
    "dept_id": "Paediatric Surgery",
    "name": "Paediatric Surgery",
    "icon": "fas fa-baby",
    "color": "#48dbfb",
  }
];

  
const sortedDeptForLink = departments
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name));


let SpecialityCard = sortedDeptForLink.map(e => {
  const iconInner = e["Icon-Name"] ? e["Icon-Name"] : "";

  return `
    <div class="infra-spec-card">
      <a href="depart_specialities.html?dept=${encodeURIComponent(e.dept_id)}">
        <div class="infra-icon-image" style="background-color:${e.color}">
          <i class="${e.icon}">${iconInner}</i>
        </div>
        <div class="infra-icon-title">${e.name}</div>
      </a>
    </div>
  `;
}).join("");

document.getElementById("Specialties").innerHTML = SpecialityCard;