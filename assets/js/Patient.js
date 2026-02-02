const departments = [
  {
    "url": "patientcorner.html",
    "name": "Patient Information"
  },{
    "url": "#",
    "name": "Patient Portal"
  },
  {
    "url": "medicalpackage.html",
    "name": "Health Checkup Package"
  },
  {
    "url": "patientcorner.html#awareness",
    "name": "Hospital Awareness"
  },
  {
    "url": "patientcorner.html#testimonials",
    "name": "Patient AV"
  },
  {
    "url": "patientcorner.html#insurance",
    "name": "Insurance"
  },
  {
    "url": "ambulance.html",
    "name": "Ambulance"
  },
  {
    "url": "#",
    "name": "Consultant"
  }
];

;


let SpecialityCard = departments.map(e => {
  const iconInner = e["Icon-Name"] ? e["Icon-Name"] : "";

  return `
    <div class="document-card">
      <a href="${e.url}">
        <div class="infra-icon-image" style="background-color:${e.color}">
          <i class="fa fa-link">${iconInner}</i>
        </div>
        <div class="document-title">
          <center>${e.name}</center>
        </div>
      </a>
    </div>
  `;
}).join("");

document.getElementById("ug-curriculum-grid").innerHTML = SpecialityCard;