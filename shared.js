document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const dropdownPanel = document.getElementById('dropdownPanel');

  // Toggle dropdown
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownPanel.classList.toggle('show');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdownPanel.contains(e.target) && !hamburger.contains(e.target)) {
      dropdownPanel.classList.remove('show');
    }
  });
});
