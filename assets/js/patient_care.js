const departments = [
  {
    "icon": "fa fa-list",
    "name": "Patient Navigation",
    "color":"var(--color-purple)"
  },
  {
    "icon": "fa fa-list",
    "name": "International Patient",
    "color":"var(--color-accent)"
  },
  {
    "icon": "fa fa-list",
    "name": "Counselling",
    "color":"var(--color-accent-yellow)"
  },
  {
    "icon": "fa fa-list",
    "name": "Psychology Services",
    "color":"var(--color-primary)"
  },
  {
    "icon": "fa fa-list",
    "name": "Interpreter Services",
    "color":"var(--color-navy)"
  },
  {
    "icon": "fa fa-list",
    "name": "Spiritual Care Services",
    "color":"var(--accent-color)"
  },
  {
    "icon": "fa fa-list",
    "name": "Patient Relations",
    "color":"var(--color-youtube)"
  },
  {
    "icon": "fa fa-list",
    "name": "Grievance Cell",
    "color":"var(--g-2)"
  },
  {
    "icon": "fa fa-list",
    "name": "Social Work Services",
    "color":"var(--color-linkedin-dark)"
  },
];

;


let SpecialityCard = departments.map(e => {

  return `
      <a href='#'>
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