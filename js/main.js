const cssLink = document.querySelector('#css-link');
const mediaLink = document.querySelector('#media-link');
const headerContentCarouselItem = document.querySelector('.header-content__carousel');
const headerNavigationImg = document.querySelector('.header-navigation__img');
const qualityCardImgFirst = document.querySelector('.quality-card__img__first');
const qualityCardImgSecond = document.querySelector('.quality-card__img__second');
const qualityCardImgThird = document.querySelector('.quality-card__img__third');

headerContentCarouselItem.addEventListener('click', () => {
	if(cssLink.getAttribute('href') === 'css/red-style.css') {
		cssLink.setAttribute('href', 'css/green-style.css');
		headerNavigationImg.setAttribute('src', 'img/green-logo.svg');
		qualityCardImgFirst.setAttribute('src', 'img/background21.svg');
		qualityCardImgSecond.setAttribute('src', 'img/background22.svg');
		qualityCardImgThird.setAttribute('src', 'img/background23.svg');
		mediaLink.setAttribute('src', 'img/Arrow4.png');
	} else if(cssLink.getAttribute('href') === 'css/green-style.css') {
		cssLink.setAttribute('href', 'css/red-style.css')
		headerNavigationImg.setAttribute('src', 'img/red-logo.svg');
		qualityCardImgFirst.setAttribute('src', 'img/background7.svg');
		qualityCardImgSecond.setAttribute('src', 'img/background8.svg');
		qualityCardImgThird.setAttribute('src', 'img/background9.svg');
		mediaLink.setAttribute('src', 'img/Arrow5.png');
	}
})



console.log(qualityCardImgFirst, qualityCardImgSecond, qualityCardImgThird)