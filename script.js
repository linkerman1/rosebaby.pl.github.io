const menuButton = document.querySelector('.menu-toggle');
const menu = document.getElementById('navigation');
function closeMenu() {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Otwórz menu');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
  menu.classList.toggle('is-open', open);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const dialog = document.getElementById('photo-dialog');
const dialogImage = document.getElementById('dialog-image');
const caption = document.getElementById('dialog-caption');
document.querySelectorAll('[data-photo]').forEach(button => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.photo;
    dialogImage.alt = button.querySelector('img').alt;
    caption.textContent = button.dataset.caption;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
