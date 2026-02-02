const departments = [
  {
    "icon": "fa fa-list",
    "name": "Laboratory Services",
    "color":"var(--color-purple)"
  },
  {
    "icon": "fa fa-list",
    "name": "Radiology & Imaging",
    "color":"var(--color-accent)"
  },
  {
    "icon": "fa fa-list",
    "name": "Blood Bank",
    "color":"var(--color-accent-yellow)"
  },
  {
    "icon": "fa fa-list",
    "name": "Dialysis Services",
    "color":"var(--color-primary)"
  },
  {
    "icon": "fa fa-list",
    "name": "Respiratory Therapy",
    "color":"var(--color-navy)"
  },
  {
    "icon": "fa fa-list",
    "name": "Rehabilitation Services",
    "color":"var(--accent-color)"
  },
  {
    "icon": "fa fa-list",
    "name": "Clinical Pharmacy",
    "color":"var(--color-youtube)"
  },
  {
    "icon": "fa fa-list",
    "name": "Pain & Palliative Care",
    "color":"var(--g-2)"
  },
  {
    "icon": "fa fa-list",
    "name": "Organ Transplant",
    "color":"var(--color-linkedin-dark)"
  },
  {
    "icon": "fa fa-list",
    "name": "ECMO",
    "color":"var(--color-accent-pink)"
  }
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