const menubtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menubtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});