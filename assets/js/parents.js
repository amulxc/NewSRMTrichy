const departments = [
  {
    "url": "aboutus.html",
    "name": "About"
  },
  {
    "url": "academic_department.html",
    "name": "Department"
  },
  {
    "url": "ug_new_course.html",
    "name": "UG Course"
  },
  {
    "url": "pg_course_new.html",
    "name": "PG Course"
  },
  {
    "url": "infrastructure.html#hostel",
    "name": "Hostel"
  },
  {
    "url": "academics.html#student",
    "name": "Student Support Services"
  },
  {
    "url": "aboutus.html#achievements",
    "name": "Achievements"
  },
  {
    "url": "media.html#gallery",
    "name": "Gallery"
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
    </div></a>
  `;
}).join("");

document.getElementById("ug-curriculum-grid").innerHTML = SpecialityCard;