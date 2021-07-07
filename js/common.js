$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		$(".header").toggleClass("header_menu");
		if ($(".header-bottom").is(":hidden")) {
			$(".header-bottom").slideDown(200);
		} else {
			$(".header-bottom").slideUp(200);
		}

			$(".header-bottom a").click(function() {
			$(".header-bottom").slideUp(200);
			$(".sandwich").removeClass("active");
			$(".header").removeClass("header_menu");
		});
		
	});

	$(".btn-main_filter").click(function(e) {
		e.preventDefault();
		$(".sidebar-catalog").slideToggle(200);
	});

	$(".title-min_service").click(function(e) {
		e.preventDefault();
		$(this).siblings(".row_serv").slideToggle(200);
	});



	/*высота блока по экрану*/
	function heightDetect() {
		$('.header-bottom').css("height", $(window).height() -$(".header").height() + 60);
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


	//слайдер

	$('.slider-advantages').slick({
		dots: true,
		arrows: true,
		infinite: false,
		slidesToShow: 4,
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				dots: true,
				arrows: false,
				infinite: true,
				variableWidth: true,
				centerMode: true,
				slidesToShow: 1,
			}
		}
		]
	});

	$('.slider-gallery').slick({
		dots: true,
		arrows: true,
		infinite: false,
		slidesToShow: 1,
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
	});

	$('.layout-for').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.layout-nav',
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		responsive: [
		{
			breakpoint: 993,
			settings: {
				arrows: false,
			}
		}
		]
	});

	$('.layout-nav').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 8,
		slidesToScroll: 1,
		asNavFor: '.layout-for',
		touchThreshold: 1000,
		 focusOnSelect: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		responsive: [
		{
			breakpoint: 1390,
			settings: {
			slidesToShow: 7,
			}
		},
		{
			breakpoint: 1200,
			settings: {
			slidesToShow: 6,
			}
		},
		{
			breakpoint: 993,
			settings: {
			dots: true,
				arrows: false,
				dots: false,
				infinite: true,
				variableWidth: true,
				slidesToShow: 1,
			}
		}
		]
	});

	$('.slider-for').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav',
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
	});

	$('.slider-nav').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		touchThreshold: 1000,
		 focusOnSelect: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
			
			}
		},
		{
			breakpoint: 480,
			settings: {
				
			}
		}
		]
	});

	$('.mobile-steps').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		variableWidth: true,
		slidesToScroll: 1,
		centerMode: true,
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
	});

	$('.slider-news').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
			slidesToShow: 1,
			}
		}
		]
	});

	 $('.row_insta').slick({
 	dots: false,
 	arrows: false,
 	slidesToShow:1,
 	variableWidth: true,
 	infinite: false,
 	arrows: false,
 	slidesToScroll: 1,
 	mobileFirst: true,
 	responsive: [
 	{
 		breakpoint: 992,
 		settings: 'unslick'
 	}
 	]
 });

	$(".range-catalog_price .range-catalog__input").ionRangeSlider({
	type: "double",
	min: 5500000,
	max: 10000000,
	from: 5500000,
	to: 9500000,
	postfix: " руб.",
	prettify_enabled: true,
});

	$(".range-catalog_area .range-catalog__input").ionRangeSlider({
	type: "double",
	min: 125,
	max: 260,
	from: 125,
	to: 250,
	postfix: " м²",
	prettify_enabled: true,
});

	$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
		$('.slider-gallery').slick("reinit");
	}); 

	$(".input-phone").mask("+7 (999) 999-99-99");

	$(".item-question__head").click(function(e) {
		e.preventDefault();
		$(".item-question").removeClass("active");
		$(".item-question__content").slideUp(200);
		if ($(this).siblings(".item-question__content").is(":hidden")) {
			$(this).parent().addClass("active");
			$(this).siblings(".item-question__content").slideDown(200);

		} else {
			$(this).parent().removeClass("active");
			$(this).siblings(".item-question__content").slideUp(200);

		}
	});


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

