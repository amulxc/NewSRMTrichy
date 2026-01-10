const departments = [
  {
    "url": "centerofexcellence.html",
    "name": "Center Of Excellence"
  },
  {
    "url": "hospital.html#specialties",
    "name": "Specialty Clinics"
  },
  {
    "url": "pharmacy.html",
    "name": "Pharmacy"
  },
  {
    "url": "camps.html",
    "name": "Camps"
  },
  {
    "url": "transport.html",
    "name": "Transport"
  },
  {
    "url": "patientcorner.html",
    "name": "Patient Corner"
  },
  {
    "url": "donors.html",
    "name": "Donors"
  },
  {
    "url": "information.html",
    "name": "Information Center"
  },
  {
    "url": "ambulance.html",
    "name": "24/7 Ambulance"
  },
  {
    "url": "hospital_old.html",
    "name": "Old Hospital"
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