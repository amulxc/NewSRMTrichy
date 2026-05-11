function openNmcModal(event) {
    event.preventDefault();
    document.getElementById("nmcModal").style.display = "flex";
}

function closeNmcModal() {
    document.getElementById("nmcModal").style.display = "none";
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



