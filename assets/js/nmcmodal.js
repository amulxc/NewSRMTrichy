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

// Close modal when clicking outside
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("nmc-modal")) {
        e.target.style.display = "none";
    }
});



