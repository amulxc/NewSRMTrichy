window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    let tabNameParam = params.get("tab");
    if (tabNameParam) {
        tabNameParam = tabNameParam.replace(/['"]/g, "");
        openTab(tabNameParam);
    }
});
function openTab(tabName, el = null) {
    if (!tabName) return;
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabContents.forEach(c => c.classList.remove('active'));
    tabButtons.forEach(b => b.classList.remove('active'));
    const tab = document.getElementById(tabName);
    const btn = el || document.getElementById(`${tabName}-btn`);
    if (!tab || !btn) return;
    tab.classList.add('active');
    btn.classList.add('active');
    window.scrollTo({
        behavior: 'smooth'
    });
}
// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// Add entrance animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.member-card, .info-card, .stat-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
});