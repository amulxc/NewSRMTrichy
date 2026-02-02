const departments = [
  {
    "icon": "fa fa-list",
    "name": "Infection Prevention & Control",
    "color":"var(--color-purple)"
  },
  {
    "icon": "fa fa-list",
    "name": "Antimicrobial Stewardship Program",
    "color":"var(--color-accent)"
  },
  {
    "icon": "fa fa-list",
    "name": "Medication Safety Program",
    "color":"var(--color-accent-yellow)"
  },
  {
    "icon": "fa fa-list",
    "name": "Patient Safety & Risk Management",
    "color":"var(--color-primary)"
  },
  {
    "icon": "fa fa-list",
    "name": "Clinical Audit & Quality Improvement",
    "color":"var(--color-navy)"
  },
  {
    "icon": "fa fa-list",
    "name": "Incident Reporting & Analysis",
    "color":"var(--accent-color)"
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