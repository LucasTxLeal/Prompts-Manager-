const menubtn = document.getElementById('abrirMenu');
const sidebar = document.getElementById('sidebar');

menubtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});