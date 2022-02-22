document.getElementById('button').addEventListener('click', function () {
	document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function () {
	document.querySelector('.bg-modal').style.display = 'none';
});

document.querySelector('.hero').style.height = document.querySelector('body').offsetHeight - document.querySelector('header').offsetHeight - document.querySelector('footer').offsetHeight;
