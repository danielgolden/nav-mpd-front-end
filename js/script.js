$(function() {

	// Util-nav Search Interaction
	$('.btn-header-search').click(function() {
		if($('.header-search-container').hasClass('active')) {
			$('.header-search-container').removeClass('active');
		} else {
			$('.header-search-container').addClass('active');
		}
	});

	// Mobile Menu Interaction
	$('.mobile-menu-btn-container').click(function() {
		if($('.mobile-menu').hasClass('active') == false) {
			$('.mobile-menu').addClass('active');
		}
	});

	$('.btn-mobile-menu-close').click(function() {
		$('.mobile-menu').removeClass('active');
	});

	// Page Tabs Interaction
	$('.tab').click(function(e) {
		e.preventDefault();
		$('.tab').removeClass('active-tab');
		$(this).addClass('active-tab');

		if($(this).attr('data-tab') == 'tab-1') {
			$('.tab-contents').removeClass('active-tab');
			$('.tab-contents-1').addClass('active-tab');
		} else if($(this).attr('data-tab') == 'tab-2') {
			$('.tab-contents').removeClass('active-tab');
			$('.tab-contents-2').addClass('active-tab');
		} else if($(this).attr('data-tab') == 'tab-3') {
			$('.tab-contents').removeClass('active-tab');
			$('.tab-contents-3').addClass('active-tab');
		}
	});

	$('.btn-blog-subscribe-close').click(function(e) {
		e.preventDefault();
		$('.blog-subscribe-container').removeClass('active');
	});

	$('.primary-header-nav-link.has-sub-nav').click(function() {
		if ($(this).find('.primary-header-sub-nav').hasClass('active')) {
			$(this).find('.primary-header-sub-nav').removeClass('active');
		} else {
			$(this).find('.primary-header-sub-nav').addClass('active');
		}
	});

	$('.primary-header-nav-link.has-sub-nav').hover(function() {
		$(this).find('.primary-header-sub-nav').addClass('hover-active');
	}, function() {
		$(this).find('.primary-header-sub-nav').removeClass('hover-active');
	});

	$('.primary-header-nav-link.has-sub-nav a').click(function(e) {
		e.stopPropagation();
	});
});
