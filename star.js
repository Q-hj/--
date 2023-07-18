let stars = document.querySelector('.stars');
for (let i = 0; i < 30; i++) {
	const div = document.createElement('div');
	div.innerHTML = '✨';

	// div.style.width = '100%';

	let marginTop = Math.floor(Math.random() * 300) + 0 + 'px';
	div.style.marginTop = marginTop;

	div.style.animationDuration = Math.floor(Math.random() * 2) + 1 + 's';
	stars.appendChild(div);
}
