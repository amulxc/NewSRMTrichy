
const departmentData = {
  anatomy: {
    name: "Anatomy",
    phase: "Phase-1",
    curriculum: "Gross anatomy, embryology, histology with cadaveric dissection and practical sessions.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Morning dissection, afternoon demonstrations and tutorials.",
    calendar: "Internal assessments, dissection completion and university exams."
  },
  physiology: {
    name: "Physiology",
    phase: "Phase-1",
    curriculum: "Cell physiology, cardiovascular, respiratory, neurophysiology and hematology.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Theory lectures with experimental physiology labs.",
    calendar: "Practical exams, revision weeks and formative assessments."
  },
  biochemistry: {
    name: "Biochemistry",
    phase: "Phase-1",
    curriculum: "Metabolism, enzymes, molecular biology and nutrition.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Integrated lectures with clinical correlation sessions.",
    calendar: "Block exams, viva and final professional exam."
  },
  community_medicine1: {
    name: "Community Medicine",
    phase: "Phase-1",
    curriculum: "Public health basics, epidemiology and biostatistics.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Classroom teaching with field exposure.",
    calendar: "Field visits, surveys and assessment schedules."
  },
  pathology: {
    name: "Pathology",
    phase: "Phase-2",
    curriculum: "General pathology, systemic pathology and hematology.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Microscopy labs and case-based discussions.",
    calendar: "Slide exams, internal assessments and university exams."
  },
  pharmacology: {
    name: "Pharmacology",
    phase: "Phase-2",
    curriculum: "Drug mechanisms, therapeutic uses and adverse effects.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Problem-based learning and prescription writing.",
    calendar: "Continuous assessment and final theory exams."
  },
  microbiology: {
    name: "Microbiology",
    phase: "Phase-2",
    curriculum: "Bacteriology, virology, parasitology and immunology.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Lab diagnostics and culture techniques.",
    calendar: "Practical exams and theory assessments."
  },
  forensic: {
    name: "Forensic Medicine",
    phase: "Phase-2",
    curriculum: "Medical jurisprudence, toxicology and legal medicine.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Postmortem demonstrations and lectures.",
    calendar: "Court visit schedules and examinations."
  },
  general_medicine: {
    name: "General Medicine",
    phase: "Phase-3 Part-1",
    curriculum: "Clinical diagnosis, internal medicine and patient care.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Ward rounds, OPD postings and seminars.",
    calendar: "Clinical postings, exams and internship preparation."
  },
  general_surgery: {
    name: "General Surgery",
    phase: "Phase-3 Part-1",
    curriculum: "Surgical principles, operative procedures and trauma care.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "OT exposure, ward duties and case presentations.",
    calendar: "Clinical exams and posting rotations."
  },
  paediatrics: {
    name: "Paediatrics",
    phase: "Phase-3 Part-1",
    curriculum: "Child health, growth, development and neonatal care.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "NICU exposure, OPD and ward teaching.",
    calendar: "Case logs, assessments and exams."
  },
  obg: {
    name: "Obstetrics & Gynaecology",
    phase: "Phase-3 Part-1",
    curriculum: "Pregnancy, labour, gynecological disorders and surgery.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Labour ward postings and OT exposure.",
    calendar: "Clinical exams and internship schedule."
  },

  community_medicine2: {
    name: "Community Medicine",
    phase: "Phase-3 Part-2",
    curriculum: "Public health basics, epidemiology and biostatistics.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Classroom teaching with field exposure.",
    calendar: "Field visits, surveys and assessment schedules."
  },
  
  orthopaedics: {
    name: "Orthopaedics",
    phase: "Phase-3 Part-2",
    curriculum: "General pathology, systemic pathology and hematology.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Microscopy labs and case-based discussions.",
    calendar: "Slide exams, internal assessments and university exams."
  },
  ophthalmology: {
    name: "Ophthalmology",
    phase: "Phase-3 Part-2",
    curriculum: "Drug mechanisms, therapeutic uses and adverse effects.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Problem-based learning and prescription writing.",
    calendar: "Continuous assessment and final theory exams."
  },
  dermatology: {
    name: "Dermatology, Venereology & Leprosy",
    phase: "Phase-3 Part-2",
    curriculum: "Medical jurisprudence, toxicology and legal medicine.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Postmortem demonstrations and lectures.",
    calendar: "Court visit schedules and examinations."
  },
  psychiatry: {
    name: "Psychiatry",
    phase: "Phase-3 Part-2",
    curriculum: "General pathology, systemic pathology and hematology.",
    view_pdf:"./assets/pdf/Course/UG_Course",
    timetable: "Microscopy labs and case-based discussions.",
    calendar: "Slide exams, internal assessments and university exams."
  }
}

/* ===== FUNCTIONS ===== */
function togglePhase(el) {
  const allPhases = document.querySelectorAll(".phase");

  allPhases.forEach(phase => {
    if (phase !== el.parentElement) {
      phase.classList.remove("active");
    }
  });

  el.parentElement.classList.toggle("active");
}

async function fileExists(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
}

async function loadDept(e= null,key) {
  
  
   if(e != null){
    document.querySelectorAll(".phase-body button").forEach(btn => {
      btn.classList.remove("active");
    });
    e.classList="active";
   }
  const d = departmentData[key];
  const curriculumPath = `${d.view_pdf}/${d.phase}/Curriculam.pdf`;
  const calendarPath   = `${d.view_pdf}/${d.phase}/Academic_Calendar.pdf`;
  const timetablePath  = `${d.view_pdf}/${d.phase}/Time_Table.pdf`;

  const [hasCurr, hasCal, hasTime] = await Promise.all([
    fileExists(curriculumPath),
    fileExists(calendarPath),
    fileExists(timetablePath)
  ]);
  document.getElementById("content").innerHTML = `
     <div class="card" id='${d.name}'>
      <h1>${d.name}</h1>
      <p><strong>${d.phase}</strong></p>

      ${hasCurr ? `
      <div class="section1">
        <h3>Curriculum</h3>
        <div class="item">
          <a href="${curriculumPath}" target="_blank">
            <i class="fas fa-file"></i> View PDF
          </a>
        </div>
      </div>` : ""}

      ${hasCal ? `
      <div class="section1">
        <h3>Academic Calendar</h3>
        <div class="item">
          <a href="${calendarPath}" target="_blank">
            <i class="fas fa-file"></i> View PDF
          </a>
        </div>
      </div>` : ""}

      ${hasTime ? `
      <div class="section1">
        <h3>Time Table</h3>
        <div class="item">
          <a href="${timetablePath}" target="_blank">
            <i class="fas fa-file"></i> View PDF
          </a>
        </div>
      </div>` : ""}
      
    </div>
  `;


}

loadDept(null,'anatomy')
