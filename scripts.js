// ----------------------------------------
// Imagination: JS > Scripts
// ----------------------------------------

$(document).ready(function() {
	
	// ------------------------------
	// Make language selector invisible on scrolling down
	// ------------------------------

	$('#main').on('scroll', function () {
		var scrollTop = $('#main').scrollTop();

		if (scrollTop > 50) {
			$('.language-selector').addClass('language-selector--hide');
		} else {
			$('.language-selector').removeClass('language-selector--hide');
		}
	});
	
	// ------------------------------
	// Changes to the header when a language selector is present.
	// ------------------------------
	
	function languageSelector() {
    	if ($('.language-selector')) {
    	    var languageSelectorHeight = $('.language-selector').outerHeight();
    	    
			$('.bk-nav').css('top', languageSelectorHeight+'px');
			$('.bk-nav').css('margin-top', '0');
			$('.bk-header').css('top', languageSelectorHeight+'px');
			$('.bk-header').css('margin-top', '0');
    	}
	}
	
	languageSelector();

	// ------------------------------
    // Changes by the editor are saved in the style elmement with the class js-compiled-styles.
	// ------------------------------
	
    $(document).bind("DOMSubtreeModified",function(){
        languageSelector();
    });
});