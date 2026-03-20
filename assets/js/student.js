const departments = [
  {
    "url": "academic_department.html",
    "name": "Department"
  },
  {
    "url": "course.html",
    "name": "Course"
  },
  {
    "url": "infrastructure.html",
    "name": "Infrastructure"
  },
  {
    "url": "meuandcc.html",
    "name": "MEU"
  },
  {
    "url": "https://www.antiragging.in/",
    "name": "Anti-Ragging"
  },
  {
    "url": "library.html",
    "name": "Library"
  },
  {
    "url": "academics.html#student",
    "name": "Student Support Services"
  },
  {
    "url": "media.html#gallery",
    "name": "Gallery"
  }
  ,
  {
    "url": "research.html",
    "name": "Research"
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