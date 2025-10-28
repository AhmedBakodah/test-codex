document.addEventListener('DOMContentLoaded', () => {
  const categoryPills = document.querySelectorAll('.category-pill');

  categoryPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      categoryPills.forEach((item) => item.classList.remove('active'));
      pill.classList.add('active');
    });
  });
});
