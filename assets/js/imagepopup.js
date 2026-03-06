function closePopup() {
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('modal');
  modal.classList.add('closing');
  overlay.classList.add('closing');
  setTimeout(() => overlay.style.display = 'none', 300);
}
document.getElementById('closeBtn').addEventListener('click', closePopup);
document.getElementById('overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('overlay')) closePopup();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePopup();
});