const cards = document.getElementById('cards');
const news = document.getElementById('news');
const cardsBtn = document.getElementById('cards-btn');
const newsBtn = document.getElementById('news-btn');

cardsBtn.addEventListener('click', () => {
	cards.classList.add('active');
	news.classList.remove('active');
	cardsBtn.classList.add('active');
	newsBtn.classList.remove('active');
});

newsBtn.addEventListener('click', () => {
	cards.classList.remove('active');
	news.classList.add('active');
	newsBtn.classList.add('active');
	cardsBtn.classList.remove('active');
});
