$(document).ready(function () {

	objectFitImages();

	// Табы
	// function tabs(buttonsList, wrapper, tabBlock) {
	// 	$(buttonsList).on('click', 'li:not(.active)', function () {
	// 		$(this).addClass('active').siblings().removeClass('active')
	// 			.closest(wrapper).find(tabBlock).removeClass('active').eq($(this).index()).addClass('active');
	// 	})
	// }

	// function accordion(top, bottom, topActive) {
	// 	$(top).on('click', function (ev) {
	// 		let text = $(this).next(bottom);

	// 		if ($(this).hasClass(topActive)) {
	// 			text.stop().slideUp();
	// 			$(this).removeClass(topActive)
	// 		}
	// 		else {
	// 			$(this).addClass(topActive)
	// 			text.stop().slideDown();
	// 		}
	// 	})
	// }

	// function accordionCloseOther(top, bottom, activeClass) {
	// 	$(top).on('click', function (ev) {
	// 		let text = $(this).next(bottom);

	// 		if ($(this).hasClass(activeClass)) {
	// 			$(bottom).stop().slideUp();
	// 			$(top).removeClass(activeClass);
	// 		}

	// 		else {
	// 			$(bottom).stop().slideUp();
	// 			$(top).removeClass(activeClass);
	// 			$(this).addClass(activeClass);
	// 			text.stop().slideDown();
	// 		}

	// 	})
	// }
	// function mobileSlider() {
	// 	if ($(window).innerWidth() <= 1100) {
	// 		slider_product_main = new Swiper('.new__slider', {
	// 			slidesPerView: 2,
	// 			spaceBetween: 40,
	// 			navigation: {
	// 				nextEl: '.new-slider--prev',
	// 				prevEl: '.new-slider--next',
	// 			},
	// 			breakpoints: {
	// 				320: {
	// 					slidesPerView: 1,
	// 					spaceBetween: 45,
	// 				},
	// 				376: {
	// 					slidesPerView: 1,
	// 					spaceBetween: 45,
	// 				},
	// 				630: {
	// 					slidesPerView: 2,
	// 					spaceBetween: 45,
	// 				},
	// 			}
	// 		});
	// 	}

	// 	else {
	// 		if ($('.new__slider').hasClass('swiper-container-initialized')) {
	// 			slider_catalog.destroy();
	// 		}
	// 	}
	// }

	// Fancy-box

	$('[data-src="#modal-polit"]').fancybox({
		touch: false,
		smallBtn: false,
		buttons: '',
	});

	$('[data-src="#modal-call"]').fancybox({
		touch: false,
		smallBtn: false,
		buttons: '',
	});

	// $('[data-fancybox="gal"]').fancybox({
	// backFocus: false,
	// autoFocus: false,
	// hash: false,
	// });

	// Input-mask
	$('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });




	// Menu-burger
	const burger = $('.burger')
	const aside = $('.aside')

	burger.click(function () {
		aside.toggleClass('active')
		$(this).toggleClass('active')
	})

	$('.aside__close').click(function () {
		aside.removeClass('active')
		burger.removeClass('active')
	})

	// $('.mob-menu__close').click(function () {
	// 	mobMenu.removeClass('active')
	// })

	$(document).click(function (ev) {
		if (!ev.target.closest('.aside') && !ev.target.closest('.burger')) {
			aside.removeClass('active')
			burger.removeClass('active')
		}
	})

	// Яндекс карта
	if (document.querySelector('#map')) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [52.05693880953456, 118.68705543322154],
				zoom: 4
			});

			var myPlacemark = new ymaps.Placemark([55.54055193739615, 108.71146949572154], {
				hintContent: 'г. Борисоглебск, ул. Победы, д. 66',
				balloonContent: 'г. Борисоглебск, ул. Победы, д. 66'
			},
				{
					preset: 'islands#redIcon',
					iconLayout: 'default#image',
					iconImageHref: '../svg/map.svg',
					iconImageSize: [28, 42],
				});

			myMap.geoObjects.add(myPlacemark);
		});
	}



	// Alertify
	// alertify.set('notifier', 'position', 'bottom-right');
	// alertify.set('notifier', 'delay', 10);

	// document.addEventListener('wpcf7mailsent', function (event) {
	// 	alertify.success(event.detail.apiResponse.message)
	// }, false);

	// document.addEventListener('wpcf7invalid', function (event) {
	// 	alertify.warning(event.detail.apiResponse.message);
	// }, false);

	// document.addEventListener('wpcf7mailfailed', function (event) {
	// 	alertify.error(event.detail.apiResponse.message);
	// }, false);

	// $(document).on('click', '.wpcf7-submit', function (e) {
	// 	if ($('.ajax-loader').hasClass('is-active')) {
	// 		e.preventDefault();
	// 		return false;
	// 	}
	// });


});