// Nav Icon 
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = () => {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll')
}

// Phone Mask
mask('[data-tel-input]');
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    })
    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    })
})

// Yandex Map
ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [42.857050661586676, 74.60789364518273],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17
    });
    var myPlacemark = new ymaps.Placemark([42.857717642023694, 74.60883241833699],
        {
            balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Мой дом -_-</div>
					<div class="balloon__contacts">
						<a href="tel:+78121234567">+8 (812) 123-45-67</a>
					</div>
				</div>
			`,
        },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/map/location-pin.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-20, -40]
        });
    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип

    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально) 

    myMap.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
}