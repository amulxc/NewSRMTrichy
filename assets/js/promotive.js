const departments = [
  {
    "icon": "fa fa-list",
    "name": "Yoga",
    "color":"var(--color-purple)"
  },
  {
    "icon": "fa fa-list",
    "name": "Fitness",
    "color":"var(--color-accent)"
  },
  {
    "icon": "fa fa-list",
    "name": "Counseling",
    "color":"var(--color-accent-yellow)"
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