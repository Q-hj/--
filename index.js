const huojian = document.querySelector('.🚀');

let marginTop;

let timer;

function start() {
	console.log(timer);

	if (timer) return;

	marginTop = 0;

	timer = setInterval(() => {
		marginTop -= 3;
		huojian.style.marginTop = marginTop + 'px';
	}, 1);
}

function reset() {
	huojian.style.marginTop = 0 + 'px';

	clearInterval(timer);

	timer = null;
}
