const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
})