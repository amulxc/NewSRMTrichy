const departments = [
  {
    "id": "general_medicine",
    "name": "General Medicine",
    "icon": "fas fa-stethoscope",
    "color": "#34495e"
  },
  {
    "id": "Emergency Medicine",
    "name": "Emergency Medicine",
    "icon": "fas fa-truck-medical",
    "color": "#e74c3c"
  },
  {
    "id": "Paediatrics",
    "name": "Paediatrics",
    "icon": "fas fa-baby",
    "color": "#fd79a8"
  },
  {
    "id": "Dermatology, Venereology & Leprosy",
    "name": "Dermatology, Venereology & Leprosy",
    "icon": "fas fa-hand-dots",
    "color": "#ff7675"
  },
  {
    "id": "Psychiatry",
    "name": "Psychiatry",
    "icon": "fas fa-brain",
    "color": "#a29bfe"
  },
  {
    "id": "Respiratory Medicine",
    "name": "Respiratory Medicine",
    "icon": "fas fa-lungs",
    "color": "#00cec9"
  },
  {
    "id": "general_surgery",
    "name": "General Surgery",
    "icon": "fa fa-user-md",
    "color": "#d35400"
  },
  {
    "id": "orthopedics",
    "name": "Orthopedics",
    "icon": "fas fa-bone",
    "color": "#6c5ce7"
  },
  {
    "id": "ent",
    "name": "ENT",
    "icon": "fas fa-ear-listen",
    "color": "#fdcb6e"
  },
  {
    "id": "ophthalmology",
    "name": "Ophthalmology",
    "icon": "fas fa-eye",
    "color": "#0984e3"
  },
  {
    "id": "Obstetrics & Gynaecology",
    "name": "Obstetrics & Gynaecology",
    "icon": "fas fa-baby",
    "color": "#e84393"
  },
  {
    "id": "Anaesthesia",
    "name": "Anaesthesiology",
    "icon": "fas fa-procedures",
    "color": "#b2bec3"
  },
  {
    "id": "Radio Diagnosis",
    "name": "Radio Diagnosis",
    "icon": "fas fa-x-ray",
    "color": "#636e72"
  },
  {
    "id": "dentistry",
    "name": "Dentistry",
    "icon": "fas fa-tooth",
    "color": "#207fbfff"
  },
  {
    "id": "Cardiology",
    "name": "Cardiology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "ecg_heart",
    "color": "#e17055"
  },
  {
    "id": "Neurology",
    "name": "Neurology",
    "icon": "fas fa-brain",
    "color": "#00b894"
  },
  {
    "id": "Nephrology",
    "name": "Nephrology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "nephrology",
    "color": "#fd9644"
  },
  {
    "id": "Medical Oncology",
    "name": "Oncology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "oncology",
    "color": "#eb3b5a"
  },
  {
    "id": "Gastroenterology",
    "name": "Gastroenterology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "gastroenterology",
    "color": "#8854d0"
  },
  {
    "id": "Cardio Vascular & Thoracic Surgery",
    "name": "Cardio Vascular & Thoracic Surgery",
    "icon": "material-symbols-outlined",
    "Icon-Name": "ecg_heart",
    "color": "#3867d6"
  },
  {
    "id": "Neurosurgery",
    "name": "Neurosurgery",
    "icon": "fas fa-brain",
    "color": "#20bf6b"
  },
  {
    "id": "Urology",
    "name": "Urology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "urology",
    "color": "#fa8231"
  },
  {
    "id": "Surgical Oncology",
    "name": "Surgical Oncology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "oncology",
    "color": "#d63031"
  },
  {
    "id": "Surgical Gastroenterology",
    "name": "Surgical Gastroenterology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "gastroenterology",
    "color": "#6c5ce7"
  },
  {
    "id": "Plastic and Reconstructive Surgery",
    "name": "Plastic and Reconstructive Surgery",
    "icon": "fas fa-user",
    "color": "#e17055"
  },
  {
    "id": "Vascular Surgery",
    "name": "Vascular Surgery",
    "icon": "fas fa-water",
    "color": "#0abde3"
  },
  {
    "id": "Paediatric Surgery",
    "name": "Paediatric Surgery",
    "icon": "fas fa-baby",
    "color": "#48dbfb"
  }
];

let SpecialityCard = departments.map(e => {
  const iconInner = e["Icon-Name"] ? e["Icon-Name"] : "";

  return `
      <a href='depart_specialities.html?dept=${encodeURIComponent(e.id)}'>
    <div class="document-card">
        <div class="infra-icon-image" style="background-color:${e.color}">
          <i class="${e.icon}">${iconInner}</i>
        </div>
        <div class="document-title">
          <center>${e.name == "ENT" ? "OTORHINOLARYNGOLOGY (ENT)" : e.name}</center>
        </div>
    </div></a>
  `;
}).join("");

document.getElementById("ug-curriculum-grid").innerHTML = SpecialityCard;