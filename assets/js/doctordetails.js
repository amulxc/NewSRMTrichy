function loadDoctorData() {
    const doctorData = JSON.parse(localStorage.getItem('doctorData'));

    if (!doctorData) {
        alert('No doctor data found in localStorage');
        return;
    }
    // Header
    document.getElementById('doctorName').textContent =
        doctorData.Name || doctorData.name || 'N/A';

    document.getElementById('designation').textContent =
        doctorData.Designation || doctorData.designation || 'N/A';

    document.getElementById('specialty').textContent =
        doctorData['Specialization/Department'] ||
        doctorData['Specialization / Department'] ||
        doctorData['Department'] ||
        doctorData.specialty || 'N/A';

        if(doctorData.experience>0){
            document.getElementById('experience').textContent = doctorData['Years of Experience'] || doctorData.experience || '0';
        }
        else{
            document.getElementById('experienceSection').style.display="none";
        }
    

    document.getElementById('languages').textContent =
        doctorData['Languages Known'] || doctorData.languages || '-';

    // Profile Image
    const profileImg = document.getElementById('profileImage');
    const contact = doctorData["Contact Number"];
    const imgPathLower = `./assets/images/doctors/${contact}.jpg`;
    const imgPathUpper = `./assets/images/doctors/${contact}.JPG`;

    const tempImg = new Image();

    // Try lowercase .jpg first
    tempImg.src = imgPathLower;

    tempImg.onload = function () {
        profileImg.src = imgPathLower;
    };

    tempImg.onerror = function () {
        // Try uppercase .JPG
        const tempImg2 = new Image();
        tempImg2.src = imgPathUpper;

        tempImg2.onload = function () {
            profileImg.src = imgPathUpper;
        };

        tempImg2.onerror = function () {
            // Fallback to template image
            profileImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGG7erz9q0Rya1nPGFfbz6LVLjyU-7md7hOQ&s";
        };
    };

    // Summary
    document.getElementById('profileSummary').textContent =
        doctorData['Profile Summary'] || 'No profile summary available';

    // Expertise
    const expertiseContainer = document.getElementById('expertiseTags');
    const expertise = doctorData['Key Areas of Expertise'];
    if (expertise) {
        const expertiseArray = expertise
        .trim()
        .split(/[,|/]/)
        .map(i => i.trim())
        .filter(i => i.length > 0);

        console.log(expertiseArray);
        
        expertiseContainer.innerHTML = expertiseArray.map((exp, index) =>
            `<div class="doc-expertise-tag">
                 ${exp}
            </div>`
        ).join('');
    }

    // Professional Details
    document.getElementById('education').textContent =
        doctorData['Education Qualification'] || '-';

    document.getElementById('medicalCouncil').textContent =
        doctorData['Name of Medical Council'] || '-';

    document.getElementById('employeeType').textContent =
        doctorData['Employee Type'] || '-';

    document.getElementById('shiftType').textContent =
        doctorData['Shift Type'] || doctorData.shift || '-';

    document.getElementById('department').textContent =
        doctorData['Specialization/Department'] || '-';

    // Personal Info
    document.getElementById('age').innerHTML = doctorData.Age || '-';
    document.getElementById('gender').innerHTML = doctorData.Gender || '-';
    document.getElementById('bloodGroup').innerHTML = doctorData['Blood Group'] || '-';
    document.getElementById('nationality').innerHTML = doctorData.Nationality || '-';
    // Contact & Location
    document.getElementById('email').innerHTML = doctorData['Email ID (Professional)'] || '-';
    document.getElementById('city').innerHTML = doctorData.City || '-';
    document.getElementById('state').innerHTML = doctorData.State || '-';

    // Awards
    const awardsContainer = document.getElementById('awardsContainer');
    const awards = doctorData['Awards / Recognitions'];

    if (awards.length>0 && awards !== '-') {
        const awardsArray = awards.split(/[,|]/).map(a => a.trim());
        awardsContainer.innerHTML = awardsArray.map(award =>
            `<div class="doc-award-item"><i class="fas fa-award"></i> ${award}</div>`
        ).join('');
    } 
    else {
        document.getElementById("doc-awards-section").style.display="none"
        awardsContainer.innerHTML = '<p style="color: var(--color-text-secondary);">No awards listed</p>';
    }
    // console.log(doctorData['Contact Number'],doctorData['Email ID (Professional)'])

    // Email Button
    const emailBtn = document.getElementById('emailBtn');
    emailBtn.href = doctorData['Email ID (Professional)']
        ? `mailto:${doctorData['Email ID (Professional)']}`
        : "#";
    const linkedin = document.getElementById("linkedin");

    if (doctorData["LinkedIn (URL)"] && doctorData["LinkedIn (URL)"].trim() !== "") {
        linkedin.href = doctorData["LinkedIn (URL)"];
    } else {
        linkedin.style.display = "none";
    }
    const youtube = document.getElementById("youtube");



    if (doctorData["Youtube  (URL)"] && doctorData["Youtube  (URL)"].trim() !== "") {
        youtube.href = doctorData["Youtube  (URL)"];
    } else {
        youtube.style.display = "none";
    }

    const instagram = document.getElementById("instagram");

    if (doctorData["Instagram  (URL)"] && doctorData["Instagram  (URL)"].trim() !== "") {
        instagram.href = doctorData["Instagram  (URL)"];
    } else {
        instagram.style.display = "none";
    }

    }



window.addEventListener('DOMContentLoaded', loadDoctorData);