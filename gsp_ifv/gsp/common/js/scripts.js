//ユーザーエージェント判定
var _ua = (function(u){
	return {
	Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1) || u.indexOf("ipad") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1,
	Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1) || u.indexOf("iphone") != -1 || u.indexOf("ipod") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) || u.indexOf("blackberry") != -1
	}
})(window.navigator.userAgent.toLowerCase());

function transformMenu() {
	// all elements to transform
	let nav = $('.header__nav');
	let responsiveBtn = $('.header__btn');
	let transformEl = $('.header__btn, .header__nav');
	let body = $('body');
	let navLink = $('.header__nav_links');

	// remove all style elements
	function removeAll() {
		transformEl.removeClass('active');
		$('body').css('overflow','auto');
	}

	// switch style all elements
	responsiveBtn.click(function(){
		transformEl.toggleClass('active');
		nav.hasClass('active') ? body.css('overflow','hidden') : body.css('overflow','auto');
			if(nav.hasClass('active')) {
			navLink.click(function() {
				removeAll();
			})
		}
	});

	// detect screen size to remove all style elements 
	$(window).on('resize',function() {
		if ($(this).width() < 780) {
			removeAll();
		}
	});
}

$(document).ready(function() {
	transformMenu();
})