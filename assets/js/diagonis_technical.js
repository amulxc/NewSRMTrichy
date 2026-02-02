const departments = [
  {
    "icon": "fa fa-list",
    "name": " FMRI, Cardiac CT",
    "color":"var(--color-purple)"
  },
  {
    "icon": "fa fa-list",
    "name": "Molecular Diagnostics",
    "color":"var(--color-accent)"
  },
  {
    "icon": "fa fa-list",
    "name": "Genomics",
    "color":"var(--color-accent-yellow)"
  },
  {
    "icon": "fa fa-list",
    "name": "EMG",
    "color":"var(--color-primary)"
  },
  {
    "icon": "fa fa-list",
    "name": "EEG",
    "color":"var(--color-navy)"
  },
  {
    "icon": "fa fa-list",
    "name": "Echo",
    "color":"var(--accent-color)"
  },
  {
    "icon": "fa fa-list",
    "name": "EP",
    "color":"var(--color-youtube)"
  },
  {
    "icon": "fa fa-list",
    "name": "TEE",
    "color":"var(--g-2)"
  },
  {
    "icon": "fa fa-list",
    "name": "Sleep Lab",
    "color":"var(--color-linkedin-dark)"
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