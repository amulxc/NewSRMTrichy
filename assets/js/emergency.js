const departments = [
  {
    "icon": "fa fa-list",
    "name": "CSSD",
    "color":"var(--color-purple)"
  },
  {
    "icon": "fa fa-list",
    "name": "Biomedical Engineering",
    "color":"var(--color-accent)"
  },
  {
    "icon": "fa fa-list",
    "name": "Housekeeping",
    "color":"var(--color-accent-yellow)"
  },
  {
    "icon": "fa fa-list",
    "name": "Dietary Services",
    "color":"var(--color-primary)"
  },
  {
    "icon": "fa fa-list",
    "name": "Laundry & <br>Linen",
    "color":"var(--color-navy)"
  },
  {
    "icon": "fa fa-list",
    "name": "Maintenance & Engineering",
    "color":"var(--accent-color)"
  },
  {
    "icon": "fa fa-list",
    "name": "Ambulance &<br> Transport",
    "color":"var(--color-youtube)"
  },
  {
    "icon": "fa fa-list",
    "name": "Security <br>Services",
    "color":"var(--g-2)"
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