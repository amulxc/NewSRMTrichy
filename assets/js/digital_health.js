const departments = [
  {
    "icon": "fa fa-list",
    "name": "EMR & HIS Services",
    "color":"var(--color-purple)"
  },
  {
    "icon": "fa fa-list",
    "name": "Telemedicine",
    "color":"var(--color-accent)"
  },
  {
    "icon": "fa fa-list",
    "name": "Patient Mobile App",
    "color":"var(--color-accent-yellow)"
  },
  {
    "icon": "fa fa-list",
    "name": "Remote Monitoring",
    "color":"var(--color-primary)"
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