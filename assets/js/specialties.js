const departments = [
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
    "dept_id": "Urology",
    "name": "Urology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "urology",
    "color": "#0057a8",
  },
  {
    "dept_id": "Surgical Oncology",
    "name": "Surgical Oncology",
    "icon": "material-symbols-outlined",
    "Icon-Name": "oncology",
    "color": "#8630d6",
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
    "color": "#94c917",
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
    <div class="document-card" style='background:white;border:1px solid #e3e3e3'>
      <a href="depart_specialities.html?dept=${encodeURIComponent(e.dept_id)}">
        <div class="infra-icon-image" style="background-color:${e.color}">
          <i class="${e.icon}">${iconInner}</i>
        </div>
        <div class="infra-icon-title"><center>${e.name}</center></div>
      </a>
    </div></a>
  `;
}).join("");

document.getElementById("ug-curriculum-grid").innerHTML = SpecialityCard;