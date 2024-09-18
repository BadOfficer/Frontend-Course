const toggleNavbarBtn = document.getElementById('toggle-navbar-btn');
const navbar = document.getElementById('navbar');
const search = document.getElementById('search');
const categoryBtn = document.getElementById('open-category-btn');
const closeButtons = document.querySelectorAll('.close-btn');
const leftSidebar = document.getElementById('left-sidebar');
const rightSidebar = document.getElementById('right-sidebar');
const socialBtn = document.getElementById('open-socials-btn');
const categories = document.querySelectorAll('.main__card');
const categoriesButtons = document.querySelectorAll('.main__sidebar-item');

toggleNavbarBtn.addEventListener('click', () => {
	toggleNavbarBtn.classList.toggle('active');
	navbar.classList.toggle('active');
	search.classList.toggle('active');
});

categoryBtn.addEventListener('click', () => {
	leftSidebar.classList.add('active');
});

socialBtn.addEventListener('click', () => {
	rightSidebar.classList.add('active');
});

function closeSidebars() {
	leftSidebar.classList.remove('active');
	rightSidebar.classList.remove('active');
}

closeButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		closeSidebars();
	});
});

categoriesButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		categoriesButtons.forEach((nonActiveBtn) => {
			nonActiveBtn.classList.remove('active');
		});
		leftSidebar.classList.remove('active');
		btn.classList.add('active');
	});
});
