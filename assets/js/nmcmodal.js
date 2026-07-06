function openNmcModal(event) {
    event.preventDefault();
    document.getElementById("nmcModal").style.display = "flex";
}

function closeNmcModal() {
    document.getElementById("nmcModal").style.display = "none";
}
function openPubModal(event) {
    event.preventDefault();
    document.getElementById("pubModal").style.display = "flex";
}

function closePubModal() {
    document.getElementById("pubModal").style.display = "none";
}


function openLopModal(event) {
    event.preventDefault();
    document.getElementById("lopModal").style.display = "flex";
}

function closeLopModal() {
    document.getElementById("lopModal").style.display = "none";
}

function openCmeModal(e,id="cmeModal") {
    e.preventDefault();
    document.getElementById(`${id}`).style.display = "flex";
}
function closeCmeModal(id="cmeModal") {
    document.getElementById(`${id}`).style.display = "none";
}
function openNmcSDModal(event) {
    event.preventDefault();
    document.getElementById("nmcSDModal").style.display = "flex";
}

function closeNmcSDModal() {
    document.getElementById("nmcSDModal").style.display = "none";
}


function openClinical(event) {
    event.preventDefault();
    document.getElementById("clinical").style.display = "flex";
}

function closeClinical() {
    document.getElementById("clinical").style.display = "none";
}


function openFacultyModal(event) {
    event.preventDefault();
    document.getElementById("faculty").style.display = "flex";
}

function closeFacultyModal() {
    document.getElementById("faculty").style.display = "none";
}

function openCensus(event) {
    event.preventDefault();
    document.getElementById("census").style.display = "flex";
}

function closeCensus() {
    document.getElementById("census").style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("nmc-modal")) {
        e.target.style.display = "none";
    }
});