const openSidebarBtn = document.getElementById('open-navbar-btn');
const closeSidebarBtn = document.getElementById('close-navbar-btn');
const sidebar = document.getElementById('sidebar');
const categoriesButtons = document.querySelectorAll('.sidebar__item');

openSidebarBtn.addEventListener('click', () => {
	sidebar.classList.add('active');
	document.querySelector('.wrapper').classList.add('blocked');
});

closeSidebarBtn.addEventListener('click', () => {
	sidebar.classList.remove('active');
	document.querySelector('.wrapper').classList.remove('blocked');
});

categoriesButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		categoriesButtons.forEach((nonActiveBtn) => {
			nonActiveBtn.classList.remove('active');
		});
		sidebar.classList.remove('active');
		btn.classList.add('active');
	});
});
